// Retained for old clients; current forms submit directly to Formspree.
module.exports = function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  return res.status(410).json({success: false, message: 'This enquiry endpoint has moved. Please use the form at /contact or call +91 9949360406.'});
};
