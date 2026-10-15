import React, { useRef } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  MapPin, 
  Cpu, 
  Building2,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhyChooseUs({ onRequestQuote }) {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.why-reveal-item',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const strengths = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Honest Diagnostics First",
      description: "We inspect equipment thoroughly and explain the actual root cause before starting any repair. No unnecessary component replacements, no hidden markups."
    },
    {
      icon: <Cpu className="w-5 h-5 text-brand-600 dark:text-brand-400" />,
      title: "Authentic Multi-Brand Spares",
      description: "All replacement laptop displays, batteries, solid-state drives (SSDs), and surveillance hard drives are procured through authentic OEM channels."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      title: "Direct Engineering Leadership",
      description: `Hands-on technical diagnostics and solution design led directly by ${BUSINESS_INFO.contactPerson} (${BUSINESS_INFO.designation}).`
    },
    {
      icon: <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Kim Char Rasta Strategic Dispatch",
      description: "Located on NH-8 at 11, Zam Zam Complex, ensuring rapid on-site technician response across Kim, Ankleshwar GIDC, and Bharuch commercial corridors."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-slate-50/70 dark:bg-slate-900/40 transition-colors border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Left Profile & Visual Card, Right Strengths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (5 cols on lg): Verified Credentials & Official Visiting Card */}
          <div className="lg:col-span-5 space-y-6 why-reveal-item">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
                Verifiable Reliability
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                Why Enterprises Trust BHUMI TECHNOCARE
              </h2>
              <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded on engineering accountability, genuine hardware sourcing, and transparent fault evaluation. Serving South Gujarat's businesses with pride.
              </p>
            </div>

            {/* Official Visiting Card Visual */}
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group">
              <img 
                src="/assets/enhanced/bhumi-visiting-card-horizontal.jpg" 
                alt="BHUMI TECHNOCARE Visiting Card - Bharat Chaudhary"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-3.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {BUSINESS_INFO.contactPerson} ({BUSINESS_INFO.designation})
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    BHUMI TECHNOCARE • {BUSINESS_INFO.tagline}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg">
                  Direct Line
                </span>
              </div>
            </div>

            {/* 3-Way Model Summary */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Complete 3-Way Business Model
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Sales (New Hardware) • Service (Chip-Level Repair) • Rent (Copiers & Laptops)
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols on lg): 4 Verifiable Strengths */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((item, idx) => (
                <div
                  key={idx}
                  className="why-reveal-item p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-brand-500/50 hover:shadow-md dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 flex items-center justify-center mb-3.5">
                      {item.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Verified Commitment</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Callout */}
            <div className="why-reveal-item p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <div className="text-xs sm:text-sm font-bold">
                  Looking for honest advice before purchasing or repairing?
                </div>
                <div className="text-[11px] text-brand-100">
                  Speak directly with Bharat Chaudhary at our Kim Char Rasta workshop.
                </div>
              </div>

              <button
                onClick={() => onRequestQuote && onRequestQuote({ service: 'Hardware Consultation with Bharat Chaudhary' })}
                className="px-4 py-2 rounded-xl bg-white text-brand-700 hover:bg-brand-50 text-xs font-bold shadow-xs transition-all cursor-pointer flex-shrink-0 flex items-center gap-1.5"
              >
                <span>Consult Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
