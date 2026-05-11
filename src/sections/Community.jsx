import { motion } from 'framer-motion';
import { Quote, Heart, MessageCircle, Trophy } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import Reveal from '../components/Reveal';

const ACTIVITY = [
  { name: 'Eleanor', action: 'shared a watercolor study', time: '12 min ago', tone: 'bg-terracotta-400' },
  { name: 'Marcus', action: 'completed the cedar planter', time: '38 min ago', tone: 'bg-olive-500' },
  { name: 'Yumiko', action: 'started the May knit-along', time: '1 hr ago', tone: 'bg-wood-500' },
  { name: 'Devon', action: 'posted morning garden photos', time: '2 hrs ago', tone: 'bg-terracotta-600' },
];

const CHALLENGES = [
  { title: 'May Bloom Challenge', desc: 'Photograph one flower each morning for 14 days.', members: 1284 },
  { title: 'One-Pot Sunday', desc: 'Share a slow recipe that warmed your house.', members: 872 },
  { title: 'Saw, Sand, Smile', desc: 'A small woodworking project, start to finish.', members: 643 },
];

export default function Community() {
  return (
    <section id="community" className="py-24 sm:py-32 bg-gradient-to-b from-cream-100 to-cream-50 bg-grain">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="heading-eyebrow">Community</span>
          <h2 className="section-title mt-3">Stories from our porch</h2>
          <p className="mt-5 text-lg text-wood-800/70">
            Twelve thousand kind people, hand-written introductions, and a culture of patience over performance.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-7 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="wood-card p-7 sm:p-9 flex gap-5"
            >
              <Quote className="w-9 h-9 text-terracotta-500 shrink-0" />
              <div>
                <blockquote className="font-serif text-xl sm:text-2xl text-wood-800 leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={t.img} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover border-2 border-cream-50 shadow-soft" />
                  <div>
                    <div className="font-semibold text-wood-800">{t.name}</div>
                    <div className="text-sm text-wood-600">{t.role}</div>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-7">
          <Reveal className="lg:col-span-2 wood-card p-7">
            <div className="flex items-center gap-2 mb-5">
              <Trophy className="w-5 h-5 text-terracotta-600" />
              <h3 className="font-serif text-2xl text-wood-800">Hobby Challenges</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {CHALLENGES.map((c) => (
                <div key={c.title} className="p-5 rounded-2xl bg-cream-50 border border-cream-200">
                  <h4 className="font-serif text-lg text-wood-800">{c.title}</h4>
                  <p className="mt-2 text-sm text-wood-800/70">{c.desc}</p>
                  <div className="mt-4 text-sm text-olive-700 font-semibold">{c.members.toLocaleString()} joined</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="wood-card p-7">
            <div className="flex items-center gap-2 mb-5">
              <MessageCircle className="w-5 h-5 text-olive-600" />
              <h3 className="font-serif text-2xl text-wood-800">Live Feed</h3>
            </div>
            <ul className="space-y-4">
              {ACTIVITY.map((a) => (
                <li key={a.name + a.time} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full grid place-items-center text-cream-50 font-semibold ${a.tone}`}>
                    {a.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-wood-800"><span className="font-semibold">{a.name}</span> {a.action}</div>
                    <div className="text-xs text-wood-600">{a.time}</div>
                  </div>
                  <Heart className="w-4 h-4 text-terracotta-500" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
