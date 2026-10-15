import React, { useRef } from 'react';
import { 
  Laptop, 
  Printer, 
  Video, 
  Network, 
  PhoneCall, 
  Cpu, 
  ArrowRight, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS_AND_SOLUTIONS, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeaturedCategories({ onViewAll }) {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.category-card-item',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const getCategoryIcon = (id) => {
    const iconProps = { className: "w-5 h-5 text-brand-600 dark:text-brand-400" };
    switch (id) {
      case 'computers-laptops': return <Laptop {...iconProps} />;
      case 'printer-solutions': return <Printer {...iconProps} />;
      case 'cctv-security': return <Video {...iconProps} />;
      case 'networking-connectivity': return <Network {...iconProps} />;
      case 'communication-display': return <PhoneCall {...iconProps} />;
      case 'it-software-solutions': return <Cpu {...iconProps} />;
      default: return <Laptop {...iconProps} />;
    }
  };

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-white dark:bg-slate-950 transition-colors border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            Core Technology Divisions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Products & Solutions
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Enterprise hardware sales, expert repair, on-site setup, and flexible rentals for businesses, offices, and factories.
          </p>
        </div>

        {/* 6 Combined Product & Solution Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PRODUCTS_AND_SOLUTIONS.map((cat) => {
            const whatsappMsg = `${cat.whatsappPrompt}. Please share available models and service options.`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={cat.id}
                className="category-card-item group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden hover:border-brand-500/50 dark:hover:border-brand-500/40 hover:shadow-lg dark:hover:shadow-black/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-xs">
                      {getCategoryIcon(cat.id)}
                    </div>
                    {cat.clientImage && (
                      <span className="absolute bottom-2.5 right-2.5 bg-emerald-600/95 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs">
                        Verified Photo
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    <div className="text-[11px] font-bold text-brand-600 dark:text-brand-400 mb-0.5 uppercase tracking-wider">
                      {cat.tagline}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Quick Hardware Highlights */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                      {cat.itemsIncluded.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 sm:p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-600 text-slate-800 hover:text-white dark:text-slate-200 dark:hover:text-white border border-slate-200/80 dark:border-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-2xs min-h-[40px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-500 group-hover:text-white" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Products & Solutions Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[44px]"
          >
            <span>Explore All Products & Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
