import React, { useRef } from 'react';
import { 
  Briefcase, 
  Check, 
  ShieldCheck, 
  MessageSquare, 
  Clock, 
  Building2 
} from 'lucide-react';
import { AMC_PLANS } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AmcSection({ onOpenEnquiry }) {
  const sectionRef = useRef(null);

  // Staggered reveal for AMC plan cards
  useScrollReveal(sectionRef, {
    selector: '.amc-card',
    y: 35,
    stagger: 0.12,
    duration: 0.65,
    start: 'top 85%'
  });

  return (
    <section 
      id="amc" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/80 w-full max-w-full overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Guaranteed IT Uptime for Enterprises</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Corporate Annual Maintenance (AMC) Plans
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Eliminate costly business downtimes. Bhumi Technocare acts as your dedicated on-site IT department for factories, textile mills, corporate offices, and institutions.
          </p>
        </div>

        {/* AMC Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {AMC_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`amc-card relative rounded-2xl flex flex-col justify-between p-5 sm:p-7 lg:p-8 transition-all duration-300 min-w-0 hover:-translate-y-1.5 ${
                plan.popular
                  ? 'bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border-2 border-brand-500 shadow-xl shadow-brand-500/10 dark:shadow-brand-500/20 lg:-translate-y-2'
                  : 'bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-slate-700 hover:shadow-lg dark:hover:shadow-black/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-sky-500 text-slate-950 font-black text-[10px] sm:text-xs uppercase tracking-wider py-0.5 px-3 rounded-full shadow-md">
                  Most Preferred for SMEs
                </div>
              )}

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
                  {plan.recommendedFor}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {plan.title}
                </h3>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {plan.priceText}
                </div>

                <div className="my-4 sm:my-5 border-t border-slate-100 dark:border-slate-800" />

                <div className="space-y-2.5 sm:space-y-3">
                  <div className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                    Included Coverage:
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-5 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => onOpenEnquiry({
                    service: `Corporate AMC: ${plan.title}`,
                    clientType: 'Corporate / Office',
                    urgency: 'Looking for Pricing Quotation',
                    details: `Requesting a customized proposal and on-site audit for ${plan.title}.`
                  })}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm active:scale-95 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-500 to-sky-600 hover:from-brand-600 hover:to-sky-700 text-white shadow-brand-500/25 hover:shadow-brand-500/40'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Quote on WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* AMC Features Strip */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm min-w-0 transition-transform hover:-translate-y-1">
            <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">2 to 4 Hours SLA</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">Fast on-site dispatch across Kim, Ankleshwar, and Surat.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm min-w-0 transition-transform hover:-translate-y-1">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Standby Loaner Hardware</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">Temporary replacement systems while repairs are underway.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-sm min-w-0 sm:col-span-2 md:col-span-1 transition-transform hover:-translate-y-1">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Monthly Preventive Audits</h4>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">Routine thermal cleaning and antivirus updates prevent sudden crashes.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
