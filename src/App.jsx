import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import FeaturedCategories from './components/FeaturedCategories';
import TechnicalCapabilities from './components/TechnicalCapabilities';
import WhyChooseUs from './components/WhyChooseUs';
import CompactAmc from './components/CompactAmc';
import BrandsStrip from './components/BrandsStrip';
import ContactCtaBanner from './components/ContactCtaBanner';
import ProductsPage from './components/ProductsPage';
import AmcPage from './components/AmcPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const parseRoute = () => {
  const hash = window.location.hash || '';
  const pathname = window.location.pathname || '';

  // 1. Products & Solutions (including backward-compatible mapping of /services and #services)
  if (
    hash === '#/products' || 
    hash === '#products' || 
    hash === '#products-page' || 
    hash === '#/services' || 
    hash === '#services' || 
    hash === '#services-page' ||
    pathname === '/products' ||
    pathname === '/services'
  ) {
    return 'products';
  }

  // 2. AMC & Maintenance
  if (hash === '#/amc' || hash === '#amc' || pathname === '/amc') {
    return 'amc';
  }

  // 3. About Us
  if (hash === '#/about' || hash === '#about' || pathname === '/about') {
    return 'about';
  }

  // 4. Contact
  if (hash === '#/contact' || hash === '#contact' || pathname === '/contact') {
    return 'contact';
  }

  // Default: Home
  return 'home';
};

function AppContent() {
  useSmoothScroll();

  const [currentView, setCurrentView] = useState(() => parseRoute());

  useEffect(() => {
    const handleHashChange = () => {
      const nextView = parseRoute();
      setCurrentView(nextView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (target) => {
    let nextHash = '#/';
    let nextView = 'home';

    if (
      target === '#/products' || 
      target === '#products' || 
      target === '#/services' || 
      target === '#services'
    ) {
      nextHash = '#/products';
      nextView = 'products';
    } else if (target === '#/amc' || target === '#amc') {
      nextHash = '#/amc';
      nextView = 'amc';
    } else if (target === '#/about' || target === '#about') {
      nextHash = '#/about';
      nextView = 'about';
    } else if (target === '#/contact' || target === '#contact') {
      nextHash = '#/contact';
      nextView = 'contact';
    } else {
      nextHash = '#/';
      nextView = 'home';
    }

    window.location.hash = nextHash;
    setCurrentView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white w-full max-w-full overflow-x-hidden transition-colors duration-200">
      {/* 5-Link Navigation Header with Logo and Active Link Indicator */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-1 w-full min-w-0">
        <div key={currentView} className="view-transition">
          {currentView === 'products' ? (
            <ProductsPage onBack={() => handleNavigate('#/')} />
          ) : currentView === 'amc' ? (
            <AmcPage onBack={() => handleNavigate('#/')} />
          ) : currentView === 'about' ? (
            <AboutPage onBack={() => handleNavigate('#/')} />
          ) : currentView === 'contact' ? (
            <ContactPage onBack={() => handleNavigate('#/')} />
          ) : (
            <>
              {/* A. Premium Hero Section */}
              <Hero onExploreProducts={() => handleNavigate('#/products')} />

              {/* B. Compact Trust / Business Information Strip */}
              <TrustHighlights />

              {/* C. Featured Products & Solutions (6 Core Categories) */}
              <FeaturedCategories onViewAll={() => handleNavigate('#/products')} />

              {/* D. What We Do / Relevant Repair & Installation Capabilities */}
              <TechnicalCapabilities />

              {/* E. Why Choose Bhumi Technocare (Verifiable Strengths) */}
              <WhyChooseUs />

              {/* F. AMC & Maintenance Promotional Section */}
              <CompactAmc onViewAmc={() => handleNavigate('#/amc')} />

              {/* Brands Strip */}
              <BrandsStrip />

              {/* G. Clear Contact & Consultation CTA Banner */}
              <ContactCtaBanner onContactClick={() => handleNavigate('#/contact')} />
            </>
          )}
        </div>
      </main>

      {/* H. Professional Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
