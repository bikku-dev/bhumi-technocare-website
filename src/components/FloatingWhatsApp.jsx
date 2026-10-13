import React, { useState } from 'react';
import { MessageSquare, Phone, X, Shield, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { getQuickWhatsAppLink } from '../utils/whatsapp';

export default function FloatingWhatsApp({ onOpenEnquiry }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside 
      aria-label="Quick contact widget"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pb-safe select-none"
    >
      
      {/* Compact Interactive Quick Panel */}
      {isOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Quick WhatsApp Options"
          className="bg-white/95 dark:bg-slate-900/98 border border-slate-200 dark:border-slate-700/90 rounded-2xl p-3.5 sm:p-4 shadow-2xl w-[260px] sm:w-[280px] max-w-[calc(100vw-2rem)] animate-in slide-in-from-bottom-2 duration-200 backdrop-blur-xl transition-colors duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">Bhumi Support Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close support panel"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
            Need urgent laptop repair, CCTV quotation, or toner refill in Kim / Surat?
          </p>

          <div className="space-y-2">
            {/* Action 1: Fill Ticket Form */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-between bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-3 rounded-xl shadow transition-colors active:scale-95"
            >
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Fill Service Ticket</span>
              </span>
              <ArrowUpRight className="w-3 h-3 text-emerald-200" />
            </button>

            {/* Action 2: Direct WhatsApp Chat */}
            <a
              href={getQuickWhatsAppLink('Quick Inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors active:scale-95"
            >
              <span className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Direct WhatsApp</span>
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Chat</span>
            </a>

            {/* Action 3: Direct Phone Call */}
            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs py-2 px-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-colors active:scale-95"
            >
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400" />
                <span>Call Workshop</span>
              </span>
              <span className="text-[10px] text-brand-600 dark:text-brand-400 font-mono">Dial</span>
            </a>
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] text-slate-500 dark:text-slate-400 text-center">
            NH-8 Kim Char Rasta • Mon-Sat 9:30-8:30
          </div>
        </div>
      )}

      {/* Main Single Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold p-3 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-emerald-500/30 border border-emerald-400/30 transition-all transform hover:scale-105 active:scale-95"
        aria-label="Open WhatsApp Support Menu"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>

        <MessageSquare className="w-5 h-5 fill-white text-emerald-600" />

        <span className="hidden sm:inline-block text-xs font-bold tracking-wide pr-0.5">
          WhatsApp
        </span>
      </button>

    </aside>
  );
}
