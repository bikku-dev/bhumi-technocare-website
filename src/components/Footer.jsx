import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Navigation,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Bhumi Technocare, I am contacting you from your website.'
  )}`;

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-6 sm:pb-8">
        
        {/* Main 2-Column Responsive Layout: Brand (Left) & Contact (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10">
          
          {/* A. Brand Area */}
          <div className="md:col-span-6 lg:col-span-7 space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/assets/enhanced/bhumi-logo-icon.png" 
                  alt="BHUMI TECHNOCARE Logo" 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-1.5 leading-tight">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white">
                  BHUMI
                </span>
                <span className="text-base sm:text-lg font-light tracking-wide text-brand-600 dark:text-brand-400">
                  TECHNOCARE
                </span>
              </div>
            </div>

            <div className="text-xs font-semibold text-brand-600 dark:text-brand-400 italic">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed word-break-safe">
              Your trusted partner for computer hardware, printing, security, and networking solutions.
            </p>
          </div>

          {/* B. Contact Area */}
          <div className="md:col-span-6 lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact Us
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {/* Address */}
              <li className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed break-words">
                  {BUSINESS_INFO.address}
                </span>
              </li>

              {/* Service Areas */}
              <li className="flex items-center gap-2.5 text-xs">
                <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Service areas:
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  Kim, Ankleshwar, Bharuch.
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <a 
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`} 
                  className="font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  +91 {BUSINESS_INFO.salesPhone}
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`} 
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors break-all sm:break-normal"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>

            {/* Compact Action Links: Get Directions & WhatsApp */}
            <div className="pt-1.5 flex flex-wrap items-center gap-2">
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/70 hover:bg-brand-50 dark:bg-slate-900 dark:hover:bg-brand-950/60 text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 text-xs font-semibold border border-slate-300/80 dark:border-slate-800 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span>Get Directions</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/60 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* C. Bottom Bar */}
        <div className="pt-5 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-center sm:text-left">
            <span>Copyright © 2026 BHUMI TECHNOCARE.</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="text-slate-600 dark:text-slate-400 font-medium">Kim | Ankleshwar | Bharuch</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform motion-reduce:transform-none" />
          </button>
        </div>

      </div>
    </footer>
  );
}
