import React, { useRef } from 'react';
import { 
  ClipboardCheck, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function OurProcess({ onRequestQuote }) {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.process-step-item',
    y: 20,
    stagger: 0.1,
    duration: 0.55,
    start: 'top 85%'
  });

  const steps = [
    {
      step: "01",
      icon: <ClipboardCheck className="w-5 h-5 text-brand-600 dark:text-brand-400" />,
      title: "Understand Requirements",
      subtitle: "On-Site Audit & Diagnostic",
      description: "We conduct a thorough technical inspection of your business premises, diagnosing hardware faults, network cabling bottlenecks, or surveillance blind spots across Kim, Ankleshwar, and Bharuch.",
      highlight: "Free initial assessment & honest fault diagnosis"
    },
    {
      step: "02",
      icon: <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Recommend Solutions",
      subtitle: "Transparent Specs & Itemized Quote",
      description: "You receive an itemized, vendor-direct proposal specifying genuine OEM hardware, chip-level repair options, flexible rental fleets, or customized AMC agreements without hidden markups.",
      highlight: "Engineered by Computer Engineer Bharat Chaudhary"
    },
    {
      step: "03",
      icon: <Wrench className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      title: "Turnkey Implementation",
      subtitle: "Clean Cabling, Setup & Mobile Sync",
      description: "Our engineers execute neat structured Cat6/fiber cabling, rack mounting, CCTV camera positioning, biometric user registration, and mobile app sync with zero disruption to daily business.",
      highlight: "Strict testing before handover"
    },
    {
      step: "04",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: "Ongoing Support & AMC",
      subtitle: "Scheduled Maintenance & Fast Dispatch",
      description: "Stay worry-free with scheduled preventive servicing, toner replenishments, accounting data backups, and emergency local technician dispatch from our Kim Char Rasta workshop.",
      highlight: "Same-day on-site response corridor"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-slate-50/70 dark:bg-slate-900/40 transition-colors border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            How We Deliver
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Our 4-Step Engineering Process
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            From initial site evaluation to long-term preventive maintenance, here is how Bhumi Technocare ensures seamless IT infrastructure for South Gujarat businesses.
          </p>
        </div>

        {/* 4-Step Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="process-step-item group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-2xs hover:border-brand-500/50 dark:hover:border-brand-500/40 hover:shadow-lg dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Header: Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-50 dark:group-hover:bg-brand-950/60 transition-all">
                    {item.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-200 dark:text-slate-800 group-hover:text-brand-600/30 dark:group-hover:text-brand-400/30 transition-colors font-mono">
                    {item.step}
                  </span>
                </div>

                {/* Subtitle / Tag */}
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1 mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Pill */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{item.highlight}</span>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Need immediate technician assistance or a tailored project quote?
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Direct engineer hotline: +91 {BUSINESS_INFO.salesPhone} (Kim Char Rasta dispatch)
              </div>
            </div>
          </div>

          <button
            onClick={() => onRequestQuote && onRequestQuote({ service: 'On-Site Requirement Consultation' })}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl text-white bg-brand-600 hover:bg-brand-500 shadow-sm transition-all cursor-pointer flex-shrink-0"
          >
            <span>Book Technical Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
