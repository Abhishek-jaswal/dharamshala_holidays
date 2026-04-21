export const BUSINESS = {
  name:        'SKD Holidays',
  tagline:     'Reliable Taxi, Bike & Tour Services in Dharamshala',
  phone:       '+91-98057-XXXXX',        // ← Replace with real number
  phoneRaw:    '9805700000',             // ← Replace (digits only, for tel: link)
  whatsapp:    '919805700000',           // ← Replace (country code + number)
  email:       'skdholidays@gmail.com',  // ← Replace
  address:     'Main Market, Dharamshala, Himachal Pradesh - 176215',
  mapUrl:      'https://maps.google.com/?q=Dharamshala,Himachal+Pradesh',
  mapEmbed:    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54699.41019539874!2d76.28899!3d32.21902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5fb7b1db8e7b%3A0xa2b72d76cd7d8fcd!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin',
  social: {
    instagram: 'https://instagram.com/skdholidays',
    facebook:  'https://facebook.com/skdholidays',
  },
} as const

export const PHONE_HREF     = `tel:+${BUSINESS.phoneRaw}`
export const WHATSAPP_HREF  = `https://wa.me/${BUSINESS.whatsapp}?text=Hi%20SKD%20Holidays!%20I%20want%20to%20book%20a%20service.`
export const WHATSAPP_BOOK  = (service: string) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=Hi%20SKD%20Holidays!%20I%20want%20to%20book%20${encodeURIComponent(service)}.`

export const ROUTES = [
  { from: 'Dharamshala', to: 'Manali',     distance: '250 km', price: '₹4,500',  time: '7-8 hrs',  popular: true  },
  { from: 'Dharamshala', to: 'Dalhousie',  distance: '120 km', price: '₹2,200',  time: '3-4 hrs',  popular: true  },
  { from: 'Dharamshala', to: 'Shimla',     distance: '245 km', price: '₹4,200',  time: '6-7 hrs',  popular: true  },
  { from: 'Dharamshala', to: 'Amritsar',   distance: '200 km', price: '₹3,500',  time: '4-5 hrs',  popular: false },
  { from: 'Dharamshala', to: 'Pathankot',  distance: '95 km',  price: '₹1,800',  time: '2.5 hrs',  popular: false },
  { from: 'Dharamshala', to: 'Chandigarh', distance: '230 km', price: '₹4,000',  time: '5-6 hrs',  popular: false },
]

export const VEHICLES = [
  { name: 'Swift Dzire',      type: 'Sedan',    seats: 4, pricePerKm: '₹13/km', minFare: '₹300',  image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80' },
  { name: 'Toyota Innova',    type: 'SUV',       seats: 7, pricePerKm: '₹18/km', minFare: '₹500',  image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80' },
  { name: 'Mahindra Xylo',    type: 'MUV',       seats: 8, pricePerKm: '₹16/km', minFare: '₹450',  image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80' },
  { name: 'Toyota Fortuner',  type: 'Premium SUV', seats: 7, pricePerKm: '₹25/km', minFare: '₹800', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
]

export const TESTIMONIALS = [
  { name: 'Rahul Sharma',    city: 'Delhi',     rating: 5, text: 'Excellent service! Driver was on time and very professional. The taxi was clean and comfortable. Highly recommend SKD Holidays for Dharamshala trips.' },
  { name: 'Priya Mehta',     city: 'Mumbai',    rating: 5, text: 'Booked a Royal Enfield and had an amazing experience exploring McLeod Ganj. The bike was in perfect condition. Will definitely book again!' },
  { name: 'Amit Verma',      city: 'Bangalore', rating: 5, text: 'The Triund Trek package was fantastic. Well-organized, great guide, and the price was very reasonable. SKD Holidays made our trip memorable.' },
  { name: 'Neha Gupta',      city: 'Pune',      rating: 5, text: 'Hired their taxi for airport pickup at Gaggal airport. Very punctual and professional. Will use their services again on my next visit to Dharamshala.' },
  { name: 'Vikram Singh',    city: 'Jaipur',    rating: 5, text: 'Best taxi service in Dharamshala! Covered Dharamshala, Mcleod Ganj, and Kangra temple in one day. Driver Ramesh bhai was knowledgeable and friendly.' },
  { name: 'Anjali Kapoor',   city: 'Hyderabad', rating: 5, text: 'Scooty rental was super affordable. The lady at the counter was very helpful with route suggestions. Loved exploring Dharamshala on two wheels!' },
]
