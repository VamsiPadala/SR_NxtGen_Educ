"use client"

import { useEffect } from "react"

export function DevToolHider() {
  useEffect(() => {
    const hideDevTools = () => {
      const selectors = [
        '#nextjs-portal',
        '[data-nextjs-portal]',
        'next-dev-overlay',
        '#turbopack-portal',
        '[data-turbopack-portal]',
        '[data-nextjs-feedback-button]',
        '.nextjs-toast',
        '#__next-feedback-button',
        '[data-vercel-toolbar]',
        '[data-vercel-toolbar-root]',
        'vercel-live-feedback',
        '#vercel-live-feedback-root'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          // Instead of just removing, we also hide it absolutely
          if (el instanceof HTMLElement) {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
            el.style.pointerEvents = 'none';
          }
          el.remove();
        });
      });
    };

    // Run immediately
    hideDevTools();

    // Run every 500ms to catch it if it reappears
    const interval = setInterval(hideDevTools, 500);

    // Also watch for DOM changes
    const observer = new MutationObserver(hideDevTools);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return null;
}
