import React from 'react';
import { ShoppingBag, Laptop, MapPin, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function TrustHighlights() {
  const highlights = [
    {
      icon: <ShoppingBag className="w-4 h-4 text-brand-600 dark:text-brand-400 flex-shrink-0" />,
      title: "Business Model",
      value: "Sales, Service & Rent"
    },
    {
      icon: <Laptop className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />,
      title: "Solutions",
      value: "Computer & IT Solutions"
    },
    {
      icon: <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />,
      title: "Service Areas",
      value: "Kim • Ankleshwar • Bharuch"
    },
    {
      icon: <UserCheck className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />,
      title: "Engineering Lead",
      value: `${BUSINESS_INFO.contactPerson} (${BUSINESS_INFO.designation})`
    }
  ];

  return (
    <div className="bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 py-3.5 sm:py-4 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-50 dark:bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-100 dark:border-slate-800">
                {item.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase font-semibold text-slate-400 dark:text-slate-500 tracking-wider">
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
