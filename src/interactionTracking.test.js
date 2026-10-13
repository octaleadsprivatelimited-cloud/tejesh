import { installInteractionTracking, contactPlacement } from './interactionTracking';
import { trackForm, trackInteraction } from './analytics';
jest.mock('./analytics', () => ({trackForm:jest.fn(() => true),trackInteraction:jest.fn(() => true)}));
let cleanup;
beforeEach(() => { trackForm.mockReturnValue(true); trackInteraction.mockReturnValue(true); });
afterEach(() => { cleanup?.(); cleanup=undefined; document.body.innerHTML=''; jest.clearAllMocks(); });
test('delegated events cover lazy forms and links without collecting values or queries', () => {
  document.body.innerHTML='<main id="main-content"></main>';
  cleanup=installInteractionTracking();
  document.querySelector('main').innerHTML='<form class="enquiry-form whatsapp-lead-form"><input value="private@example.com"></form><a href="/contact?name=PrivateName">Contact</a>';
  const input=document.querySelector('input');
  input.dispatchEvent(new Event('focusin',{bubbles:true})); input.dispatchEvent(new Event('focusin',{bubbles:true}));
  input.dispatchEvent(new Event('invalid')); input.dispatchEvent(new Event('invalid'));
  document.querySelector('a').dispatchEvent(new MouseEvent('click',{bubbles:true}));
  expect(trackForm.mock.calls).toEqual([['form_start','whatsapp'],['form_error','whatsapp','validation']]);
  expect(trackInteraction).toHaveBeenCalledWith('navigation_click','/contact');
  expect(JSON.stringify([...trackForm.mock.calls,...trackInteraction.mock.calls])).not.toMatch(/private@example|PrivateName/);
});
test('video progress and completion are measured once across loops', () => {
  document.body.innerHTML='<main id="main-content"><section class="product-demo"><video></video></section></main>';
  cleanup=installInteractionTracking();
  const video=document.querySelector('video');
  Object.defineProperty(video,'duration',{value:100});
  video.dispatchEvent(new Event('playing')); video.dispatchEvent(new Event('playing'));
  for (const position of [25,50,75,96,0,75,96]) { video.currentTime=position; video.dispatchEvent(new Event('timeupdate')); }
  expect(trackInteraction.mock.calls).toEqual([['video_start'],['video_progress',25],['video_progress',50],['video_progress',75],['video_complete']]);
});
test('listeners are removed on route changes and contact locations stay fixed', () => {
  document.body.innerHTML='<nav class="floating-contacts-bottom"><a href="tel:123">Call</a></nav><main id="main-content"><a href="/services">Services</a></main>';
  cleanup=installInteractionTracking();
  expect(contactPlacement(document.querySelector('nav a'))).toBe('bottom');
  cleanup(); cleanup=undefined;
  document.querySelector('main a').dispatchEvent(new MouseEvent('click',{bubbles:true}));
  expect(trackInteraction).not.toHaveBeenCalled();
});
