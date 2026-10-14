import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MessageSquare, 
  ArrowRight,
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
  Briefcase
} from 'lucide-react';
import { ALL_SERVICES, SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/websiteData';

export default function ServicesPage({ onBack }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const getServiceIcon = (iconName) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400" };
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
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-slate-50/60 dark:bg-slate-950 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="mb-8 sm:mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Complete Directory
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            All 24 IT, Security & Hardware Services
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Organized by category according to our verified service catalogue. Serving Kim, Ankleshwar, and Bharuch.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-bold ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {getCategoryCount(cat)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Compact Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredServices.map((service) => {
            const whatsappMsg = `Hello Bhumi Technocare, I would like to enquire about your ${service.title} service.`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-brand-500/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {service.image ? (
                    <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-2xs">
                        {getServiceIcon(service.icon)}
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 pb-1 flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 flex items-center justify-center">
                        {getServiceIcon(service.icon)}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                        {service.category.split(' ')[0]}
                      </span>
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 px-2.5 rounded-lg bg-slate-50 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/30 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 text-[11px] font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Reminder */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-xl mx-auto shadow-2xs">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            Need On-Site Technician Assistance?
          </h4>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
            We provide prompt technician visits across Kim, Ankleshwar, and Bharuch.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
            >
              <span>Back to Home</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
