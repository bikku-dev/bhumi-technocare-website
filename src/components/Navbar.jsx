import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Shield, 
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { getQuickWhatsAppLink } from '../utils/whatsapp';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  // Initial load entrance animation
  useEffect(() => {
    if (prefersReducedMotion() || !headerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(
        '.nav-logo',
        { opacity: 0, x: -12 },
        { opacity: 1, x: 0, duration: 0.45 },
        '-=0.3'
      )
      .fromTo(
        '.nav-link-item',
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.04 },
        '-=0.25'
      )
      .fromTo(
        '.nav-action-btn',
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05 },
        '-=0.2'
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Scroll detection for backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'AMC Plans', href: '#amc' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full"
    >
      {/* Top Quick Info Bar */}
      <div className="bg-slate-100/90 dark:bg-slate-900/95 text-slate-700 dark:text-slate-300 text-xs border-b border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md transition-colors duration-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-1.5 sm:py-2 flex items-center justify-between gap-3 min-w-0">
          
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 truncate">
            <span className="flex items-center gap-1.5 text-brand-600 dark:text-brand-400 font-semibold truncate text-[11px] sm:text-xs">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate">Kim Char Rasta, NH-8, Surat</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs flex-shrink-0">
              <Clock className="w-3.5 h-3.5 text-brand-500" />
              Mon-Sat: 9:30 AM - 8:30 PM
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 flex-shrink-0 text-[11px] sm:text-xs">
            <a 
              href={`tel:${BUSINESS_INFO.whatsappNumber}`} 
              className="flex items-center gap-1 sm:gap-1.5 text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              title="Call Bhumi Technocare"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
              <span className="font-semibold">{BUSINESS_INFO.displayPhone}</span>
            </a>
            <a 
              href={getQuickWhatsAppLink('Website Support')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-500 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
              <span>WhatsApp Desk</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-black/5 dark:shadow-black/40 py-2.5 sm:py-3' 
          : 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/40 py-3 sm:py-4'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between gap-4 min-w-0">
          
          {/* Logo & Brand */}
          <a href="#hero" className="nav-logo flex items-center gap-2.5 sm:gap-3.5 group min-w-0 flex-shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-all border border-brand-400/30 flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:scale-105" />
            </div>
            <div className="min-w-0 truncate">
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  BHUMI
                </span>
                <span className="text-lg sm:text-2xl font-light tracking-wide text-brand-600 dark:text-brand-400">
                  TECHNOCARE
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 font-semibold hidden md:block truncate">
                IT Infrastructure • CCTV Systems • Chip Repairs
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link-item px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs Desktop: Theme Toggle + WhatsApp + Call */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="nav-action-btn p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-all"
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle dark/light theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={() => onOpenEnquiry()}
              className="nav-action-btn inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 sm:py-2.5 rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>WhatsApp Enquiry</span>
            </button>

            {/* Call Button */}
            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="nav-action-btn hidden xl:inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
              <span>Call</span>
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle + Compact Enquiry Pill + Hamburger */}
          <div className="flex items-center gap-2 sm:hidden flex-shrink-0">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-2.5 py-1.5 rounded-lg shadow-sm active:scale-95 transition-transform"
              aria-label="Instant WhatsApp Enquiry"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Quote</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 dark:bg-slate-950/98 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-600" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl shadow-md text-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start WhatsApp Service Ticket</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                  className="flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 py-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent-500" />
                  <span>Kim Location</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
