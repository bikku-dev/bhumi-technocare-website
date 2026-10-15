import React, { useRef } from 'react';
import { Briefcase, CheckCircle2, MessageSquare, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { AMC_CONSULTANCY_INFO, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CompactAmc({ onViewAmc }) {
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
      className="py-14 sm:py-18 lg:py-20 bg-slate-50/70 dark:bg-slate-950 transition-colors border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="amc-card-item max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-lg dark:shadow-black/40">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
              Corporate Infrastructure Support
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Annual Maintenance Contracts (AMC)
            </h2>
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Dependable preventive care, scheduled audits, and rapid on-site troubleshooting for commercial offices, textile mills, and industrial units.
            </p>
            <div className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Priority Dispatch: Kim • Ankleshwar • Bharuch</span>
            </div>
          </div>

          {/* 4 Key Points in a clean 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-8">
            {[
              {
                title: "Preventive Computer Maintenance",
                desc: "Thermal cleaning, hardware health diagnostics, driver updates & OS optimization."
              },
              {
                title: "CCTV Surveillance Audit",
                desc: "24/7 DVR/NVR recording verification, camera angle alignment & mobile app check."
              },
              {
                title: "Network & Wi-Fi Stability",
                desc: "LAN cable testing, gigabit switch performance & interference mitigation."
              },
              {
                title: "Automated Data Backups",
                desc: "Accounting database protection, external drive setup & Quick Heal antivirus updates."
              }
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {pt.title}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                    {pt.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions: Link to dedicated AMC Page + WhatsApp */}
          <div className="text-center pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#/amc"
              onClick={(e) => {
                if (onViewAmc) {
                  e.preventDefault();
                  onViewAmc();
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
            >
              <span>Explore Full AMC Coverage</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get AMC Quote on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
