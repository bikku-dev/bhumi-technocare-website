import React, { useRef, useState } from 'react';
import { 
  Laptop, 
  ShieldAlert, 
  Printer, 
  Briefcase, 
  Network, 
  Database,
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServiceOverviewStrip({ onOpenEnquiry }) {
  const containerRef = useRef(null);
  const [fastIssue, setFastIssue] = useState('Laptop Chip-Level / Screen Repair');
  const [fastArea, setFastArea] = useState('Kim Char Rasta');

  useScrollReveal(containerRef, {
    selector: '.overview-pillar-card',
    y: 25,
    stagger: 0.08,
    duration: 0.6,
    start: 'top 88%'
  });

  const pillars = [
    {
      title: "Laptop & Desktop",
      subtitle: "Motherboard BGA & Screen Fix",
      icon: Laptop,
      color: "text-brand-500",
      bg: "bg-brand-500/10",
      targetService: "Laptop & Desktop Chip-Level Repair"
    },
    {
      title: "CCTV & Security",
      subtitle: "4K ColorVu & NVR Setup",
      icon: ShieldAlert,
      color: "text-accent-500",
      bg: "bg-accent-500/10",
      targetService: "CCTV & Electronic Security Solutions"
    },
    {
      title: "Printer & Toner",
      subtitle: "Laserjet Repair & Refill",
      icon: Printer,
      color: "text-sky-500",
      bg: "bg-sky-500/10",
      targetService: "Printer Repair & Toner Refilling"
    },
    {
      title: "Corporate AMC",
      subtitle: "Guaranteed 2-4 Hr SLA",
      icon: Briefcase,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      targetService: "Annual Maintenance Contracts (AMC)"
    },
    {
      title: "Networking & Wi-Fi",
      subtitle: "Cat6 Cabling & Routers",
      icon: Network,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      targetService: "Networking, Routers & Server Setup"
    },
    {
      title: "Data Recovery",
      subtitle: "HDD Retrieval & Antivirus",
      icon: Database,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      targetService: "Data Recovery & Cyber Antivirus"
    }
  ];

  const handleFastSubmit = (e) => {
    e.preventDefault();
    onOpenEnquiry({
      service: fastIssue,
      location: fastArea,
      details: `Quick estimate requested from overview bar for ${fastIssue} in ${fastArea}.`
    });
  };

  return (
    <section 
      ref={containerRef}
      className="py-12 sm:py-16 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Top Header of Overview */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 block mb-1">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Core Technical Service Pillars
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Certified hardware engineers delivering precision repairs, security installations, and corporate IT management.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => onOpenEnquiry({ service: item.targetService })}
                className="overview-pillar-card p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-semibold text-brand-600 dark:text-brand-400">
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Quick Estimator Strip */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 shadow-sm">
          <form onSubmit={handleFastSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            <div className="md:col-span-4 min-w-0">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Fast Quote Selector
              </label>
              <select
                value={fastIssue}
                onChange={(e) => setFastIssue(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
              >
                <option value="Laptop Chip-Level / Screen Repair">Laptop Chip-Level / Screen Repair</option>
                <option value="SSD Speed Boost (10x Faster)">SSD Speed Boost (10x Faster)</option>
                <option value="CCTV Security Camera Setup">CCTV Security Camera Setup (4/8 Camera)</option>
                <option value="Printer Repair & Toner Refilling">Printer Repair & Toner Refilling</option>
                <option value="Corporate AMC Maintenance Quote">Corporate AMC Maintenance Quote</option>
                <option value="Emergency Data Recovery">Emergency Data Recovery</option>
              </select>
            </div>

            <div className="md:col-span-4 min-w-0">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Nearest Area / City
              </label>
              <select
                value={fastArea}
                onChange={(e) => setFastArea(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-brand-500"
              >
                <option value="Kim Char Rasta">Kim Char Rasta (NH-8 Hub)</option>
                <option value="Surat City">Surat City & Outskirts</option>
                <option value="Ankleshwar GIDC">Ankleshwar GIDC</option>
                <option value="Bharuch">Bharuch Commercial</option>
                <option value="Kosamba">Kosamba Industrial Area</option>
                <option value="Panoli">Panoli GIDC Corridor</option>
              </select>
            </div>

            <div className="md:col-span-4 pt-1 md:pt-5">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm active:scale-95"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Get Instant WhatsApp Estimate</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
