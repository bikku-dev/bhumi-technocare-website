import React, { useRef } from 'react';
import { BRANDS } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BrandsSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.brand-card',
    y: 15,
    stagger: 0.05,
    duration: 0.45,
    start: 'top 88%'
  });

  return (
    <section 
      id="brands" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Hardware & Technology Partners
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Brands We Supply & Service
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            We install, deploy, and service genuine hardware systems, security solutions, and networking products from leading technology manufacturers.
          </p>
        </div>

        {/* 10 Brand Logos Grid (5 cols on desktop, 3 on tablet, 2 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="brand-card group p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center"
            >
              {/* Logo Frame */}
              <div className="w-full h-16 sm:h-20 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-white/95 shadow-2xs border border-slate-100 dark:border-slate-200 mb-3">
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  loading="lazy"
                  className="max-h-12 max-w-[120px] w-auto h-auto object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Brand Label */}
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {brand.name}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {brand.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Trademark Disclaimer */}
        <div className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Disclaimer: All brand names, trade names, registered trademarks, and commercial logos shown are the property of their respective corporate owners and are used here solely to describe the equipment supplied, repaired, or serviced.
        </div>

      </div>
    </section>
  );
}
