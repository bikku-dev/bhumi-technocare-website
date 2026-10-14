import React, { useRef } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProductsSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.product-card',
    y: 25,
    stagger: 0.08,
    duration: 0.55,
    start: 'top 85%'
  });

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Hardware Catalog
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            IT Hardware & Security Products
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Brand-certified commercial laptops, custom desktop workstations, CCTV systems, and genuine hardware components with local warranty support.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCT_CATEGORIES.map((prod) => (
            <div
              key={prod.id}
              className="product-card group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-slate-100 text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-slate-700">
                    {prod.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Specifications & Options:
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {prod.specs}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single Consolidated Product Action */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto shadow-xs">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            Looking for Custom Configurations or Bulk Pricing?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We provide tailored hardware quotations for offices, schools, and industrial facilities with installation and warranty.
          </p>
          <div className="mt-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md shadow-brand-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Inquire About Hardware & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
