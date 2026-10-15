import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight,
  Sun,
  Moon,
  MessageSquareQuote,
  PhoneCall
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BUSINESS_INFO } from '../data/websiteData';

export default function Navbar({ currentView, onNavigate, onRequestQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  // Scroll detection for backdrop blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/', id: 'home' },
    { name: 'Products & Solutions', href: '#/products', id: 'products' },
    { name: 'AMC & Maintenance', href: '#/amc', id: 'amc' },
    { name: 'About Us', href: '#/about', id: 'about' },
    { name: 'Contact', href: '#/contact', id: 'contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      window.location.hash = href;
    }
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onRequestQuote) {
      onRequestQuote({ service: 'General Enquiry & Quotation' });
    } else {
      handleLinkClick('#/contact');
    }
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full"
    >
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 shadow-sm py-2 sm:py-2.5' 
          : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3 sm:py-3.5'
      }`}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 min-w-0 w-full">
          
          {/* Official Full BHUMI TECHNOCARE Logo Image */}
          <a 
            href="#/" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#/'); }}
            className="flex items-center group flex-shrink-0"
            aria-label="BHUMI TECHNOCARE Home"
          >
            <img 
              src="/assets/enhanced/bhumi-full-logo-transparent.png" 
              alt="BHUMI TECHNOCARE" 
              className="h-[36px] sm:h-[42px] md:h-[48px] w-auto object-contain transition-all duration-200"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50/90 dark:bg-brand-950/70 font-semibold border border-brand-200/60 dark:border-brand-800/60'
                      : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action: Request a Quote CTA + Dark/Light Theme Toggle + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            {/* Prominent "Request a Quote" CTA Button (Desktop) */}
            <button
              onClick={handleQuoteClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-500 shadow-sm hover:shadow-brand-600/30 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <MessageSquareQuote className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Request a Quote</span>
            </button>

            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-1 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-3 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between cursor-pointer min-h-[44px] ${
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 font-semibold border border-brand-200/60 dark:border-brand-800/60'
                        : 'text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}

              {/* Mobile "Request a Quote" CTA Button */}
              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <button
                  onClick={handleQuoteClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-500 shadow-sm transition-all cursor-pointer min-h-[44px]"
                >
                  <MessageSquareQuote className="w-4 h-4" />
                  <span>Request a Quote</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct Hotline: +91 {BUSINESS_INFO.salesPhone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
