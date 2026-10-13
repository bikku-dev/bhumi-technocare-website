import { useEffect } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../utils/gsapConfig';

/**
 * Reusable hook for triggering staggered reveals on elements
 * using GSAP ScrollTrigger and React-scoped gsap.context().
 */
export function useScrollReveal(containerRef, options = {}) {
  const {
    selector = '.reveal-item',
    y = 30,
    stagger = 0.1,
    duration = 0.7,
    delay = 0,
    start = 'top 88%',
    once = true,
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    // Accessibility check: immediately show if reduced motion preferred
    if (prefersReducedMotion()) {
      const items = containerRef.current.querySelectorAll(selector);
      items.forEach((item) => {
        item.style.opacity = '1';
        item.style.transform = 'none';
      });
      return;
    }

    // Component-scoped animation context
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: richer movement and stagger
      mm.add('(min-width: 768px)', () => {
        const items = containerRef.current.querySelectorAll(selector);
        if (items.length === 0) return;

        gsap.fromTo(
          items,
          { opacity: 0, y: y },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: stagger,
            delay: delay,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: start,
              toggleActions: once ? 'play none none none' : 'play none none reverse',
            },
          }
        );
      });

      // Mobile: lighter, faster movement to prevent jank
      mm.add('(max-width: 767px)', () => {
        const items = containerRef.current.querySelectorAll(selector);
        if (items.length === 0) return;

        gsap.fromTo(
          items,
          { opacity: 0, y: Math.min(y, 18) },
          {
            opacity: 1,
            y: 0,
            duration: Math.min(duration, 0.5),
            stagger: Math.min(stagger, 0.06),
            delay: delay,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 92%',
              toggleActions: once ? 'play none none none' : 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    // Clean up animation on unmount
    return () => ctx.revert();
  }, [containerRef, selector, y, stagger, duration, delay, start, once]);
}

export default useScrollReveal;
