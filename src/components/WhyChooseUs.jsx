import React, { useRef } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  MapPin, 
  Clock, 
  Cpu, 
  Building2 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.why-card-item',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const strengths = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Honest Diagnostics First",
      description: "We inspect your equipment thoroughly and explain the actual issue before starting any repair. No unnecessary component replacements or surprise charges."
    },
    {
      icon: <Cpu className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: "Authentic Hardware Spares",
      description: "All replacement screens, batteries, SSD storage drives, and surveillance components are sourced through genuine manufacturer channels."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />,
      title: "Qualified Engineering Leadership",
      description: `Hands-on technical diagnostics and solution design led by ${BUSINESS_INFO.contactPerson} (${BUSINESS_INFO.designation}).`
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      title: "Prompt Local On-Site Dispatch",
      description: "Strategically located at Kim Char Rasta on NH-8, enabling quick on-site technician response across Kim, Ankleshwar, and Bharuch."
    },
    {
      icon: <Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      title: "Complete 3-Way Model: Sales, Service & Rent",
      description: "Procure brand-new hardware, service existing infrastructure, or rent computers and Xerox copiers under one trusted partner."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-white dark:bg-slate-950 transition-colors border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            Verifiable Business Strengths
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Why Choose BHUMI TECHNOCARE
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Built on transparent fault diagnostics, authentic spares, and dependable local on-site support across South Gujarat.
          </p>
        </div>

        {/* 5 Strengths Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className={`why-card-item rounded-2xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 shadow-2xs hover:border-brand-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center mb-4 shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Business Commitment</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
