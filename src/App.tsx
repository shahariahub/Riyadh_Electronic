import React, { useState, useEffect } from 'react';
import { AREAS, SERVICES_DATA, REVIEWS, TRUST_STATS, WORKS, SEO_TITLES, SEO_DESCRIPTIONS } from './constants';
import { Theme } from './types';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AreaPage from './pages/AreaPage';

const RiyadhElectronicWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  // Theme Management
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO & Schema Management
  useEffect(() => {
    const keywords = "TV repair Dhaka, LED TV repair, OLED TV repair, Samsung TV repair Dhaka, Sony TV repair, TV panel replacement, Riyadh Electronic Uttara, TV installation Dhaka";
    
    // Check for Area Page Titles
    if (currentPage.startsWith('area-')) {
      const areaId = currentPage.replace('area-', '');
      const area = AREAS.find(a => a.id === areaId);
      if (area) {
        document.title = `Best TV Repair Near ${area.name} - Riyadh Electronic Dhaka`;
      }
    } else {
      document.title = SEO_TITLES[currentPage] || SEO_TITLES.home;
    }

    // Update Meta Tags
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', SEO_DESCRIPTIONS[currentPage] || SEO_DESCRIPTIONS.home);

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

    // Scroll to top on page change
    window.scrollTo(0, 0);

    return () => {
      const scriptToRemove = document.getElementById('schema-markup');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [currentPage]);

  // Page Renderer
  const renderPage = () => {
    if (currentPage.startsWith('service-')) {
      const serviceId = currentPage.replace('service-', '');
      return (
        <ServiceDetailPage 
          serviceId={serviceId} 
          theme={theme} 
          servicesData={SERVICES_DATA} 
          reviews={REVIEWS} 
          setCurrentPage={setCurrentPage} 
        />
      );
    }

    if (currentPage.startsWith('area-')) {
      const areaId = currentPage.replace('area-', '');
      return (
        <AreaPage 
          areaId={areaId} 
          theme={theme} 
          areas={AREAS} 
          reviews={REVIEWS} 
        />
      );
    }

    switch (currentPage) {
      case 'services':
        return <ServicesPage theme={theme} servicesData={SERVICES_DATA} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage theme={theme} />;
      case 'contact':
        return <ContactPage theme={theme} />;
      case 'work':
        return <WorkPage theme={theme} works={WORKS} />;
      default:
        return (
          <HomePage 
            theme={theme} 
            servicesData={SERVICES_DATA} 
            trustStats={TRUST_STATS} 
            reviews={REVIEWS} 
            setCurrentPage={setCurrentPage} 
          />
        );
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

      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        scrolled={scrolled}
        theme={theme}
        setTheme={setTheme}
      />
      
      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer theme={theme} setCurrentPage={setCurrentPage} />
      <FloatingWhatsApp />
    </div>
  );
};

export default RiyadhElectronicWebsite;
