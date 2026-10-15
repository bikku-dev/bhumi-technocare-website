import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  UserCheck, 
  ShieldCheck, 
  Clock, 
  Cpu, 
  Award, 
  CheckCircle2, 
  MessageSquare,
  Phone
} from 'lucide-react';
import { ABOUT_US_CONTENT, BUSINESS_INFO, BUSINESS_MODEL_PILLARS } from '../data/websiteData';

export default function AboutPage({ onBack }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Bharat Chaudhary, I am reaching out through the BHUMI TECHNOCARE website."
  )}`;

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
      description: "Routine upgrades, software installations, and toner refills are handled promptly, while complex chip-level jobs receive focused 24–48 hour turnarounds."
    },
    {
      title: "Prompt Local Support",
      description: "Strategically located at Kim Char Rasta on NH-8, enabling quick on-site technician dispatch across Kim, Ankleshwar, and Bharuch."
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
            Company Profile & Leadership
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About {BUSINESS_INFO.name}
          </h1>
          <p className="mt-2 text-xs sm:text-base text-slate-600 dark:text-slate-400">
            {ABOUT_US_CONTENT.subtitle}
          </p>
        </div>

        {/* Founder & Business Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800/60">
              <UserCheck className="w-4 h-4" />
              <span>Founded & Led by Bharat Chaudhary (Computer Engineer)</span>
            </div>

            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
              Dedicated Technology Care & Infrastructure for South Gujarat
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {ABOUT_US_CONTENT.leadProfile}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {ABOUT_US_CONTENT.commitmentText} We actively provide on-site diagnostics, new hardware installations, and regular preventive maintenance for commercial offices, textile industries, and local businesses.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <MapPin className="w-4 h-4 text-rose-500" />
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

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect with Bharat Chaudhary</span>
              </a>
            </div>
          </div>

          {/* Right Image: Official Visiting Card */}
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

        {/* Business Model: Sales, Service, Rent */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Our 3-Pillar Business Model
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Structured to support one-time procurement, continuous repairs, and temporary rentals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS_MODEL_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
                    {pillar.title}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.badge}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <div className="space-y-1.5">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Commitments */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Why Choose BHUMI TECHNOCARE
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Built on transparency, authentic hardware, and responsive local technical service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCommitments.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-start shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
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

      </div>
    </div>
  );
}
