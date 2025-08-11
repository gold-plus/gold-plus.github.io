import { useEffect } from 'react';

export function useAnchorScroll(navbarHeight: number, thresholdHeight: number) {
  useEffect(() => {
    function isAnchorInViewport(el) {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return (
        rect.top >= navbarHeight + thresholdHeight &&
        rect.bottom <= viewportHeight - (navbarHeight + thresholdHeight)
      );
    }
    function highlightWhenVisible(el, duration = 2000, threshold = 0.1) {
      if (el.tagName !== 'TR') return; // rows can be highlighted
      const observer = new IntersectionObserver((entries, obs) => {
        if (entries[0].isIntersecting) {
          el.classList.add('anchor-target');
          setTimeout(() => {
            el.classList.remove('anchor-target');
          }, duration);
          obs.disconnect();
        }
      }, { threshold });
      observer.observe(el);
    }
    function scrollToAnchorPosition(id) {
      const el = document.getElementById(id);
      if (!el) return;
      if (isAnchorInViewport(el) && !/^H[2-4]$/i.test(el.tagName)) {
        highlightWhenVisible(el, 2000, 0.2);
        return;
      }

      function getTableHeading(table, maxDepth = 5) {
        let prev = table.previousElementSibling;
        let depth = 0;
        while (prev && depth < maxDepth) {
          if (/^H[1-4]$/i.test(prev.tagName)) return prev;
          prev = prev.previousElementSibling;
          depth++;
        }
        return null;
      }

      let scrollTarget = el;
      let alignToCenter = false;
      if (el.tagName === 'TR') {
        alignToCenter = true;
        const table = el.closest('table');
        if (table) {
          const head = getTableHeading(table);
          if (head) {
            const viewportHeight = window.innerHeight - navbarHeight - thresholdHeight;
            const headOffset = head.offsetTop;
            const trOffset = table.offsetTop + el.offsetTop + el.offsetHeight;
            const totalHeight = trOffset - headOffset;
            if (totalHeight <= viewportHeight) {
              scrollTarget = head;
              alignToCenter = false;
            }
          }
        }
      }
      const top = scrollTarget.getBoundingClientRect().top + window.pageYOffset;
      const elementHeight = scrollTarget.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollTo = alignToCenter
        ? (top) - (viewportHeight / 2) + (elementHeight / 2) - (navbarHeight / 2)
        : (top - navbarHeight) - elementHeight;

      window.scrollTo({ top: scrollTo, behavior: 'smooth' });

      // add an anchor highlight when it becomes visible when scrolling in viewport,
      // only followed by an animation lasting up to 2secs
      highlightWhenVisible(el, 2000, 0.2); // so 0.2 = 20% of element should be visible
    }

    function scrollToAnchorOnEvent() {
      if (!window.location.hash) return;
      const id = window.location.hash.substring(1);
      scrollToAnchorPosition(id);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
          e.preventDefault();
          const id = anchor.getAttribute('href').substring(1);
          scrollToAnchorPosition(id);
          history.pushState(null, '', `#${id}`);
      });
    });

    window.addEventListener('load', scrollToAnchorOnEvent);
    window.addEventListener('hashchange', scrollToAnchorOnEvent);
    scrollToAnchorOnEvent();

    return () => {
      window.removeEventListener('load', scrollToAnchorOnEvent);
      window.removeEventListener('hashchange', scrollToAnchorOnEvent);
    };
  }, [navbarHeight]);
}
