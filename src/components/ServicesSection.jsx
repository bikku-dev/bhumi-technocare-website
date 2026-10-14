import React, { useState, useRef } from 'react';
import { 
  Laptop, 
  Printer, 
  Tag, 
  Copy, 
  FileText, 
  Barcode, 
  Cpu, 
  PackageCheck, 
  Video, 
  PhoneCall, 
  Volume2, 
  Fingerprint, 
  Wifi, 
  Server, 
  Cable, 
  Lock, 
  Plug, 
  Network, 
  ShieldCheck, 
  Calculator, 
  Monitor, 
  HardDrive, 
  Projector, 
  Briefcase,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { ALL_SERVICES, SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.service-card',
    y: 20,
    stagger: 0.05,
    duration: 0.45,
    start: 'top 88%'
  });

  const getServiceIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0" };
    switch (iconName) {
      case 'Laptop': return <Laptop {...iconProps} />;
      case 'Printer': return <Printer {...iconProps} />;
      case 'Tag': return <Tag {...iconProps} />;
      case 'Copy': return <Copy {...iconProps} />;
      case 'FileText': return <FileText {...iconProps} />;
      case 'Barcode': return <Barcode {...iconProps} />;
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'PackageCheck': return <PackageCheck {...iconProps} />;
      case 'Video': return <Video {...iconProps} />;
      case 'PhoneCall': return <PhoneCall {...iconProps} />;
      case 'Volume2': return <Volume2 {...iconProps} />;
      case 'Fingerprint': return <Fingerprint {...iconProps} />;
      case 'Wifi': return <Wifi {...iconProps} />;
      case 'Server': return <Server {...iconProps} />;
      case 'Cable': return <Cable {...iconProps} />;
      case 'Lock': return <Lock {...iconProps} />;
      case 'Plug': return <Plug {...iconProps} />;
      case 'Network': return <Network {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      case 'Calculator': return <Calculator {...iconProps} />;
      case 'Monitor': return <Monitor {...iconProps} />;
      case 'HardDrive': return <HardDrive {...iconProps} />;
      case 'Projector': return <Projector {...iconProps} />;
      case 'Briefcase': return <Briefcase {...iconProps} />;
      default: return <Laptop {...iconProps} />;
    }
  };

  const filteredServices = activeCategory === 'All' 
    ? ALL_SERVICES 
    : ALL_SERVICES.filter(s => s.category === activeCategory);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return ALL_SERVICES.length;
    return ALL_SERVICES.filter(s => s.category === cat).length;
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>24 Verified Service Offerings</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Complete IT, Security & Hardware Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            From chip-level computer repairs to turnkey CCTV security and fiber-optic networking, BHUMI TECHNOCARE supports commercial enterprises, factories, and residences across Kim, Ankleshwar, and Bharuch.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25 ring-2 ring-brand-600 ring-offset-2 dark:ring-offset-slate-950'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-md font-bold ${
                  isSelected 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {getCategoryCount(cat)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredServices.map((service) => {
            const whatsappMsg = `Hello Bhumi Technocare, I would like to enquire about your ${service.title} service.`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={service.id}
                className="service-card group rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-500/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner if client asset exists */}
                  {service.image ? (
                    <div className="relative h-36 overflow-hidden bg-slate-200 dark:bg-slate-800 border-b border-slate-200/80 dark:border-slate-800">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-xs">
                        {getServiceIcon(service.icon)}
                      </div>
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-600 text-white shadow-xs">
                        Verified Photo
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 pb-0 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/80 flex items-center justify-center shadow-xs">
                        {getServiceIcon(service.icon)}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-slate-800/80">
                        {service.category.split(' ')[0]}
                      </span>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0 mt-auto">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Enquire Service</span>
                    <ArrowRight className="w-3 h-3 ml-0.5 opacity-60" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
