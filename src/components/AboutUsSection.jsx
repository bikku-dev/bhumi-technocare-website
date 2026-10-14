import React, { useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { ABOUT_US, BUSINESS_INFO } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutUsSection() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    selector: '.about-card',
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    start: 'top 85%'
  });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Company Profile
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {ABOUT_US.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {ABOUT_US.subtitle}
          </p>
        </div>

        {/* Company Background & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Dedicated Technology Care for South Gujarat
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {ABOUT_US.story}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our workshop is located directly adjacent to National Highway 8 at Kim Char Rasta, providing convenient roadside access for hardware drop-offs as well as rapid field deployment across industrial hubs in Surat, Kosamba, Pipodara, Panoli, Ankleshwar, and Bharuch.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <MapPin className="w-4 h-4 text-accent-500" />
                <span>Kim Char Rasta, NH-8</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <Clock className="w-4 h-4 text-emerald-500" />
                <span>12+ Years Operating</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                <Cpu className="w-4 h-4 text-brand-500" />
                <span>In-House BGA Lab</span>
              </div>
            </div>
          </div>

          {/* Right Image / Workshop Highlight */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-[4/3] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
                alt="Bhumi Technocare Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold text-brand-300">Kim Service Center</div>
                <div className="text-sm font-bold">{BUSINESS_INFO.legalName}</div>
                <div className="text-xs text-slate-300 mt-0.5">{BUSINESS_INFO.address}</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars / Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_US.commitments.map((item, idx) => (
            <div
              key={idx}
              className="about-card rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-start hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/80 flex items-center justify-center mb-4 text-brand-600 dark:text-brand-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
