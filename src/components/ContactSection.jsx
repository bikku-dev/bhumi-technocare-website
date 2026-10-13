import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Navigation, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { launchWhatsApp } from '../utils/whatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactSection({ onOpenEnquiry }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);

  // Staggered reveal for contact columns
  useScrollReveal(sectionRef, {
    selector: '.contact-reveal-col',
    y: 30,
    stagger: 0.15,
    duration: 0.65,
    start: 'top 85%'
  });

  const isCurrentlyOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const timeInMins = hours * 60 + mins;

    // Sunday = 0
    if (day === 0) return false;
    // 9:30 AM = 570 mins, 8:30 PM = 1230 mins
    return timeInMins >= 570 && timeInMins <= 1230;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    
    launchWhatsApp({
      fullName: form.name,
      phone: form.phone,
      details: form.message || 'Direct website contact form inquiry'
    });
    setSent(true);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900/50 relative border-t border-slate-200 dark:border-slate-800 w-full max-w-full overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400">
            <MapPin className="w-3.5 h-3.5 text-accent-500" />
            <span>Visit Our Workshop or Request On-Site Service</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Connect With Bhumi Technocare
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Conveniently located at NH-8 Highway, Kim Char Rasta in Surat district. Drop by with your machine or reach our support desk anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Workshop Details & Status */}
          <div className="contact-reveal-col lg:col-span-5 space-y-4 sm:space-y-6 flex flex-col justify-between min-w-0">
            <div className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 sm:space-y-5">
              
              {/* Live Status Badge */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800 gap-2">
                <span className="text-[11px] sm:text-xs uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                  Workshop Status
                </span>
                {isCurrentlyOpen() ? (
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping flex-shrink-0" />
                    <span>Open Now (Until 8:30 PM)</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-amber-600 dark:text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 flex-shrink-0" />
                    <span>Open 9:30 AM Tomorrow • WhatsApp Active</span>
                  </span>
                )}
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-accent-500 flex-shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Workshop & Store Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed word-break-safe">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-brand-600 dark:text-brand-400 mt-0.5 font-medium">
                    {BUSINESS_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Direct Calling Lines */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Direct Phone Lines</h4>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium">
                      Primary: <strong className="text-brand-600 dark:text-brand-400">{BUSINESS_INFO.displayPhone}</strong>
                    </a>
                    <a href={`tel:919978817550`} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium">
                      Secondary: <strong className="text-brand-600 dark:text-brand-400">{BUSINESS_INFO.secondaryPhone}</strong>
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Support */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5 shadow-xs">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">WhatsApp Helpline</h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Instant quotes, fault photo assessment & booking</p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-0.5 text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
                  >
                    +{BUSINESS_INFO.whatsappNumber} (Click to Chat)
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5 shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Working Hours</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.workingHours}</p>
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-0.5">{BUSINESS_INFO.sundayHours}</p>
                </div>
              </div>

            </div>

            {/* Google Map Quick Navigation */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-brand-50 to-slate-100 dark:from-brand-900/40 dark:to-slate-900 border border-brand-200 dark:border-brand-500/20 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Need Directions on Map?</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Open exact coordinates on Google Maps</p>
              </div>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition-colors flex-shrink-0 active:scale-95"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open GPS</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Map Preview & Quick Dispatch */}
          <div className="contact-reveal-col lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-6 min-w-0">
            
            {/* Embedded Visual Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 h-52 sm:h-64 shadow-lg group">
              <div 
                className="w-full h-full bg-cover bg-center filter brightness-[0.65] group-hover:brightness-[0.75] transition-all duration-300"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')`
                }}
              />
              <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />

              {/* Pin highlight overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10 space-y-2">
                <div className="p-2.5 bg-brand-600 text-white rounded-xl shadow-lg shadow-brand-500/40 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="max-w-xs">
                  <h4 className="text-base sm:text-lg font-black text-white">BHUMI TECHNOCARE</h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 word-break-safe">
                    GF-11, Zam Zam Residency, NH-8 Kim Char Rasta, Surat - 394110
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white text-slate-950 hover:bg-brand-400 font-bold text-xs px-3.5 py-1.5 rounded-xl shadow transition-colors active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5 text-accent-600" />
                  <span>Navigate with Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                Fast Message to Workshop
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3.5">
                Leave your number and requirement to connect immediately.
              </p>

              {sent ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Message dispatched to WhatsApp! Our team will respond shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Number *"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Brief description of device fault, CCTV requirement, or question..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 rounded-xl p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />

                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl shadow transition-all text-xs sm:text-sm active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp (+91 9316440985)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenEnquiry()}
                      className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-colors active:scale-95 shadow-xs"
                    >
                      Open Full Ticket
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
