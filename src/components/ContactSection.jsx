import React, { useState, useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Computer & Laptop Repair',
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

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address)}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const messageText = `*New Website Enquiry - Bhumi Technocare*
*Name:* ${form.name}
*Phone:* ${form.phone}
*Service Requested:* ${form.service}
*Message:* ${form.message || 'I would like to enquire about this service.'}`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Get in Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Contact & Location Details
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Reach our service desk by phone, WhatsApp, or visit our service center at Kim Char Rasta on NH-8.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards & Details */}
          <div className="contact-card lg:col-span-5 space-y-6">
            
            {/* Workshop Address Card with Get Directions button */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-accent-500 flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="w-full min-w-0">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Physical Address</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="mt-1 text-xs text-brand-600 dark:text-brand-400 font-medium">
                    {BUSINESS_INFO.landmark}
                  </p>
                  
                  {/* Get Directions Button */}
                  <div className="pt-3">
                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200 dark:border-brand-800 flex items-center justify-center text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Call Us Directly</h4>
                  <div className="mt-2 space-y-1 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Primary: </span>
                      <a href={`tel:${BUSINESS_INFO.whatsappNumber}`} className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                        {BUSINESS_INFO.displayPhone}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Secondary: </span>
                      <a href="tel:919978817550" className="font-semibold text-brand-600 dark:text-brand-400 hover:underline">
                        {BUSINESS_INFO.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact Button */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">WhatsApp Enquiry</h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Send photos of device issues or request quick quotes directly on our WhatsApp line.
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Bhumi%20Technocare%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+91 9316440985)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Email */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Simple Contact Form */}
          <div className="contact-card lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below. We will review your query and respond promptly via call or WhatsApp.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Thank You! Your Enquiry Was Sent.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    WhatsApp has opened with your inquiry details. Our support technician will assist you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: 'Computer & Laptop Repair', message: '' }); }}
                    className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline pt-2 block mx-auto"
                  >
                    Submit Another Inquiry
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
                      placeholder="e.g. Ramesh Patel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Service or Product Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                    >
                      <option value="Computer & Laptop Repair">Computer & Laptop Repair</option>
                      <option value="IT Hardware & Networking">IT Hardware & Networking</option>
                      <option value="CCTV Installation & Maintenance">CCTV Installation & Maintenance</option>
                      <option value="Printer Repair">Printer Repair</option>
                      <option value="Chip-Level Repair">Chip-Level Repair</option>
                      <option value="On-Site Technical Support">On-Site Technical Support</option>
                      <option value="Corporate AMC Plans">Corporate AMC Plans</option>
                      <option value="Hardware Purchase Inquiry">Hardware Purchase Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message / Problem Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe the device issue or requirement..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-md shadow-brand-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">BHUMI TECHNOCARE Service Center Map</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">GF-11, Zam Zam Residency, NH-8 Highway, Kim Char Rasta, Surat</p>
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
