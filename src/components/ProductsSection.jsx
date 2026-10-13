import React, { useState, useRef, useEffect } from 'react';
import { 
  ShoppingBag, 
  ShieldCheck, 
  MessageSquare, 
  ExternalLink, 
  Search, 
  CheckCircle2 
} from 'lucide-react';
import { PRODUCTS } from '../data/websiteData';
import { getQuickWhatsAppLink } from '../utils/whatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ScrollTrigger } from '../utils/gsapConfig';

export default function ProductsSection({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef(null);

  const categories = [
    'All', 
    'Laptops & Desktops', 
    'CCTV & Security', 
    'Printers & Supplies', 
    'Accessories & Peripherals', 
    'Networking & UPS'
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Staggered reveal for product cards
  useScrollReveal(sectionRef, {
    selector: '.product-card',
    y: 30,
    stagger: 0.08,
    duration: 0.6,
    start: 'top 85%'
  });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [selectedCategory, searchQuery]);

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/60 relative border-t border-slate-200 dark:border-slate-800 w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Tested & Quality-Inspected Hardware</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Featured Products & Hardware Deals
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Get certified business laptops, enterprise desktop setups, CCTV packages, and original printer consumables with local Kim workshop warranty.
          </p>

          {/* Search and Filters */}
          <div className="pt-2 sm:pt-4 flex flex-col items-center justify-center gap-3 w-full">
            <div className="relative w-full max-w-sm">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search laptops, CCTV, SSD..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700/80 rounded-xl pl-10 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl transition-all font-medium ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white/60 dark:bg-slate-950/40 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">No hardware matches your search "{searchQuery}".</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 text-xs text-brand-600 dark:text-brand-400 hover:underline"
            >
              Clear filters and view all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="product-card group rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl dark:hover:shadow-black/50 hover:-translate-y-1.5 min-w-0"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75" />
                    
                    {/* Tag badge */}
                    <span className="absolute top-2.5 left-2.5 bg-slate-950/90 backdrop-blur-md text-emerald-400 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                      {prod.tag}
                    </span>

                    <span className="absolute top-2.5 right-2.5 text-[9px] sm:text-[10px] text-slate-200 bg-slate-950/90 backdrop-blur-md px-2 py-0.5 rounded border border-slate-700">
                      {prod.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-3.5 sm:p-4 lg:p-5 space-y-2 sm:space-y-3">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors line-clamp-2">
                      {prod.name}
                    </h3>

                    {/* Specs snippet */}
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 bg-slate-100 dark:bg-slate-900/50 p-2 rounded-lg border border-slate-200 dark:border-slate-800/70">
                      {prod.specs}
                    </p>

                    {/* Warranty */}
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-medium truncate">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{prod.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & Order CTAs */}
                <div className="p-3.5 sm:p-4 lg:p-5 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-1 space-y-2.5">
                  <div className="flex items-baseline justify-between pt-2">
                    <div>
                      <span className="text-base sm:text-lg font-black text-slate-900 dark:text-white">{prod.price}</span>
                      {prod.originalPrice && (
                        <span className="ml-1.5 text-[11px] text-slate-400 dark:text-slate-500 line-through">
                          {prod.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenEnquiry({
                        productName: prod.name,
                        service: `Purchase Enquiry: ${prod.name}`,
                        details: `I am interested in buying ${prod.name} (${prod.price}).`
                      })}
                      className="w-full flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] py-2 px-1 rounded-xl shadow transition-all active:scale-95 truncate"
                    >
                      <MessageSquare className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">Enquire</span>
                    </button>

                    <a
                      href={getQuickWhatsAppLink(`Product: ${prod.name} (${prod.price})`, `Is this item currently available at your Kim store?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-[11px] py-2 px-1 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors active:scale-95 truncate"
                    >
                      <ExternalLink className="w-3 h-3 text-brand-500 flex-shrink-0" />
                      <span className="truncate">Chat</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Wholesale & Custom Configuration Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-1.5">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
              Need Bulk Quantities or Custom Workstation Setups?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              We supply wholesale office computers, monitors, UPS backups, and CCTV packages with GST invoices.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry({
              service: 'Bulk Hardware & Corporate Order',
              clientType: 'Corporate / Office',
              details: 'Requesting wholesale pricing quote for multiple PCs / IT peripherals.'
            })}
            className="w-full sm:w-auto flex-shrink-0 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors active:scale-95"
          >
            Request Corporate Quote
          </button>
        </div>

      </div>
    </section>
  );
}
