export const allRooms = [
  { 
    id: 1, 
    title: "Garden Suite", 
    category: "Suite", 
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800", 
    price: "R 1,200", 
    guests: 2, 
    size: "45m²", 
    bed: "King Bed", 
    amenities: ["Kitchenette", "Air Conditioning", "Smart TV", "Private Patio"],
    availability: "Only 1 left!",
    description: "Our premium Garden Suite offers a luxurious escape with direct access to our lush gardens. Perfect for couples seeking a romantic getaway or extended stays requiring extra space and comfort. Enjoy your morning coffee on the private patio surrounded by nature.",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      quote: "The Garden Suite was absolutely breathtaking. Waking up to the sound of birds and having our own private patio made our anniversary unforgettable.",
      author: "Sarah & Mark T."
    }
  },
  { 
    id: 2, 
    title: "Quiet Retreat Room", 
    category: "Standard", 
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800", 
    price: "R 850", 
    guests: 2, 
    size: "30m²", 
    bed: "Queen Bed", 
    amenities: ["Coffee Station", "Smart TV", "Work Desk", "En-suite"],
    availability: "Available",
    description: "Designed for ultimate relaxation and focus, the Quiet Retreat Room is tucked away in the most peaceful corner of the guest house. Ideal for solo travelers or business guests who need a serene environment to unwind after a busy day.",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522771731470-53ff8e3ee0e5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      quote: "Exactly what I needed for my business trip. Incredibly quiet, comfortable bed, and the fast WiFi made working from the room a breeze.",
      author: "David L."
    }
  },
  { 
    id: 3, 
    title: "Comfort Studio", 
    category: "Studio", 
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800", 
    price: "R 950", 
    guests: 2, 
    size: "35m²", 
    bed: "Queen Bed", 
    amenities: ["Kitchenette", "Smart TV", "Lounge Area", "Garden View"],
    availability: "Limited Availability",
    description: "The Comfort Studio strikes the perfect balance between functionality and coziness. Featuring a well-equipped kitchenette and a comfortable lounge area, it provides a home-away-from-home experience with beautiful views of our manicured gardens.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      quote: "We loved having the kitchenette to prepare light meals. The studio is spacious, beautifully decorated, and feels incredibly welcoming.",
      author: "The Johnson Family"
    }
  },
  { 
    id: 4, 
    title: "Family Garden Villa", 
    category: "Suite", 
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", 
    price: "R 1,800", 
    guests: 4, 
    size: "65m²", 
    bed: "2x Queen Beds", 
    amenities: ["Full Kitchen", "Air Conditioning", "Smart TV", "Private Garden"],
    availability: "Available",
    description: "Our largest and most accommodating space, the Family Garden Villa is perfect for families or small groups. With two queen beds, a full kitchen, and a private enclosed garden area, it offers privacy, space, and all the amenities needed for a memorable group stay.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      quote: "The perfect setup for our family of four. The kids loved the private garden, and having a full kitchen made our stay so much easier and more affordable.",
      author: "Emily R."
    }
  },
  { 
    id: 5, 
    title: "Business Standard", 
    category: "Standard", 
    img: "https://images.unsplash.com/photo-1522771731470-53ff8e3ee0e5?auto=format&fit=crop&q=80&w=800", 
    price: "R 800", 
    guests: 1, 
    size: "25m²", 
    bed: "Double Bed", 
    amenities: ["Fast Fibre WiFi", "Work Desk", "Smart TV", "Coffee Station"],
    availability: "Available",
    description: "Tailored specifically for the modern professional, the Business Standard room prioritizes connectivity and productivity. Features a dedicated ergonomic workspace, ultra-fast fibre WiFi, and a premium coffee station to keep you fueled.",
    images: [
      "https://images.unsplash.com/photo-1522771731470-53ff8e3ee0e5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      quote: "Best WiFi I've experienced in a guest house. The desk setup was perfect for my Zoom calls. Highly recommended for corporate travelers.",
      author: "Michael B."
    }
  },
  { 
    id: 6, 
    title: "Honeymoon Suite", 
    category: "Suite", 
    img: "https://images.unsplash.com/photo-1502672260266-1c1e52408437?auto=format&fit=crop&q=80&w=800", 
    price: "R 1,500", 
    guests: 2, 
    size: "50m²", 
    bed: "King Bed", 
    amenities: ["Luxury Bath", "Air Conditioning", "Room Service", "Balcony"],
    availability: "Only 1 left!",
    description: "Celebrate your special moments in our exquisite Honeymoon Suite. Indulge in luxury with a freestanding soaking tub, premium linens on a king-size bed, and a private balcony overlooking the estate. Room service is available to make your stay truly effortless.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1e52408437?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    ],
    testimonial: {
      quote: "We spent our wedding night here and it was magical. The luxury bath and the attention to detail made us feel like royalty.",
      author: "Jessica & Tom W."
    }
  }
];
