import React, { useRef } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Clock, 
  Truck, 
  BadgeDollarSign, 
  Headphones, 
  Check, 
  X, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhyChooseUsSection({ onOpenEnquiry }) {
  const sectionRef = useRef(null);

  // Staggered reveal for feature cards
  useScrollReveal(sectionRef, {
    selector: '.why-feature-card',
    y: 30,
    stagger: 0.08,
    duration: 0.6,
    start: 'top 85%'
  });

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />;
      case 'Clock': return <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400" />;
      case 'Truck': return <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'BadgeDollarSign': return <BadgeDollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />;
      case 'Headphones': return <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />;
      default: return <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />;
    }
  };

  const comparisonRows = [
    { feature: 'Motherboard Diagnostic Lab', bhumi: 'Precision BGA & Micro-soldering equipment', others: 'Trial-and-error board replacements' },
    { feature: 'Replacement Parts Quality', bhumi: '100% Genuine OEM tested spares', others: 'Refurbished copies or unbranded clones' },
    { feature: 'Written Service Warranty', bhumi: 'Up to 90 Days assured warranty', others: 'No warranty once out of shop' },
    { feature: 'Digital WhatsApp Tracking', bhumi: 'Instant updates & video evidence', others: 'Repeated follow-up phone calls' },
    { feature: 'Pricing Transparency', bhumi: 'Itemized quotation prior to repair', others: 'Hidden fees revealed at delivery' },
    { feature: 'GST Invoicing & Corporate AMC', bhumi: 'Full GST compliant bills for tax input', others: 'Cash-only unofficial slips' }
  ];

  return (
    <section 
      id="why-us" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/80 w-full max-w-full overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Bhumi Technocare Advantage</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Why Hundreds of Clients Trust Us
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Over a decade of hardware engineering with uncompromising standards for personal and corporate IT infrastructure.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="why-feature-card p-5 sm:p-6 lg:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-brand-500/30 shadow-sm hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between min-w-0 hover:-translate-y-1"
            >
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                  {getFeatureIcon(item.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] sm:text-xs text-brand-600 dark:text-brand-400 font-semibold">
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Comparison Section: Mobile Cards + Desktop Table */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Professional Engineering vs Street Repair
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              How our certified laboratory protects your devices:
            </p>
          </div>

          {/* Mobile Comparison Cards (Shown on < md) */}
          <div className="md:hidden space-y-3">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {row.feature}
                </div>
                <div className="flex items-start gap-2 text-xs bg-emerald-50 dark:bg-brand-950/40 p-2.5 rounded-lg border border-emerald-200 dark:border-brand-500/20 text-emerald-900 dark:text-brand-200">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300">Bhumi: </span>
                    <span>{row.bhumi}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-xs bg-slate-100 dark:bg-slate-950/60 p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                  <X className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-500 dark:text-slate-400">Others: </span>
                    <span>{row.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table (Shown on md and above) */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm backdrop-blur-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900">
                  <th className="py-3.5 px-5 text-slate-600 dark:text-slate-400 font-semibold w-1/3">Quality Metric</th>
                  <th className="py-3.5 px-5 text-brand-700 dark:text-brand-300 font-bold bg-brand-50 dark:bg-brand-950/40 border-x border-slate-200 dark:border-slate-800 w-1/3">
                    BHUMI TECHNOCARE
                  </th>
                  <th className="py-3.5 px-5 text-slate-600 dark:text-slate-400 font-medium w-1/3">Generic Street Repair</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/70">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-slate-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 bg-brand-50/50 dark:bg-brand-950/30 border-x border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span className="font-medium text-emerald-700 dark:text-emerald-300">{row.bhumi}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 dark:text-rose-400 flex-shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Route Ribbon */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-accent-600 dark:text-accent-500 block">
                Doorstep Hub
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                South Gujarat Highway Service Coverage
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Technician dispatch along NH-8 connecting Surat, Kim, Kosamba, Ankleshwar, and Bharuch.
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry({
                service: 'Doorstep Technician Dispatch',
                details: 'I would like to schedule a field technician visit.'
              })}
              className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Schedule Technician Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
