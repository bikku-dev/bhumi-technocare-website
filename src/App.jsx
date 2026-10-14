import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import FeaturedServices from './components/FeaturedServices';
import FeaturedProducts from './components/FeaturedProducts';
import BrandsStrip from './components/BrandsStrip';
import CompactAmc from './components/CompactAmc';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function AppContent() {
  useSmoothScroll();

  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#/services' || hash === '#services-page') return 'services';
    if (hash === '#/products' || hash === '#products-page') return 'products';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/services' || hash === '#services-page') {
        setCurrentView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/products' || hash === '#products-page') {
        setCurrentView('products');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
        if (hash && hash !== '#home' && hash !== '#/' && !hash.startsWith('#/')) {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (target) => {
    if (target === '#/services' || target === '#services-page') {
      window.location.hash = '#/services';
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === '#/products' || target === '#products-page') {
      window.location.hash = '#/products';
      setCurrentView('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
      }
      window.location.hash = target;
      if (target === '#/' || target === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setTimeout(() => {
          const el = document.querySelector(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white w-full max-w-full overflow-x-hidden transition-colors duration-200">
      {/* Compact Header Navigation */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content with Progressive Disclosure */}
      <main className="flex-1 w-full min-w-0">
        <div key={currentView} className="view-transition">
          {currentView === 'services' ? (
            <ServicesPage onBack={() => handleNavigate('#/')} />
          ) : currentView === 'products' ? (
            <ProductsPage onBack={() => handleNavigate('#/')} />
          ) : (
            <>
              {/* 1. Hero Section */}
              <Hero onExploreServices={() => handleNavigate('#/services')} />

              {/* 2. Compact Trust Highlights */}
              <TrustHighlights />

              {/* 3. Featured Services (6 Compact Cards) */}
              <FeaturedServices onExploreAll={() => handleNavigate('#/services')} />

              {/* 4. Featured Products (6 Compact Cards) */}
              <FeaturedProducts onViewAll={() => handleNavigate('#/products')} />

              {/* 5. Brands We Supply & Service (10 Logos Strip) */}
              <BrandsStrip />

              {/* 6. Compact AMC & Maintenance */}
              <CompactAmc />

              {/* 7. About Us Section (Bharat Chaudhary Identity) */}
              <AboutUsSection />

              {/* 8. Contact & Location Section */}
              <ContactSection />
            </>
          )}
        </div>
      </main>

      {/* Concise Footer */}
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
