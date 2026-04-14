export interface Activity {
  id: string;
  name: string;
  description: string;
  icon: string;
  duration: string;
  price: number;
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
  type: "budget" | "standard" | "premium";
  groupSize: string;
  bestFor: string;
}

export interface RentalOption {
  id: string;
  type: "scooty" | "bike" | "taxi";
  name: string;
  pricePerDay: number;
  features: string[];
  available: boolean;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  altitude?: string;
  bestTime: string;
  temperature: string;
  heroGradient: string;
  cardGradient: string;
  accentColor: string;
  packages: Package[];
  activities: Activity[];
  rentals: RentalOption[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  galleryCount: number;
}

export const destinations: Destination[] = [
  {
    id: "chamba",
    slug: "chamba",
    name: "Chamba",
    tagline: "The Valley of Gods",
    description: "Ancient temples, lush valleys, and snow-capped peaks",
    overview:
      "Chamba is one of Himachal Pradesh's most beautiful and historically rich districts. Nestled along the Ravi River, it's famous for its ancient temples, lush green meadows, and spectacular views of the Dhauladhar ranges. A hidden gem that blends culture, adventure, and natural beauty seamlessly.",
    altitude: "996 m",
    bestTime: "April–June, Sep–Nov",
    temperature: "5°C – 30°C",
    heroGradient: "from-emerald-900 via-teal-800 to-cyan-900",
    cardGradient: "from-emerald-600 to-teal-700",
    accentColor: "#10b981",
    highlights: [
      "Lakshmi Narayan Temple Complex",
      "Chamba Chaugan (Ground)",
      "Akhand Chandi Palace",
      "Manimahesh Lake Trek",
      "Saho Village",
      "Rang Mahal",
    ],
    packages: [
      {
        id: "chamba-budget",
        name: "Chamba Explorer",
        duration: "2 Days / 1 Night",
        price: 2999,
        originalPrice: 3999,
        inclusions: [
          "1 Night accommodation (budget)",
          "Breakfast & Dinner",
          "Local sightseeing by taxi",
          "Temple visits",
          "Driver guide",
        ],
        exclusions: [
          "Personal expenses",
          "Lunch",
          "Travel insurance",
          "Any activity not listed",
        ],
        highlights: ["Temple tour", "Chaugan walk", "Local market"],
        type: "budget",
        groupSize: "2-4 People",
        bestFor: "Weekend getaway",
      },
      {
        id: "chamba-standard",
        name: "Chamba Heritage Tour",
        duration: "3 Days / 2 Nights",
        price: 5499,
        originalPrice: 6999,
        inclusions: [
          "2 Nights accommodation (3-star)",
          "All meals",
          "AC taxi transfers",
          "Heritage walks",
          "Museum entry",
          "Local guide",
        ],
        exclusions: [
          "Personal expenses",
          "Travel insurance",
          "Adventure activities",
        ],
        highlights: [
          "Lakshmi Narayan Temple",
          "Akhand Chandi Palace",
          "Bhuri Singh Museum",
          "Rang Mahal",
        ],
        type: "standard",
        groupSize: "2-6 People",
        bestFor: "History & culture lovers",
      },
      {
        id: "chamba-premium",
        name: "Chamba Premium Escape",
        duration: "4 Days / 3 Nights",
        price: 9999,
        originalPrice: 12999,
        inclusions: [
          "3 Nights premium resort",
          "All meals + snacks",
          "Luxury vehicle",
          "Trek to Manimahesh",
          "Photography spots",
          "Bonfire & folk music evening",
          "Spa session",
        ],
        exclusions: ["Personal expenses", "Travel insurance"],
        highlights: [
          "Manimahesh Lake",
          "Himalayan trek",
          "Sunset viewpoints",
          "Cultural evening",
        ],
        type: "premium",
        groupSize: "2-8 People",
        bestFor: "Luxury travellers",
      },
    ],
    activities: [
      {
        id: "a1",
        name: "Temple Heritage Walk",
        description: "Explore 84+ ancient temples in the Chamba valley",
        icon: "🛕",
        duration: "3-4 Hours",
        price: 499,
      },
      {
        id: "a2",
        name: "Manimahesh Trek",
        description: "Sacred alpine lake trek at 4,080m altitude",
        icon: "🏔️",
        duration: "2 Days",
        price: 2499,
      },
      {
        id: "a3",
        name: "River Picnic",
        description: "Scenic picnic by the serene Ravi river banks",
        icon: "🌊",
        duration: "Half Day",
        price: 799,
      },
      {
        id: "a4",
        name: "Village Walk",
        description: "Authentic local village experience in Saho",
        icon: "🏘️",
        duration: "2-3 Hours",
        price: 399,
      },
    ],
    rentals: [
      {
        id: "r1",
        type: "scooty",
        name: "Honda Activa",
        pricePerDay: 500,
        features: ["Helmet included", "Full fuel", "Insurance"],
        available: true,
      },
      {
        id: "r2",
        type: "bike",
        name: "Royal Enfield Himalayan",
        pricePerDay: 1200,
        features: ["Gear provided", "Tool kit", "Crash guard"],
        available: true,
      },
      {
        id: "r3",
        type: "taxi",
        name: "Innova Crysta",
        pricePerDay: 3500,
        features: ["AC", "7 Seater", "Driver included"],
        available: true,
      },
    ],
    faqs: [
      {
        question: "What is the best time to visit Chamba?",
        answer:
          "April to June and September to November are ideal. Summers are pleasant while autumn offers clear mountain views.",
      },
      {
        question: "Is Chamba accessible by road?",
        answer:
          "Yes, Chamba is well-connected by road from Pathankot (120 km) and Dharamshala (120 km). SKD Holidays provides comfortable taxi services.",
      },
      {
        question: "How many days are enough for Chamba?",
        answer:
          "2-4 days are sufficient to cover the main attractions. For the Manimahesh trek, plan 5-6 days.",
      },
    ],
    galleryCount: 8,
  },
  {
    id: "dharamshala",
    slug: "dharamshala",
    name: "Dharamshala",
    tagline: "Little Lhasa of India",
    description: "Tibetan culture, cricket ground above clouds, and forest trails",
    overview:
      "Dharamshala is home to the Dalai Lama and a vibrant Tibetan community, making it a unique cultural and spiritual destination. With its stunning position on the Dhauladhar range, it offers everything from meditation retreats to cricket matches with a mountain backdrop.",
    altitude: "1,457 m",
    bestTime: "March–June, Sep–Nov",
    temperature: "3°C – 28°C",
    heroGradient: "from-violet-900 via-purple-800 to-indigo-900",
    cardGradient: "from-violet-600 to-purple-700",
    accentColor: "#8b5cf6",
    highlights: [
      "McLeodganj (Upper Dharamshala)",
      "Dalai Lama Temple",
      "HPCA Cricket Stadium",
      "Bhagsunag Waterfall",
      "Triund Trek",
      "Tibetan Museum",
    ],
    packages: [
      {
        id: "dharamshala-budget",
        name: "Dharamshala Basics",
        duration: "2 Days / 1 Night",
        price: 3299,
        originalPrice: 4299,
        inclusions: [
          "1 Night guesthouse stay",
          "Breakfast included",
          "Taxi transfers",
          "Sightseeing tour",
        ],
        exclusions: ["Meals", "Personal expenses", "Trek fees"],
        highlights: ["Dalai Lama Temple", "Tibetan market", "Waterfall visit"],
        type: "budget",
        groupSize: "2-4 People",
        bestFor: "Solo & budget travellers",
      },
      {
        id: "dharamshala-standard",
        name: "Dharamshala Discovery",
        duration: "3 Days / 2 Nights",
        price: 6299,
        originalPrice: 7999,
        inclusions: [
          "2 Nights hotel (3-star)",
          "All meals",
          "Triund trek",
          "Local guide",
          "Café hopping tour",
        ],
        exclusions: ["Personal expenses", "Travel insurance"],
        highlights: [
          "Triund camping",
          "Dalai Lama Temple",
          "Cricket stadium view",
          "Tibetan arts",
        ],
        type: "standard",
        groupSize: "2-6 People",
        bestFor: "Spiritual & nature seekers",
      },
      {
        id: "dharamshala-premium",
        name: "Dharamshala Retreat",
        duration: "5 Days / 4 Nights",
        price: 14999,
        originalPrice: 18999,
        inclusions: [
          "4 Nights premium stay",
          "All meals",
          "Yoga & meditation session",
          "Triund overnight trek",
          "Tibetan cooking class",
          "Spa treatments",
          "Luxury transfers",
        ],
        exclusions: ["Personal expenses", "Flight/train tickets"],
        highlights: [
          "Luxury mountain retreat",
          "Meditation with monks",
          "Sunrise trek",
          "Tibetan cultural immersion",
        ],
        type: "premium",
        groupSize: "2-4 People",
        bestFor: "Wellness & luxury travellers",
      },
    ],
    activities: [
      {
        id: "a1",
        name: "Triund Trek",
        description: "Iconic 9km trek with spectacular Dhauladhar views",
        icon: "🥾",
        duration: "Full Day",
        price: 1499,
      },
      {
        id: "a2",
        name: "Tibetan Cooking Class",
        description: "Learn momos and thukpa from local Tibetan families",
        icon: "🍜",
        duration: "3 Hours",
        price: 899,
      },
      {
        id: "a3",
        name: "Meditation Session",
        description: "Guided meditation at authentic Tibetan monastery",
        icon: "🧘",
        duration: "2 Hours",
        price: 599,
      },
      {
        id: "a4",
        name: "Waterfall Hike",
        description: "Scenic hike to Bhagsunag waterfall and natural pools",
        icon: "💧",
        duration: "2-3 Hours",
        price: 299,
      },
    ],
    rentals: [
      {
        id: "r1",
        type: "scooty",
        name: "TVS Jupiter",
        pricePerDay: 550,
        features: ["Helmet", "Full tank", "GPS map"],
        available: true,
      },
      {
        id: "r2",
        type: "bike",
        name: "Royal Enfield Classic 350",
        pricePerDay: 1000,
        features: ["Tools", "Insurance", "Helmet"],
        available: true,
      },
      {
        id: "r3",
        type: "taxi",
        name: "Toyota Innova",
        pricePerDay: 3200,
        features: ["AC", "6 Seater", "Driver"],
        available: true,
      },
    ],
    faqs: [
      {
        question: "Is Dharamshala safe for solo travellers?",
        answer:
          "Yes, Dharamshala is one of the safest hill stations in India, known for its welcoming community and tourist-friendly environment.",
      },
      {
        question: "Can I attend the Dalai Lama's teachings?",
        answer:
          "Yes, public teachings are available at certain times. Check the official schedule at the Namgyal Monastery.",
      },
    ],
    galleryCount: 10,
  },
  {
    id: "dalhousie",
    slug: "dalhousie",
    name: "Dalhousie",
    tagline: "Scotland of the East",
    description: "Colonial charm, cedar forests, and misty mountain views",
    overview:
      "Dalhousie is a picturesque hill station that exudes Victorian-era colonial charm. Perched on five hills, it's surrounded by chir-pine and rhododendron forests, offering breathtaking views of the snow-capped Pir Panjal and Dhauladhar ranges. A perfect blend of old-world charm and natural beauty.",
    altitude: "2,036 m",
    bestTime: "March–June, Oct–Dec",
    temperature: "0°C – 25°C",
    heroGradient: "from-amber-900 via-orange-800 to-red-900",
    cardGradient: "from-amber-600 to-orange-700",
    accentColor: "#f59e0b",
    highlights: [
      "Dainkund Peak",
      "Subhash Baoli",
      "Satdhara Falls",
      "Panchpula",
      "Kalatop Wildlife Sanctuary",
      "Gandhi Chowk",
    ],
    packages: [
      {
        id: "dalhousie-budget",
        name: "Dalhousie Short Stay",
        duration: "2 Days / 1 Night",
        price: 2799,
        originalPrice: 3799,
        inclusions: ["1 Night hotel", "Breakfast", "Sightseeing taxi", "Guide"],
        exclusions: ["Lunch & Dinner", "Personal expenses"],
        highlights: ["Panchpula", "Mall Road walk", "Sunset point"],
        type: "budget",
        groupSize: "2-4 People",
        bestFor: "Quick getaway",
      },
      {
        id: "dalhousie-standard",
        name: "Dalhousie Complete Tour",
        duration: "3 Days / 2 Nights",
        price: 5899,
        originalPrice: 7499,
        inclusions: [
          "2 Nights 3-star hotel",
          "All meals",
          "Full sightseeing",
          "Khajjiar day trip",
          "Local guide",
        ],
        exclusions: ["Personal expenses", "Travel insurance"],
        highlights: [
          "Khajjiar meadow",
          "Dainkund trek",
          "Satdhara Falls",
          "Colonial walk",
        ],
        type: "standard",
        groupSize: "2-6 People",
        bestFor: "Family vacations",
      },
      {
        id: "dalhousie-premium",
        name: "Dalhousie Luxury Retreat",
        duration: "4 Days / 3 Nights",
        price: 11999,
        originalPrice: 14999,
        inclusions: [
          "3 Nights luxury resort",
          "All meals + evening snacks",
          "Spa & wellness",
          "Horse riding",
          "Private guide",
          "Candlelit dinner",
          "Luxury transfers",
        ],
        exclusions: ["Personal expenses", "Air/train travel"],
        highlights: [
          "Luxury forest resort",
          "Sunrise horse trek",
          "Private Khajjiar tour",
          "Romantic candlelight",
        ],
        type: "premium",
        groupSize: "2 People",
        bestFor: "Honeymoon & couples",
      },
    ],
    activities: [
      {
        id: "a1",
        name: "Dainkund Trek",
        description: "Trek to the singing hill with panoramic Himalayan views",
        icon: "🏔️",
        duration: "4-5 Hours",
        price: 1299,
      },
      {
        id: "a2",
        name: "Horse Riding",
        description: "Scenic horse rides through cedar and pine forests",
        icon: "🐴",
        duration: "1-2 Hours",
        price: 699,
      },
      {
        id: "a3",
        name: "Wildlife Safari",
        description: "Nature walk in Kalatop Wildlife Sanctuary",
        icon: "🦌",
        duration: "Half Day",
        price: 999,
      },
      {
        id: "a4",
        name: "Photography Tour",
        description: "Curated photography spots at golden hours",
        icon: "📸",
        duration: "3-4 Hours",
        price: 1499,
      },
    ],
    rentals: [
      {
        id: "r1",
        type: "scooty",
        name: "Honda Dio",
        pricePerDay: 450,
        features: ["Helmet", "Full fuel"],
        available: true,
      },
      {
        id: "r2",
        type: "taxi",
        name: "Maruti Ertiga",
        pricePerDay: 2800,
        features: ["AC", "7 Seater", "Driver"],
        available: true,
      },
    ],
    faqs: [
      {
        question: "Is Dalhousie good for a honeymoon?",
        answer:
          "Absolutely! Dalhousie is one of the most romantic hill stations in North India. The colonial architecture, misty forests, and stunning views make it perfect for couples.",
      },
    ],
    galleryCount: 8,
  },
  {
    id: "khajjiar",
    slug: "khajjiar",
    name: "Khajjiar",
    tagline: "Mini Switzerland of India",
    description: "Emerald meadows, serene lake, and deodar-ringed landscape",
    overview:
      "Khajjiar is often called the 'Mini Switzerland of India,' and for good reason. This magical plateau features a beautiful lake surrounded by lush meadows and dense deodar forests. At 2,000 meters, it's one of the most enchanting natural settings in all of Himachal Pradesh.",
    altitude: "2,000 m",
    bestTime: "April–June, Oct–Nov",
    temperature: "2°C – 25°C",
    heroGradient: "from-green-900 via-emerald-800 to-teal-900",
    cardGradient: "from-green-600 to-emerald-700",
    accentColor: "#22c55e",
    highlights: [
      "Khajjiar Lake",
      "Khajjiar Meadow",
      "Khajji Nag Temple",
      "Kalatop Trek from Khajjiar",
      "Paragliding",
      "Zorbing",
    ],
    packages: [
      {
        id: "khajjiar-day",
        name: "Khajjiar Day Trip",
        duration: "1 Day",
        price: 1499,
        originalPrice: 1999,
        inclusions: [
          "Round trip taxi from Dalhousie",
          "Meadow walk",
          "Boating (seasonal)",
          "Packed lunch",
        ],
        exclusions: ["Adventure activities", "Personal expenses"],
        highlights: ["Meadow walk", "Lake photography", "Zorbing area"],
        type: "budget",
        groupSize: "2-6 People",
        bestFor: "Day excursion",
      },
      {
        id: "khajjiar-standard",
        name: "Khajjiar Overnight",
        duration: "2 Days / 1 Night",
        price: 4299,
        originalPrice: 5499,
        inclusions: [
          "1 Night meadow resort",
          "All meals",
          "Zorbing session",
          "Horse riding",
          "Evening bonfire",
          "Guided nature walk",
        ],
        exclusions: ["Personal expenses", "Travel from home"],
        highlights: [
          "Meadow camping",
          "Sunrise views",
          "Adventure activities",
          "Stargazing",
        ],
        type: "standard",
        groupSize: "2-8 People",
        bestFor: "Adventure & nature",
      },
    ],
    activities: [
      {
        id: "a1",
        name: "Zorbing",
        description: "Thrilling zorbing down the green Khajjiar meadow",
        icon: "⚽",
        duration: "30 Minutes",
        price: 400,
      },
      {
        id: "a2",
        name: "Paragliding",
        description: "Tandem paragliding with panoramic mountain views",
        icon: "🪂",
        duration: "20 Minutes",
        price: 1500,
      },
      {
        id: "a3",
        name: "Horse Riding",
        description: "Gentle horse rides across the meadow plateau",
        icon: "🐴",
        duration: "1 Hour",
        price: 500,
      },
    ],
    rentals: [
      {
        id: "r1",
        type: "taxi",
        name: "Suzuki Swift Dzire",
        pricePerDay: 2500,
        features: ["AC", "4 Seater", "Driver"],
        available: true,
      },
    ],
    faqs: [
      {
        question: "How far is Khajjiar from Dalhousie?",
        answer: "Khajjiar is about 24 km from Dalhousie, roughly a 45-minute drive on scenic mountain roads.",
      },
    ],
    galleryCount: 6,
  },
  {
    id: "bir-billing",
    slug: "bir-billing",
    name: "Bir Billing",
    tagline: "Paragliding Capital of India",
    description: "World-class paragliding, café culture, and Tibetan monasteries",
    overview:
      "Bir Billing is the paragliding capital of India and one of the best paragliding sites in the world. The landing site at Bir and the launch site at Billing (2,400m) offer an incredible flying experience over the Kangra Valley. Beyond paragliding, Bir has a thriving café culture and fascinating Tibetan colony.",
    altitude: "1,525 m",
    bestTime: "March–May, Oct–Nov",
    temperature: "5°C – 30°C",
    heroGradient: "from-sky-900 via-blue-800 to-indigo-900",
    cardGradient: "from-sky-600 to-blue-700",
    accentColor: "#0ea5e9",
    highlights: [
      "Billing Launch Site",
      "Bir Landing Site",
      "Chokling Monastery",
      "Tibetan Colony",
      "Deer Park Institute",
      "Mountain Biking Trails",
    ],
    packages: [
      {
        id: "bir-adventure",
        name: "Bir Adventure Package",
        duration: "2 Days / 1 Night",
        price: 5999,
        originalPrice: 7499,
        inclusions: [
          "1 Night boutique stay",
          "Paragliding (20 min)",
          "Meals",
          "Billing trek",
          "Monastery visit",
        ],
        exclusions: ["Travel insurance", "Personal expenses"],
        highlights: [
          "Paragliding over Kangra Valley",
          "Billing peak",
          "Monastery",
        ],
        type: "standard",
        groupSize: "2-6 People",
        bestFor: "Adventure seekers",
      },
      {
        id: "bir-premium",
        name: "Bir Ultimate Fly Package",
        duration: "3 Days / 2 Nights",
        price: 11999,
        originalPrice: 14999,
        inclusions: [
          "2 Nights premium eco-resort",
          "3 Paragliding sessions",
          "All meals",
          "Mountain biking",
          "Camping under stars",
          "Tibetan cuisine dinner",
          "Expert guide",
        ],
        exclusions: ["Travel insurance", "Personal travel"],
        highlights: [
          "Multiple flying sessions",
          "Extreme biking",
          "Star camp",
          "Tibetan cultural dinner",
        ],
        type: "premium",
        groupSize: "2-4 People",
        bestFor: "Extreme adventure lovers",
      },
    ],
    activities: [
      {
        id: "a1",
        name: "Paragliding",
        description: "World-class tandem paragliding from Billing (2,400m)",
        icon: "🪂",
        duration: "20-30 Min",
        price: 2500,
      },
      {
        id: "a2",
        name: "Mountain Biking",
        description: "Thrilling downhill rides on forest mountain tracks",
        icon: "🚵",
        duration: "2-3 Hours",
        price: 1500,
      },
      {
        id: "a3",
        name: "Monastery Tour",
        description: "Visit ancient Tibetan monasteries and meditation halls",
        icon: "🙏",
        duration: "2 Hours",
        price: 399,
      },
      {
        id: "a4",
        name: "Camping",
        description: "Overnight camping in the mountains above Bir",
        icon: "⛺",
        duration: "Overnight",
        price: 1999,
      },
    ],
    rentals: [
      {
        id: "r1",
        type: "bike",
        name: "Royal Enfield Thunderbird",
        pricePerDay: 1100,
        features: ["Gear", "Tools", "Insurance"],
        available: true,
      },
      {
        id: "r2",
        type: "taxi",
        name: "Bolero",
        pricePerDay: 3000,
        features: ["7 Seater", "Hill-ready", "Driver"],
        available: true,
      },
    ],
    faqs: [
      {
        question: "Is paragliding safe at Bir Billing?",
        answer:
          "Yes, Bir Billing is certified for paragliding and hosted the Paragliding World Cup. All pilots are licensed and safety equipment is top-notch.",
      },
    ],
    galleryCount: 8,
  },
  {
    id: "mcleodganj",
    slug: "mcleodganj",
    name: "McLeodganj",
    tagline: "Himachal's Hippie Heaven",
    description: "Cafés, monasteries, trekking trails, and Tibetan culture",
    overview:
      "McLeodganj, also known as 'Little Lhasa,' is a vibrant suburb of Dharamshala that beautifully blends Indian and Tibetan cultures. Home to the Dalai Lama's residence, it's a hub for spiritual seekers, trekkers, and travelers drawn by its unique atmosphere, world-famous cafés, and stunning Himalayan treks.",
    altitude: "1,457 m",
    bestTime: "March–June, Sep–Nov",
    temperature: "2°C – 27°C",
    heroGradient: "from-rose-900 via-pink-800 to-fuchsia-900",
    cardGradient: "from-rose-600 to-pink-700",
    accentColor: "#f43f5e",
    highlights: [
      "Namgyal Monastery",
      "Bhagsu Nag Temple",
      "Bhagsu Waterfall",
      "Triund Trek",
      "Tibet Museum",
      "Library of Tibetan Works",
    ],
    packages: [
      {
        id: "mcleod-budget",
        name: "McLeodganj Vibe",
        duration: "2 Days / 1 Night",
        price: 3499,
        originalPrice: 4499,
        inclusions: [
          "1 Night hostel/guesthouse",
          "Breakfast",
          "Café tour",
          "Monastery visit",
          "Waterfall hike",
        ],
        exclusions: ["Lunch & Dinner", "Personal expenses"],
        highlights: ["Monastery", "Bhagsu waterfall", "Café culture"],
        type: "budget",
        groupSize: "Solo – 4 People",
        bestFor: "Backpackers & solo travellers",
      },
      {
        id: "mcleod-standard",
        name: "McLeodganj Escape",
        duration: "3 Days / 2 Nights",
        price: 6799,
        originalPrice: 8499,
        inclusions: [
          "2 Nights boutique hotel",
          "All meals",
          "Triund trek",
          "Tibetan cooking class",
          "Local guide",
        ],
        exclusions: ["Personal expenses", "Travel insurance"],
        highlights: [
          "Triund summit",
          "Tibetan food",
          "Spiritual monastery",
          "Himalayan café",
        ],
        type: "standard",
        groupSize: "2-6 People",
        bestFor: "Culture & trekking",
      },
      {
        id: "mcleod-premium",
        name: "McLeodganj Luxury",
        duration: "4 Days / 3 Nights",
        price: 13999,
        originalPrice: 17999,
        inclusions: [
          "3 Nights boutique luxury resort",
          "All meals",
          "Yoga retreat",
          "Meditation session",
          "Private Triund trek",
          "Tibetan spa",
          "Sunrise viewing",
          "Cultural performances",
        ],
        exclusions: ["Personal expenses", "Travel tickets"],
        highlights: [
          "Luxury mountain retreat",
          "Private yoga",
          "Sunrise on Triund",
          "Tibetan wellness",
        ],
        type: "premium",
        groupSize: "2-4 People",
        bestFor: "Luxury & wellness",
      },
    ],
    activities: [
      {
        id: "a1",
        name: "Triund Trek",
        description: "Famous 9km trek with jaw-dropping mountain panorama",
        icon: "🥾",
        duration: "Full Day",
        price: 1499,
      },
      {
        id: "a2",
        name: "Yoga & Meditation",
        description: "Traditional Tibetan yoga and mindfulness sessions",
        icon: "🧘",
        duration: "2 Hours",
        price: 699,
      },
      {
        id: "a3",
        name: "Café Hopping Tour",
        description: "Curated tour of McLeodganj's legendary cafés",
        icon: "☕",
        duration: "3 Hours",
        price: 499,
      },
      {
        id: "a4",
        name: "Sunset Jeep Ride",
        description: "Scenic jeep ride to best sunset viewpoints",
        icon: "🌅",
        duration: "2 Hours",
        price: 899,
      },
    ],
    rentals: [
      {
        id: "r1",
        type: "scooty",
        name: "Honda Activa",
        pricePerDay: 500,
        features: ["Helmet", "Fuel", "Mountain-ready"],
        available: true,
      },
      {
        id: "r2",
        type: "bike",
        name: "Royal Enfield Classic 350",
        pricePerDay: 1000,
        features: ["Gear", "Insurance", "Tools"],
        available: true,
      },
      {
        id: "r3",
        type: "taxi",
        name: "Toyota Innova",
        pricePerDay: 3200,
        features: ["AC", "6 Seater", "Driver"],
        available: true,
      },
    ],
    faqs: [
      {
        question: "Is McLeodganj good for solo female travellers?",
        answer:
          "Yes, McLeodganj is one of the safest destinations for solo female travellers in India. The international presence and Tibetan community make it very welcoming.",
      },
      {
        question: "Can I see the Dalai Lama at McLeodganj?",
        answer:
          "The Dalai Lama resides at Namgyal Monastery. Public audiences and teachings are available during specific times — check the official Dalai Lama website for schedule.",
      },
    ],
    galleryCount: 10,
  },
];

export const getDestination = (slug: string): Destination | undefined =>
  destinations.find((d) => d.slug === slug);
