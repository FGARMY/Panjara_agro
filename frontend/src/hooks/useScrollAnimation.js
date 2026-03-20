import { useEffect } from 'react';

const SELECTORS = '.fade-in, .fade-in-left, .fade-in-right';

export default function useScrollAnimation() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: '300px' // Trigger much earlier to avoid perceived lag
      }
    );

    const checkAndObserve = () => {
      const elements = document.querySelectorAll(SELECTORS);
      elements.forEach((el) => {
        // Initial visibility check (for elements already in view)
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (!el.classList.contains('visible')) {
            el.classList.add('visible');
          }
        }

        if (!el.dataset.scrollObserved) {
          el.dataset.scrollObserved = '1';
          io.observe(el);
        }
      });
    };

    // Run immediately and then on a very short delay to catch late renders
    checkAndObserve();
    const timeoutId = setTimeout(checkAndObserve, 100);

    // Watch for DOM changes
    const mo = new MutationObserver(() => {
      checkAndObserve();
    });

    mo.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // Final fallback for hard refreshes once all assets load
    window.addEventListener('load', checkAndObserve);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('load', checkAndObserve);
      clearTimeout(timeoutId);
    };
  }, []);

  return { controls: {}, hasAnimated: true };
}
