'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Phone, MessageCircle, MapPin, Clock, Star, CheckCircle,
  ArrowRight, ChevronDown, ChevronLeft, ChevronRight, AlertCircle,
  Shield, Zap, Award, Users, Wrench, Smartphone, Tv, Volume2,
  Monitor, Home, Lightbulb, Search, Calendar, Sun, Moon
} from 'lucide-react';

const RiyadhElectronicWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [reviewSlide, setReviewSlide] = useState(0);
  const [theme, setTheme] = useState('dark');

  // Theme Management
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Areas Database for SEO
  const areas = [
    { id: 'uttara', name: 'Uttara', focus: 'TV repair near Uttara' },
    { id: 'bashundhara', name: 'Bashundhara', focus: 'TV repair near Bashundhara' },
    { id: 'gulshan', name: 'Gulshan', focus: 'TV repair near Gulshan' },
    { id: 'banani', name: 'Banani', focus: 'TV repair near Banani' },
    { id: 'mirpur', name: 'Mirpur', focus: 'TV repair near Mirpur' },
    { id: 'dhanmondi', name: 'Dhanmondi', focus: 'TV repair near Dhanmondi' }
  ];

  // Global Repair Gallery (Bottom Section)
  const BottomGallery = () => (
    <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Professional Repair Showcase</h2>
        <p className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Real visuals from our electronics restoration workshop in Dhaka</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
            <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800" alt="New LED Installation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <p className="text-white font-bold text-center">Modern TV Installation</p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
            <img src="https://images.unsplash.com/photo-1509281584218-db81d6363a03?auto=format&fit=crop&q=80&w=800" alt="Broken LED Panel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <p className="text-white font-bold text-center">Cracked Panel Diagnosis</p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Motherboard Soldering" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <p className="text-white font-bold text-center">Precision PCB Repair</p>
            </div>
          </div>
          <div className="group relative rounded-2xl overflow-hidden aspect-square border border-white/10">
            <img src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=800" alt="Panel Calibration" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <p className="text-white font-bold text-center">4K Panel Calibration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Area Specific Page
  const AreaPage = ({ areaId }) => {
    const area = areas.find(a => a.id === areaId);
    if (!area) return <HomePage />;

    return (
      <div className="w-full pt-20">
        <section className="py-20 bg-gradient-to-b from-black to-slate-900 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-bold mb-6">
              LOCAL SERVICE: {area.name.toUpperCase()}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Best TV Repair Near {area.name}
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Facing TV issues in {area.name}? Riyadh Electronic offers professional, high-speed on-site television repair services exactly where you are. All brands, all models, 24/7.
            </p>
            <div className="flex justify-center gap-4">
              <a href="tel:01726-725236" className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-amber-400/20">
                <Phone size={20} /> Call Now: 01726-725236
              </a>
            </div>
          </div>
        </section>

        <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Why Choose Us in {area.name}?</h2>
                <div className="space-y-6">
                  {[
                    { title: '1-Hour Response Time', desc: `Our technicians are already active in the ${area.name} area.` },
                    { title: 'No Call-Out Fee', desc: `Zero travel charges for customers living in ${area.name}.` },
                    { title: 'Full Panel Guarantee', desc: 'Specialized equipment for OLED and 4K panel restorations.' }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{feat.title}</h3>
                        <p className="text-gray-400">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1000" alt={`TV Repair in ${area.name}`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
        <ReviewCarousel />
        <BottomGallery />
      </div>
    );
  };

  // SEO & Schema Management
  useEffect(() => {
    const titles = {
      home: 'Riyadh Electronic - #1 TV & LED Repair Center in Dhaka | Home Service',
      services: 'Expert TV Repair Services Dhaka - LED, OLED, 4K Panel Fix & Installation',
      about: 'About Riyadh Electronic - 10+ Years of Professional TV Repair Excellence',
      contact: 'Contact Riyadh Electronic - Fast & Reliable TV Repair in Uttara, Dhaka',
      work: 'Professional TV Repair Portfolio & Success Stories | Riyadh Electronic'
    };

    const descriptions = {
      home: 'Riyadh Electronic provides the best LED/OLED TV repair service in Dhaka. Expert technicians for Samsung, Sony, LG & all brands. 24/7 Home service available.',
      services: 'Complete TV repair solutions: Panel replacement, backlight fix, power supply repair, and wall mount installation. Genuine parts guaranteed.',
      about: 'With over 10 years of experience, Riyadh Electronic is Dhaka\'s most trusted name for high-end electronics and television restoration.',
      contact: 'Need urgent TV repair? Call Riyadh Electronic at 01726-725236. Professional service in Uttara, Gulshan, Banani, and all Dhaka areas.',
      work: 'See our expert craftsmanship. Real before and after results of TV screen repairs, PCB soldering, and backlight restoration.'
    };

    const keywords = "TV repair Dhaka, LED TV repair, OLED TV repair, Samsung TV repair Dhaka, Sony TV repair, TV panel replacement, Riyadh Electronic Uttara, TV installation Dhaka";
    
    // Check for Area Page Titles
    if (currentPage.startsWith('area-')) {
      const areaId = currentPage.replace('area-', '');
      const area = areas.find(a => a.id === areaId);
      if (area) {
        document.title = `Best TV Repair Near ${area.name} - Riyadh Electronic Dhaka`;
      }
    } else {
      document.title = titles[currentPage] || titles.home;
    }

    // Update Meta Tags
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descriptions[currentPage] || descriptions.home);

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
    
    // Schema Markup
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Riyadh Electronic",
      "image": "https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1000",
      "@id": "",
      "url": "https://riyadhelectronic.com",
      "telephone": "01726-725236",
      "priceRange": "৳৳",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "AB Super Market",
        "addressLocality": "Dhaka",
        "postalCode": "1230",
        "addressCountry": "BD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.8669,
        "longitude": 90.3969
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    };

    const existingScript = document.getElementById('schema-markup');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'schema-markup';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('schema-markup');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services Database
  const servicesData = [
    {
      id: 'led-tv-repair',
      title: 'LED TV Repair',
      shortDesc: 'Professional LED TV repair for all brands',
      fullDesc: 'Expert repair for LED televisions including backlight issues, power problems, and display fixes.',
      icon: Tv,
      benefits: ['Backlight Repair', 'Power Supply Fix', 'Display Panel Issues', 'Panel Replacement', 'Quick Diagnosis'],
      process: ['Free Diagnosis', 'Transparent Quote', 'Expert Repair', 'Quality Testing'],
      price: '৳2,000 - ৳8,000',
      time: '12-24 hours'
    },
    {
      id: 'smart-tv-repair',
      title: 'Smart TV Repair',
      shortDesc: 'Android, Samsung SmartTV and all smart systems',
      fullDesc: 'Complete smart TV repair service for software issues, HDMI problems, audio problems, and system updates.',
      icon: Smartphone,
      benefits: ['Software Issues', 'HDMI Problems', 'Audio Issues', 'System Updates', 'Streaming Issues'],
      process: ['System Diagnosis', 'Software Check', 'Hardware Test', 'System Optimization'],
      price: '৳3,000 - ৳7,000',
      time: '12-24 hours'
    },
    {
      id: 'samsung-tv-repair',
      title: 'Samsung TV Repair',
      shortDesc: 'Specialized repair for all Samsung models',
      fullDesc: 'Expert Samsung TV repair service with genuine parts and comprehensive warranty on all repairs.',
      icon: Tv,
      benefits: ['Screen Issues', 'Sound Problems', 'Power Issues', 'Software Glitches', 'Genuine Parts'],
      process: ['Model Check', 'Diagnostic Test', 'Parts Replacement', 'Final Testing'],
      price: '৳2,500 - ৳8,000',
      time: '24 hours'
    },
    {
      id: 'sony-tv-repair',
      title: 'Sony TV Repair',
      shortDesc: 'Professional Sony TV repair service',
      fullDesc: 'Quick and reliable Sony TV repairs with genuine parts and expert technicians.',
      icon: Tv,
      benefits: ['Display Repair', 'Board Replacement', 'Sound System Fix', 'Quick Turnaround', 'Warranty'],
      process: ['Free Inspection', 'Quote Confirmation', 'Professional Repair', 'Quality Assurance'],
      price: '৳2,500 - ৳7,500',
      time: '24 hours'
    },
    {
      id: 'lg-tv-repair',
      title: 'LG TV Repair',
      shortDesc: 'Complete LG TV repair solutions',
      fullDesc: 'Full LG TV repair service for all issues and models with 100% satisfaction guarantee.',
      icon: Tv,
      benefits: ['Panel Repair', 'Backlight Fix', 'Remote Issues', 'Motherboard Repair', 'Expert Service'],
      process: ['Complete Check', 'Issue Assessment', 'Repair Execution', 'Final Inspection'],
      price: '৳2,000 - ৳7,500',
      time: '12-24 hours'
    },
    {
      id: 'tv-screen-replacement',
      title: 'TV Screen Replacement',
      shortDesc: 'Original panel replacement service',
      fullDesc: 'Professional TV screen and panel replacement with full warranty and professional installation.',
      icon: Monitor,
      benefits: ['Original Parts', 'Professional Install', 'Full Warranty', 'Best Price', 'Same-day Service'],
      process: ['Panel Selection', 'Professional Install', 'Quality Check', 'Warranty Registration'],
      price: '৳8,000 - ৳25,000',
      time: '24 hours'
    },
    {
      id: 'motherboard-repair',
      title: 'Motherboard Repair',
      shortDesc: 'Advanced PCB and motherboard service',
      fullDesc: 'Expert motherboard repair and replacement service with advanced diagnostic equipment.',
      icon: Zap,
      benefits: ['PCB Repair', 'Component Soldering', 'Board Testing', 'Full Diagnosis', 'Expert Repair'],
      process: ['Board Inspection', 'Component Analysis', 'Advanced Repair', 'Testing & Validation'],
      price: '৳3,000 - ৳10,000',
      time: '24-48 hours'
    },
    {
      id: 'sound-problem-repair',
      title: 'Sound Problem Repair',
      shortDesc: 'Fix all audio and sound issues',
      fullDesc: 'Professional repair for no sound, distorted audio, speaker problems, and audio jack issues.',
      icon: Volume2,
      benefits: ['Speaker Repair', 'Audio Jack Fix', 'Sound IC Replacement', 'Amplifier Repair', 'Audio Optimization'],
      process: ['Audio Test', 'Issue Identification', 'Component Repair', 'Sound Testing'],
      price: '৳2,000 - ৳6,000',
      time: '12-24 hours'
    },
    {
      id: 'display-problem-fix',
      title: 'Display Problem Fix',
      shortDesc: 'Comprehensive display solutions',
      fullDesc: 'Fix all display issues including lines, pixels, colors, brightness, and contrast problems.',
      icon: Monitor,
      benefits: ['Pixel Issues', 'Color Problems', 'Line Removal', 'Full Diagnosis', 'Complete Fix'],
      process: ['Visual Check', 'Problem Diagnosis', 'Component Test', 'Solution Implementation'],
      price: '৳2,500 - ৳8,000',
      time: '12-24 hours'
    },
    {
      id: 'home-tv-installation',
      title: 'Home TV Installation',
      shortDesc: 'Professional TV installation service',
      fullDesc: 'Expert TV installation and setup at your home with cable management and optimization.',
      icon: Home,
      benefits: ['Wall Mounting', 'Cable Management', 'System Setup', 'Remote Config', 'Expert Installation'],
      process: ['Site Assessment', 'Installation Setup', 'Cable Routing', 'Final Setup'],
      price: '৳2,000 - ৳5,000',
      time: '2-4 hours'
    },
    {
      id: 'wall-mount-installation',
      title: 'Wall Mount Installation',
      shortDesc: 'Professional wall mounting service',
      fullDesc: 'Expert wall mounting with safe, professional installation and perfect alignment.',
      icon: Lightbulb,
      benefits: ['Safe Installation', 'Cable Hiding', 'Perfect Alignment', 'Hardware Included', 'Professional'],
      process: ['Wall Check', 'Mount Installation', 'Alignment', 'Final Verification'],
      price: '৳1,500 - ৳4,000',
      time: '1-2 hours'
    },
    {
      id: 'power-supply-repair',
      title: 'Power Supply Repair',
      shortDesc: 'TV power issues and supply repair',
      fullDesc: 'Professional power supply repair and replacement for all TV brands.',
      icon: Zap,
      benefits: ['Power Board Repair', 'Capacitor Replacement', 'Voltage Check', 'Complete Testing', 'Warranty'],
      process: ['Power Test', 'Component Check', 'Board Repair', 'Safety Testing'],
      price: '৳2,000 - ৳6,000',
      time: '24 hours'
    },
    {
      id: 'remote-control-repair',
      title: 'Remote Control Issues',
      shortDesc: 'Remote repair and replacement',
      fullDesc: 'Fix remote control problems including buttons, IR sensors, and wireless connectivity issues.',
      icon: Lightbulb,
      benefits: ['Button Repair', 'IR Sensor Fix', 'Wireless Issues', 'Replacement Service', 'Quick Fix'],
      process: ['Remote Check', 'Issue Diagnosis', 'Repair/Replace', 'Testing'],
      price: '৳500 - ৳2,000',
      time: '2-4 hours'
    },
    {
      id: 'hdmi-port-repair',
      title: 'HDMI Port Repair',
      shortDesc: 'HDMI and connection port repair',
      fullDesc: 'Professional repair for HDMI ports, USB connections, and all input/output issues.',
      icon: Zap,
      benefits: ['HDMI Repair', 'USB Port Fix', 'Connection Issues', 'Port Replacement', 'Expert Service'],
      process: ['Port Inspection', 'Soldering Check', 'Connection Test', 'Verification'],
      price: '৳2,000 - ৳5,000',
      time: '24 hours'
    },
    {
      id: 'emergency-tv-repair',
      title: '24/7 Emergency Repair',
      shortDesc: 'Round-the-clock emergency service',
      fullDesc: 'Immediate response emergency TV repair service available 24 hours a day, 7 days a week.',
      icon: AlertCircle,
      benefits: ['24/7 Available', 'Same-day Service', 'On-site Repair', 'Emergency Support', 'Priority Handling'],
      process: ['Quick Response', 'On-site Assessment', 'Rapid Repair', 'Completion'],
      price: 'Starting ৳3,000',
      time: '2-6 hours'
    },
    {
      id: 'other-electronics-repair',
      title: 'Other Electronics Repair',
      shortDesc: 'Microwave, AC, refrigerator repair',
      fullDesc: 'Professional repair service for microwaves, air conditioners, refrigerators, and other electronic appliances.',
      icon: Wrench,
      benefits: ['Microwave Repair', 'AC Service', 'Refrigerator Fix', 'Appliance Repair', 'Expert Service'],
      process: ['Appliance Check', 'Problem Diagnosis', 'Component Repair', 'Testing'],
      price: '৳2,500 - ৳15,000',
      time: '24-48 hours'
    }
  ];

  // Customer Reviews
  const reviews = [
    {
      name: 'Abdul Karim',
      service: 'LED TV Repair',
      text: 'Excellent service! My TV was repaired in just 12 hours. The technician was very professional and courteous.',
      rating: 5,
      date: 'May 2024'
    },
    {
      name: 'Fatima Begum',
      service: 'Smart TV Repair',
      text: 'Outstanding experience. They fixed my Samsung TV\'s software issue perfectly. Highly recommended!',
      rating: 5,
      date: 'May 2024'
    },
    {
      name: 'Mohammad Hassan',
      service: 'Screen Replacement',
      text: 'Professional installation and replacement. The new screen looks perfect. Great value for money.',
      rating: 5,
      date: 'April 2024'
    },
    {
      name: 'Aisha Khan',
      service: '24/7 Emergency Repair',
      text: 'Called at midnight and they came immediately. Fixed my TV in 2 hours. Truly 24/7 service!',
      rating: 5,
      date: 'April 2024'
    },
    {
      name: 'Rahman Ahmed',
      service: 'Motherboard Repair',
      text: 'My TV board was expertly repaired. They used quality parts and provided warranty. Trustworthy team.',
      rating: 5,
      date: 'April 2024'
    },
    {
      name: 'Nasrin Akter',
      service: 'Wall Mount Installation',
      text: 'Perfect installation! Cable management was excellent. The TV looks great on my wall now.',
      rating: 5,
      date: 'March 2024'
    },
    {
      name: 'Ibrahim Khan',
      service: 'Power Supply Repair',
      text: 'Quick diagnosis and repair. My TV is working perfectly again. Very affordable pricing.',
      rating: 5,
      date: 'March 2024'
    },
    {
      name: 'Zeina Hassan',
      service: 'Sound Problem Repair',
      text: 'Sound issue fixed immediately. The technician explained everything clearly. Excellent service.',
      rating: 5,
      date: 'March 2024'
    },
    {
      name: 'Karim Ali',
      service: 'HDMI Port Repair',
      text: 'Professional repair of HDMI port. Now my TV works with all devices. Highly satisfied!',
      rating: 5,
      date: 'February 2024'
    },
    {
      name: 'Mina Sultana',
      service: 'Display Problem Fix',
      text: 'Pixel issues completely fixed. The technician was experienced and quick. Recommended to all friends.',
      rating: 5,
      date: 'February 2024'
    }
  ];

  // Trust Stats
  const trustStats = [
    { icon: Users, label: 'Happy Customers', value: '1000+', color: 'from-blue-500 to-blue-600' },
    { icon: Tv, label: 'TVs Repaired', value: '2000+', color: 'from-purple-500 to-purple-600' },
    { icon: Award, label: 'Years Experience', value: '10+', color: 'from-amber-500 to-amber-600' },
    { icon: Shield, label: 'Satisfaction Rate', value: '99%', color: 'from-green-500 to-green-600' }
  ];

  // Navigation Component
  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg dark:shadow-2xl' 
        : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900 text-lg group-hover:scale-110 transition-transform duration-300">
              RE
            </div>
            <span className="text-white font-bold text-lg hidden sm:block">Riyadh Electronic</span>
          </button>

          <div className="hidden md:flex gap-6 items-center">
            {['home', 'services', 'work', 'about', 'contact'].map((page) => (
              <button key={page} onClick={() => setCurrentPage(page)} className={`relative font-medium transition-all duration-300 group ${
                currentPage === page ? 'text-amber-400' : (scrolled || theme === 'dark' ? 'text-slate-600 dark:text-gray-300' : 'text-white') + ' hover:text-amber-400'
              }`}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ${
                  currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || theme === 'dark' ? 'text-slate-600 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          <div className="hidden sm:flex gap-3 items-center">
            <a href="tel:01726-725236" className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-lg hover:shadow-amber-400/50 transition-all duration-300 text-sm flex items-center gap-1">
              <Phone size={16} /> <span className="hidden lg:inline">Call Now</span>
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-lg transition-colors ${
                scrolled || theme === 'dark' ? 'text-slate-600 dark:text-gray-300' : 'text-white hover:text-amber-400'
              }`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsNavOpen(!isNavOpen)} className={`transition-colors ${
              scrolled || theme === 'dark' ? 'text-slate-900 dark:text-white' : 'text-white hover:text-amber-400'
            }`}>
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isNavOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            {['home', 'services', 'work', 'about', 'contact'].map((page) => (
              <button key={page} onClick={() => { setCurrentPage(page); setIsNavOpen(false); }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                  currentPage === page ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold' : 'text-gray-300 hover:text-amber-400'
                }`}>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
            <div className="flex gap-2 pt-2">
              <a href="tel:01726-725236" className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-center text-sm flex items-center justify-center gap-2">
                <Phone size={18} /> Call Specialist
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  // Review Carousel Component
  const ReviewCarousel = () => {
    const nextReview = () => setReviewSlide((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setReviewSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    const currentReview = reviews[reviewSlide];

    return (
      <div className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>What Our Customers Say</h2>

          <div className={`relative rounded-2xl p-8 sm:p-12 border shadow-2xl transition-all ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-slate-900 to-black border-slate-800' 
              : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{currentReview.name}</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{currentReview.service} • {currentReview.date}</p>
              </div>
            </div>

            <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-200' : 'text-slate-600'}`}>"{currentReview.text}"</p>

            <div className="flex items-center justify-between">
              <button onClick={prevReview} className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}>
                <ChevronLeft size={24} className="text-amber-400" />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setReviewSlide(i)}
                    className={`h-2 rounded-full transition-all ${i === reviewSlide ? 'bg-amber-400 w-8' : (theme === 'dark' ? 'bg-slate-600 w-2' : 'bg-slate-200 w-2')}`} />
                ))}
              </div>

              <button onClick={nextReview} className={`p-2 rounded-lg transition-all ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}>
                <ChevronRight size={24} className="text-amber-400" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="https://share.google/ymctgvIBvG8NjxtG0" target="_blank" rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center justify-center gap-2">
              <Star size={20} /> See More Reviews
            </a>
            <a href="https://share.google/ymctgvIBvG8NjxtG0" target="_blank" rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl bg-slate-800 text-white font-bold border border-slate-700 hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2">
              <CheckCircle size={20} /> Write a Review
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Home Page
  const HomePage = () => (
    <div className="w-full">
      {/* Hero Section */}
      <section className={`relative min-h-screen overflow-hidden pt-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse transition-opacity ${theme === 'dark' ? 'bg-amber-400/15 opacity-100' : 'bg-amber-400/10 opacity-50'}`}></div>
          <div className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse transition-opacity ${theme === 'dark' ? 'bg-orange-500/15 opacity-100' : 'bg-orange-500/10 opacity-50'}`} style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full py-20">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className={`text-5xl md:text-7xl font-bold leading-tight transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Professional TV & Electronics Repair in Dhaka
              </h1>
              <p className={`text-xl md:text-2xl max-w-2xl transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Expert technicians • 24/7 service • Same-day repairs • Guaranteed quality
              </p>

              <div className="flex flex-wrap gap-4 pt-8">
                <a href="tel:01726-725236" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold text-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center gap-2">
                  <Phone size={20} /> Call Now
                </a>
                <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-xl bg-green-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center gap-2">
                  <MessageCircle size={20} /> WhatsApp
                </a>
                <button onClick={() => setCurrentPage('services')} className="group px-8 py-4 rounded-xl bg-slate-800 text-white font-bold text-lg border border-slate-700 hover:border-amber-400 transition-all duration-300 flex items-center gap-2">
                  Browse Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-2xl">
                {[
                  { icon: '⚡', text: '24/7 Service' },
                  { icon: '🔧', text: 'Same Day Repair' },
                  { icon: '⭐', text: '500+ Reviews' },
                  { icon: '👨‍🔧', text: 'Expert Techs' }
                ].map((badge, i) => (
                  <div key={i} className={`p-4 rounded-lg backdrop-blur-md border text-center transition-all duration-300 hover:scale-105 ${
                    theme === 'dark' ? 'bg-white/10 border-white/20 hover:border-amber-400/50' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                  }`}>
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{badge.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Featured Services */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Popular Services</h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>Quick access to our most requested repair services</p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 8).map((service) => {
              const IconComponent = service.icon;
              return (
                <button key={service.id} onClick={() => setCurrentPage(`service-${service.id}`)}
                  className={`group p-6 rounded-xl border transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 text-left hover:scale-105 ${
                    theme === 'dark' ? 'bg-gradient-to-br from-slate-900 to-black border-slate-800 hover:border-amber-400' : 'bg-white border-slate-200 hover:border-amber-400'
                  }`}>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4 group-hover:from-amber-400/40 group-hover:to-orange-500/40 transition-all">
                    <IconComponent size={24} className="text-amber-400" />
                  </div>
                  <h3 className={`font-bold mb-2 group-hover:text-amber-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                  <p className={`text-sm transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-500 group-hover:text-slate-700'}`}>{service.shortDesc}</p>
                </button>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => setCurrentPage('services')} className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center gap-2 mx-auto">
              View All Services <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 to-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Why Choose Riyadh Electronic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Expert Technicians', desc: '10+ years of experience with certified expertise' },
              { icon: Zap, title: 'Fast Service', desc: 'Same-day repair available for most issues' },
              { icon: Award, title: 'Quality Guaranteed', desc: 'All repairs come with warranty and guarantee' },
              { icon: Clock, title: '24/7 Available', desc: 'Open 24 hours, 7 days a week' },
              { icon: CheckCircle, title: 'Genuine Parts', desc: 'Only original parts used in all repairs' },
              { icon: Home, title: 'Home Service', desc: 'Free diagnosis and on-site repair available' }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-xl border transition-all duration-300 hover:scale-105 group ${
                theme === 'dark' ? 'bg-black border-slate-800 hover:border-amber-400/50' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
              }`}>
                <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4 group-hover:from-amber-400/40 group-hover:to-orange-500/40 transition-all">
                  <item.icon size={28} className="text-amber-400" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Carousel */}
      <ReviewCarousel />

      {/* Professional Showcase Gallery */}
      <BottomGallery />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-t border-amber-400/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Immediate Repair?</h2>
          <p className="text-xl text-gray-300 mb-8">Our experts are ready to help 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01726-725236" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone size={20} /> Call 01726-725236
            </a>
            <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // Services Page
  const ServicesPage = () => (
    <div className="w-full pt-20">
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl font-bold text-center mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Services</h1>
          <p className={`text-xl text-center max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
            Complete repair solutions for all TV brands and electronic devices
          </p>
        </div>
      </section>

      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <button key={service.id} onClick={() => setCurrentPage(`service-${service.id}`)}
                  className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/20 text-left hover:scale-105 ${
                    theme === 'dark' ? 'bg-black border-slate-800 hover:border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                  }`}>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4 group-hover:from-amber-400/40 group-hover:to-orange-500/40 transition-all">
                    <IconComponent size={32} className="text-amber-400" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
                  <p className={`mb-4 transition-colors ${theme === 'dark' ? 'text-gray-400 group-hover:text-gray-300' : 'text-slate-600 group-hover:text-slate-800'}`}>{service.shortDesc}</p>
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={18} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Service Areas in Dhaka</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              {['Uttara', 'Bashundhara', 'Gulshan', 'Banani', 'Mirpur', 'Dhanmondi'].map((area) => (
                <button key={area} onClick={() => setCurrentPage(`area-${area.toLowerCase()}`)} 
                  className="p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 hover:border-amber-400/50 transition-all text-center">
                  <MapPin className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-white font-bold">{area}</p>
                </button>
              ))}
          </div>
          <a href="tel:01726-725236" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
            Request Home Service
          </a>
        </div>
      </section>

      {/* OLED & Special Panels Section */}
      <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1500')] bg-cover opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-bold mb-6 uppercase tracking-widest">
            PANEL INVENTORY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Genuine OLED Panels for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Every Brand</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
            As Dhaka's leading display specialist, we carry an exhaustive inventory of original OLED, QLED, and LED panels. From specialized 32-inch local units to premium 85-inch 4K panels, we guarantee a factory-perfect fit.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: '32" - 85" Size Availability', icon: Monitor, color: 'text-amber-400' },
                  { title: 'Zero Dead Pixel Guarantee', icon: Shield, color: 'text-green-400' },
                  { title: 'Factory Fresh Stock', icon: Award, color: 'text-blue-400' },
                  { title: 'Certified Tech Install', icon: CheckCircle, color: 'text-orange-400' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-300 group">
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-amber-400/20 transition-all">
                      <item.icon className={item.color} size={24} />
                    </div>
                    <span className="text-white font-bold pt-1">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div> Available Brands
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['SAMSUNG', 'SONY', 'LG', 'PANASONIC', 'PHILIPS', 'TOSHIBA', 'SHARP', 'WALTON', 'VISION', 'SINGER', 'HAIR', 'XIAOMI'].map((brand) => (
                    <span key={brand} className="px-3 py-1.5 rounded-md bg-black border border-slate-800 text-gray-400 font-bold text-[10px] tracking-widest hover:text-amber-400 hover:border-amber-400 transition-all cursor-default">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1500" 
                  alt="Quality TV Panel Display" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                    <p className="text-white font-bold text-2xl">Stock Ready</p>
                  </div>
                  <p className="text-amber-400 font-semibold tracking-wide">Panels from 32" to 85" High Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Individual Service Page
  const ServiceDetailPage = ({ serviceId }) => {
    const service = servicesData.find(s => s.id === serviceId);
    if (!service) return <HomePage />;

    const IconComponent = service.icon;

    return (
      <div className="w-full pt-20">
        {/* Hero */}
        <section className={`py-20 relative overflow-hidden transition-colors duration-300 ${
          theme === 'dark' ? 'bg-black' : 'bg-slate-50'
        }`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => setCurrentPage('services')} className={`flex items-center gap-2 mb-8 transition-colors ${
              theme === 'dark' ? 'text-gray-400 hover:text-amber-400' : 'text-slate-500 hover:text-amber-400'
            }`}>
              <ChevronDown size={20} className="rotate-90" /> Back to Services
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-6">
                  <IconComponent size={64} className="text-amber-400" />
                </div>
                <h1 className={`text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{service.title}</h1>
                <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>{service.fullDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock size={24} className="text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Typical Duration</p>
                      <p className="text-white font-bold">{service.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Award size={24} className="text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Typical Price Range</p>
                      <p className="text-white font-bold">{service.price}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                  <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                  <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
                  <div className="space-y-4">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="pt-2">
                          <p className="text-gray-300">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="tel:01726-725236" className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all text-center flex items-center justify-center gap-2">
                    <Phone size={20} /> Call Now
                  </a>
                  <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 rounded-xl bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all text-center flex items-center justify-center gap-2">
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews for this service */}
        <ReviewCarousel />

        {/* Related Services */}
        <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicesData.filter(s => s.id !== serviceId).slice(0, 3).map((relatedService) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <button key={relatedService.id} onClick={() => setCurrentPage(`service-${relatedService.id}`)}
                    className={`group p-6 rounded-xl border transition-all duration-300 hover:scale-105 text-left ${
                      theme === 'dark' ? 'bg-black border-slate-800 hover:border-amber-400' : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                    }`}>
                    <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4">
                      <RelatedIcon size={24} className="text-amber-400" />
                    </div>
                    <h3 className={`font-bold mb-2 group-hover:text-amber-400 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{relatedService.title}</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>{relatedService.shortDesc}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  };

  // Work Page (Gallery with Before/After Effect)
  const WorkPage = () => {
    const works = [
      {
        id: 1,
        title: "Samsung QLED Backlight Array Repair",
        description: "Restored uniform brightness after multiple LED failures in the array. Precision replacement with brand-original strips.",
        before: "https://images.unsplash.com/photo-1595932067746-8608f6515865?auto=format&fit=crop&q=80&w=1000",
        after: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
        brand: "Samsung"
      },
      {
        id: 2,
        title: "Sony Bravia Master Series PCB Repair",
        description: "Professional soldering on main processor board to fix cold joint issues causing reboot loops.",
        before: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
        after: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1000",
        brand: "Sony"
      },
      {
        id: 3,
        title: "OLED Master Service: LG 75-inch",
        description: "Full panel extraction and replacement on a high-end OLED unit. Restored to 100% factory specifications.",
        before: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1000",
        after: "https://images.unsplash.com/photo-1509281584218-db81d6363a03?auto=format&fit=crop&q=80&w=1000",
        brand: "LG"
      },
      {
        id: 4,
        title: "Vision 4K LED Screen Restoration",
        description: "Fixed extensive liquid damage to the T-CON board and associated ribbon cables.",
        before: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
        after: "https://images.unsplash.com/photo-1593784991095-a205039470b6?auto=format&fit=crop&q=80&w=1000",
        brand: "Vision"
      },
      {
        id: 5,
        title: "Samsung Smart TV Wall Mount",
        description: "Professional wall installation with hidden cable management for a clean, modern look.",
        before: "https://images.unsplash.com/photo-1558239027-d29658addbb7?auto=format&fit=crop&q=80&w=1000",
        after: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1000",
        brand: "Samsung"
      },
      {
        id: 6,
        title: "Walton 32\" Audio IC Diagnostic",
        description: "Restored audio output by replacing the audio amplifier integrated circuit on the local board.",
        before: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1000",
        after: "https://images.unsplash.com/photo-1460518451285-cd9bf611f157?auto=format&fit=crop&q=80&w=1000",
        brand: "Walton"
      }
    ];

    const BeforeAfterSlider = ({ before, after, title }) => {
      const [sliderPos, setSliderPos] = useState(50);
      const containerRef = useRef(null);

      const handleMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left;
        const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(pos);
      };

      return (
        <div 
          ref={containerRef}
          className="relative aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700 shadow-2xl group"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          <div className="absolute inset-0">
            <img src={after} alt="After" className="w-full h-full object-cover" />
          </div>
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img src={before} alt="Before" className="w-full h-full object-cover grayscale brightness-50" />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-lg text-white font-bold text-sm">
              BEFORE
            </div>
          </div>
          
          <div className="absolute bottom-6 right-6 px-4 py-2 bg-amber-400 rounded-lg text-slate-900 font-bold text-sm">
            AFTER (FIXED)
          </div>

          <div 
            className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
              <ChevronLeft size={16} className="text-slate-900 -translate-x-0.5" />
              <ChevronRight size={16} className="text-slate-900 translate-x-0.5" />
            </div>
          </div>
          
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
        </div>
      );
    };

    return (
      <div className={`w-full pt-32 pb-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-400 text-sm font-bold mb-6">
              TECHNICAL EXPERTISE
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Success Portfolio</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Optimized repair strategies for high-end televisions and electronics across Dhaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <div key={work.id} className="p-8 bg-black/50 rounded-2xl border border-white/5 hover:border-amber-400/30 transition-all group h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">{work.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
                    {work.brand}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed italic border-l-2 border-amber-400 pl-4 mb-4 flex-grow">{work.description}</p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-sm">
                  <span className="text-amber-400 font-bold">100% Repaired</span>
                  <span className="text-gray-500">Authentic Parts Used</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BottomGallery />
      </div>
    );
  };

  // About Page
  const AboutPage = () => (
    <div className="w-full pt-20">
      <section className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-5xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>About Riyadh Electronic</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-amber-400">Your Trusted TV Repair Experts</h2>
              <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Riyadh Electronic has been serving the people of Dhaka for over 10 years with exceptional TV and electronics repair services. What started as a small repair shop has grown into the most trusted service center in the region.
              </p>
              <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                We specialize in repairing all major brands including Samsung, Sony, LG, Philips, and many others. Our expert technicians are trained to handle everything from simple fixes to complex motherboard repairs.
              </p>
              <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>
                Customer satisfaction is our top priority. We work with integrity, transparency, and commitment to excellence in every repair job.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '2000+', label: 'TVs Repaired' },
                { number: '1000+', label: 'Happy Customers' },
                { number: '10+', label: 'Years Experience' },
                { number: '99%', label: 'Satisfaction Rate' }
              ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-xl border text-center hover:border-amber-400/50 transition-all hover:scale-105 ${
                  theme === 'dark' ? 'bg-gradient-to-br from-slate-900/50 to-black border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className={`rounded-2xl p-12 border transition-all ${
            theme === 'dark' ? 'bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-amber-400/30' : 'bg-slate-50 border-slate-200'
          }`}>
            <h2 className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Mohammad Riyadh', role: 'Founder & Master Technician', exp: '15+ years' },
                { name: 'Ahmed Hassan', role: 'Senior Technician', exp: '12+ years' },
                { name: 'Karim Ali', role: 'Electronics Expert', exp: '10+ years' }
              ].map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-slate-900">
                    {member.name.split(' ')[0][0]}{member.name.split(' ')[1][0]}
                  </div>
                  <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                  <p className="text-amber-400 font-semibold mb-1">{member.role}</p>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-slate-500'}`}>{member.exp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Why Customers Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: 'Expert Technicians', desc: 'Certified professionals with 10-15 years experience' },
              { icon: CheckCircle, title: 'Genuine Parts', desc: 'Only original parts used in all repairs' },
              { icon: Award, title: 'Quality Guaranteed', desc: '3-6 months warranty on all repairs' },
              { icon: Clock, title: '24/7 Service', desc: 'Always open for your emergency needs' },
              { icon: Zap, title: 'Quick Turnaround', desc: 'Most repairs completed within 24 hours' },
              { icon: Home, title: 'Home Service', desc: 'Free diagnosis and on-site repair available' },
              { icon: Users, title: 'Customer Focused', desc: '500+ five-star reviews from satisfied customers' },
              { icon: Wrench, title: 'All Brands', desc: 'Experience with Samsung, Sony, LG, and more' }
            ].map((reason, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-black border border-slate-800 hover:border-amber-400/50 transition-all flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit flex-shrink-0">
                  <reason.icon size={24} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{reason.title}</h3>
                  <p className="text-gray-400">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-t border-amber-400/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us today for professional TV repair</p>
          <a href="tel:01726-725236" className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
            Call: 01726-725236
          </a>
        </div>
      </section>
    </div>
  );

  // Contact Page - Trust Focused
  const ContactPage = () => (
    <div className="w-full pt-20">
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white text-center mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto">
            We're available 24/7 for all your TV and electronics repair needs
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Phone */}
            <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-amber-400/50 transition-all hover:scale-105">
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-400/20 to-orange-500/20 w-fit mb-4">
                <Phone size={32} className="text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Call Us</h3>
              <p className="text-gray-400 mb-6">Speak directly with our experts 24/7</p>
              <a href="tel:01726-725236" className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all">
                01726-725236
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-green-500/50 transition-all hover:scale-105">
              <div className="p-4 rounded-xl bg-green-500/20 w-fit mb-4">
                <MessageCircle size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">WhatsApp</h3>
              <p className="text-gray-400 mb-6">Quick chat with instant response</p>
              <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all">
                Message Now
              </a>
            </div>

            {/* Address */}
            <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 transition-all hover:scale-105">
              <div className="p-4 rounded-xl bg-blue-500/20 w-fit mb-4">
                <MapPin size={32} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-gray-400 mb-2">1st Floor, Riyadh Electronics</p>
              <p className="text-gray-400 mb-6">AB Super Market, Dhaka 1230</p>
              <a href="https://share.google/ymctgvIBvG8NjxtG0" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-lg bg-blue-500 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
                View Map
              </a>
            </div>

            {/* Hours */}
            <div className="bg-black rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="p-4 rounded-xl bg-purple-500/20 w-fit mb-4">
                <Clock size={32} className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Hours</h3>
              <p className="text-gray-400 mb-2">Available 24 Hours</p>
              <p className="text-gray-400 mb-6">7 Days a Week</p>
              <div className="text-amber-400 font-bold">Emergency Service Available</div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-black rounded-2xl p-12 border border-slate-800 mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Uttara', 'Bashundhara', 'Gulshan', 'Banani', 'Mirpur', 'Dhanmondi'].map((area) => (
                <div key={area} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-center mt-8 text-sm">Free home diagnosis and on-site repair for all areas</p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Find Us on the Map</h2>
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.638759330157!2d90.3969038743955!3d23.86695808429339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5f982d0525f%3A0x184898bdff456061!2sRiyadh%20Electronic%20TV%20Repair%20Shop!5e0!3m2!1sen!2sbd!4v1778340832659"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Trust & Guarantees */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our Guarantees & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Quality Guarantee', desc: 'All repairs backed by 3-6 months warranty', color: 'amber' },
              { icon: Shield, title: 'Certified Technicians', desc: 'Expert professionals with industry certifications', color: 'blue' },
              { icon: Zap, title: 'Fast Response', desc: 'Same-day service for most repair requests', color: 'green' },
              { icon: CheckCircle, title: 'Transparent Pricing', desc: 'No hidden charges, clear quotes upfront', color: 'purple' },
              { icon: Users, title: 'Customer First', desc: '500+ Google reviews with 4.9+ rating', color: 'red' },
              { icon: Wrench, title: 'Expert Service', desc: '10+ years experience with all major brands', color: 'orange' }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl bg-black border border-slate-800 hover:scale-105 transition-all text-center`}>
                <div className={`p-4 rounded-xl bg-gradient-to-r from-${item.color}-400/20 to-${item.color}-500/20 w-fit mx-auto mb-4`}>
                  <item.icon size={32} className={`text-${item.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className={`py-20 border-t transition-all ${
        theme === 'dark' ? 'bg-gradient-to-r from-amber-400/10 to-orange-500/10 border-amber-400/30' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Emergency TV Repair?</h2>
          <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-slate-600'}`}>Our experts are standing by 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01726-725236" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-bold hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone size={20} /> Call 01726-725236
            </a>
            <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 rounded-xl bg-green-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  // Footer Component
  const Footer = () => (
    <footer className={`transition-colors duration-300 border-t ${
      theme === 'dark' ? 'bg-black border-slate-800' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center font-bold text-slate-900">RE</div>
              <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Riyadh Electronic</span>
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-600'}`}>Professional TV & electronics repair in Dhaka. 24/7 service available.</p>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'services', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button onClick={() => setCurrentPage(page)} className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} hover:text-amber-400 transition-colors`}>
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Services</h4>
            <ul className="space-y-2">
              {['LED TV Repair', 'Smart TV Repair', 'Screen Replacement', 'Motherboard Repair'].map((service) => (
                <li key={service} className={`${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'} hover:text-amber-400 cursor-pointer transition-colors`}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Contact</h4>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
              <li><a href="tel:01726-725236" className="hover:text-amber-400 transition-colors">01726-725236</a></li>
              <li><a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp</a></li>
              <li>Open 24 Hours</li>
              <li>All Dhaka Areas</li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-8 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${theme === 'dark' ? 'text-gray-400' : 'text-slate-500'}`}>
            <p>&copy; 2024 Riyadh Electronic. All rights reserved.</p>
            <div className="flex gap-6">
              {['Facebook', 'Instagram', 'WhatsApp'].map((social) => (
                <a key={social} href="#" className="hover:text-amber-400 transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  // Floating WhatsApp Button
  const FloatingWhatsApp = () => (
    <a href="https://wa.me/8801726725236" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-bounce">
      <MessageCircle size={28} className="text-white" />
    </a>
  );

  // Page Renderer
  const renderPage = () => {
    if (currentPage.startsWith('service-')) {
      const serviceId = currentPage.replace('service-', '');
      return <ServiceDetailPage serviceId={serviceId} />;
    }

    if (currentPage.startsWith('area-')) {
      const areaId = currentPage.replace('area-', '');
      return <AreaPage areaId={areaId} />;
    }

    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'work':
        return <WorkPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        * { font-family: 'Poppins', sans-serif; }
        html { scroll-behavior: smooth; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>

      <Navigation />
      {renderPage()}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default RiyadhElectronicWebsite;