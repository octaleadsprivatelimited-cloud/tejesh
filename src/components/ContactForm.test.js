import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactForm from './ContactForm';
import Header from './Header';
beforeEach(() => { process.env.REACT_APP_FORMSPREE_ENDPOINT = 'https://formspree.io/f/testform'; });
afterEach(() => { delete process.env.REACT_APP_FORMSPREE_ENDPOINT; jest.restoreAllMocks(); delete global.fetch; });
function fillForm() {
 render(<MemoryRouter><ContactForm /></MemoryRouter>);
 fireEvent.change(screen.getByLabelText('Full name (required)'), {target: {value:'Test Person'}});
 fireEvent.change(screen.getByLabelText('Phone (required)'), {target: {value:'1234567890'}});
 fireEvent.click(screen.getByRole('button', {name:'Send enquiry'}));
}
test('successful delivery confirms receipt and clears entered details', async () => {
 global.fetch = jest.fn().mockResolvedValue({ok:true,json:async () => ({ok:true})});
 fillForm();
 expect(await screen.findByText(/Your enquiry was sent successfully/)).toBeInTheDocument();
 expect(screen.getByLabelText('Full name (required)')).toHaveValue('');
 expect(global.fetch).toHaveBeenCalledTimes(1);
 expect(global.fetch).toHaveBeenCalledWith('https://formspree.io/f/testform', expect.objectContaining({headers: {'Content-Type':'application/json', 'Accept':'application/json'}}));
});
test('failed delivery retains the enquiry and provides a usable phone fallback', async () => {
 global.fetch = jest.fn().mockResolvedValue({ok:false,json:async () => ({errors:[{message:'Form service unavailable.'}]})});
 fillForm();
 expect(await screen.findByRole('alert')).toHaveTextContent('Form service unavailable.');
 expect(screen.getByLabelText('Full name (required)')).toHaveValue('Test Person');
 expect(screen.getByRole('link', {name:'Call +91 9949360406'})).toHaveAttribute('href','tel:+919949360406');
});
test('network failure gives an actionable error', async () => {
 global.fetch = jest.fn().mockRejectedValue(new TypeError('Failed to fetch'));
 fillForm();
 expect(await screen.findByRole('alert')).toHaveTextContent('Check your internet connection');
});
test('mobile menu supports Escape and closes after navigating', () => {
 render(<MemoryRouter><Header /></MemoryRouter>);
 const menu = screen.getByRole('button', {name:'Menu'});
 fireEvent.click(menu);
 expect(menu).toHaveAttribute('aria-expanded','true');
 fireEvent.keyDown(document, {key:'Escape'});
 expect(menu).toHaveAttribute('aria-expanded','false');
 expect(menu).toHaveFocus();
 fireEvent.click(menu);
 fireEvent.click(screen.getByRole('link', {name:'Gallery'}));
 expect(menu).toHaveAttribute('aria-expanded','false');
});

test('missing Formspree configuration never sends an enquiry to a guessed destination', async () => {
 delete process.env.REACT_APP_FORMSPREE_ENDPOINT;
 global.fetch = jest.fn();
 fillForm();
 expect(await screen.findByRole('alert')).toHaveTextContent('Online enquiries are temporarily unavailable');
 expect(global.fetch).not.toHaveBeenCalled();
});
test('rate limiting is explained and entered data is preserved', async () => {
 global.fetch = jest.fn().mockResolvedValue({ok:false,status:429,json:async()=>({})});
 fillForm();
 expect(await screen.findByRole('alert')).toHaveTextContent('Please wait before trying again');
 expect(screen.getByLabelText('Full name (required)')).toHaveValue('Test Person');
});
