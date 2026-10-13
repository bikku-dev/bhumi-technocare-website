import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapConfig';

/**
 * Initializes and manages a single Lenis smooth scroll instance
 * fully synchronized with GSAP ScrollTrigger.
 */
export function useSmoothScroll() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // If reduced motion is requested, do not initialize smooth scroll
    if (prefersReducedMotion()) {
      return;
    }

    // Single instance setup
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sync GSAP ticker with Lenis raf
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Smooth scroll for anchor navigation links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const hash = target.getAttribute('href');
      if (!hash || hash === '#') return;

      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element, {
          offset: -75,
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Update URL hash without jumping
        if (window.history.pushState) {
          window.history.pushState(null, null, hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}

export default useSmoothScroll;
