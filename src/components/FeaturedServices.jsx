import React, { useRef } from 'react';
import { 
  Laptop, 
  Printer, 
  Video, 
  PhoneCall, 
  Fingerprint, 
  Network, 
  Cable, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { FEATURED_SERVICES, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeaturedServices({ onExploreAll }) {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.service-card-item',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const getServiceIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400" };
    switch (iconName) {
      case 'Laptop': return <Laptop {...iconProps} />;
      case 'Printer': return <Printer {...iconProps} />;
      case 'Video': return <Video {...iconProps} />;
      case 'PhoneCall': return <PhoneCall {...iconProps} />;
      case 'Fingerprint': return <Fingerprint {...iconProps} />;
      case 'Network': return <Network {...iconProps} />;
      case 'Cable': return <Cable {...iconProps} />;
      default: return <Laptop {...iconProps} />;
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-12 sm:py-16 bg-white dark:bg-slate-950 transition-colors border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Featured Solutions
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Core IT & Security Services
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Specialized hardware diagnostics, turnkey surveillance systems, and fiber connectivity.
          </p>
        </div>

        {/* Exactly 6 Compact Featured Service Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURED_SERVICES.map((service) => {
            const whatsappMsg = `Hello Bhumi Technocare, I would like to enquire about your ${service.title} service.`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={service.id}
                className="service-card-item group rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Relevant Client-Provided Image Banner */}
                  <div className="relative h-36 sm:h-40 overflow-hidden bg-slate-200 dark:bg-slate-800">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                        {getServiceIcon(service.icon)}
                      </div>
                    )}
                    <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-2xs">
                      {getServiceIcon(service.icon)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Quick WhatsApp Action */}
                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Quick Enquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* One Clear "Explore All Services" Button Below Cards */}
        <div className="mt-10 text-center">
          <button
            onClick={onExploreAll}
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
