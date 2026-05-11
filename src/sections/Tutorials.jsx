import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { TUTORIALS } from '../data/content';
import Reveal from '../components/Reveal';

export default function Tutorials() {
  return (
    <section id="tutorials" className="py-24 sm:py-32 bg-cream-50">
      <div className="container-wide">
        <Reveal className="max-w-2xl mb-12">
          <span className="heading-eyebrow">Video Tutorials</span>
          <h2 className="section-title mt-3">Watch, pause, build alongside us</h2>
          <p className="mt-5 text-lg text-wood-800/70">
            Slow-paced, captioned, and shot in good light. Each tutorial is designed to be paused and revisited.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {TUTORIALS.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="wood-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={t.img} alt={t.title} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-wood-800/30 group-hover:bg-wood-800/40 transition" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 grid place-items-center"
                >
                  <span className="w-16 h-16 rounded-full bg-cream-50/95 shadow-warm grid place-items-center group-hover:bg-terracotta-500 transition">
                    <Play className="w-6 h-6 text-wood-800 group-hover:text-cream-50 fill-current ml-1" />
                  </span>
                </motion.div>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-wood-800/80 text-cream-50 text-xs font-semibold">
                  {t.duration}
                </span>
                <span className="absolute top-3 left-3 tag bg-cream-50/90 !text-wood-800">{t.category}</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-wood-800">{t.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
