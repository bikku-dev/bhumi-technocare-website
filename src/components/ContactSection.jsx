import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  Navigation,
  CheckCircle2,
  UserCheck,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO, ALL_SERVICES } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Computer & Laptop',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.contact-card',
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    start: 'top 85%'
  });

  const directionsUrl = BUSINESS_INFO.directionsUrl;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const messageText = `*New Website Enquiry - BHUMI TECHNOCARE*
*Name:* ${form.name}
*Phone:* ${form.phone}
*Requirement:* ${form.service}
*Details:* ${form.message || 'I would like to inquire about this service / product.'}`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 text-xs font-semibold uppercase tracking-wider mb-3">
            Contact & Location
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get in Touch With Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Connect with Bharat Chaudhary and the BHUMI TECHNOCARE team for sales, service visits, rental inquiries, or commercial AMC support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="contact-card lg:col-span-5 space-y-6">
            
            {/* Business & Person Identity Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-brand-50/30 dark:from-slate-900/80 dark:to-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    Contact Person
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {BUSINESS_INFO.contactPerson}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {BUSINESS_INFO.designation} • {BUSINESS_INFO.name}
                  </p>
                  <div className="mt-2 text-xs italic text-slate-500 dark:text-slate-400">
                    &ldquo;{BUSINESS_INFO.tagline}&rdquo;
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Address & Directions */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="w-full min-w-0">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Shop & Service Center</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Active Service Areas: Kim • Ankleshwar • Bharuch
                  </div>
                  
                  {/* Get Directions Button */}
                  <div className="pt-3.5">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Complete Contact Numbers (All 4 Numbers from Poster) */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Official Contact Numbers</h4>
                  <div className="mt-3 space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400">Sales / Primary:</span>
                      <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="font-bold text-brand-600 dark:text-brand-400 hover:underline">
                        +91 {BUSINESS_INFO.salesPhone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400">Service Desk:</span>
                      <a href={`tel:91${BUSINESS_INFO.servicePhone.replace(/\s+/g, '')}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400">
                        {BUSINESS_INFO.servicePhone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400">Account & Billing:</span>
                      <a href={`tel:91${BUSINESS_INFO.accountPhone.replace(/\s+/g, '')}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400">
                        {BUSINESS_INFO.accountPhone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Support Line:</span>
                      <a href={`tel:91${BUSINESS_INFO.additionalPhone.replace(/\s+/g, '')}`} className="font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400">
                        {BUSINESS_INFO.additionalPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm shadow-2xs">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>Email: </span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Simple Contact Form */}
          <div className="contact-card lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Send Direct Enquiry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Submit your inquiry and connect directly via WhatsApp or phone with our service team.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Enquiry Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    WhatsApp has opened with your inquiry details. Bharat Chaudhary and team will assist you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: 'Computer & Laptop', message: '' }); }}
                    className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline pt-2 block mx-auto"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel / ABC Enterprises"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Contact / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Service, Product or Pillar Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 shadow-2xs"
                    >
                      <optgroup label="Core Business Pillars">
                        <option value="Hardware Sales & Purchase">Hardware Sales & Purchase</option>
                        <option value="Repair & Service Visit">Repair & Service Visit</option>
                        <option value="Hardware Rental (Short/Long Term)">Hardware Rental (Short/Long Term)</option>
                        <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                      </optgroup>
                      <optgroup label="Popular Offerings">
                        {ALL_SERVICES.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message / Requirement Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your hardware requirement, device problem, or site location..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-2xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-md shadow-brand-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Responsive Embedded Google Map Section */}
        <div className="mt-12 sm:mt-16 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 shadow-sm">
          {/* Map Header Strip */}
          <div className="p-4 sm:p-5 bg-slate-100/80 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-accent-500 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  BHUMI TECHNOCARE Service Station
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs transition-all w-full sm:w-auto flex-shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Interactive Embedded Iframe */}
          <div className="w-full h-72 sm:h-80 md:h-96 relative bg-slate-200 dark:bg-slate-800">
            <iframe
              title="BHUMI TECHNOCARE Google Maps Location"
              src={embedMapUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
