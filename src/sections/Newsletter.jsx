import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import Reveal from '../components/Reveal';
import { trackEvent } from '../utils/analytics';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    trackEvent('newsletter_signup', { source: 'main' });
    setDone(true);
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="container-wide">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-olive shadow-warm p-10 sm:p-16">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-terracotta-400/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cream-50/15 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-cream-50">
              <span className="heading-eyebrow !text-cream-100/90">Stay in the loop</span>
              <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">
                A gentle letter, every Sunday morning.
              </h2>
              <p className="mt-5 text-lg text-cream-100/90 max-w-md">
                Three tutorials, one story, one beautiful photo from the community. No noise, no clutter — just
                inspiration for the week ahead.
              </p>
            </div>

            <form onSubmit={onSubmit} className="bg-cream-50 rounded-3xl p-6 sm:p-8 shadow-soft">
              {!done ? (
                <>
                  <label className="block font-serif text-2xl text-wood-800 mb-4">Join 12,000+ readers</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wood-600" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-12 pr-4 py-4 rounded-full bg-cream-100 border-2 border-transparent focus:border-olive-500 outline-none text-wood-800"
                      />
                    </div>
                    <motion.button whileTap={{ scale: 0.96 }} className="btn-primary !bg-terracotta-500 hover:!bg-terracotta-600">
                      Subscribe
                    </motion.button>
                  </div>
                  <p className="mt-4 text-sm text-wood-600">No spam. Unsubscribe in one click.</p>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-olive-500 grid place-items-center mb-4">
                    <Check className="w-8 h-8 text-cream-50" strokeWidth={3} />
                  </div>
                  <h3 className="font-serif text-2xl text-wood-800">Welcome to the porch!</h3>
                  <p className="mt-2 text-wood-600">We'll see you on Sunday morning.</p>
                </motion.div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
