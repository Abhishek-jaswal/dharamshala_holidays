// ============================================================
// BUSINESS CONFIGURATION — SKD Holidays
// Edit these values to update the entire website at once
// ============================================================

export const BUSINESS = {
  name: "SKD Holidays",
  tagline: "Your Trusted Travel Partner in Dharamshala",
  shortName: "SKD",

  phone: "+91 76500 14729",
  phoneRaw: "+917650014729",

  // WhatsApp number (with country code, no +)
  whatsapp: "917650014729",
  whatsappMessage: "Hi! I found you on SKD Holidays website. I want to book a taxi/scooty. Please share details.",

  email: "info@skdholidays.com",

  address: "Near Bus Stand, McLeod Ganj, Dharamshala, Himachal Pradesh 176219",

  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.1!2d76.3234!3d32.2396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE0JzIyLjYiTiA3NsKwMTknMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890",

  googleMapsLink: "https://maps.google.com/?q=McLeod+Ganj+Dharamshala",

  businessHours: {
    weekdays: "6:00 AM – 10:00 PM",
    weekends: "24 Hours",
    note: "Available 24/7 for airport pickups",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
};

// Computed helpers
export const WHATSAPP_URL = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;
export const CALL_URL = `tel:${BUSINESS.phoneRaw}`;
export const EMAIL_URL = `mailto:${BUSINESS.email}`;

// Site metadata
export const SITE = {
  url: "https://skdholidays.com", // ✏️ Replace with real domain
  name: BUSINESS.name,
  description:
    "Book premium taxi service & vehicles on rent in Dharamshala with SKD Holidays. Reliable Kangra airport pickup, scooty rentals, local sightseeing, and outstation trips. 24/7 available.",
  keywords: [
    "SKD Holidays Dharamshala",
    "taxi service in Dharamshala",
    "scooty on rent in Dharamshala",
    "bike rental Dharamshala",
    "car rental Dharamshala",
    "airport pickup Dharamshala",
    "McLeod Ganj taxi service",
    "Dharamshala local sightseeing",
    "outstation taxi Dharamshala",
    "Kangra airport transfer",
    "Himachal Pradesh taxi",
    "SKD holidays bookings",
  ],
};

// Service pages navigation
export const SERVICES = [
  {
    title: "Taxi Service",
    href: "/services/taxi",
    icon: "Car",
    desc: "Local & outstation taxi",
  },
  {
    title: "Scooty on Rent",
    href: "/services/scooty-on-rent",
    icon: "Bike",
    desc: "From ₹400/day",
  },
  {
    title: "Bike on Rent",
    href: "/services/bike-on-rent",
    icon: "Bike",
    desc: "Royal Enfield & more",
  },
  {
    title: "Airport Pickup",
    href: "/services/airport-pickup",
    icon: "Plane",
    desc: "Kangra Airport transfer",
  },
];

// Popular destinations
export const DESTINATIONS = [
  { name: "McLeod Ganj", from: "Dharamshala", distance: "10 km", time: "25 min", price: "₹300–500" },
  { name: "Bhagsu Waterfall", from: "McLeod Ganj", distance: "3 km", time: "10 min", price: "₹200–300" },
  { name: "Kangra Fort", from: "Dharamshala", distance: "20 km", time: "40 min", price: "₹500–700" },
  { name: "Triund Trek Base", from: "McLeod Ganj", distance: "5 km", time: "15 min", price: "₹200–400" },
  { name: "Dharamkot", from: "McLeod Ganj", distance: "3 km", time: "10 min", price: "₹200–350" },
  { name: "Kangra Airport", from: "Dharamshala", distance: "15 km", time: "35 min", price: "₹600–900" },
  { name: "Bir Billing", from: "Dharamshala", distance: "70 km", time: "2.5 hrs", price: "₹2000–2500" },
  { name: "Dalhousie", from: "Dharamshala", distance: "115 km", time: "4 hrs", price: "₹3500–4500" },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Excellent taxi service! The driver was punctual, friendly, and knew all the best spots in Dharamshala. Took us to McLeod Ganj, Bhagsu, and Triund base. Highly recommended!",
    trip: "Local Sightseeing",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    text: "Rented a scooty for 3 days. The bike was in perfect condition and the price was very reasonable. Made our trip around Dharamshala super convenient and fun!",
    trip: "Scooty Rental",
  },
  {
    name: "Sarah Johnson",
    location: "UK",
    rating: 5,
    text: "They picked us up from Kangra Airport at 5 AM without any issues. Driver was professional and the cab was clean and comfortable. Made a great first impression of Dharamshala!",
    trip: "Airport Pickup",
  },
  {
    name: "Amit Verma",
    location: "Chandigarh",
    rating: 5,
    text: "Used their outstation taxi for a Dalhousie trip. Very affordable pricing, on-time pickup, and the driver was helpful with local knowledge. Will definitely use again!",
    trip: "Outstation Taxi",
  },
];

// FAQs
export const FAQS = [
  {
    question: "How do I book a taxi or scooty in Dharamshala?",
    answer:
      "You can book by calling us directly or sending a WhatsApp message. We respond instantly during business hours. Just share your pickup location, destination, and preferred time.",
  },
  {
    question: "What documents are needed to rent a scooty or bike?",
    answer:
      "You need a valid driving licence, a government-issued ID (Aadhaar card, passport, or voter ID), and a security deposit. Tourists with international licences are also welcome.",
  },
  {
    question: "Do you provide airport pickup from Kangra Airport?",
    answer:
      "Yes! We offer 24/7 airport pickup and drop service from Kangra-Gaggal Airport (DHM) to Dharamshala, McLeod Ganj, or any other destination in the area.",
  },
  {
    question: "What is the minimum rental period for scooties and bikes?",
    answer:
      "The minimum rental period is 1 day (24 hours). We offer daily, weekly, and monthly rental packages at discounted rates.",
  },
  {
    question: "Are your taxi rates fixed or negotiable?",
    answer:
      "We offer transparent, fixed pricing for most routes. You can also request a custom quote for special trips, outstation travel, or full-day bookings.",
  },
  {
    question: "Do you offer full-day taxi packages for local sightseeing?",
    answer:
      "Yes! We have local sightseeing packages that cover top attractions like McLeod Ganj, Bhagsu Waterfall, Dharamkot, Naddi Viewpoint, and Kangra Fort in one comfortable trip.",
  },
  {
    question: "Is there a helmet provided with scooty/bike rentals?",
    answer:
      "Yes, we provide one helmet free with every scooty or bike rental. Additional helmets are available on request.",
  },
  {
    question: "Can I book a taxi for an outstation trip to Manali or Shimla?",
    answer:
      "Absolutely! We operate outstation taxi services to Manali, Shimla, Dalhousie, Bir Billing, Amritsar, and other popular destinations from Dharamshala.",
  },
];
