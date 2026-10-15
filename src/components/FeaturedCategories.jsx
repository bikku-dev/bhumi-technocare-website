import React, { useRef } from 'react';
import { 
  Laptop, 
  Printer, 
  Video, 
  Network, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Zap,
  Wrench
} from 'lucide-react';
import { PRODUCTS_AND_SOLUTIONS, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeaturedCategories({ onViewAll, onRequestQuote }) {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.asymmetric-card',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  const handleEnquire = (title) => {
    if (onRequestQuote) {
      onRequestQuote({ service: title });
    } else {
      const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
        `Hello Bhumi Technocare, I am interested in inquiring about ${title}. Please provide details.`
      )}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-white dark:bg-slate-950 transition-colors border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b border-slate-200/80 dark:border-slate-800 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
              Hardware • Security • Networking
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Core Solutions & Offerings
            </h2>
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Tailored technology infrastructure for modern operations. Sourced from authentic global brands, configured by qualified computer engineers.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 hover:underline cursor-pointer flex-shrink-0"
          >
            <span>View Full Catalog (All 6 Divisions)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Asymmetric Varied Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Large Featured Split Card (8 cols on lg) - Computers & Laptops */}
          <div className="asymmetric-card lg:col-span-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xs hover:border-brand-500/50 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 group">
            <div className="md:w-1/2 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 text-[11px] font-bold uppercase tracking-wider">
                <Laptop className="w-3.5 h-3.5" />
                <span>Hardware Division</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Computers, Laptops & Workstations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Brand-new business machines, certified pre-owned workstations, rental fleets, and chip-level motherboard troubleshooting led by qualified engineers.
              </p>
              
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Chip-Level Repair</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>SSD & RAM Upgrades</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Rental Workstations</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Authentic Spares</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleEnquire('Computers & Laptops')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire Pricing & Availability</span>
                </button>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80">
                <img 
                  src="/assets/catalog/product-desktop-laptop-computers.jpg" 
                  alt="Computers & Laptops"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-semibold border border-white/10">
                  HP • Dell • Acer • Lenovo • Intel
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Vertical Spotlight Card (4 cols on lg) - CCTV & Surveillance */}
          <div className="asymmetric-card lg:col-span-4 rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xs hover:border-brand-500/50 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 group">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 mb-5">
                <img 
                  src="/assets/enhanced/service-cctv-dome-camera.jpg" 
                  alt="CCTV & Surveillance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-brand-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-bold uppercase tracking-wider">
                  Surveillance
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                CCTV Security & Surveillance
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                HD ColorVu night vision, IP dome & bullet cameras, multi-channel NVRs, and live smartphone synchronization.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>24/7 ColorVu Night Vision</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Smartphone Live View Sync</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Hard Drive Video Storage</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleEnquire('CCTV & Surveillance')}
              className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Get CCTV Setup Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Medium Card (4 cols on lg) - Networking & Structured Cabling */}
          <div className="asymmetric-card lg:col-span-4 rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xs hover:border-brand-500/50 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 group">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 mb-5">
                <img 
                  src="/assets/enhanced/product-fiber-patch-cords-sc.jpg" 
                  alt="Networking & Fiber Connectivity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-sky-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-bold uppercase tracking-wider">
                  Connectivity
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                Networking & Fiber Infrastructure
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                High-speed Cat6 LAN cabling, server rack installations, gigabit switches, and single-core optical fiber splicing.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>D-Link & TP-Link Gigabit Routers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Optical Fiber Patch Cords & Splicing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Industrial & Office Wi-Fi Mesh</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleEnquire('Networking & Connectivity')}
              className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Enquire Network Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Medium Card (4 cols on lg) - Laser Printers & Toners */}
          <div className="asymmetric-card lg:col-span-4 rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xs hover:border-brand-500/50 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 group">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 mb-5">
                <img 
                  src="/assets/enhanced/product-hp-laserjet-m126a.jpg" 
                  alt="Printer Solutions & Supplies"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-amber-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-bold uppercase tracking-wider">
                  Printing
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                Laser Printers & Document Solutions
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Multifunction HP/Canon laser printers, barcode label printers, OEM toner refills, and Xerox copier rentals.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>HP LaserJet Sales & Service</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>High-Yield Toner Cartridges</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Barcode Thermal Label Printers</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleEnquire('Printer Solutions')}
              className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Enquire Printers & Toners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 5: Medium Card (4 cols on lg) - Biometric Access & IT Software */}
          <div className="asymmetric-card lg:col-span-4 rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xs hover:border-brand-500/50 hover:shadow-lg dark:hover:shadow-black/50 transition-all duration-300 group">
            <div>
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 mb-5">
                <img 
                  src="/assets/enhanced/product-mantra-mfs110-biometric.jpg" 
                  alt="Biometrics & Security Software"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-purple-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-white text-[10px] font-bold uppercase tracking-wider">
                  Access & Security
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                Biometrics & Licensed Software
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Mantra biometric attendance machines, electronic magnetic door locks, and licensed Quick Heal endpoint security.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 mb-5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Mantra MFS110 Biometric Devices</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Smart Electronic Door Access</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>Quick Heal Licensed Antivirus</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleEnquire('Biometrics & Software')}
              className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Enquire Biometrics & Software</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
