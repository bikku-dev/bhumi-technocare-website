import React, { useRef } from 'react';
import { 
  Wrench, 
  Video, 
  Network, 
  Printer, 
  Fingerprint, 
  ShieldCheck, 
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TechnicalCapabilities() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.capability-card-item',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const capabilities = [
    {
      icon: <Wrench className="w-5 h-5 text-brand-500 dark:text-brand-400" />,
      title: "Chip-Level Diagnostics & Laptop Repair",
      description: "Motherboard troubleshooting, power IC diagnostics, screen & keyboard replacements, thermal paste servicing, and high-speed SSD/RAM upgrades.",
      tag: "Hardware Service"
    },
    {
      icon: <Video className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
      title: "CCTV Installation & Mobile View Sync",
      description: "HD Analog and IP surveillance setup, 24/7 ColorVu night vision, multi-channel DVR/NVR configuration, and live mobile phone viewing connection.",
      tag: "Security Setup"
    },
    {
      icon: <Network className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
      title: "Structured Cat6 LAN & Fiber Optic Splicing",
      description: "Commercial network cabling, rack dressing, gigabit switch configuration, optical fiber patch cords, single-core splicing, and factory Wi-Fi coverage.",
      tag: "Network Engineering"
    },
    {
      icon: <Printer className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
      title: "Laser Printer Servicing & Toner Refilling",
      description: "Pickup roller replacement, logic board repair, thermal barcode label printer setup, OEM toner cartridge refilling, and Xerox copier rentals.",
      tag: "Print & Supplies"
    },
    {
      icon: <Fingerprint className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
      title: "Biometric Attendance & Electronic Door Locks",
      description: "Employee fingerprint and card attendance machine setup, software integration, magnetic access control locks, and biometric door systems.",
      tag: "Access Control"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
      title: "Accounting Data Backup & Antivirus Setup",
      description: "Multi-user LAN accounting software configurations, automated daily database backup safeguards, and genuine Quick Heal antivirus licensing.",
      tag: "Software & Security"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-slate-50/70 dark:bg-slate-950 transition-colors border-b border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Repair & Installation Capabilities
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Hands-on technical engineering, certified spare parts, and on-site servicing led by Computer Engineer Bharat Chaudhary.
          </p>
        </div>

        {/* 6 Capabilities Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((item, idx) => {
            const whatsappMsg = `Hello Bhumi Technocare, I would like to inquire about your "${item.title}" service.`;
            const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            return (
              <div
                key={idx}
                className="capability-card-item rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-2xs hover:shadow-md hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center shadow-2xs">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>On-Site Available</span>
                  </span>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
