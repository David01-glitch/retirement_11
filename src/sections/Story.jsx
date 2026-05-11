import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Leaf, ArrowRight, Quote } from 'lucide-react';
import Reveal from '../components/Reveal';
import storyImg from '../assets/images/blog/photo-walks.jpg';

const PILLARS = [
  { icon: Heart, title: 'Warmth over performance', body: 'We celebrate slow progress, lopsided pottery, and crooked first knit rows. No leaderboards, no infinite scroll, no engagement bait.' },
  { icon: Users, title: 'Community over algorithm', body: 'Real people sharing real projects with real patience. Twelve thousand members across forty-three countries — each one introduced themselves by hand.' },
  { icon: BookOpen, title: 'Craft over content', body: 'Every tutorial is written by someone who actually does the hobby, photographed in good light, and tested by three members before publication.' },
  { icon: Leaf, title: 'Accessibility first', body: 'Larger fonts, strong contrast, simple navigation, and tutorials that consider arthritis, vision, and seated practice. Comfort first, always.' },
];

export default function Story() {
  return (
    <section className="py-24 sm:py-32 bg-cream-50">
      <div className="container-wide grid lg:grid-cols-2 gap-14 items-center mb-20">
        <Reveal>
          <span className="heading-eyebrow">Our story</span>
          <h2 className="section-title mt-3">A warm corner of the internet, made by hand</h2>
          <p className="mt-6 text-lg text-wood-800/80 leading-relaxed">
            Retirement Hobby Hub began in 2017 on a kitchen table in Phoenix. Margaret, a recently retired
            librarian, was searching for a knitting tutorial that did not assume she was already an expert —
            and could not find one written with care for someone learning at sixty-two.
          </p>
          <p className="mt-4 text-lg text-wood-800/80 leading-relaxed">
            So she wrote one. Then a gardening one. Then a piece on starting watercolor without overwhelm.
            The articles found readers. The readers wrote back. A few sent photographs of their first
            projects. Slowly, gently, a community grew on her porch.
          </p>
          <p className="mt-4 text-lg text-wood-800/80 leading-relaxed">
            Nine years later, we are still writing every word, answering every email, and testing every
            project before it ships. We do not sell your data. We do not run pop-ups. We do not chase
            trends. We are reader-supported, deliberately small, and unhurried.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="btn-primary text-sm !py-3 !px-5">
              Read our full story <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/community" className="btn-secondary text-sm !py-3 !px-5">
              Meet the community
            </Link>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-warm border-4 border-cream-50 h-[440px]">
            <img src={storyImg} alt="A morning walk along a quiet path at golden hour" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-wood-800/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 glass-card p-5 max-w-[280px]">
            <Quote className="w-6 h-6 text-terracotta-600 mb-2" />
            <p className="text-sm text-wood-800 italic">
              "Retirement should feel like a beginning, not an ending."
            </p>
            <p className="mt-2 text-xs text-wood-600">— Margaret, founder</p>
          </div>
        </motion.div>
      </div>

      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <span className="heading-eyebrow">What we believe</span>
        <h3 className="section-title mt-3">Four quiet principles</h3>
      </Reveal>

      <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="wood-card p-7"
          >
            <span className="w-12 h-12 rounded-2xl bg-olive-500/15 grid place-items-center mb-4">
              <p.icon className="w-6 h-6 text-olive-700" />
            </span>
            <h4 className="font-serif text-xl text-wood-800">{p.title}</h4>
            <p className="mt-3 text-wood-800/75 leading-relaxed text-[15px]">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
