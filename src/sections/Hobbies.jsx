import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOBBIES } from '../data/content';
import Reveal from '../components/Reveal';
import { trackEvent } from '../utils/analytics';

const DETAILS = {
  gardening: {
    intro: 'Gardening is the gentlest hobby of all. You plant something small, wait, water, and watch life unfold on its own schedule. It rewards patience, costs little, and gives you something to look forward to every morning.',
    points: ['Begin with three pots on a sunny windowsill', 'Choose forgiving herbs: basil, mint, rosemary', 'Water deeply, less often — daily shallow watering grows weak roots', 'Pinch the tops weekly to double your yield'],
    time: '20 min / day',
  },
  painting: {
    intro: 'Painting is meditation that leaves something beautiful behind. Watercolor is forgiving, acrylic is bold, oil is patient. You only need three colors and one good brush to begin a lifetime practice.',
    points: ['Start with three colors: ultramarine, burnt sienna, yellow ochre', 'One round brush is enough for the first month', 'Practice five fundamentals: flat wash, graded wash, wet-on-wet, dry brush, lifting', 'Photograph your work weekly to see your progress'],
    time: '30 min / day',
  },
  woodworking: {
    intro: 'There is something deeply grounding about shaping wood. The smell of pine, the rhythm of sanding, the moment a joint slides home. Start with a small project and basic tools — the craft rewards quiet attention.',
    points: ['Measure twice, cut once — and always sand more than you think', 'Pre-drill every screw hole in hardwoods', 'Sand in stages: 80-grit, 120, 220', 'Finish with oil and wax for a warm, repairable surface'],
    time: 'Weekend projects',
  },
  knitting: {
    intro: 'Knitting is portable peace. A pair of needles, a ball of wool, and an evening on the porch. It is rhythmic, forgiving, and produces gifts your family will keep for decades.',
    points: ['Use needles slightly larger than recommended for relaxed hands', 'Wool blends are most forgiving for first projects', 'Count rows with a tally — saves headaches later', 'Block your finished pieces — it transforms the look'],
    time: '45 min / day',
  },
  'diy-crafts': {
    intro: 'DIY crafts turn ordinary afternoons into small celebrations. Repurpose jars into lanterns, ribbons into wreaths, scrap fabric into pillows. The joy is in the making, the gifting, and the satisfaction of "I made that."',
    points: ['Repurpose before you purchase — jars, frames, fabric, scrap wood', 'Keep an inspiration drawer of buttons, ribbons, twine', 'Photograph results as you go — your portfolio writes itself', 'Half the joy is in the giving'],
    time: '1-2 hours',
  },
  pottery: {
    intro: 'Pottery is one of the most tactile, grounding crafts there is. Throwing on a wheel or hand-building with coils — both teach patience, presence, and acceptance of small imperfections.',
    points: ['Wedge your clay thoroughly — air bubbles ruin pieces', 'Keep hands wet but not soaked when throwing', 'Trim when leather-hard — not too early, not too late', 'Bisque fire low and slow for fewer cracks'],
    time: 'Studio class weekly',
  },
  cooking: {
    intro: 'Slow cooking is one of life\'s deepest pleasures. A pot simmering on the stove, the smell of garlic and rosemary, sharing a meal you made by hand. One new recipe a week, and a year from now you have 52 dishes.',
    points: ['One good knife and one heavy pan — start there', 'Taste as you cook: salt, acid, fat, heat', 'Cook one new recipe each week', 'Share meals — food without company is just fuel'],
    time: '1 hour / day',
  },
  photography: {
    intro: 'Photography teaches you to see again. Morning light through the curtains. A bee on the lavender. The quiet beauty already around you. Phone or DSLR — the camera doesn\'t matter. The looking does.',
    points: ['Photograph the same spot at sunrise and sunset for a week', 'Compose with the rule of thirds, then break it on purpose', 'Edit lightly — pull, don\'t push', 'Print one photo a month — pixels disappear, prints become heirlooms'],
    time: '30 min / day',
  },
};

export default function Hobbies() {
  const [openSlug, setOpenSlug] = useState(null);

  const toggle = (slug) => {
    const next = openSlug === slug ? null : slug;
    setOpenSlug(next);
    if (next) trackEvent('hobby_expand', { hobby: slug });
  };

  return (
    <section id="hobbies" className="py-24 sm:py-32 bg-cream-50">
      <div className="container-wide">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="heading-eyebrow">Featured Hobbies</span>
          <h2 className="section-title mt-3">Eight gentle ways to fall in love with making</h2>
          <p className="mt-5 text-lg text-wood-800/70">
            Each hobby below is curated for adults 50+ — chosen for warmth, accessibility, and the simple
            pleasure of creating something with your hands. Tap <em>Explore</em> to learn more.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOBBIES.map((h, i) => {
            const isOpen = openSlug === h.slug;
            const d = DETAILS[h.slug];
            return (
              <motion.div
                key={h.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`wood-card group overflow-hidden ${isOpen ? 'sm:col-span-2 lg:col-span-4' : ''}`}
              >
                <motion.div layout className={`${isOpen ? 'grid lg:grid-cols-2 gap-0' : ''}`}>
                  <button
                    onClick={() => toggle(h.slug)}
                    className="block text-left w-full"
                    aria-expanded={isOpen}
                  >
                    <div className={`relative overflow-hidden ${isOpen ? 'h-64 lg:h-full lg:min-h-[420px]' : 'h-44'}`}>
                      <img src={h.img} alt={`${h.name} photo`} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${h.tone} opacity-50 mix-blend-multiply`} />
                    </div>
                    {!isOpen && (
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-serif text-2xl text-wood-800">{h.name}</h3>
                          <span className="w-9 h-9 grid place-items-center rounded-full bg-cream-100 group-hover:bg-olive-500 group-hover:text-cream-50 transition">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                        <p className="mt-3 text-[15px] text-wood-800/70 leading-relaxed">{h.desc}</p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-olive-700 group-hover:text-olive-600 transition">
                          Explore <ChevronDown className="w-4 h-4" />
                        </span>
                      </div>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="p-7 sm:p-10 flex flex-col"
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <span className="heading-eyebrow">Hobby category</span>
                            <h3 className="font-serif text-3xl sm:text-4xl text-wood-800 mt-2">{h.name}</h3>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-sm text-wood-600 bg-cream-100 px-3 py-1.5 rounded-full">
                            <Clock className="w-4 h-4" /> {d?.time}
                          </span>
                        </div>

                        <p className="text-wood-800/80 leading-relaxed text-[17px]">{d?.intro}</p>

                        <ul className="mt-6 space-y-3">
                          {d?.points.map((p, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + idx * 0.06 }}
                              className="flex gap-3"
                            >
                              <span className="w-7 h-7 shrink-0 rounded-full bg-olive-500/15 grid place-items-center mt-0.5">
                                <Sparkles className="w-3.5 h-3.5 text-olive-700" />
                              </span>
                              <span className="text-wood-800/85">{p}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-cream-200 flex flex-wrap items-center gap-3">
                          <Link
                            to={`/${h.slug}`}
                            onClick={() => trackEvent('hobby_view_full', { hobby: h.slug })}
                            className="btn-primary text-sm !py-3 !px-5"
                          >
                            View full page <ArrowRight className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => toggle(h.slug)}
                            className="btn-secondary text-sm !py-3 !px-5"
                          >
                            Show less <ChevronDown className="w-4 h-4 rotate-180" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
