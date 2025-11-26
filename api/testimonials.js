export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
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

    res.status(200).json(testimonials);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
