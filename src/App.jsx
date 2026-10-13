import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceOverviewStrip from './components/ServiceOverviewStrip';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import AmcSection from './components/AmcSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import WhatsAppEnquirySection from './components/WhatsAppEnquirySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import WhatsAppEnquiryModal from './components/WhatsAppEnquiryModal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function AppContent() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryInitialData, setEnquiryInitialData] = useState({});

  // Initialize synchronized Lenis smooth scrolling with GSAP ScrollTrigger
  useSmoothScroll();

  const handleOpenEnquiry = (data = {}) => {
    setEnquiryInitialData(data);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryInitialData({});
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white w-full max-w-full overflow-x-hidden min-w-0 transition-colors duration-300">
      {/* 1. Top Navbar with Theme Toggle, Call & WhatsApp Actions */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0">
        {/* 2. Cinematic Hero with Video Background & Quick Actions */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. Compact overview of the main service categories (+ quick quote selector) */}
        <ServiceOverviewStrip onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Core IT & Security Services with ScrollTrigger */}
        <ServicesSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Featured Hardware Products & Real-time Filter */}
        <ProductsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Corporate Annual Maintenance (AMC) Plans */}
        <AmcSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 7. Why Choose Bhumi Technocare & Engineering Benchmarks */}
        <WhyChooseUsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. Verified Local Customer Testimonials */}
        <TestimonialsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Frequently Asked Questions (Accordion) */}
        <FaqSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 10a. WhatsApp Service Ticket Generator Engine */}
        <WhatsAppEnquirySection />

        {/* 10b. Workshop Location, Live Status & Direct Navigation */}
        <ContactSection onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* 11. Professional Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Floating Quick Action Contact Menu */}
      <FloatingWhatsApp onOpenEnquiry={handleOpenEnquiry} />

      {/* Pop-up Interactive WhatsApp Enquiry Modal */}
      <WhatsAppEnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={handleCloseEnquiry} 
        initialData={enquiryInitialData} 
      />
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
