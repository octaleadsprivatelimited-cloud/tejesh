export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, phone, message, service } = req.body;

      // Here you would typically send an email using a service like SendGrid, Nodemailer, etc.
      // For now, we'll just return a success response
      
      // Log the contact form submission (in production, you'd save to database or send email)
      console.log('Contact form submission:', {
        name,
        email,
        phone,
        message,
        service,
        timestamp: new Date().toISOString()
      });

      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Sorry, there was an error sending your message. Please try again.' 
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
