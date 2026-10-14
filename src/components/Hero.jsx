import React, { useRef } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onExploreServices }) {
  const heroRef = useRef(null);

  useScrollReveal(heroRef, {
    selector: '.hero-item',
    y: 16,
    stagger: 0.1,
    duration: 0.6,
    start: 'top 95%'
  });

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Bhumi Technocare, I am contacting you from your website regarding IT hardware and services.`
  )}`;

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-10 sm:pb-12 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 text-center"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          
          {/* Business Badge */}
          <div className="hero-item inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>BHUMI TECHNOCARE • &ldquo;{BUSINESS_INFO.tagline}&rdquo;</span>
          </div>

          {/* Short, professional headline */}
          <h1 className="hero-item text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            IT Solutions, Hardware & Security Services
          </h1>

          {/* One concise supporting description */}
          <p className="hero-item text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sales, Service & Rent for computers, CCTV surveillance, laser printers, and optical fiber networking across Kim, Ankleshwar, and Bharuch. Led by Computer Engineer Bharat Chaudhary.
          </p>

          {/* Two clean CTAs: Primary "Explore Services", Secondary "Contact on WhatsApp" */}
          <div className="hero-item pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services"
              onClick={(e) => {
                if (onExploreServices) {
                  e.preventDefault();
                  onExploreServices();
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
