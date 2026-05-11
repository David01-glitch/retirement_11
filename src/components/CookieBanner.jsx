import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const KEY = 'rhh_cookie_consent_v1';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      setShow(true);
    }
  }, []);

  const decide = (value) => {
    try { localStorage.setItem(KEY, value); } catch {}
    trackEvent('cookie_consent', { choice: value });
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: value === 'accept' ? 'granted' : 'denied',
        analytics_storage: value === 'accept' ? 'granted' : 'denied',
      });
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 inset-x-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[60]"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="bg-cream-50 border border-cream-200 shadow-warm rounded-2xl p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-olive-500/15 grid place-items-center shrink-0">
                <Cookie className="w-5 h-5 text-olive-700" />
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-lg text-wood-800 mb-1">A small note on cookies</h3>
                <p className="text-sm text-wood-800/75 leading-relaxed">
                  We use cookies to remember your preferences and to learn what content helps our community. You
                  can read more in our{' '}
                  <Link to="/privacy" className="text-olive-700 underline font-medium">Privacy Policy</Link>.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button onClick={() => decide('accept')} className="px-4 py-2 rounded-full bg-olive-600 text-cream-50 text-sm font-semibold hover:bg-olive-700 transition">
                    Accept all
                  </button>
                  <button onClick={() => decide('decline')} className="px-4 py-2 rounded-full bg-cream-100 text-wood-800 text-sm font-semibold hover:bg-cream-200 transition">
                    Decline
                  </button>
                </div>
              </div>
              <button onClick={() => decide('decline')} aria-label="Close" className="p-1 rounded-full hover:bg-cream-100 text-wood-600">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
