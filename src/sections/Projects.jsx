import { motion } from 'framer-motion';
import { Clock, Gauge, Package } from 'lucide-react';
import { PROJECTS } from '../data/content';
import Reveal from '../components/Reveal';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-cream-50">
      <div className="container-wide">
        <Reveal className="max-w-2xl mb-14">
          <span className="heading-eyebrow">DIY Project Showcase</span>
          <h2 className="section-title mt-3">Weekend projects worth your Saturday</h2>
          <p className="mt-5 text-lg text-wood-800/70">
            Each project lists the time, skill level, and a short materials list — so you know exactly
            what you're getting into before you begin.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="wood-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden bg-cream-100">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cream-50/90 text-xs font-semibold text-wood-800">
                  {p.level}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl text-wood-800">{p.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-wood-600">
                  <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{p.time}</span>
                  <span className="inline-flex items-center gap-1.5"><Gauge className="w-4 h-4" />{p.level}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-cream-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-wood-600 uppercase tracking-wider mb-2">
                    <Package className="w-3.5 h-3.5" /> Materials
                  </div>
                  <ul className="text-sm text-wood-800/75 space-y-1">
                    {p.materials.map((m) => <li key={m}>• {m}</li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
