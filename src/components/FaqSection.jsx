import React, { useState, useRef } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Phone 
} from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FaqSection({ onOpenEnquiry }) {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  // Subtle reveal of the FAQ list container
  useScrollReveal(sectionRef, {
    selector: '.faq-list-container',
    y: 25,
    duration: 0.6,
    start: 'top 85%'
  });

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/80 w-full max-w-full overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Everything you need to know about our computer repairs, CCTV surveillance setups, turnaround times, and WhatsApp booking workflow.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list-container max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-brand-500/40 dark:hover:border-slate-700 transition-all duration-200 overflow-hidden min-w-0 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4 px-4 sm:px-6 flex items-center justify-between text-left focus:outline-none gap-3 transition-colors hover:bg-slate-100/70 dark:hover:bg-slate-850"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm lg:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-brand-600 text-white dark:bg-brand-600 dark:text-white' : ''
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/80 dark:border-slate-800/60 pt-3 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto text-center p-5 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 shadow-xs">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Still have a specific query or uncommon hardware fault?</h4>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-4">
            Our engineering team is just one message away on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={() => onOpenEnquiry({
                service: 'Custom Question / Consultation',
                details: 'I have a question not covered in the FAQs.'
              })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp (+91 9316440985)</span>
            </button>
            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors active:scale-95 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
