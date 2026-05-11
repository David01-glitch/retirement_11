import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Sprout } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useScrolled } from '../hooks/useScrollSpy';
import { trackEvent } from '../utils/analytics';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Gardening', path: '/gardening' },
  { name: 'DIY Crafts', path: '/diy-crafts' },
  { name: 'Woodworking', path: '/woodworking' },
  { name: 'Painting', path: '/painting' },
  { name: 'Community', path: '/community' },
  { name: 'Tutorials', path: '/tutorials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const onNav = (name) => {
    setOpen(false);
    trackEvent('nav_click', { link: name });
  };

  const navClasses = ({ isActive }) =>
    `px-3 py-2 rounded-full text-[15px] font-medium transition ${
      isActive ? 'bg-olive-600 text-cream-50' : 'text-wood-800/80 hover:text-olive-700 hover:bg-cream-100'
    }`;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream-50/85 backdrop-blur-xl shadow-soft' : 'bg-cream-50/40 backdrop-blur-sm'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => onNav('logo')}>
          <span className="w-11 h-11 rounded-2xl bg-gradient-olive grid place-items-center shadow-soft group-hover:scale-105 transition">
            <Sprout className="w-6 h-6 text-cream-50" strokeWidth={2.2} />
          </span>
          <span className="font-serif text-xl sm:text-2xl font-semibold text-wood-800">
            Retirement <span className="text-olive-700">Hobby Hub</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.slice(0, 7).map((l) => (
            <NavLink key={l.name} to={l.path} end={l.path === '/'} onClick={() => onNav(l.name)} className={navClasses}>
              {l.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearch(!search)}
            className="p-2.5 rounded-full hover:bg-cream-100 transition text-wood-800"
          >
            <Search className="w-5 h-5" />
          </button>
          <Link to="/gardening" onClick={() => onNav('cta_explore')} className="hidden sm:inline-flex btn-primary !py-3 !px-5 text-sm">
            Explore Hobbies
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-full hover:bg-cream-100 transition text-wood-800"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {search && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-cream-50 border-t border-cream-200"
          >
            <div className="container-wide py-4">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wood-600" />
                <input
                  autoFocus
                  placeholder="Search hobbies, tutorials, articles…"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-cream-100 border-2 border-transparent focus:border-olive-500 focus:bg-cream-50 outline-none text-wood-800 placeholder:text-wood-600/60"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-cream-50 border-t border-cream-200 shadow-soft"
          >
            <nav className="container-wide py-6 grid gap-1">
              {LINKS.map((l) => (
                <NavLink key={l.name} to={l.path} end={l.path === '/'} onClick={() => onNav(l.name)}
                  className={({ isActive }) => `px-4 py-3 rounded-xl text-lg ${isActive ? 'bg-olive-600 text-cream-50' : 'text-wood-800 hover:bg-cream-100'}`}>
                  {l.name}
                </NavLink>
              ))}
              <Link to="/gardening" onClick={() => onNav('cta_explore')} className="mt-3 btn-primary justify-center">Explore Hobbies</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
