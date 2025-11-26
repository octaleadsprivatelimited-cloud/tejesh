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

    res.status(200).json(portfolio);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
