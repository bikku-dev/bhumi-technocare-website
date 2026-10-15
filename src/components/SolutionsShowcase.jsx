import React, { useRef } from 'react';
import { 
  Building2, 
  Factory, 
  Store, 
  Home, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Video,
  Network,
  Printer,
  Laptop
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SolutionsShowcase({ onRequestQuote }) {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.showcase-card-item',
    y: 20,
    stagger: 0.1,
    duration: 0.55,
    start: 'top 85%'
  });

  const domains = [
    {
      id: 'industrial-textile',
      category: 'Kim & Ankleshwar GIDC',
      title: 'Textile & Industrial Manufacturing Units',
      description: 'Rugged IT infrastructure engineered for high-dust, round-the-clock factory environments along the South Gujarat industrial belt.',
      image: '/assets/catalog/product-networking-security.jpg',
      icon: <Factory className="w-5 h-5 text-brand-600 dark:text-brand-400" />,
      deliverables: [
        'Dust-resistant HD ColorVu CCTV coverage across weaving & processing sheds',
        'Optical fiber cabling backbone & rack-mounted gigabit switches',
        'Thermal barcode label printers & industrial ribbons for roll tracking',
        'Emergency breakdown on-site technician dispatch within hours'
      ]
    },
    {
      id: 'commercial-offices',
      category: 'Kim, Surat & Bharuch',
      title: 'Commercial Trading & Corporate Offices',
      description: 'Zero-downtime workplace technology setups ensuring smooth accounting, uninterrupted billing, and secure business communications.',
      image: '/assets/catalog/service-amc-consultancy.jpg',
      icon: <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      deliverables: [
        'Complete desktop & laptop fleets with chip-level motherboard support',
        'Structured Cat6 network cabling & multi-room Wi-Fi mesh routing',
        'Automated local & cloud accounting data backup (Tally / ERP)',
        'Comprehensive Annual Maintenance Contracts (AMC) with scheduled visits'
      ]
    },
    {
      id: 'retail-logistics',
      category: 'NH-8 Highway Hubs',
      title: 'Retail Showrooms & Logistics Warehouses',
      description: 'Fast-paced point-of-sale hardware and staff management systems keeping sales counters and dispatch docks running without delay.',
      image: '/assets/enhanced/product-mantra-mfs110-biometric.jpg',
      icon: <Store className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      deliverables: [
        'Mantra biometric fingerprint & RFID staff attendance systems',
        'Barcode scanners, thermal receipt printers & label rolls',
        'Quick Heal licensed endpoint security & anti-ransomware protection',
        'Same-day supply of OEM toner cartridges and Xerox paper reams'
      ]
    },
    {
      id: 'residential-societies',
      category: 'Townships & Societies',
      title: 'Residential Complexes & Educational Premises',
      description: 'Reliable security perimeters and campus networking ensuring complete safety, visitor monitoring, and crystal-clear surveillance.',
      image: '/assets/enhanced/service-cctv-dome-camera.jpg',
      icon: <Home className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      deliverables: [
        'Multi-channel perimeter CCTV with 24/7 mobile phone live viewing',
        'Smart electronic biometric door locks & digital access control',
        'Intercom audio/video systems for security gates and main entries',
        'Projector and large interactive display setups for classrooms & boardrooms'
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 bg-white dark:bg-slate-950 transition-colors border-b border-slate-200/80 dark:border-slate-800"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/60 text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            Deployment Domains
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Solutions Tailored For Your Industry
          </h2>
          <p className="mt-2 text-xs sm:text-sm lg:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Proven IT hardware, security surveillance, and network installations adapted specifically to the operational needs of South Gujarat enterprises.
          </p>
        </div>

        {/* 2x2 Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="showcase-card-item rounded-3xl bg-slate-50/70 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-2xs hover:shadow-xl dark:hover:shadow-black/60 hover:border-brand-500/50 dark:hover:border-brand-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner with Badge */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-b border-slate-200/80 dark:border-slate-800">
                  <img 
                    src={domain.image} 
                    alt={domain.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Top Location Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-bold text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1.5">
                    {domain.icon}
                    <span>{domain.category}</span>
                  </div>

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                      {domain.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {domain.description}
                  </p>

                  <div className="space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Standard Package Deliverables:
                    </div>
                    {domain.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onRequestQuote && onRequestQuote({ service: domain.title })}
                  className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:border-brand-500/40"
                >
                  <span>Request Custom Infrastructure Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
