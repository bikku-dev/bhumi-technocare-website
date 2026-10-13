import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Cpu, 
  Video, 
  CheckCircle2, 
  Wrench,
  Sparkles
} from 'lucide-react';
import HeroVideoBackground from './HeroVideoBackground';
import { BUSINESS_INFO } from '../data/websiteData';
import { gsap, prefersReducedMotion } from '../utils/gsapConfig';

export default function Hero({ onOpenEnquiry }) {
  const heroRef = useRef(null);

  // Cinematic GSAP entrance sequence
  useEffect(() => {
    if (prefersReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.15 }
      )
      .fromTo(
        '.hero-main-title',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(
        '.hero-subtext',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.4'
      )
      .fromTo(
        '.hero-action-btn',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
        '-=0.3'
      )
      .fromTo(
        '.hero-trust-tag',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      )
      .fromTo(
        '.hero-visual-container',
        { opacity: 0, scale: 0.96, x: 20 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8 },
        '-=0.6'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden w-full max-w-full"
    >
      {/* Cinematic Background Video & Fallback Layer */}
      <HeroVideoBackground />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Headline, Copy & Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left min-w-0">
            
            {/* Small Eyebrow Label */}
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/90 text-brand-400 dark:text-brand-300 border border-slate-700/60 dark:border-brand-500/30 text-xs font-bold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>IT HARDWARE • CCTV • TECHNICAL SUPPORT</span>
            </div>

            {/* Large, Elegant Headline */}
            <h1 
              className="hero-main-title font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]"
              style={{ fontSize: 'clamp(2.1rem, 4.8vw + 0.5rem, 4.25rem)' }}
            >
              Technology That Keeps{' '}
              <span className="bg-gradient-to-r from-brand-600 via-sky-500 to-accent-500 dark:from-brand-400 dark:via-sky-300 dark:to-accent-400 bg-clip-text text-transparent inline-block">
                Your Business
              </span>{' '}
              Moving.
            </h1>

            {/* Supporting Paragraph */}
            <p className="hero-subtext text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Explore enterprise IT hardware, chip-level computer diagnostics, 4K CCTV surveillance, and corporate maintenance contracts from <strong className="text-slate-900 dark:text-white">BHUMI TECHNOCARE</strong>.
            </p>

            {/* Two Primary Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => onOpenEnquiry()}
                className="hero-action-btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5 flex-shrink-0" />
                <span>Get a Service Quote</span>
              </button>

              <a
                href="#services"
                className="hero-action-btn inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white dark:bg-slate-900/90 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-800 transition-all shadow-sm hover:border-slate-300 dark:hover:border-slate-700"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-brand-500 dark:text-brand-400 flex-shrink-0" />
              </a>
            </div>

            {/* Trust Indicator with Verified Information */}
            <div className="hero-trust-tag pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Kim Char Rasta Hub • Since 2012</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>90-Day Written Repair Warranty</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Cinematic Technology Workspace Composition */}
          <div className="hero-visual-container lg:col-span-5 w-full min-w-0">
            <div className="relative rounded-3xl overflow-hidden p-2 sm:p-3 bg-gradient-to-br from-slate-200/50 via-slate-100/30 to-slate-200/50 dark:from-slate-800/60 dark:via-slate-900/40 dark:to-slate-800/60 border border-slate-200 dark:border-slate-700/80 shadow-2xl backdrop-blur-xl">
              
              {/* Inner Showcase Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1200&q=80"
                  alt="Bhumi Technocare Professional IT Laboratory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Floating Micro-Badge Top Left */}
                <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-xl px-3 py-1.5 text-xs text-white flex items-center gap-2 shadow-lg">
                  <Cpu className="w-3.5 h-3.5 text-brand-400" />
                  <span className="font-semibold text-[11px]">Precision Chip-Level Lab</span>
                </div>

                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3.5 text-white flex items-center justify-between gap-3 shadow-xl">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate flex items-center gap-1.5">
                      <span>CCTV & Hardware Engineering</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[11px] text-slate-300 truncate">
                      Surat, Kim, Ankleshwar & Bharuch Corridor
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry({ service: 'General Consultation' })}
                    className="flex-shrink-0 bg-brand-500 hover:bg-brand-400 text-slate-950 font-bold text-[11px] px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Quick Quote
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
