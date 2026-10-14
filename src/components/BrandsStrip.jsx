import React, { useRef } from 'react';
import { BRANDS } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BrandsStrip() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.brand-card-item',
    y: 15,
    stagger: 0.04,
    duration: 0.4,
    start: 'top 90%'
  });

  return (
    <section 
      ref={sectionRef}
      className="py-8 sm:py-10 bg-white dark:bg-slate-950 transition-colors border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Brands We Supply & Service
          </span>
        </div>

        {/* 10 Brand Logos in a Compact Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3 items-center">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="brand-card-item p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-white/95 border border-slate-200/80 dark:border-slate-200 flex flex-col items-center justify-center hover:border-brand-500 transition-colors shadow-2xs group"
              title={`${brand.name} - ${brand.desc}`}
            >
              <img
                src={brand.logo}
                alt={`${brand.name} Logo`}
                loading="lazy"
                className="h-7 sm:h-8 w-auto max-w-[80px] object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-[10px] font-semibold text-slate-700 mt-1 truncate max-w-full">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trademark Disclaimer */}
        <p className="mt-4 text-center text-[10px] text-slate-400 dark:text-slate-500">
          All brand names, trade names, and logos are trademarks of their respective owners.
        </p>

      </div>
    </section>
  );
}
