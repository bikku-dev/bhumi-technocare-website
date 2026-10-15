import React, { useRef } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  MapPin, 
  Cpu, 
  Video, 
  Printer, 
  Network,
  Fingerprint,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onExploreProducts }) {
  const heroRef = useRef(null);

  useScrollReveal(heroRef, {
    selector: '.hero-reveal',
    y: 18,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 95%'
  });

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Bhumi Technocare, I would like to consult with an expert regarding IT solutions and hardware for our business.`
  )}`;

  const quickPillars = [
    {
      icon: <Video className="w-3.5 h-3.5 text-brand-500" />,
      title: "CCTV & Security",
      subtitle: "HD ColorVu & Mobile Sync"
    },
    {
      icon: <Cpu className="w-3.5 h-3.5 text-emerald-500" />,
      title: "Computers & Laptops",
      subtitle: "Chip Diagnostics & Upgrades"
    },
    {
      icon: <Network className="w-3.5 h-3.5 text-sky-500" />,
      title: "Networking & Fiber",
      subtitle: "Cat6 LAN & Optical Splicing"
    },
    {
      icon: <Printer className="w-3.5 h-3.5 text-amber-500" />,
      title: "Laser Printers",
      subtitle: "Sales, Spares & Toner Refills"
    },
    {
      icon: <Fingerprint className="w-3.5 h-3.5 text-purple-500" />,
      title: "Biometrics & Access",
      subtitle: "Attendance & Door Locks"
    },
    {
      icon: <Briefcase className="w-3.5 h-3.5 text-teal-500" />,
      title: "AMC & Maintenance",
      subtitle: "Preventive Care & Priority Dispatch"
    }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-200 overflow-hidden text-center"
    >
      {/* Animated Glowing Ambient Light Mesh */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[750px] h-[340px] sm:h-[400px] bg-gradient-to-tr from-brand-500/15 via-emerald-500/10 to-sky-500/15 blur-[90px] sm:blur-[120px] pointer-events-none rounded-full animate-pulse-subtle" />
      <div className="absolute -top-20 left-1/4 w-64 h-64 bg-brand-500/10 blur-[80px] pointer-events-none rounded-full animate-float-slow" />
      <div className="absolute top-28 right-1/4 w-64 h-64 bg-emerald-500/10 blur-[80px] pointer-events-none rounded-full animate-float-reverse" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          
          {/* Top Business Status Pill */}
          <div className="hero-reveal inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-brand-700 dark:text-brand-300 border border-brand-200/80 dark:border-brand-800/80 text-xs font-semibold shadow-2xs backdrop-blur-md transition-all hover:scale-105 duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="truncate">BHUMI TECHNOCARE • &ldquo;{BUSINESS_INFO.tagline}&rdquo;</span>
          </div>

          {/* Suggested Headline with Animated Gradient Shimmer */}
          <h1 className="hero-reveal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Complete IT Solutions for <br className="hidden sm:inline" />
            <span className="shimmer-text">Modern Businesses</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-reveal text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Computer sales, hardware support, CCTV security, printing solutions and business networking — all from one trusted technology partner. Led by Computer Engineer Bharat Chaudhary.
          </p>

          {/* 3 Quick Verifiable Service Badges */}
          <div className="hero-reveal flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 pt-1">
            <div className="flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-brand-500/40 transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Sales, Service & Rent</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-brand-500/40 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>Kim • Ankleshwar • Bharuch</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-brand-500/40 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
              <span>Direct Engineering Oversight</span>
            </div>
          </div>

          {/* Dual CTAs: Primary "Explore Our Solutions" + Secondary "Talk to Our Expert" */}
          <div className="hero-reveal pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#/products"
              onClick={(e) => {
                if (onExploreProducts) {
                  e.preventDefault();
                  onExploreProducts();
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl shadow-md hover:shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[44px] group"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-md hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Talk to Our Expert</span>
            </a>
          </div>

          {/* Compact Interactive Technology Pillars Ribbon (Seamless Dark/Light Mode) */}
          <div className="hero-reveal pt-5 sm:pt-6">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
              {quickPillars.map((item, idx) => (
                <a
                  key={idx}
                  href="#/products"
                  onClick={(e) => {
                    if (onExploreProducts) {
                      e.preventDefault();
                      onExploreProducts();
                    }
                  }}
                  className="group inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-brand-500/60 dark:hover:border-brand-500/60 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-left"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {item.title}
                    </span>
                    <span className="hidden md:inline text-[11px] text-slate-500 dark:text-slate-400 ml-1.5 border-l border-slate-200 dark:border-slate-700 pl-1.5">
                      {item.subtitle}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Dispatch Indicator */}
            <div className="mt-3.5 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
              <span>Prompt On-Site Dispatch: <strong>11, Zam Zam Complex, Kim Char Rasta (NH-8)</strong></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
