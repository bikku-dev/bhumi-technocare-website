import React, { useState, useEffect } from 'react';
import { prefersReducedMotion } from '../utils/gsapConfig';

export default function HeroVideoBackground() {
  const [videoError, setVideoError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Cinematic Static & Animated Gradient Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105 filter brightness-[0.3] dark:brightness-[0.2] contrast-[1.05]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80')`
        }}
      />

      {/* HTML5 Video Layer (Muted, Autoplay, Loop) */}
      {!reducedMotion && !videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover opacity-25 dark:opacity-30 filter brightness-[0.35] dark:brightness-[0.25] transition-opacity duration-700"
        >
          {/* High-quality tech/hardware loop */}
          <source src="/videos/hero-tech.mp4" type="video/mp4" />
        </video>
      )}

      {/* Foundational Base Scrim to prevent washout */}
      <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-[0.5px]" />

      {/* Cinematic Overlay - Dark Mode: Deep rich blue-black gradient for ultimate contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-950/92 to-slate-950/80 dark:block hidden" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950 dark:block hidden" />

      {/* Cinematic Overlay - Light Mode: Clean high-contrast veil with soft frosted backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/90 to-white/82 dark:hidden block" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-white/80 to-slate-50 dark:hidden block" />

      {/* Ambient Cyber / Electric Blue Spotlights */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-accent-500/10 dark:bg-accent-500/10 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}
