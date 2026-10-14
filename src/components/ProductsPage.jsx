import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MessageSquare, 
  Package, 
  Laptop, 
  Printer, 
  Tag, 
  Copy, 
  Video, 
  PhoneCall, 
  Volume2, 
  Fingerprint, 
  Network, 
  Cable, 
  Cpu, 
  PackageCheck, 
  Barcode, 
  Monitor, 
  Projector, 
  HardDrive, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../data/websiteData';

export default function ProductsPage({ onBack }) {
  const [searchTerm, setSearchTerm] = useState('');

  const getProductIcon = (id) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400" };
    switch (id) {
      case 'prod-computers-laptops': return <Laptop {...iconProps} />;
      case 'prod-laser-printers': return <Printer {...iconProps} />;
      case 'prod-label-printers': return <Tag {...iconProps} />;
      case 'prod-xerox-machines': return <Copy {...iconProps} />;
      case 'prod-cctv-cameras': return <Video {...iconProps} />;
      case 'prod-telephone-systems': return <PhoneCall {...iconProps} />;
      case 'prod-sound-pa-systems': return <Volume2 {...iconProps} />;
      case 'prod-attendance-systems': return <Fingerprint {...iconProps} />;
      case 'prod-networking-equipment': return <Network {...iconProps} />;
      case 'prod-connectors-fiber-cables': return <Cable {...iconProps} />;
      case 'prod-computer-parts': return <Cpu {...iconProps} />;
      case 'prod-toner-cartridges': return <PackageCheck {...iconProps} />;
      case 'prod-labels-ribbons': return <Barcode {...iconProps} />;
      case 'prod-led-tv-monitors': return <Monitor {...iconProps} />;
      case 'prod-projectors-displays': return <Projector {...iconProps} />;
      case 'prod-data-backup-devices': return <HardDrive {...iconProps} />;
      case 'prod-door-locks': return <Lock {...iconProps} />;
      case 'prod-networking-security': return <ShieldCheck {...iconProps} />;
      default: return <Package {...iconProps} />;
    }
  };

  const filteredProducts = PRODUCT_CATEGORIES.filter((p) => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      p.tagline.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
  });

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
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Hardware Catalogue
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Complete Products Directory (18 Categories)
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Official hardware supply and rental options available through BHUMI TECHNOCARE. Inquire directly for real-time model availability and business pricing.
          </p>

          {/* Quick Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products (e.g. CCTV, Printer, Fiber, Laptop)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-2xs"
            />
          </div>
        </div>

        {/* 18 Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((prod) => {
            const whatsappMsg = `Hello Bhumi Technocare, I would like to check availability and pricing for "${prod.title}".`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={prod.id}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {prod.image ? (
                    <div className="relative h-36 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-2xs">
                        {getProductIcon(prod.id)}
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 pb-1 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 flex items-center justify-center">
                        {getProductIcon(prod.id)}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                        Category
                      </span>
                    </div>
                  )}

                  <div className="p-4 sm:p-5">
                    <div className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 mb-0.5">
                      {prod.tagline}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {prod.description}
                    </p>
                    <div className="mt-3 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {prod.availability}
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 text-slate-800 hover:text-white dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500 group-hover:text-white" />
                    <span>Inquire Availability & Quotation</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Stock & Specifications Notice: Product configurations, models, and rental terms are confirmed directly prior to supply. No unsupported prices or certifications are listed.
        </div>

      </div>
    </div>
  );
}
