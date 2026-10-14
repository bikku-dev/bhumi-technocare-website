import React, { useRef } from 'react';
import { 
  Laptop, 
  Printer, 
  Video, 
  Network, 
  Cable, 
  Fingerprint, 
  PhoneCall,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { FEATURED_PRODUCTS, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeaturedProducts({ onViewAll }) {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.product-card-item',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const getProductIcon = (id) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400" };
    switch (id) {
      case 'prod-computers-laptops': return <Laptop {...iconProps} />;
      case 'prod-laser-printers': return <Printer {...iconProps} />;
      case 'prod-cctv-cameras': return <Video {...iconProps} />;
      case 'prod-networking-equipment': return <Network {...iconProps} />;
      case 'prod-connectors-fiber-cables': return <Cable {...iconProps} />;
      case 'prod-attendance-systems': return <Fingerprint {...iconProps} />;
      case 'prod-telephone-systems': return <PhoneCall {...iconProps} />;
      default: return <Laptop {...iconProps} />;
    }
  };

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 transition-colors border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Featured Hardware
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            IT Hardware & Security Products
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Commercial surveillance cameras, multi-function printers, networking cabling, and biometrics.
          </p>
        </div>

        {/* Exactly 6 Compact Featured Product Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURED_PRODUCTS.map((prod) => {
            const whatsappMsg = `Hello Bhumi Technocare, I would like to check availability and pricing for "${prod.title}".`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={prod.id}
                className="product-card-item group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Relevant Client-Provided Image Banner */}
                  <div className="relative h-36 sm:h-40 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {prod.image ? (
                      <img
                        src={prod.image}
                        alt={prod.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                        {getProductIcon(prod.id)}
                      </div>
                    )}
                    <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-2xs">
                      {getProductIcon(prod.id)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <div className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 mb-0.5">
                      {prod.tagline}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {prod.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {prod.description}
                    </p>
                    <div className="mt-2.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                      {prod.availability}
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 text-slate-800 hover:text-white dark:text-slate-200 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500 group-hover:text-white" />
                    <span>Inquire Availability</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* One Clear "Explore All Products" Button Below Cards */}
        <div className="mt-10 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
