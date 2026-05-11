import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ eyebrow, title, description, image, crumbs = [] }) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-gradient-warm bg-grain overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-olive-400/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-terracotta-400/15 blur-3xl" />

      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <nav className="flex items-center gap-2 text-sm text-wood-600 mb-6">
            <Link to="/" className="hover:text-olive-700">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-wood-800 font-medium">{c}</span>
              </span>
            ))}
          </nav>

          {eyebrow && <span className="heading-eyebrow">{eyebrow}</span>}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl mt-3 leading-[1.05] text-wood-800 text-balance"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-wood-800/70 max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden shadow-warm border-4 border-cream-50 h-[360px] sm:h-[460px]"
          >
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-800/30 to-transparent" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
