import React, { useRef } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  MapPin, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight,
  Laptop,
  Video,
  Printer,
  Network,
  HardDrive,
  Cpu
} from 'lucide-react';
import { AMC_CONSULTANCY_INFO, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AmcSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.amc-card',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const getAmcIcon = (index) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400" };
    switch (index) {
      case 0: return <Laptop {...iconProps} />;
      case 1: return <Video {...iconProps} />;
      case 2: return <Printer {...iconProps} />;
      case 3: return <Network {...iconProps} />;
      case 4: return <HardDrive {...iconProps} />;
      case 5: return <Cpu {...iconProps} />;
      default: return <Briefcase {...iconProps} />;
    }
  };

  const whatsappMsg = "Hello Bhumi Technocare, I would like to inquire about customized AMC & IT Consultancy for our business facility.";
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section 
      id="amc" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Commercial IT Maintenance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {AMC_CONSULTANCY_INFO.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {AMC_CONSULTANCY_INFO.tagline}
          </p>

          {/* Service Area Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
            <MapPin className="w-3.5 h-3.5 text-brand-500" />
            <span>Dedicated On-Site Support: <strong>Kim • Ankleshwar • Bharuch</strong></span>
          </div>
        </div>

        {/* Overview Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {AMC_CONSULTANCY_INFO.overview}
          </p>
        </div>

        {/* 6 Key AMC Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMC_CONSULTANCY_INFO.servicesIncluded.map((service, idx) => (
            <div
              key={idx}
              className="amc-card rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between hover:border-brand-500/50 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 shadow-2xs">
                  {getAmcIcon(idx)}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {service}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Included in Contract</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customized Contract Action */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-50 to-slate-50 dark:from-slate-900 dark:to-slate-900/80 border border-brand-200/80 dark:border-brand-800/60 text-center max-w-3xl mx-auto shadow-xs">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Need a Customized AMC for Your Office or Plant?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            {AMC_CONSULTANCY_INFO.disclaimer}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire AMC on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.salesPhone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 shadow-2xs transition-all"
            >
              <span>Call: {BUSINESS_INFO.displayPhone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
