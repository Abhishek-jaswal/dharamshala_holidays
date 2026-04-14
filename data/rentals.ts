export interface Vehicle {
  id: string;
  type: "scooty" | "bike" | "taxi";
  name: string;
  model: string;
  pricePerDay: number;
  pricePerKm?: number;
  features: string[];
  capacity: number;
  fuelType: string;
  transmission: string;
  available: boolean;
  badge?: string;
  description: string;
  gradient: string;
}

export const vehicles: Vehicle[] = [
  // Scooties
  {
    id: "s1",
    type: "scooty",
    name: "Honda Activa 6G",
    model: "Activa",
    pricePerDay: 500,
    features: ["Helmet Included", "Full Tank", "Insurance", "GPS Maps"],
    capacity: 2,
    fuelType: "Petrol",
    transmission: "Automatic",
    available: true,
    badge: "Most Popular",
    description: "Perfect for exploring hill station markets and short distance trips with ease.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "s2",
    type: "scooty",
    name: "TVS Jupiter Classic",
    model: "Jupiter",
    pricePerDay: 480,
    features: ["Helmet Included", "Full Tank", "Mobile Holder"],
    capacity: 2,
    fuelType: "Petrol",
    transmission: "Automatic",
    available: true,
    description: "Comfortable riding experience with excellent mileage for long hill trips.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    id: "s3",
    type: "scooty",
    name: "Honda Dio Deluxe",
    model: "Dio",
    pricePerDay: 450,
    features: ["Helmet", "Full Tank", "Underseat Storage"],
    capacity: 2,
    fuelType: "Petrol",
    transmission: "Automatic",
    available: true,
    description: "Sporty and agile scooty, ideal for solo travellers exploring mountain roads.",
    gradient: "from-orange-500 to-amber-500",
  },

  // Bikes
  {
    id: "b1",
    type: "bike",
    name: "Royal Enfield Himalayan",
    model: "Himalayan 411",
    pricePerDay: 1200,
    features: ["Riding Gear", "Crash Guard", "Tool Kit", "GPS Mount", "Insurance"],
    capacity: 2,
    fuelType: "Petrol",
    transmission: "Manual",
    available: true,
    badge: "Best for Mountains",
    description: "The ultimate mountain touring motorcycle. Built for Himalayan roads, this beast handles all terrain with confidence.",
    gradient: "from-red-500 to-rose-500",
  },
  {
    id: "b2",
    type: "bike",
    name: "Royal Enfield Classic 350",
    model: "Classic 350",
    pricePerDay: 1000,
    features: ["Riding Gear", "Tool Kit", "Insurance", "Helmet"],
    capacity: 2,
    fuelType: "Petrol",
    transmission: "Manual",
    available: true,
    description: "The iconic thumper for a classic Himachal road trip. Reliable, stylish, and built to perform.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "b3",
    type: "bike",
    name: "Royal Enfield Thunderbird",
    model: "Thunderbird 350",
    pricePerDay: 1100,
    features: ["Riding Gear", "Luggage Rack", "Insurance", "Tool Kit"],
    capacity: 2,
    fuelType: "Petrol",
    transmission: "Manual",
    available: true,
    description: "Long-distance cruising on mountain highways — comfort meets performance perfectly.",
    gradient: "from-sky-500 to-blue-500",
  },

  // Taxis
  {
    id: "t1",
    type: "taxi",
    name: "Toyota Innova Crysta",
    model: "Innova Crysta",
    pricePerDay: 3500,
    pricePerKm: 14,
    features: ["AC", "7 Seater", "Driver Included", "Music System", "Charging Ports"],
    capacity: 7,
    fuelType: "Diesel",
    transmission: "Manual",
    available: true,
    badge: "Most Booked",
    description: "The premium family taxi for Himachal tours. Spacious, reliable, and perfect for group travel.",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: "t2",
    type: "taxi",
    name: "Mahindra Bolero",
    model: "Bolero",
    pricePerDay: 3000,
    pricePerKm: 12,
    features: ["7 Seater", "Driver Included", "Hill-Terrain Ready", "Luggage Space"],
    capacity: 7,
    fuelType: "Diesel",
    transmission: "Manual",
    available: true,
    badge: "Best for Mountains",
    description: "Tough and reliable mountain warrior. The go-to vehicle for challenging hill roads.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "t3",
    type: "taxi",
    name: "Maruti Suzuki Ertiga",
    model: "Ertiga",
    pricePerDay: 2800,
    pricePerKm: 11,
    features: ["AC", "7 Seater", "Driver", "Good Mileage"],
    capacity: 7,
    fuelType: "Petrol",
    transmission: "Manual",
    available: true,
    description: "Economical and comfortable choice for families exploring Himachal's hill stations.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "t4",
    type: "taxi",
    name: "Force Tempo Traveller",
    model: "Tempo Traveller",
    pricePerDay: 5500,
    pricePerKm: 18,
    features: ["AC", "12 Seater", "Driver", "Reclining Seats", "Music System"],
    capacity: 12,
    fuelType: "Diesel",
    transmission: "Manual",
    available: true,
    badge: "Best for Groups",
    description: "The ultimate group tour vehicle. Comfortable, spacious, and perfect for large family or corporate trips.",
    gradient: "from-rose-500 to-pink-500",
  },
];

export const getVehiclesByType = (type: Vehicle["type"]) =>
  vehicles.filter((v) => v.type === type);
