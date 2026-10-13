import React, { useState, useRef, useEffect } from 'react';
import { 
  Laptop, 
  ShieldAlert, 
  Printer, 
  Briefcase, 
  Network, 
  Database,
  CheckCircle, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES } from '../data/websiteData';
import { getQuickWhatsAppLink } from '../utils/whatsapp';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ScrollTrigger } from '../utils/gsapConfig';

export default function ServicesSection({ onOpenEnquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  const categories = ['All', 'Hardware Service', 'Security Systems', 'Office Automation', 'Enterprise IT Support', 'Infrastructure', 'Security & Recovery'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  // Staggered reveal for services cards
  useScrollReveal(sectionRef, {
    selector: '.service-card',
    y: 35,
    stagger: 0.1,
    duration: 0.65,
    start: 'top 85%'
  });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [activeCategory]);

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500" />;
      case 'Printer': return <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />;
      case 'Network': return <Network className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />;
      case 'Database': return <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />;
      default: return <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500" />;
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800/80 w-full max-w-full overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full min-w-0">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-600 dark:text-brand-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Business & Home Solutions</span>
          </div>
          <h2 className="section-headline font-black text-slate-900 dark:text-white tracking-tight">
            Featured Technical Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            From single-laptop chip repairs to multi-camera surveillance and plant-wide IT infrastructure, Bhumi Technocare provides certified, high-speed, and guaranteed service.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] sm:text-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl transition-all font-medium ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="service-card group rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl dark:hover:shadow-brand-950/40 hover:-translate-y-1.5 min-w-0"
            >
              {/* Image banner */}
              <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-800">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                  <span className="bg-brand-600 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md shadow">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <div className="p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 transition-transform group-hover:scale-105">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[11px] bg-slate-900/90 backdrop-blur-md text-emerald-400 border border-slate-700 px-2 py-0.5 rounded-lg font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {service.turnaround}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] text-brand-600 dark:text-brand-400 font-bold uppercase tracking-wider mb-1">
                    {service.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="mt-3.5 space-y-1.5 border-t border-slate-200 dark:border-slate-800/80 pt-3">
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      Highlights:
                    </div>
                    {service.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Common issues pills */}
                  {service.popularIssues && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/60">
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mb-1 font-medium">Common repairs:</div>
                      <div className="flex flex-wrap gap-1">
                        {service.popularIssues.map((issue, idx) => (
                          <span key={idx} className="text-[9px] sm:text-[10px] bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 px-1.5 py-0.5 rounded border border-slate-300/60 dark:border-slate-700/60">
                            {issue}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Pricing & CTAs */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-[11px]">Estimate:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs truncate max-w-[170px] text-right">{service.priceRange}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenEnquiry({
                        service: service.title,
                        details: `Enquiry regarding ${service.title}.`
                      })}
                      className="w-full flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-2 px-1.5 rounded-xl shadow transition-all active:scale-95 truncate"
                    >
                      <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">Enquiry Form</span>
                    </button>

                    <a
                      href={getQuickWhatsAppLink(service.title, `I want to book an inspection or repair for ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs py-2 px-1.5 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors active:scale-95 truncate"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-brand-500 flex-shrink-0" />
                      <span className="truncate">Direct Chat</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 dark:from-brand-900/60 dark:via-slate-900 dark:to-slate-900 border border-slate-200 dark:border-brand-500/30 p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Have a unique hardware fault or industrial equipment problem?</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Send us a photo or short video clip on WhatsApp for a fast remote analysis by our master engineer.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry({
              service: 'Custom Fault / Video Diagnosis',
              details: 'I have a unique issue and would like to share photos with an engineer.'
            })}
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white dark:text-slate-950 dark:bg-brand-500 dark:hover:bg-brand-400 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow transition-all active:scale-95"
          >
            <span>Ask Master Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
