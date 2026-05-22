import { 
  Tv, Smartphone, Monitor, Zap, Volume2, Home, Lightbulb, AlertCircle, Wrench, Users, Award, Shield 
} from 'lucide-react';
import { Service, Review, Work, TrustStat, Area } from './types';

export const AREAS: Area[] = [
  { id: 'uttara', name: 'Uttara', focus: 'TV repair near Uttara' },
  { id: 'bashundhara', name: 'Bashundhara', focus: 'TV repair near Bashundhara' },
  { id: 'gulshan', name: 'Gulshan', focus: 'TV repair near Gulshan' },
  { id: 'banani', name: 'Banani', focus: 'TV repair near Banani' },
  { id: 'mirpur', name: 'Mirpur', focus: 'TV repair near Mirpur' },
  { id: 'dhanmondi', name: 'Dhanmondi', focus: 'Dhanmondi TV repair' }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'led-tv-repair',
    title: 'LED TV Repair in Dhaka',
    shortDesc: 'Top-rated LED TV repair Dhaka for Samsung, Sony, LG',
    fullDesc: 'Expert LED television repair service across Dhaka City. We specialize in fixing backlight arrays, power supply issues, and internal circuit failures for all major brands including Samsung, Sony, and LG.',
    icon: Tv,
    benefits: ['Full Dhaka Home Service', 'Original Backlight Strips', 'Panel Protection Circuitry', '24-Hour Express Return', 'Post-Repair Warranty'],
    process: ['Initial Remote Diagnosis', 'On-site Technician Visit', 'Precision Component Fix', 'Post-Repair Burn-in Test'],
    price: '৳2,000 - ৳8,000',
    time: 'Same Day'
  },
  {
    id: 'smart-tv-repair',
    title: 'Smart TV Repair Dhaka',
    shortDesc: 'Android, Tizen, and WebOS smart system specialists',
    fullDesc: 'Professional smart TV restoration in Dhaka. We solve complex software glitches, WiFi connectivity issues, and motherboard failures for the latest Android and smart television systems.',
    icon: Smartphone,
    benefits: ['Android OS Recovery', 'WiFi/Bluetooth Fix', 'HDMI Port Replacement', 'App Crash Resolution', 'Memory Optimization'],
    process: ['Software Scan', 'Hardware Verification', 'Module Replacement', 'Feature Testing'],
    price: '৳3,000 - ৳7,000',
    time: '12-24 hours'
  },
  {
    id: 'samsung-tv-repair',
    title: 'Samsung TV Repair Dhaka',
    shortDesc: '#1 Specialized Samsung Repair Center in Dhaka',
    fullDesc: 'Leading Samsung TV service experts in Dhaka. We use 100% original Samsung panels and parts to ensure your QLED or Crystal UHD TV is restored to factory standards.',
    icon: Tv,
    benefits: ['Official Components', 'QLED Display Specialists', 'Smart Hub Optimization', 'One Connect Box Repair', 'Samsung Panel Warranty'],
    process: ['Error Code Analysis', 'Standardized Diagnosis', 'Original Part Fitting', 'Factory Calibration'],
    price: '৳2,500 - ৳8,000',
    time: '24 hours'
  },
  {
    id: 'sony-tv-repair',
    title: 'Sony TV Repair in Dhaka',
    shortDesc: 'Expert Sony Bravia and LED repair services',
    fullDesc: 'Dhaka\'s most trusted service for Sony Bravia televisions. Our technicians are specialized in Sony\'s proprietary display technologies and mainboard architecture.',
    icon: Tv,
    benefits: ['Bravia Engine Fix', 'Original Logic Boards', 'Triluminos Display Care', 'Audio IC Restoration', 'Authorized Tech Standards'],
    process: ['Bravia System Check', 'Precision Micro-Soldering', 'Board Shielding', 'Final Performance Audit'],
    price: '৳2,500 - ৳7,500',
    time: '24 hours'
  },
  {
    id: 'lg-tv-repair',
    title: 'LG TV Repair Dhaka',
    shortDesc: 'OLED and webOS specialized LG services',
    fullDesc: 'Premier LG television repair in Dhaka. We offer specialized solutions for LG OLED panels, backlight arrays, and webOS software issues with a 100% success rate.',
    icon: Tv,
    benefits: ['OLED Burn-in Fix', 'webOS Software Repair', 'ThinQ AI Optimization', 'Power Inverter Setup', 'Guaranteed LG Parts'],
    process: ['Visual Inspection', 'Circuitry Analysis', 'Hardware Replacement', 'Function Verification'],
    price: '৳2,000 - ৳7,500',
    time: '12-24 hours'
  },
  {
    id: 'tv-screen-replacement',
    title: 'TV Screen Replacement Dhaka',
    shortDesc: 'Original 4K/OLED Panel Replacement Center',
    fullDesc: 'The largest original TV panel inventory in Dhaka. We provide professional screen replacement for cracked or damaged LEDs with a zero-dust installation guarantee.',
    icon: Monitor,
    benefits: ['Zero-Dead-Pixel Guarantee', 'Dust-Free Installation', 'Massive Stock (32"-85")', 'Free Screen Protection Tips', '1-Year Panel Support'],
    process: ['Panel Matching', 'Clean-Room Installation', 'Color Calibration', 'Impact Testing'],
    price: '৳8,000 - ৳25,000',
    time: '24 hours'
  },
  {
    id: 'motherboard-repair',
    title: 'TV Motherboard Repair Dhaka',
    shortDesc: 'Advanced PCB Soldering & IC Replacement',
    fullDesc: 'Dhaka\'s leading electronics lab for television motherboards. We repair rather than just replace, saving you money while ensuring original board integrity.',
    icon: Zap,
    benefits: ['Micro-IC Replacement', 'Bios Reprogramming', 'Short Circuit Rescue', 'Heat Sink Optimization', 'Voltage Stabilization'],
    process: ['Thermal Imaging Diagnosis', 'Precision Desoldering', 'Clean Chip Installation', 'Full Cycle Testing'],
    price: '৳3,000 - ৳10,000',
    time: '24-48 hours'
  },
  {
    id: 'sound-problem-repair',
    title: 'Audio & Sound Repair Dhaka',
    shortDesc: 'Fix No Sound or Distorted Audio Issues',
    fullDesc: 'Get your TV\'s audio back to normal with our sound repair specialists in Dhaka. We fix speakers, audio ICs, and headphone jack issues.',
    icon: Volume2,
    benefits: ['Speaker Replacement', 'Audio IC Repair', 'Home Theater Integration', 'Sound Calibration', 'Noise Filter Install'],
    process: ['Audio Stress Test', 'Source Investigation', 'Hardware Fix', 'High-Fidelity Check'],
    price: '৳2,000 - ৳6,000',
    time: '12-24 hours'
  },
  {
    id: 'home-tv-installation',
    title: 'TV Installation Dhaka',
    shortDesc: 'Professional Home TV Setup in all areas',
    fullDesc: 'Safe and professional TV installation service across Dhaka. We handle unboxing, mounting, and system setup for a hassle-free experience.',
    icon: Home,
    benefits: ['Wall/Ceiling Mounting', 'System Tutorial', 'Surge Protection Setup', 'Channel Programming', 'Smart Feature Demo'],
    process: ['Position Selection', 'Hardware Install', 'Unit Integration', 'User Training'],
    price: '৳2,000 - ৳5,000',
    time: '2-4 hours'
  },
  {
    id: 'wall-mount-installation',
    title: 'TV Wall Mount Dhaka',
    shortDesc: 'Clean Look Wall Mounting with Cable Hiding',
    fullDesc: 'Dhaka\'s best wall mounting service. We specialize in hidden cable management and robust mounting on any wall surface for safety and aesthetics.',
    icon: Lightbulb,
    benefits: ['Hidden Wiring', 'Leveling Guarantee', 'Weight-Tested Brackets', 'Clean Workspace', 'Modern Aesthetics'],
    process: ['Wall Assessment', 'Bracket Installation', 'TV Mounting', 'Cable Concealment'],
    price: '৳1,500 - ৳4,000',
    time: '1-2 hours'
  },
  {
    id: 'power-supply-repair',
    title: 'TV Power Repair Dhaka',
    shortDesc: 'Fix No Power or Auto Restart Problems',
    fullDesc: 'Reliable power board repair for televisions in Dhaka. We protect your TV from Bangladesh\'s frequent voltage fluctuations and power surges.',
    icon: Zap,
    benefits: ['Voltage Stabilizer Tips', 'Capacitor Refresh', 'Surge Damage Fix', 'Power Lead Repair', 'Energy Optimization'],
    process: ['Voltage Input Test', 'Output Load Analysis', 'Component Swap', 'Stress Test'],
    price: '৳2,000 - ৳6,000',
    time: '24 hours'
  },
  {
    id: 'emergency-tv-repair',
    title: '24/7 Emergency TV Repair',
    shortDesc: 'On-Call Repair Service Anywhere in Dhaka',
    fullDesc: 'Need immediate repair? Riyadh Electronic provides 24/7 priority television repair services across all zones in Dhaka city.',
    icon: AlertCircle,
    benefits: ['Midnight Support', 'Holiday Service', 'Rapid Response Team', 'On-site Fix Guarantee', 'Emergency Loaner TV'],
    process: ['Urgent Dispatch', 'In-Field Diagnosis', 'Immediate Resolution', 'Follow-up Support'],
    price: 'Starting ৳3,000',
    time: '2-6 hours'
  },
  {
    id: 'other-electronics-repair',
    title: 'Electronics Repair Dhaka',
    shortDesc: 'Microwave, AC, and Appliance Services',
    fullDesc: 'Beyond TVs, we are your neighborhood electronics experts in Dhaka for kitchen appliances and HVAC systems.',
    icon: Wrench,
    benefits: ['Oven Magnetron Fix', 'AC Gas Refill', 'Fridge Compressor Care', 'Home Pickup', 'Multi-appliance Discount'],
    process: ['Multi-Point Check', 'Part Authentication', 'Expert Fitting', 'Operation Verification'],
    price: '৳2,500 - ৳15,000',
    time: '24-48 hours'
  }
];

export const REVIEWS: Review[] = [
  {
    name: 'Abdul Karim',
    service: 'LED TV Repair in Dhaka',
    text: 'Best TV repair in Uttara! My Samsung TV was fixed within 10 hours. Riyadh is the best technician in Dhaka.',
    rating: 5,
    date: 'May 2024'
  },
  {
    name: 'Fatima Begum',
    service: 'Smart TV Repair Dhaka',
    text: 'They fixed my LG Smart TV software issue that other shops couldn\'t. Excellent Dhaka based service.',
    rating: 5,
    date: 'May 2024'
  },
  {
    name: 'Mohammad Hassan',
    service: 'Screen Replacement Dhaka',
    text: 'Got my Sony 4K panel replaced. Genuine part and very professional. Top Dhaka repair center.',
    rating: 5,
    date: 'April 2024'
  },
  {
    name: 'Aisha Khan',
    service: '24/7 Tech Support',
    text: 'Professional service in Bashundhara. Very fast home service for TV wall mounting.',
    rating: 5,
    date: 'April 2024'
  }
];

export const TRUST_STATS: TrustStat[] = [
  { icon: Users, label: 'Customers in Dhaka', value: '1000+', color: 'from-blue-500 to-blue-600' },
  { icon: Tv, label: 'TVs Fixed Locally', value: '2000+', color: 'from-purple-500 to-purple-600' },
  { icon: Award, label: 'Dhaka Market Experience', value: '10+', color: 'from-amber-500 to-amber-600' },
  { icon: Shield, label: 'Satisfaction Rate', value: '99%', color: 'from-green-500 to-green-600' }
];

export const WORKS: Work[] = [
  {
    id: 1,
    title: "Panel Repair: Dhanmondi",
    description: "Successful recovery of a water-damaged OLED panel for a resident in Dhanmondi. 100% success rate in Dhaka.",
    before: "https://images.unsplash.com/photo-1509281584218-db81d6363a03?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1000",
    brand: "Samsung"
  },
  {
    id: 2,
    title: "Wall Mount: Gulshan 2",
    description: "Premium wall installation with hidden cabling for a high-end apartment project in Gulshan.",
    before: "https://images.unsplash.com/photo-1558239027-d29658addbb7?auto=format&fit=crop&q=80&w=1000",
    after: "https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1000",
    brand: "Sony"
  }
];

export const SEO_TITLES: { [key: string]: string } = {
  home: 'Riyadh Electronic - Tv Repair Uttara',
  services: 'Expert TV Repair Services Uttara & Dhaka | LED, OLED, 4K Display Fix',
  about: 'About Riyadh Electronic - 10+ Years of TV Repair Excellence in Uttara & Dhaka',
  contact: 'Contact Riyadh Electronic - Instant TV Repair in Uttara & Dhaka (01726-725236)',
  work: 'TV Repair Portfolio - LED & OLED Restoration Projects in Uttara & Dhaka'
};

export const SEO_DESCRIPTIONS: { [key: string]: string } = {
  home: 'Riyadh Electronic is the #1 company for TV Repair in Uttara & Dhaka. Expert 24/7 on-site service for Samsung, Sony, LG, OLED, & LED television panels.',
  services: 'Complete TV repair services in Uttara & Dhaka: OLED screen replacement, smart panel repairs, sound hardware fixes, and motherboard micro-soldering.',
  about: 'With 10+ years of trust, Riyadh Electronic is Uttara & Dhaka\'s ultimate TV service center. We deploy master technicians for all global screen brands.',
  contact: 'Get fast TV repair in Uttara, Gulshan, & Dhaka. Call 01726-725236 or text on WhatsApp for immediate feedback and factory-quality diagnostics.',
  work: 'Explore our track record of professional TV repairs in Uttara, Bashundhara, and across Dhaka. Verified screen panel fix and firmware restoration cases.'
};
