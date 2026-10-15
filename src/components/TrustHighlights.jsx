import React from 'react';
import { ShoppingBag, Laptop, MapPin, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function TrustHighlights() {
  const highlights = [
    {
      icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 dark:text-brand-400 flex-shrink-0" />,
      title: "Business Model",
      value: "Sales, Service & Rent",
      subtitle: "Procurement, repair & rental"
    },
    {
      icon: <Laptop className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />,
      title: "Complete Technology",
      value: "Computers, CCTV & Networks",
      subtitle: "Hardware & security setup"
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400 flex-shrink-0" />,
      title: "Active Service Corridors",
      value: "Kim • Ankleshwar • Bharuch",
      subtitle: "Prompt on-site technician visit"
    },
    {
      icon: <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500 dark:text-sky-400 flex-shrink-0" />,
      title: "Technical Leadership",
      value: `${BUSINESS_INFO.contactPerson}`,
      subtitle: "Qualified Computer Engineer"
    }
  ];

  return (
    <div className="bg-slate-100/70 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 py-4 sm:py-5 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-colors"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-200/60 dark:border-slate-700/60 shadow-2xs">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                  {item.title}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                  {item.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
