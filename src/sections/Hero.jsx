import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, Leaf, Palette, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero/retirement-garden.jpg';
import { trackEvent } from '../utils/analytics';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-warm bg-grain">
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-olive-400/20 blur-3xl animate-float-slower" />
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-terracotta-400/20 blur-3xl animate-float-slow" />

      <motion.div
        className="absolute top-32 left-[12%] hidden md:block"
        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-14 h-14 rounded-2xl bg-cream-50 shadow-soft grid place-items-center">
          <Leaf className="w-7 h-7 text-olive-600" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-44 right-[18%] hidden md:block"
        animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-14 h-14 rounded-2xl bg-cream-50 shadow-soft grid place-items-center">
          <Palette className="w-7 h-7 text-terracotta-600" />
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-24 left-[20%] hidden md:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-14 h-14 rounded-2xl bg-cream-50 shadow-soft grid place-items-center">
          <Hammer className="w-7 h-7 text-wood-600" />
        </div>
      </motion.div>

      <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50/80 border border-cream-200 shadow-soft mb-7"
          >
            <Sparkles className="w-4 h-4 text-terracotta-600" />
            <span className="text-sm font-medium text-wood-800">A warm community for adults 50+</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl lg:text-[68px] leading-[1.05] text-wood-800 text-balance"
          >
            Discover{' '}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-olive-700">Joyful Hobbies</span>
              <span className="absolute inset-x-0 bottom-2 h-3 bg-terracotta-400/40 -z-0 rounded" />
            </span>
            <br /> After Retirement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-wood-800/75 max-w-xl leading-relaxed"
          >
            Slow mornings in the garden, hands shaping wood, a paintbrush finding its rhythm. A peaceful place
            to rediscover creativity, friendship, and the quiet pleasures of making something with your own hands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/gardening" onClick={() => trackEvent('cta_click', { cta: 'explore_hobbies' })} className="btn-primary group">
              Explore Hobbies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/community" onClick={() => trackEvent('cta_click', { cta: 'join_community' })} className="btn-secondary">
              <Users className="w-5 h-5" /> Join Community
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md"
          >
            {[
              { n: '12k+', l: 'Members' },
              { n: '480+', l: 'Tutorials' },
              { n: '9 yrs', l: 'Of stories' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl sm:text-4xl text-olive-700 font-semibold">{s.n}</div>
                <div className="text-sm text-wood-600 mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-warm border-4 border-cream-50">
            <img src={heroImg} alt="A peaceful retirement garden at golden hour with a wooden bench and blooming flowers" loading="eager" className="w-full h-[480px] sm:h-[560px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-800/30 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="absolute -bottom-6 -left-4 sm:-left-10 glass-card p-4 sm:p-5 max-w-[260px]"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-terracotta-400 border-2 border-cream-50" />
                <div className="w-10 h-10 rounded-full bg-olive-500 border-2 border-cream-50" />
                <div className="w-10 h-10 rounded-full bg-wood-500 border-2 border-cream-50" />
              </div>
              <div>
                <div className="font-semibold text-sm text-wood-800">Today's garden</div>
                <div className="text-xs text-wood-600">42 friends planting</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
