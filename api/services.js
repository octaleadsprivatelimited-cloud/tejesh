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
    const services = [
      {
        id: 1,
        title: "uPVC Windows",
        description: "Premium quality uPVC windows with excellent thermal insulation and durability.",
        image: "/gallery/upvc windows andhra pradesh kommerling (1).jpeg",
        features: ["Energy Efficient", "Weather Resistant", "Low Maintenance", "Custom Sizes"]
      },
      {
        id: 2,
        title: "Aluminium Windows",
        description: "Modern aluminium windows combining strength, elegance, and longevity.",
        image: "/gallery/upvc windows andhra pradesh kommerling (5).jpeg",
        features: ["Durable", "Corrosion Resistant", "Modern Design", "High Security"]
      },
      {
        id: 3,
        title: "uPVC Doors",
        description: "Secure and stylish uPVC doors for residential and commercial properties.",
        image: "/gallery/Premium uPVC Doors .jpeg",
        features: ["High Security", "Weather Proof", "Customizable", "Long Lasting"]
      },
      {
        id: 4,
        title: "Aluminium Doors",
        description: "Premium aluminium doors offering superior strength and contemporary aesthetics.",
        image: "/gallery/upvc windows andhra pradesh kommerling (7).jpeg",
        features: ["Maximum Security", "Modern Look", "Fire Resistant", "Easy Maintenance"]
      },
      {
        id: 5,
        title: "Sliding Systems",
        description: "Smooth and space-efficient sliding door and window systems.",
        image: "/gallery/upvc windows andhra pradesh kommerling (8).jpeg",
        features: ["Space Saving", "Smooth Operation", "Weather Sealed", "Customizable"]
      },
      {
        id: 6,
        title: "Facade Solutions",
        description: "Complete facade solutions for modern architectural requirements.",
        image: "/gallery/Referenzobjekt-Neubau-Einfamilienhaus-bei-Daemmerung-Australien.png",
        features: ["Architectural Design", "Energy Efficient", "Weather Resistant", "Custom Solutions"]
      }
    ];

    res.status(200).json(services);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
