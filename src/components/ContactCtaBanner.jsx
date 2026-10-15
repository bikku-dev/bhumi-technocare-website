import React from 'react';
import { MessageSquare, Phone, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function ContactCtaBanner({ onContactClick }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Bhumi Technocare, I would like to consult with you regarding IT hardware / security services."
  )}`;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-emerald-400 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Kim • Ankleshwar • Bharuch On-Site Service</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Upgrade Your Office IT, CCTV or Printing Systems?
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect directly with Bharat Chaudhary (Computer Engineer) for technical advice, authentic hardware supply, on-site diagnostics, or flexible rental solutions.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#/contact"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Contact & Location</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl backdrop-blur-sm border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 {BUSINESS_INFO.salesPhone}</span>
            </a>
          </div>

          <div className="pt-2 flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            <span>11, Zam Zam Complex, Kim Char Rasta, Kim, Surat - 394110</span>
          </div>

        </div>
      </div>
    </section>
  );
}
