import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  Navigation, 
  UserCheck, 
  CheckCircle2 
} from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS_AND_SOLUTIONS } from '../data/websiteData';

export default function ContactPage({ onBack }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    solution: 'Computers & Laptops',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    const messageText = `*New Website Enquiry - BHUMI TECHNOCARE*
*Name:* ${form.name}
*Phone:* ${form.phone}
*Requirement:* ${form.solution}
*Details:* ${form.message || 'I would like to enquire about availability and services.'}`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-slate-50/60 dark:bg-slate-950 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kim • Ankleshwar • Bharuch</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Contact & Location Details
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="mt-2 text-xs sm:text-base text-slate-600 dark:text-slate-400">
            Contact Bharat Chaudhary and the BHUMI TECHNOCARE technical team for sales, on-site service dispatch, rental requests, or customized AMC agreements.
          </p>
        </div>

        {/* 2-Column Contact Info and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Identity Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-600/20">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    Contact Person & Engineer
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {BUSINESS_INFO.contactPerson}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {BUSINESS_INFO.designation} • {BUSINESS_INFO.name}
                  </p>
                  <div className="mt-1.5 text-xs italic text-slate-500 dark:text-slate-400">
                    &ldquo;{BUSINESS_INFO.tagline}&rdquo;
                  </div>
                </div>
              </div>
            </div>

            {/* Address & Directions */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
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
                  
                  <div className="pt-3">
                    <a
                      href={BUSINESS_INFO.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-xs transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* All 4 Verified Phone Numbers */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
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
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm shadow-2xs">
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

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Send Direct Enquiry
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill out the form below to initiate a WhatsApp conversation or call with our technical team.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>Enquiry formatted! WhatsApp chat window opened. If it didn't open, use the direct WhatsApp button below.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Patel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Service / Product Category Needed
                  </label>
                  <select
                    value={form.solution}
                    onChange={(e) => setForm({ ...form, solution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    {PRODUCTS_AND_SOLUTIONS.map((cat) => (
                      <option key={cat.id} value={cat.title}>
                        {cat.title}
                      </option>
                    ))}
                    <option value="AMC & Preventive Maintenance">AMC & Preventive Maintenance</option>
                    <option value="Other Technical Service">Other Technical Service</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Requirement Details / Problem Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you need (e.g. Need 4 ColorVu CCTV cameras installed in our warehouse, or HP LaserJet toner refill)..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Submit & Open WhatsApp Enquiry</span>
                  </button>

                  <a
                    href={`mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent('Enquiry via Website: ' + form.solution)}&body=${encodeURIComponent('Name: ' + form.name + '\nPhone: ' + form.phone + '\nRequirement: ' + form.solution + '\nDetails: ' + form.message)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-all"
                  >
                    <Mail className="w-4 h-4 text-sky-500" />
                    <span>Send via Email</span>
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
          <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Shop Location Map
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                11, Zam Zam Complex, Kim Char Rasta, Kim, Surat - 394110
              </p>
            </div>
            <a
              href={BUSINESS_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>
          <div className="w-full h-72 sm:h-96 relative">
            <iframe
              title="BHUMI TECHNOCARE Location"
              src={embedMapUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
