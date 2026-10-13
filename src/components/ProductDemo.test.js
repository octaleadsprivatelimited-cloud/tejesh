import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductDemo from './ProductDemo';
const originalMatchMedia = window.matchMedia;
const originalObserver = global.IntersectionObserver;
function viewport(mobile = false, reducedMotion = false) {
 window.matchMedia = jest.fn(query => ({matches:query.includes('reduced-motion') ? reducedMotion : mobile,addEventListener:jest.fn(),removeEventListener:jest.fn()}));
 global.IntersectionObserver = class { constructor(callback) { this.callback=callback; } observe() { this.callback([{isIntersecting:true}]); } disconnect() {} };
}
afterEach(() => { jest.restoreAllMocks(); window.matchMedia=originalMatchMedia; global.IntersectionObserver=originalObserver; });
test('desktop playback starts with audio when permitted', async () => {
 viewport();
 const play=jest.spyOn(HTMLMediaElement.prototype,'play').mockResolvedValue();
 render(<ProductDemo />);
 await waitFor(()=>expect(play).toHaveBeenCalled());
 expect(screen.getByLabelText('Window and door product demonstration').muted).toBe(false);
});
test('blocked desktop audio falls back to muted playback and enables sound on click', async () => {
 viewport();
 const play=jest.spyOn(HTMLMediaElement.prototype,'play').mockRejectedValueOnce(new Error('Autoplay blocked')).mockResolvedValue();
 render(<ProductDemo />);
 const button=await screen.findByRole('button',{name:'Play with sound'});
 expect(screen.getByLabelText('Window and door product demonstration').muted).toBe(true);
 fireEvent.click(button);
 await waitFor(()=>expect(screen.queryByRole('button',{name:'Play with sound'})).not.toBeInTheDocument());
 expect(screen.getByLabelText('Window and door product demonstration').muted).toBe(false);
 expect(play).toHaveBeenCalledTimes(3);
});
test('mobile autoplay stays muted', async () => {
 viewport(true);
 const play=jest.spyOn(HTMLMediaElement.prototype,'play').mockResolvedValue();
 render(<ProductDemo />);
 await waitFor(()=>expect(play).toHaveBeenCalled());
 expect(screen.getByLabelText('Window and door product demonstration').muted).toBe(true);
});
test('reduced motion retains manual play', () => {
 viewport(true,true);
 const play=jest.spyOn(HTMLMediaElement.prototype,'play').mockResolvedValue();
 render(<ProductDemo />);
 expect(screen.getByRole('button',{name:'Play product video'})).toBeInTheDocument();
 expect(play).not.toHaveBeenCalled();
});
