import React, { useRef } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  UserCheck, 
  CheckCircle2,
  Award
} from 'lucide-react';
import { ABOUT_US_CONTENT, BUSINESS_INFO } from '../data/websiteData';
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

  const coreCommitments = [
    {
      title: "Honest Diagnostics First",
      description: "We inspect your equipment thoroughly and explain the actual issue before starting any repair. No unnecessary component replacements or surprise charges."
    },
    {
      title: "Authentic Hardware Spares",
      description: "All replacement screens, batteries, storage drives, and surveillance equipment are sourced from genuine manufacturer channels with verified warranty."
    },
    {
      title: "Fast Turnaround Time",
      description: "Routine upgrades, software installations, and toner refills are handled same-day, while complex chip-level jobs receive focused 24–48 hour turnarounds."
    },
    {
      title: "Prompt Local Support",
      description: "Strategically located at Kim Char Rasta on NH-8, enabling quick on-site technician dispatch across Kim, Ankleshwar, and Bharuch."
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-12 sm:py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Company Profile
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {ABOUT_US_CONTENT.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {ABOUT_US_CONTENT.subtitle}
          </p>
        </div>

        {/* Company Background & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/60">
              <UserCheck className="w-4 h-4" />
              <span>Founded & Led by Bharat Chaudhary (Computer Engineer)</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              Dedicated Technology Care & Infrastructure for South Gujarat
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {ABOUT_US_CONTENT.leadProfile}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {ABOUT_US_CONTENT.commitmentText} We actively provide on-site diagnostics, new hardware installations, and regular preventive maintenance for commercial offices, textile industries, and local businesses.
            </p>

            {/* Quick Fact Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <MapPin className="w-4 h-4 text-accent-500" />
                <span>11, Zam Zam Complex, Kim</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>Kim • Ankleshwar • Bharuch</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <Cpu className="w-4 h-4 text-brand-500" />
                <span>Sales • Service • Rent</span>
              </div>
            </div>
          </div>

          {/* Right Image / Official Business Identity Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 group">
              <img
                src="/assets/enhanced/bhumi-visiting-card-horizontal.jpg"
                alt="BHUMI TECHNOCARE Official Visiting Card - Bharat Chaudhary"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    Bharat Chaudhary (Computer Engineer)
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    BHUMI TECHNOCARE • {BUSINESS_INFO.tagline}
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full flex-shrink-0">
                  Verified Contact
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCommitments.map((item, idx) => (
            <div
              key={idx}
              className="about-card rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-start hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs"
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
