import React, { useRef } from 'react';
import { Briefcase, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { AMC_CONSULTANCY_INFO, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CompactAmc() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.amc-card-item',
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    start: 'top 85%'
  });

  const whatsappMsg = "Hello Bhumi Technocare, I would like to inquire about customized AMC & IT Maintenance for our office / plant.";
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section 
      id="amc" 
      ref={sectionRef}
      className="py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 transition-colors border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="amc-card-item max-w-3xl mx-auto rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-2">
              Corporate IT Support
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Annual Maintenance Contracts (AMC) & IT Consultancy
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Dependable preventive care and rapid on-site troubleshooting for commercial offices, textile manufacturing units, and small businesses.
            </p>
            <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Dedicated On-Site Dispatch: Kim • Ankleshwar • Bharuch</span>
            </div>
          </div>

          {/* 4 Key Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Scheduled preventive computer & laptop maintenance",
              "CCTV surveillance system & recording verification",
              "Local Area Network (LAN) & Wi-Fi stability checks",
              "Accounting software data backup & security assistance"
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Single Clear Action */}
          <div className="text-center pt-2 border-t border-slate-100 dark:border-slate-800">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire About AMC Plans on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
