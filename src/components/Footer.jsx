import React, { useRef } from 'react';
import { 
  Shield, 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  ChevronRight, 
  ArrowUp 
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Footer({ onOpenEnquiry }) {
  const footerRef = useRef(null);

  // Subtle reveal for footer columns
  useScrollReveal(footerRef, {
    selector: '.footer-col',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 92%'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 relative w-full max-w-full overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-12 sm:pt-16 pb-8 sm:pb-12 w-full min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 min-w-0">
          
          {/* Brand Info */}
          <div className="footer-col sm:col-span-2 space-y-3.5 min-w-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-black shadow-md shadow-brand-500/30 flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="min-w-0 truncate">
                <span className="text-lg font-black text-slate-900 dark:text-white">BHUMI</span>{' '}
                <span className="text-lg font-light text-brand-600 dark:text-brand-400">TECHNOCARE</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm word-break-safe">
              South Gujarat's premier center for certified laptop chip-level repair, 4K CCTV surveillance systems, printer maintenance, and corporate Annual Maintenance Contracts.
            </p>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
              <span className="text-slate-700 dark:text-slate-300 font-semibold">Note:</span> {BUSINESS_INFO.legalName}
            </div>

            <div className="pt-1">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition-all active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk (+91 9316440985)</span>
              </button>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="footer-col space-y-2.5 min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenEnquiry({ service: s.title })}
                    className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors flex items-center gap-1.5 text-left truncate w-full"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 flex-shrink-0" />
                    <span className="truncate">{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="footer-col space-y-2.5 min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#hero" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">Home & Overview</a></li>
              <li><a href="#services" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">All IT Services</a></li>
              <li><a href="#products" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">Hardware Deals</a></li>
              <li><a href="#amc" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">Corporate AMC Plans</a></li>
              <li><a href="#why-us" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#faq" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-600 dark:text-slate-400 transition-colors">Workshop & GPS</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col space-y-2.5 min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Store & Workshop
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2 word-break-safe">
                <MapPin className="w-3.5 h-3.5 text-accent-500 flex-shrink-0 mt-0.5" />
                <span>GF-11, Zam Zam Residency, NH-8, Kim Char Rasta, Kim, Surat - 394110</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-white font-medium truncate">
                  {BUSINESS_INFO.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="truncate">9:30 AM – 8:30 PM (Mon-Sat)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
          <div className="leading-relaxed">
            © {new Date().getFullYear()} <strong className="text-slate-800 dark:text-slate-300">BHUMI TECHNOCARE</strong>. All rights reserved. IT & Surveillance Solutions.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors py-1"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
