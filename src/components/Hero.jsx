import React, { useRef } from 'react';
import { 
  ArrowRight, 
  MessageSquareQuote, 
  ShieldCheck, 
  MapPin, 
  Cpu, 
  Video, 
  Printer, 
  Network,
  Fingerprint,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onExploreProducts, onRequestQuote }) {
  const heroRef = useRef(null);

  useScrollReveal(heroRef, {
    selector: '.hero-reveal',
    y: 20,
    stagger: 0.08,
    duration: 0.55,
    start: 'top 95%'
  });

  const handleQuoteClick = () => {
    if (onRequestQuote) {
      onRequestQuote({ service: 'Complete IT Hardware & Infrastructure Solution' });
    } else {
      const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
        `Hello Bhumi Technocare, I would like to request a quote for IT solutions and hardware for our business.`
      )}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const quickPillars = [
    {
      icon: <Video className="w-3.5 h-3.5 text-brand-500" />,
      title: "CCTV & Security",
      detail: "ColorVu & Mobile View"
    },
    {
      icon: <Cpu className="w-3.5 h-3.5 text-emerald-500" />,
      title: "Computers & Laptops",
      detail: "Chip Repair & Upgrades"
    },
    {
      icon: <Network className="w-3.5 h-3.5 text-sky-500" />,
      title: "Networking & Fiber",
      detail: "Cat6 & Fiber Splicing"
    },
    {
      icon: <Printer className="w-3.5 h-3.5 text-amber-500" />,
      title: "Laser Printers",
      detail: "Sales, Spares & Toners"
    },
    {
      icon: <Fingerprint className="w-3.5 h-3.5 text-purple-500" />,
      title: "Biometrics & Locks",
      detail: "Attendance & Access"
    },
    {
      icon: <Briefcase className="w-3.5 h-3.5 text-teal-500" />,
      title: "Corporate AMC",
      detail: "Priority Dispatch"
    }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 bg-gradient-to-b from-slate-50 via-white to-slate-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200 overflow-hidden"
    >
      {/* Subtle Ambient Tech Glows */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[380px] sm:w-[650px] lg:w-[800px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-brand-500/12 via-sky-500/10 to-emerald-500/10 blur-[100px] pointer-events-none rounded-full animate-pulse-subtle" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-brand-600/10 blur-[90px] pointer-events-none rounded-full animate-float-slow" />

      {/* Subtle Grid Pattern Overlay for High-Tech Feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Split Layout: Left Content & Right High-Tech Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Editorial Typography & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Top Enterprise Badge */}
            <div className="hero-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-brand-800/80 text-xs font-semibold shadow-2xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="font-bold tracking-tight">BHUMI TECHNOCARE</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="font-medium text-slate-600 dark:text-slate-300">&ldquo;{BUSINESS_INFO.tagline}&rdquo;</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-reveal text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Complete IT Solutions for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-sky-600 to-brand-500 dark:from-brand-400 dark:via-sky-300 dark:to-brand-300">
                Modern Businesses
              </span>
            </h1>

            {/* Verifiable Value Proposition */}
            <p className="hero-reveal text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Computer hardware sales, chip-level diagnostics, high-definition CCTV security, laser printing solutions, and enterprise fiber networking — tailored for manufacturing plants, offices, and trading enterprises across South Gujarat.
            </p>

            {/* 3 Quick Verifiable Strengths */}
            <div className="hero-reveal flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span>Sales, Service & Rent</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                <span>Kim • Ankleshwar • Bharuch</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                <span>Led by Computer Engineer Bharat Chaudhary</span>
              </div>
            </div>

            {/* Dual CTAs: Explore Our Solutions + Request a Quote */}
            <div className="hero-reveal pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[46px] group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleQuoteClick}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[46px]"
              >
                <MessageSquareQuote className="w-4 h-4 text-brand-400 dark:text-brand-600" />
                <span>Request a Quote</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-End Hardware Visual Composition (5 cols on lg) */}
          <div className="lg:col-span-5 relative hero-reveal">
            
            {/* Visual Container Card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 p-3 sm:p-4 border border-slate-200/80 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden">
              
              {/* Primary Visual: Desktop & IT Infrastructure */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-200/50 dark:border-slate-800 group">
                <img 
                  src="/assets/catalog/product-desktop-laptop-computers.jpg" 
                  alt="Bhumi Technocare IT Hardware & Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                
                {/* Gradient vignette for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Top Badge inside main image */}
                <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>Enterprise IT & Hardware</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold leading-tight">
                    Multi-Brand Sales, Chip-Level Repair & Rental Fleets
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium mt-0.5 flex items-center gap-1.5">
                    <span>HP • Dell • Acer • Intel • Lenovo</span>
                  </div>
                </div>
              </div>

              {/* 2 Floating Overlapping Spec Cards (Asymmetric Tech Showcase) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-3">
                
                {/* Spec Card 1: CCTV Surveillance */}
                <div className="rounded-xl p-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs hover:border-brand-500/40 transition-colors">
                  <img 
                    src="/assets/enhanced/service-cctv-dome-camera.jpg" 
                    alt="CCTV Surveillance"
                    className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-200/60 dark:border-slate-700/60"
                  />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                      CCTV Surveillance
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium truncate">
                      4K ColorVu & Mobile Sync
                    </div>
                  </div>
                </div>

                {/* Spec Card 2: Laser Printers */}
                <div className="rounded-xl p-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 flex items-center gap-2.5 shadow-2xs hover:border-brand-500/40 transition-colors">
                  <img 
                    src="/assets/enhanced/product-hp-laserjet-m126a.jpg" 
                    alt="Laser Printers & Supplies"
                    className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-200/60 dark:border-slate-700/60"
                  />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                      Laser Printers
                    </div>
                    <div className="text-[10px] text-amber-600 dark:text-amber-400 font-medium truncate">
                      Sales, Spares & Toners
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Verified Hardware Stamp */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Genuine OEM Spares</span>
                </span>
                <span className="text-[10px] font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/70 px-2 py-0.5 rounded-md">
                  Kim Char Rasta Workshop
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Horizontal Quick-Pillars Ribbon */}
        <div className="hero-reveal mt-12 sm:mt-14 pt-6 border-t border-slate-200/70 dark:border-slate-800/80">
          <div className="text-center sm:text-left mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Core Capabilities At A Glance:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {quickPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 flex items-center gap-2 hover:border-brand-500/50 dark:hover:border-brand-500/50 hover:bg-slate-50 dark:hover:bg-slate-850 transition-all duration-200 shadow-2xs group"
              >
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform flex-shrink-0">
                  {pillar.icon}
                </div>
                <div className="min-w-0 text-left">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    {pillar.title}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {pillar.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
