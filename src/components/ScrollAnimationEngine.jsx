'use client';

import { useEffect } from 'react';

export default function ScrollAnimationEngine() {
  useEffect(() => {
    // Select all interactive cards, headers, boxes, items to animate
    const selector = [
      '.section-header',
      '.system-card',
      '.velocity-box',
      '.odyssey-stage',
      '.hero-metric-item',
      '.benchmark-item',
      '.cert-card',
      '.contact-card',
      '.glass-panel',
      '.hero-editorial-center',
      '.hero-stage-wrapper',
      '[data-scroll-animate]',
    ].join(', ');

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-scrolled-in');
          // Once animated, keep it visible or re-trigger if desired
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    });

    const attachObservers = () => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, index) => {
        // Automatically add scroll animation base class if not already added
        if (!el.classList.contains('scroll-element')) {
          el.classList.add('scroll-element');
          // Add staggered delay to sibling cards or items
          if (!el.style.transitionDelay && index % 4 !== 0) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
          }
        }
        observer.observe(el);
      });
    };

    // Attach initially and after brief hydration delay
    attachObservers();
    const timeoutId = setTimeout(attachObservers, 300);

    // Watch for DOM mutations (like filter tabs changing)
    const mutationObserver = new MutationObserver(() => {
      attachObservers();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Add dynamic scroll velocity effect to document
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let velocityTimer = null;

    const handleScrollVelocity = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      document.body.classList.add('is-actively-scrolling');
      if (velocityTimer) clearTimeout(velocityTimer);
      velocityTimer = setTimeout(() => {
        document.body.classList.remove('is-actively-scrolling');
      }, 180);
    };

    window.addEventListener('scroll', handleScrollVelocity, { passive: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timeoutId);
      if (velocityTimer) clearTimeout(velocityTimer);
      window.removeEventListener('scroll', handleScrollVelocity);
    };
  }, []);

  return null;
}
