import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Shield, 
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  // Entrance animation
  useEffect(() => {
    if (prefersReducedMotion() || !headerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headerRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(
        '.nav-item',
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.04 },
        '-=0.2'
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'AMC & Maintenance', href: '#amc' },
    { name: 'About Us', href: '#about' },
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
      {/* Main Navigation Bar - Clean, without top info bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-2.5 sm:py-3' 
          : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3 sm:py-4'
      }`}>
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 min-w-0 w-full">
          
          {/* Logo & Brand - Unchanged */}
          <a href="#home" className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-md shadow-brand-500/20 text-white flex-shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="truncate">
              <div className="flex items-center gap-1 leading-tight">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  BHUMI
                </span>
                <span className="text-base sm:text-lg font-light tracking-wide text-brand-600 dark:text-brand-400">
                  TECHNOCARE
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-item px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA: Theme Toggle only (Contact Us button removed) */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Right Actions: Theme Toggle + Hamburger Menu */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
