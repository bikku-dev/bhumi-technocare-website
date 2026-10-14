import React, { useRef } from 'react';
import { ShoppingBag, Wrench, Calendar, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { BUSINESS_MODEL_PILLARS, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BusinessModelSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.model-card',
    y: 25,
    stagger: 0.1,
    duration: 0.55,
    start: 'top 85%'
  });

  const getPillarIcon = (id) => {
    switch (id) {
      case 'sales':
        return <ShoppingBag className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
      case 'service':
        return <Wrench className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'rent':
        return <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      default:
        return <ShoppingBag className="w-6 h-6 text-brand-600 dark:text-brand-400" />;
    }
  };

  const getPillarColorClasses = (id) => {
    switch (id) {
      case 'sales':
        return {
          badge: 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20',
          hoverBorder: 'hover:border-brand-500/50',
          btn: 'bg-brand-600 hover:bg-brand-700 text-white shadow-brand-600/20'
        };
      case 'service':
        return {
          badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
          hoverBorder: 'hover:border-emerald-500/50',
          btn: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
        };
      case 'rent':
        return {
          badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
          hoverBorder: 'hover:border-amber-500/50',
          btn: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
        };
      default:
        return {
          badge: 'bg-brand-500/10 text-brand-600 dark:text-brand-400 border-brand-500/20',
          hoverBorder: 'hover:border-brand-500/50',
          btn: 'bg-brand-600 hover:bg-brand-700 text-white'
        };
    }
  };

  return (
    <section 
      id="business-model" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-slate-900/40 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Core Business Pillars
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Sales, Service & Rent
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Tailored solutions designed to fit your operational workflow, budget, and technological demands in South Gujarat.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_MODEL_PILLARS.map((pillar) => {
            const colors = getPillarColorClasses(pillar.id);
            const whatsappMsg = `Hello Bhumi Technocare, I am contacting you regarding your ${pillar.title} offerings (${pillar.intent}). Please share availability and details.`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={pillar.id}
                className={`model-card rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xs ${colors.hoverBorder} transition-all duration-200`}
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                      {getPillarIcon(pillar.id)}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                      {pillar.title.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                    {pillar.badge}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 border-t border-slate-100 dark:border-slate-800/80 pt-5 mb-6">
                    {pillar.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 ${colors.btn}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{pillar.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear Rental Availability Disclaimer */}
        <div className="mt-10 max-w-3xl mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 sm:p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong className="font-semibold">Rental & Equipment Notice:</strong> Rental equipment, lease tenures, and hardware configurations are subject to real-time stock availability and must be confirmed directly with BHUMI TECHNOCARE via WhatsApp or phone.
          </div>
        </div>

      </div>
    </section>
  );
}
