import React, { useEffect, useRef } from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.hero-title',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        '.hero-desc',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        '.hero-btn',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 },
        '-=0.3'
      )
      .fromTo(
        '.hero-meta',
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Simple Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 text-brand-700 dark:text-brand-300 border border-slate-300/80 dark:border-slate-700 text-xs font-semibold mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>BHUMI TECHNOCARE • KIM CHAR RASTA, SURAT</span>
        </div>

        {/* Clean, exact requested heading */}
        <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto leading-tight sm:leading-tight">
          IT Solutions, Hardware & Security Services
        </h1>

        {/* Short, clear description */}
        <p className="hero-desc mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Reliable computer and laptop chip-level repairs, high-definition CCTV security camera installations, structured networking, and commercial Annual Maintenance Contracts (AMC) for businesses and individuals across South Gujarat.
        </p>

        {/* Two CTAs: Primary "Contact Us", Secondary "Explore Services" */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <a
            href="#contact"
            className="hero-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md shadow-brand-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#services"
            className="hero-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs transition-all"
          >
            <span>Explore Services</span>
          </a>
        </div>

        {/* Short, subtle trust indicators */}
        <div className="hero-meta mt-10 sm:mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>12+ Years Local Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-500" />
            <span>Chip-Level Motherboard Diagnostics</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-sky-500" />
            <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="hover:text-slate-900 dark:hover:text-white font-medium">
              Direct Desk: {BUSINESS_INFO.displayPhone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
