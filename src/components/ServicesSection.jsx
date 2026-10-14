import React, { useRef } from 'react';
import { 
  Laptop, 
  Network, 
  Video, 
  Printer, 
  Cpu, 
  Wrench, 
  CheckCircle2 
} from 'lucide-react';
import { SERVICES } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.service-card',
    y: 25,
    stagger: 0.08,
    duration: 0.55,
    start: 'top 85%'
  });

  const getServiceIcon = (iconName) => {
    const iconProps = { className: "w-6 h-6 text-brand-600 dark:text-brand-400" };
    switch (iconName) {
      case 'Laptop': return <Laptop {...iconProps} />;
      case 'Network': return <Network {...iconProps} />;
      case 'ShieldAlert':
      case 'Video': return <Video {...iconProps} />;
      case 'Printer': return <Printer {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Briefcase':
      case 'Wrench': return <Wrench {...iconProps} />;
      default: return <Laptop {...iconProps} />;
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Comprehensive IT & Hardware Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Professional diagnostic, repair, and installation services delivered with speed, transparency, and technical precision.
          </p>
        </div>

        {/* 6 Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="service-card rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-brand-500/50 hover:shadow-lg transition-all duration-200"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/80 flex items-center justify-center mb-5">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Key Points */}
                <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
