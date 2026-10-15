import React from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  MessageSquare, 
  Laptop, 
  Video, 
  Network, 
  HardDrive, 
  Zap, 
  Clock, 
  Building2,
  Phone
} from 'lucide-react';
import { AMC_CONSULTANCY_INFO, BUSINESS_INFO } from '../data/websiteData';

export default function AmcPage({ onBack }) {
  const whatsappMsg = "Hello Bhumi Technocare, I would like to get a customized AMC Quote for our business facility.";
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  const amcPillars = [
    {
      icon: <Laptop className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: "Preventive Computer & Laptop Maintenance",
      description: "Scheduled health audits, thermal cleaning, internal dusting, OS health checks, driver updates, and hardware diagnostics to prevent unexpected system breakdowns.",
      benefits: ["Thermal paste and dust cleaning", "Hardware failure early detection", "OS optimization & junk removal", "Reduced office downtime"]
    },
    {
      icon: <Video className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: "CCTV Surveillance System Checks",
      description: "Routine verification of DVR/NVR continuous recording, hard drive storage integrity, camera lens cleaning, night vision ColorVu alignment, and uninterrupted mobile viewing.",
      benefits: ["24/7 Recording verification", "Camera angle & focus alignment", "Storage drive health monitoring", "Mobile view remote access support"]
    },
    {
      icon: <Network className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: "Local Network & Wi-Fi Stability Checks",
      description: "Inspection of Cat6 network cabling, gigabit switch performance, Wi-Fi coverage hotspots, router security configurations, and fiber interconnect status.",
      benefits: ["LAN cable termination testing", "Switch & router reboot/config", "Wi-Fi interference mitigation", "Factory & office network uptime"]
    },
    {
      icon: <HardDrive className="w-6 h-6 text-brand-600 dark:text-brand-400" />,
      title: "Routine Data Backup & System Troubleshooting",
      description: "Assistance with automated daily accounting data backups, external hard drive safeguards, antivirus definition updates, and rapid on-site troubleshooting.",
      benefits: ["Accounting data safety setup", "Antivirus definition updates", "Quick peripheral troubleshooting", "Protection against data loss"]
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Priority Repair Dispatch for Local Corridors",
      description: "Immediate priority technician dispatch for AMC contracted clients across Kim, Ankleshwar, and Bharuch industrial and commercial zones.",
      benefits: ["Priority phone & on-site response", "Dedicated technician dispatch", "Kim Char Rasta quick access", "Minimal operational disruption"]
    }
  ];

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-2">
            Annual Maintenance Contracts
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            AMC & Maintenance Services
          </h1>
          <p className="mt-3 text-xs sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Professional preventive care and priority on-site technical support for commercial offices, textile manufacturing plants, and small businesses. Led by Computer Engineer Bharat Chaudhary.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get AMC Quote on WhatsApp</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.whatsappNumber}`}
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs transition-all"
            >
              <Phone className="w-4 h-4 text-brand-500" />
              <span>Call: +91 {BUSINESS_INFO.salesPhone}</span>
            </a>
          </div>
        </div>

        {/* 5 Core AMC Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {amcPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/80 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  {pillar.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3">
                <span className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 px-2.5 py-1 rounded-lg">
                  Contract Coverage Included
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Service Area Highlights Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-700 text-white p-6 sm:p-8 shadow-md mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider">
              Local South Gujarat Presence
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Rapid Response Across Kim, Ankleshwar & Bharuch
            </h2>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Located conveniently at 11, Zam Zam Complex, Kim Char Rasta on the NH-8 corridor, BHUMI TECHNOCARE provides prompt on-site maintenance dispatch with minimal waiting time.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-brand-700 hover:bg-slate-100 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Discuss AMC Terms for Your Office</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer / Notice */}
        <div className="text-center text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
          Notice: AMC contract terms, visit frequencies, and pricing are customized directly according to the number of workstations, CCTV channels, printers, and network nodes at your site.
        </div>

      </div>
    </div>
  );
}
