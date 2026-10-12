import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WhatsAppLeadForm, { enquiryMessage } from './WhatsAppLeadForm';

test('landing form has only name and phone and prepares a WhatsApp message', () => {
 render(<MemoryRouter><WhatsAppLeadForm service="uPVC Windows" /></MemoryRouter>);
 fireEvent.change(screen.getByLabelText('Your name'),{target:{value:'Anita Rao'}});
 fireEvent.change(screen.getByLabelText('Phone number'),{target:{value:'+91 9876543210'}});
 expect(screen.getAllByRole('textbox')).toHaveLength(2);
 const form = screen.getByRole('form',{name:'WhatsApp enquiry'});
 expect(form).toHaveAttribute('action','https://wa.me/919949360406');
 expect(form).toHaveAttribute('method','get');
 const data = new FormData(form);
 expect([...data.keys()]).toEqual(['text']);
 expect(data.get('text')).toContain('Anita Rao');
 expect(data.get('text')).toContain('+91 9876543210');
 expect(data.get('text')).toContain('uPVC Windows');
});
test('draft preserves special characters without adding query parameters', () => {
 const message=enquiryMessage(' A & B ',' +91 9876543210 ','Sliding Systems');
 const query=new URLSearchParams({text:message});
 expect([...query.keys()]).toEqual(['text']);
 expect(query.get('text')).toContain('A & B');
});
test('invalid phone numbers prevent navigation', () => {
 render(<MemoryRouter><WhatsAppLeadForm /></MemoryRouter>);
 fireEvent.change(screen.getByLabelText('Your name'),{target:{value:'Test User'}});
 fireEvent.change(screen.getByLabelText('Phone number'),{target:{value:'-------'}});
 expect(fireEvent.submit(screen.getByRole('form',{name:'WhatsApp enquiry'}))).toBe(false);
 expect(screen.getByLabelText('Phone number')).toBeInvalid();
});
