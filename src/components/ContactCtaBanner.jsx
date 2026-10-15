import React from 'react';
import { MessageSquareQuote, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function ContactCtaBanner({ onContactClick, onRequestQuote }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Bharat Chaudhary, I would like to consult with you regarding IT hardware / security solutions."
  )}`;

  const handleQuoteClick = () => {
    if (onRequestQuote) {
      onRequestQuote({ service: 'Complete Infrastructure & Hardware Upgrade' });
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-gradient-to-br from-slate-900 via-slate-950 to-brand-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-white/10 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span>Kim • Ankleshwar • Bharuch Corridor</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            Ready to Upgrade Your Office IT, CCTV or Network Setup?
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with Computer Engineer Bharat Chaudhary for practical hardware guidance, on-site diagnostics, or tailored project quotations.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleQuoteClick}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>

            <a
              href="#/contact"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
            >
              <span>Contact & Workshop Map</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition-all min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 {BUSINESS_INFO.salesPhone}</span>
            </a>
          </div>

          <div className="pt-3 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
            <span>11, Zam Zam Complex, Kim Char Rasta, Kim, Surat - 394110</span>
          </div>

        </div>
      </div>
    </section>
  );
}
