import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import AmcSection from './components/AmcSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function AppContent() {
  // Synchronized smooth scrolling with GSAP ScrollTrigger
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white w-full max-w-full overflow-x-hidden transition-colors duration-200">
      {/* Header Navigation with theme toggle & single Contact CTA */}
      <Navbar />

      {/* Main Content - Exactly 6 Sections */}
      <main className="flex-1 w-full min-w-0">
        {/* 1. Home Section */}
        <Hero />

        {/* 2. Services Section */}
        <ServicesSection />

        {/* 3. Products Section */}
        <ProductsSection />

        {/* 4. AMC & Maintenance Section */}
        <AmcSection />

        {/* 5. About Us Section */}
        <AboutUsSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer />
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
