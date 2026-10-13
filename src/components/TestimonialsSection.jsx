import React, { useRef } from 'react';
import { 
  Star, 
  CheckCircle, 
  MapPin, 
  MessageSquare 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TestimonialsSection({ onOpenEnquiry }) {
  const sectionRef = useRef(null);

  // Staggered reveal for testimonial cards
  useScrollReveal(sectionRef, {
    selector: '.testimonial-card',
    y: 30,
    stagger: 0.12,
    duration: 0.65,
    start: 'top 85%'
  });

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/80 w-full max-w-full overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" />
            <span>Real Local Customer Experiences</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Trusted by Businesses & Home Users
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            See what plant managers, textile mill owners, professionals, and residential customers say about our hardware repairs and CCTV security systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="testimonial-card p-5 sm:p-7 lg:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-slate-700 transition-all flex flex-col justify-between shadow-sm hover:shadow-lg dark:hover:shadow-black/40 min-w-0 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">{t.date}</span>
                </div>

                <p className="text-slate-700 dark:text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed italic relative">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <div className="min-w-0 truncate">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 truncate">
                    <span className="truncate">{t.name}</span>
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
                  </h4>
                  <p className="text-[11px] sm:text-xs text-brand-600 dark:text-brand-400 font-medium truncate">{t.role}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    <span>{t.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Summary Ribbon */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black text-lg sm:text-xl border border-amber-500/20 flex-shrink-0">
              4.9
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Consistently High Rated IT Center</div>
              <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Based on 1,200+ local customer reviews across Kim, Surat & Bharuch</div>
            </div>
          </div>

          <button
            onClick={() => onOpenEnquiry({
              service: 'General Service Inquiry',
              details: 'I read your reviews and want to discuss service for my devices.'
            })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow transition-all flex-shrink-0 active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Join Satisfied Clients</span>
          </button>
        </div>

      </div>
    </section>
  );
}
