import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Search, Share2, ChevronDown, User } from 'lucide-react';
import { ARTICLES } from '../data/content';
import Reveal from '../components/Reveal';
import { trackEvent } from '../utils/analytics';

const CATEGORIES = ['All', 'Gardening', 'Woodworking', 'Painting', 'Knitting', 'Photography', 'Wellness'];

export default function Articles() {
  const [open, setOpen] = useState(null);
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(6);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchCat = cat === 'All' || a.tags.includes(cat);
      const matchQ = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [cat, query]);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
    if (open !== id) trackEvent('article_expand', { article_id: id });
  };

  return (
    <section id="blog" className="py-24 sm:py-32 bg-cream-100/60 bg-grain">
      <div className="container-wide">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="heading-eyebrow">Trending Articles</span>
          <h2 className="section-title mt-3">Stories, tutorials & gentle wisdom</h2>
          <p className="mt-5 text-lg text-wood-800/70">
            Written by retirees, for retirees. Tap any card to read the full piece — no new tabs, no pop-ups.
          </p>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wood-600" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-cream-50 border-2 border-cream-200 focus:border-olive-500 outline-none"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition ${
                  cat === c ? 'bg-olive-600 text-cream-50' : 'bg-cream-50 text-wood-800 hover:bg-cream-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.slice(0, limit).map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`wood-card overflow-hidden flex flex-col ${open === a.id ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className={`grid ${open === a.id ? 'lg:grid-cols-2 gap-0' : ''}`}>
                <div className="relative h-56 overflow-hidden">
                  <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {a.tags.map((t) => <span key={t} className="tag bg-cream-50/90 !text-wood-800">{t}</span>)}
                  </div>
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="font-serif text-2xl text-wood-800 leading-snug">{a.title}</h3>
                  <p className="mt-3 text-wood-800/70 leading-relaxed">{a.excerpt}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-wood-600">
                    <span className="inline-flex items-center gap-1.5"><User className="w-4 h-4" />{a.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" />{a.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" />{a.readTime}</span>
                  </div>

                  <AnimatePresence initial={false}>
                    {open === a.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-cream-200 text-wood-800/85 leading-relaxed whitespace-pre-line">
                          {a.body}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-6 pt-5 border-t border-cream-200 flex items-center justify-between">
                    <button
                      onClick={() => toggle(a.id)}
                      className="inline-flex items-center gap-2 font-semibold text-olive-700 hover:text-olive-600"
                    >
                      {open === a.id ? 'Show less' : 'Read more'}
                      <ChevronDown className={`w-4 h-4 transition ${open === a.id ? 'rotate-180' : ''}`} />
                    </button>
                    <button
                      aria-label="Share article"
                      onClick={() => trackEvent('article_share', { id: a.id })}
                      className="w-9 h-9 grid place-items-center rounded-full bg-cream-100 hover:bg-olive-500 hover:text-cream-50 transition"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-wood-600 mt-10">No articles matched. Try a different keyword.</p>
        )}

        {limit < filtered.length && (
          <div className="text-center mt-12">
            <button onClick={() => setLimit(limit + 6)} className="btn-secondary">Load More Articles</button>
          </div>
        )}
      </div>
    </section>
  );
}
