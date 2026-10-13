import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  MapPin, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/websiteData';
import { buildWhatsAppMessage, launchWhatsApp } from '../utils/whatsapp';

export default function WhatsAppEnquiryModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    clientType: 'Personal / Home',
    location: 'Kim Char Rasta',
    service: SERVICES[0]?.title || 'Laptop & Desktop Chip-Level Repair',
    productName: '',
    deviceModel: '',
    urgency: 'Standard (Within 24 Hours)',
    details: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: initialData.service || prev.service,
        location: initialData.location || prev.location,
        productName: initialData.productName || '',
        details: initialData.details || prev.details
      }));
      setSubmitted(false);
      setError('');
    }
  }, [isOpen, initialData]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLocations = ['Kim Char Rasta', 'Surat City', 'Ankleshwar GIDC', 'Bharuch', 'Kosamba'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setError('Please enter a valid 10-digit WhatsApp phone number.');
      return;
    }

    setError('');
    launchWhatsApp(formData);
    setSubmitted(true);
  };

  const previewText = buildWhatsAppMessage(formData);

  const handleCopy = () => {
    navigator.clipboard.writeText(previewText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl shadow-slate-900/20 dark:shadow-brand-950/50 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto min-w-0 transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-slate-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 px-4 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 truncate">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 truncate">
                <span>WhatsApp Service Ticket</span>
                <span className="text-[10px] bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20 dark:border-emerald-500/30 hidden sm:inline-block">
                  Direct Line
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                Connects directly to Kim, Surat workshop (+91 9316440985)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">

          {error && (
            <div className="bg-rose-500/15 border border-rose-500/40 text-rose-600 dark:text-rose-300 px-3.5 py-2.5 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {submitted ? (
            <div className="text-center py-5 space-y-3">
              <div className="w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 dark:border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Opening WhatsApp...</h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
                  Enquiry generated for <strong className="text-emerald-600 dark:text-emerald-400">+{BUSINESS_INFO.whatsappNumber}</strong>. If WhatsApp did not open, click below:
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <button
                  type="button"
                  onClick={() => launchWhatsApp(formData)}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl shadow text-xs sm:text-sm active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Launch WhatsApp Now</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs sm:text-sm active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Patel"
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
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              {/* Client Type & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.clientType}
                    onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                  >
                    <option value="Personal / Home">Personal / Home User</option>
                    <option value="Corporate / Office">Corporate / Office Workstations</option>
                    <option value="Factory / Textile Mill">Factory / Textile Mill / Industrial</option>
                    <option value="School / Retail">School / Retail Shop</option>
                  </select>
                </div>

                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Priority / Urgency
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

              {/* Service Selection */}
              <div className="min-w-0">
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Required Service / Product Category
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
                >
                  <optgroup label="Core IT Services">
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Hardware Products & Sales">
                    <option value="Laptop / Desktop Purchase Enquiry">Laptop / Desktop Purchase Enquiry</option>
                    <option value="CCTV Camera Kit Purchase & Installation">CCTV Camera Kit Purchase & Installation</option>
                    <option value="Printer & Laser Toner Refill Order">Printer & Laser Toner Refill Order</option>
                    <option value="SSD / RAM Upgrade Kit">SSD / RAM Upgrade Kit</option>
                    <option value="Corporate AMC Contract Enquiry">Corporate AMC Contract Enquiry</option>
                  </optgroup>
                </select>
              </div>

              {/* Model & Area */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Device Model or Brand (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dell Inspiron / HP 1020"
                    value={formData.deviceModel}
                    onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="min-w-0">
                  <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Location / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kim Char Rasta, Surat"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              {/* Quick Area Chips */}
              <div className="flex flex-wrap gap-1 items-center">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-600 dark:text-brand-400" /> Quick select:
                </span>
                {quickLocations.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setFormData({ ...formData, location: loc })}
                    className={`text-[10px] px-2 py-0.5 rounded border transition-all ${
                      formData.location === loc
                        ? 'bg-brand-500/15 border-brand-500 text-brand-700 dark:text-brand-300 font-semibold'
                        : 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>

              {/* Issue Details */}
              <div className="min-w-0">
                <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Describe Problem or Request
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Broken screen, won't turn on, or need 4-camera CCTV estimate."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>

              {/* Live Preview Toggle */}
              <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium text-[11px]">
                    <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    Auto-Formatted Message
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 underline font-medium text-[11px]"
                  >
                    {showPreview ? 'Hide' : 'Show Preview'}
                  </button>
                </div>

                {showPreview && (
                  <div className="mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-2 text-[11px] font-mono text-emerald-700 dark:text-emerald-300 whitespace-pre-wrap word-break-safe max-h-32 overflow-y-auto">
                    {previewText}
                  </div>
                )}
              </div>

              {/* Submission Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-5 rounded-xl shadow transition-all text-xs sm:text-sm active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>Send via WhatsApp (+91 9316440985)</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold active:scale-95 shadow-xs"
                >
                  Cancel
                </button>
              </div>

              <div className="flex items-center justify-center gap-3 text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Free Consultation
                </span>
                <span>•</span>
                <span>Response in &lt; 5 mins</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
