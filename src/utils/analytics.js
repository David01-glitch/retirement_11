export const trackEvent = (action, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
};

export const trackPageView = (page) => {
  trackEvent('page_view', { page_path: page, page_title: document.title });
};
