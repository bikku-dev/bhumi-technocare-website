import React, { useState } from 'react';
import { 
  MessageSquare, 
  Copy, 
  Check, 
  Clock, 
  ShieldCheck, 
  Camera, 
  Navigation,
  Sparkles,
  PhoneCall,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../data/websiteData';
import { buildWhatsAppMessage, launchWhatsApp } from '../utils/whatsapp';

export default function WhatsAppEnquirySection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    clientType: 'Personal / Home',
    location: 'Kim Char Rasta',
    service: SERVICES[0]?.title || 'Laptop & Desktop Chip-Level Repair',
    deviceModel: '',
    urgency: 'Standard (Within 24 Hours)',
    details: ''
  });

  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setError('Please provide a valid 10-digit phone number.');
      return;
    }
    setError('');
    launchWhatsApp(formData);
  };

  const previewText = buildWhatsAppMessage(formData);

  const handleCopy = () => {
    navigator.clipboard.writeText(previewText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="whatsapp-enquiry" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 relative border-t border-slate-200 dark:border-slate-800 w-full max-w-full overflow-hidden transition-colors duration-300">
      
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full min-w-0">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Interactive WhatsApp Dispatch Engine</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Book Service or Request a Rapid Quote
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Fill in your details once. Our system formats a clean service ticket and opens WhatsApp with our business line <strong className="text-emerald-600 dark:text-emerald-400">+{BUSINESS_INFO.whatsappNumber}</strong> ready to send.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Why WhatsApp is Better */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 min-w-0">
            <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                Why WhatsApp Support?
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
                    <Camera className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Send Photos & Video Clips</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Share images of error screens, cracked glass, or printer errors for quick preliminary analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
                    <Navigation className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Share Live Location Pin</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Drop your GPS pin for technician dispatch across Kim, Surat, Ankleshwar & Bharuch.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Fast Response: &lt; 5 Mins</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Direct connection with experienced hardware technicians who know South Gujarat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Transparent Digital Estimates</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Clear itemized quotes with parts pricing and warranty terms prior to beginning work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Calling Line */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Prefer calling directly?</span>
                  <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline">
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.whatsappNumber}`}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
                  aria-label="Call business phone"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Quick Route Coverage Badges */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Fast Doorstep Routes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SERVICE_AREAS.map((area, idx) => (
                  <span key={idx} className="text-[11px] bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700/60">
                    📍 {area.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Full WhatsApp Ticket Generator Form */}
          <div className="lg:col-span-7 min-w-0">
            <div className="p-4 sm:p-6 lg:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-xl dark:shadow-2xl">
              
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800 mb-4 gap-2">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                    Submit Enquiry Details
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">
                    Formats a ticket for <strong className="text-emerald-600 dark:text-emerald-400">+{BUSINESS_INFO.whatsappNumber}</strong>
                  </p>
                </div>
                <span className="text-[10px] sm:text-xs bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/20 dark:border-emerald-500/30 flex-shrink-0">
                  Instant Link
                </span>
              </div>

              {error && (
                <div className="mb-4 bg-rose-500/15 border border-rose-500/40 text-rose-600 dark:text-rose-300 px-3.5 py-2.5 rounded-xl text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bhavesh Shah"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      WhatsApp Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9825012345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                {/* Client Type & Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Client / Entity Type
                    </label>
                    <select
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    >
                      <option value="Personal / Home">Personal / Home User</option>
                      <option value="Office / Commercial">Commercial Office / Agency</option>
                      <option value="Textile Mill / Factory">Textile Mill / Industrial Plant</option>
                      <option value="Educational / Retail">Retail Showroom / School</option>
                    </select>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Area / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kim Char Rasta, Surat, Ankleshwar"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                {/* Service Category & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Service / Product Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="New Business Laptop / Desktop Purchase">New Business Laptop / Desktop Purchase</option>
                      <option value="CCTV Camera Kit (4CH / 8CH / 16CH)">CCTV Camera Kit (4CH / 8CH / 16CH)</option>
                      <option value="Corporate AMC Proposal">Corporate AMC Proposal</option>
                      <option value="Printer Repair & Toner Supply">Printer Repair & Toner Supply</option>
                    </select>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Urgency / Timeline
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    >
                      <option value="Standard (Within 24 Hours)">Standard (Within 24 Hours)</option>
                      <option value="Urgent (Today / Within 4 Hours)">Urgent (Today / Within 4 Hours)</option>
                      <option value="Critical Breakdown (Immediate)">Critical Breakdown (Immediate)</option>
                      <option value="Looking for Pricing Quotation">Looking for Pricing Quotation</option>
                    </select>
                  </div>
                </div>

                {/* Device Model */}
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Device Model or Brand (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lenovo ThinkPad T480 / HP Laser 1020"
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>

                {/* Problem Description */}
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Specific Fault or Requirement Details
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe symptoms: e.g. No display, blue screen error, or camera offline on mobile."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>

                {/* Live Message Preview Accordion */}
                <div className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 text-xs">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                      <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      Live Message Preview
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowPreview(!showPreview)}
                      className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 underline font-medium text-[11px]"
                    >
                      {showPreview ? 'Hide' : 'Preview'}
                    </button>
                  </div>

                  {showPreview && (
                    <div className="mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2.5 text-emerald-700 dark:text-emerald-300 font-mono text-[11px] whitespace-pre-wrap word-break-safe max-h-32 overflow-y-auto">
                      {previewText}
                    </div>
                  )}
                </div>

                {/* Submission Actions */}
                <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all text-xs sm:text-sm active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 flex-shrink-0" />
                    <span>Launch WhatsApp (+91 9316440985)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs active:scale-95 shadow-xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="text-center text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">
                  Direct encrypted connection to Bhumi Technocare business WhatsApp.
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
