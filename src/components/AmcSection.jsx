import React, { useRef } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { AMC_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AmcSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.amc-benefit-card',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  return (
    <section 
      id="amc" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Business IT Support
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {AMC_INFO.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {AMC_INFO.tagline}
          </p>
        </div>

        {/* Overview Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed text-center">
            {AMC_INFO.description}
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AMC_INFO.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="amc-benefit-card rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-start hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/80 flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* SLA & Quick Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md shadow-brand-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Inquire About Corporate AMC Plans</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
