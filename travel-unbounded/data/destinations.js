const destinations = [
  // =========================
  // INDIA DESTINATIONS
  // =========================

  {
    id: 1,
    name: "Kerala",
    country: "India",
    image: "/images/kerala.jpg",
    description:
      "Discover peaceful backwaters, beautiful beaches, lush greenery and the rich culture of Kerala.",
    price: 25000,
    category: "india",
  },

  {
    id: 2,
    name: "Himachal Pradesh",
    country: "India",
    image: "/images/himachal-pradesh.jpg",
    description:
      "Explore breathtaking mountains, valleys, hill stations and unforgettable Himalayan experiences.",
    price: 30000,
    category: "india",
  },

  {
    id: 3,
    name: "Ladakh",
    country: "India",
    image: "/images/ladakh.jpg",
    description:
      "Experience dramatic landscapes, high-altitude mountains, monasteries and adventurous road trips.",
    price: 35000,
    category: "india",
  },

  {
    id: 4,
    name: "Andaman",
    country: "India",
    image: "/images/andaman.jpg",
    description:
      "Relax on tropical beaches and enjoy crystal-clear waters, island adventures and water activities.",
    price: 28000,
    category: "india",
  },

  {
    id: 5,
    name: "Goa",
    country: "India",
    image: "/images/goa.jpg",
    description:
      "Enjoy golden beaches, vibrant nightlife, Portuguese architecture and delicious coastal cuisine.",
    price: 20000,
    category: "india",
  },

  // =========================
  // INTERNATIONAL DESTINATIONS
  // =========================

  {
    id: 6,
    name: "Bali",
    country: "Indonesia",
    image: "/images/bali.jpg",
    description:
      "Discover tropical beaches, ancient temples, rice terraces and the unique culture of Bali.",
    price: 55000,
    category: "international",
  },

  {
    id: 7,
    name: "Dubai",
    country: "United Arab Emirates",
    image: "/images/dubai.jpg",
    description:
      "Experience luxury, modern architecture, desert adventures, shopping and unforgettable city views.",
    price: 65000,
    category: "international",
  },

  {
    id: 8,
    name: "Paris",
    country: "France",
    image: "/images/paris.jpg",
    description:
      "Explore iconic landmarks, charming streets, world-class museums and the romantic beauty of Paris.",
    price: 120000,
    category: "international",
  },

  {
    id: 9,
    name: "Singapore",
    country: "Singapore",
    image: "/images/singapore.jpg",
    description:
      "Experience a modern city filled with beautiful gardens, attractions, shopping and entertainment.",
    price: 70000,
    category: "international",
  },

  {
    id: 10,
    name: "Sri Lanka",
    country: "Sri Lanka",
    image: "/images/sri-lanka.jpg",
    description:
      "Explore tropical beaches, ancient heritage, wildlife and beautiful mountain landscapes.",
    price: 45000,
    category: "international",
  },

  // Temporary destinations until their images are added

  {
    id: 11,
    name: "Kenya",
    country: "Kenya",
    image: "/images/kenya.jpg",
    description:
      "Experience incredible wildlife safaris, stunning landscapes and unforgettable African adventures.",
    price: 95000,
    category: "international",
  },

  {
    id: 12,
    name: "Vietnam",
    country: "Vietnam",
    image: "/images/vietnam.jpg",
    description:
      "Discover vibrant cities, beautiful coastlines, ancient culture and delicious Vietnamese cuisine.",
    price: 60000,
    category: "international",
  },

  {
    id: 13,
    name: "Tanzania",
    country: "Tanzania",
    image: "/images/tanzania.jpg",
    description:
      "Explore spectacular wildlife, national parks and the natural beauty of Tanzania.",
    price: 100000,
    category: "international",
  },

  {
    id: 14,
    name: "Iceland",
    country: "Iceland",
    image: "/images/iceland.jpg",
    description:
      "Experience glaciers, waterfalls, volcanoes, hot springs and Iceland's incredible natural landscapes.",
    price: 150000,
    category: "international",
  },
];

export const indiaDestinations = destinations.filter(
  (destination) => destination.category === "india",
);

export const internationalDestinations = destinations.filter(
  (destination) => destination.category === "international",
);

export default destinations;
