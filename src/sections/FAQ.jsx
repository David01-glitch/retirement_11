import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FAQS } from '../data/content';
import Reveal from '../components/Reveal';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-cream-100/60 bg-grain">
      <div className="container-wide grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2">
          <span className="heading-eyebrow">Common Questions</span>
          <h2 className="section-title mt-3">Gentle answers,<br /> honest guidance</h2>
          <p className="mt-5 text-lg text-wood-800/70">
            The questions members ask most often. If you don't see yours, write to us — we reply within a day.
          </p>
        </Reveal>

        <div className="lg:col-span-3 space-y-4">
          {FAQS.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="wood-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 group"
              >
                <span className="font-serif text-lg sm:text-xl text-wood-800">{f.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className="shrink-0 w-10 h-10 rounded-full bg-cream-100 grid place-items-center group-hover:bg-olive-500 group-hover:text-cream-50 transition"
                >
                  <Plus className="w-5 h-5" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-wood-800/80 leading-relaxed">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
