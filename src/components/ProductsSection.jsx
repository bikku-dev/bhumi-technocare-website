import React, { useState, useRef } from 'react';
import { 
  Package, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  Info,
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
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { PRODUCT_CATEGORIES, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProductsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.product-card',
    y: 20,
    stagger: 0.05,
    duration: 0.45,
    start: 'top 88%'
  });

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
    <section 
      id="products" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>18 Product Categories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hardware & Technology Product Catalogue
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Browse our full catalogue of commercial computing, security surveillance, optical networking, and office automation products. Inquire directly for current availability and official quotations.
          </p>

          {/* Quick Search */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products (e.g. CCTV, Printer, Fiber, Laptop)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-xs"
            />
          </div>
        </div>

        {/* 18 Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const whatsappMsg = `Hello Bhumi Technocare, I would like to check availability and pricing for "${prod.title}".`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={prod.id}
                className="product-card group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Image or Clean Icon Header */}
                  {prod.image ? (
                    <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-200/80 dark:border-slate-800">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-2.5 left-2.5 w-9 h-9 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-xs">
                        {getProductIcon(prod.id)}
                      </div>
                      {prod.clientImage && (
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-600 text-white shadow-xs">
                          Client Photo
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-5 pb-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/80 flex items-center justify-center shadow-xs">
                        {getProductIcon(prod.id)}
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">
                        Catalogue Item
                      </span>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 mb-1">
                      {prod.tagline}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Availability Status */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <Info className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{prod.availability}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 text-slate-800 hover:text-white dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500 group-hover/btn:text-white transition-colors" />
                    <span>Ask About Availability & Pricing</span>
                    <ArrowRight className="w-3 h-3 ml-0.5 opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing & Stock Note */}
        <div className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Notice: Product specifications and real-time inventory vary by manufacturer availability. All prices and warranties are confirmed directly prior to dispatch or installation.
        </div>

      </div>
    </section>
  );
}
