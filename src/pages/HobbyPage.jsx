import { useLocation, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Gauge, Package, ArrowRight, Sparkles } from 'lucide-react';
import { HOBBIES, ARTICLES, PROJECTS, TUTORIALS } from '../data/content';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Newsletter from '../sections/Newsletter';

const TIPS = {
  gardening: [
    'Start small — one raised bed or four pots is enough for a year of joy.',
    'Water deeply, less often. Daily shallow watering grows weak roots.',
    'Mulch generously. It keeps soil moist, cool, and weed-free.',
    'Plant for pollinators. Bees and butterflies double your harvest.',
  ],
  painting: [
    'Three colors and one good brush beats a kit of forty cheap ones.',
    'Paint daily for fifteen minutes — consistency builds confidence.',
    'Photograph your work in natural light to track your progress.',
    'Mistakes are part of the medium, not signs to start over.',
  ],
  woodworking: [
    'Measure twice, cut once — and always sand more than you think.',
    'Pre-drill every screw hole in hardwoods to prevent splitting.',
    'A sharp blade is safer than a dull one. Keep your tools maintained.',
    'Finish with oil and wax for a warm, repairable surface.',
  ],
  knitting: [
    'Use needles slightly larger than recommended for relaxed hands.',
    'Wool blends are forgiving for first projects.',
    'Count rows out loud or with a tally — saves headaches later.',
    'Block your finished pieces. It transforms the look entirely.',
  ],
  'diy-crafts': [
    'Repurpose before you purchase — jars, frames, fabric, scrap wood.',
    'Keep a small "inspiration drawer" of buttons, ribbons, and twine.',
    'Photograph results as you go — your portfolio writes itself.',
    'Gift your projects. Half the joy is in the giving.',
  ],
  pottery: [
    'Wedge your clay thoroughly — air bubbles ruin pieces.',
    'Keep your hands wet but not soaked when throwing.',
    'Trim when leather-hard, not earlier and not later.',
    'Bisque fire low and slow for fewer cracks.',
  ],
  cooking: [
    'One good knife, one heavy pan — start there.',
    'Taste as you cook. Adjust salt, acid, fat, heat.',
    'Cook one new recipe a week. By year-end you have 52 dishes.',
    'Share meals. Food without company is just fuel.',
  ],
  photography: [
    'Photograph the same spot at sunrise and sunset for a week.',
    'Compose with the rule of thirds, then break it on purpose.',
    'Edit lightly — pull, don\'t push. Subtlety reads as quality.',
    'Print one photo a month. Pixels disappear; prints become heirlooms.',
  ],
};

export default function HobbyPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const hobby = HOBBIES.find((h) => h.slug === slug);

  if (!hobby) return <Navigate to="/" replace />;

  const articles = ARTICLES.filter((a) => a.tags.some((t) => t.toLowerCase() === hobby.name.toLowerCase()));
  const projects = PROJECTS.filter((p) => p.category === hobby.name);
  const tutorials = TUTORIALS.filter((t) => t.category === hobby.name);
  const tips = TIPS[slug] || [];

  return (
    <>
      <PageHero
        eyebrow="Hobby category"
        title={hobby.name}
        description={hobby.desc}
        image={hobby.img}
        crumbs={[hobby.name]}
      />

      {tips.length > 0 && (
        <section className="py-20 bg-cream-50">
          <div className="container-wide">
            <Reveal className="max-w-2xl mb-12">
              <span className="heading-eyebrow">Gentle Tips</span>
              <h2 className="section-title mt-3">Four things to remember</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tips.map((tip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="wood-card p-7"
                >
                  <span className="w-10 h-10 rounded-full bg-olive-500/15 grid place-items-center mb-4">
                    <Sparkles className="w-5 h-5 text-olive-700" />
                  </span>
                  <p className="text-wood-800/85 leading-relaxed">{tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {articles.length > 0 && (
        <section className="py-20 bg-cream-100/60 bg-grain">
          <div className="container-wide">
            <Reveal className="max-w-2xl mb-12">
              <span className="heading-eyebrow">Recommended reading</span>
              <h2 className="section-title mt-3">Articles in {hobby.name.toLowerCase()}</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {articles.map((a, i) => (
                <motion.article
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="wood-card overflow-hidden"
                >
                  <img src={a.img} alt={a.title} loading="lazy" className="w-full h-52 object-cover" />
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">{a.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                    <h3 className="font-serif text-xl text-wood-800 leading-snug">{a.title}</h3>
                    <p className="mt-3 text-wood-800/70 text-sm">{a.excerpt}</p>
                    <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-olive-700">
                      Read on the blog <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {projects.length > 0 && (
        <section className="py-20 bg-cream-50">
          <div className="container-wide">
            <Reveal className="max-w-2xl mb-12">
              <span className="heading-eyebrow">Hands-on</span>
              <h2 className="section-title mt-3">Projects to try this weekend</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {projects.map((p) => (
                <div key={p.title} className="wood-card overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cream-50/90 text-xs font-semibold">{p.level}</span>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tutorials.length > 0 && (
        <section className="py-20 bg-cream-100/60">
          <div className="container-wide">
            <Reveal className="max-w-2xl mb-12">
              <span className="heading-eyebrow">Watch & learn</span>
              <h2 className="section-title mt-3">Video tutorials</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {tutorials.map((t) => (
                <div key={t.title} className="wood-card overflow-hidden">
                  <img src={t.img} alt={t.title} className="w-full h-52 object-cover" />
                  <div className="p-5 flex items-center justify-between">
                    <h3 className="font-serif text-lg text-wood-800">{t.title}</h3>
                    <span className="text-sm text-wood-600">{t.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  );
}
