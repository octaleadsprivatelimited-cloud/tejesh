const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3009;
const buildPath = path.join(__dirname, 'build');

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for development
  crossOriginEmbedderPolicy: false
}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(buildPath));

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'info@tejeshprofine.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, service } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@tejeshprofine.com',
      to: 'info@tejeshprofine.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// API routes for dynamic content
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      title: "uPVC Windows",
      description: "Premium quality uPVC windows with excellent thermal insulation and durability.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(1).jpeg",
      features: ["Energy Efficient", "Weather Resistant", "Low Maintenance", "Custom Sizes"]
    },
    {
      id: 2,
      title: "Aluminium Windows",
      description: "Modern aluminium windows combining strength, elegance, and longevity.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(5).jpeg",
      features: ["Durable", "Corrosion Resistant", "Modern Design", "High Security"]
    },
    {
      id: 3,
      title: "uPVC Doors",
      description: "Secure and stylish uPVC doors for residential and commercial properties.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(6).jpeg",
      features: ["High Security", "Weather Proof", "Customizable", "Long Lasting"]
    },
    {
      id: 4,
      title: "Aluminium Doors",
      description: "Premium aluminium doors offering superior strength and contemporary aesthetics.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(7).jpeg",
      features: ["Maximum Security", "Modern Look", "Fire Resistant", "Easy Maintenance"]
    },
    {
      id: 5,
      title: "Sliding Systems",
      description: "Smooth and space-efficient sliding door and window systems.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(8).jpeg",
      features: ["Space Saving", "Smooth Operation", "Weather Sealed", "Customizable"]
    },
    {
      id: 6,
      title: "Facade Solutions",
      description: "Complete facade solutions for modern architectural requirements.",
      image: "/gallery/upvc%20windows%20andhra%20pradesh%20kommerling%20(9).jpeg",
      features: ["Architectural Design", "Energy Efficient", "Weather Resistant", "Custom Solutions"]
    }
  ];
  res.json(services);
});

app.get('/api/testimonials', (req, res) => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Hyderabad",
      rating: 5,
      text: "Excellent quality and professional service. The uPVC windows installed in my home are perfect and have significantly improved energy efficiency.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "Tejesh Profine delivered exceptional aluminium doors for our office. The installation was smooth and the quality is outstanding.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Chennai",
      rating: 5,
      text: "Great experience from consultation to installation. The team was professional and the sliding systems are exactly what we wanted.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    }
  ];
  res.json(testimonials);
});

app.get('/api/portfolio', (req, res) => {
  const portfolio = [
    {
      id: 1,
      title: "Residential Villa Project",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
      description: "Complete uPVC windows and doors installation for a luxury villa in Hyderabad."
    },
    {
      id: 2,
      title: "Commercial Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
      description: "Modern aluminium facade and windows for a corporate office building."
    },
    {
      id: 3,
      title: "Apartment Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=600",
      description: "Bulk installation of uPVC windows for a 200-unit apartment complex."
    },
    {
      id: 4,
      title: "Industrial Facility",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600",
      description: "Heavy-duty aluminium doors and windows for industrial application."
    }
  ];
  res.json(portfolio);
});

// Serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

// Serve sitemap index
app.get('/sitemap-index.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'public', 'sitemap-index.xml'));
});

// Serve robots.txt
app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

// Serve security.txt
app.get('/.well-known/security.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'public', '.well-known', 'security.txt'));
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
