import { Link } from 'react-router-dom';
import { Sprout, Mail, MapPin, Facebook, Instagram, Youtube, Send } from 'lucide-react';

const QUICK = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Community', path: '/community' },
  { name: 'Tutorials', path: '/tutorials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
];
const CATS = [
  { name: 'Gardening', path: '/gardening' },
  { name: 'Painting', path: '/painting' },
  { name: 'Woodworking', path: '/woodworking' },
  { name: 'Knitting', path: '/knitting' },
  { name: 'DIY Crafts', path: '/diy-crafts' },
  { name: 'Pottery', path: '/pottery' },
];
const LEGAL = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms & Conditions', path: '/terms' },
  { name: 'Refund Policy', path: '/refund' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-wood-800 text-cream-100 pt-20 pb-8">
      <div className="container-wide">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-cream-50/10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 rounded-2xl bg-gradient-olive grid place-items-center">
                <Sprout className="w-6 h-6 text-cream-50" />
              </span>
              <span className="font-serif text-xl text-cream-50 font-semibold">Retirement<br />Hobby Hub</span>
            </div>
            <p className="text-sm text-cream-100/70 leading-relaxed max-w-xs">
              A warm corner of the internet for adults 50+ to rediscover joy in making, growing, and creating.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="w-10 h-10 rounded-full bg-cream-50/10 hover:bg-olive-500 grid place-items-center transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-50 mb-5">Quick links</h4>
            <ul className="space-y-3 text-sm">
              {QUICK.map((q) => (
                <li key={q.name}><Link to={q.path} className="text-cream-100/75 hover:text-cream-50 transition">{q.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-50 mb-5">Hobby categories</h4>
            <ul className="space-y-3 text-sm">
              {CATS.map((c) => (
                <li key={c.name}><Link to={c.path} className="text-cream-100/75 hover:text-cream-50 transition">{c.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream-50 mb-5">Newsletter</h4>
            <p className="text-sm text-cream-100/75 mb-4">A gentle letter every Sunday. No noise.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full bg-cream-50/10 border border-cream-50/15 focus:border-cream-50/40 outline-none text-cream-50 placeholder:text-cream-100/40 text-sm" />
              <button aria-label="Subscribe" className="w-12 h-12 rounded-full bg-terracotta-500 hover:bg-terracotta-600 grid place-items-center transition">
                <Send className="w-4 h-4 text-cream-50" />
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-sm text-cream-100/75">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> retirementhobbyhub@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> 245 Cedar Lane, Phoenix, AZ 85001</li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-b border-cream-50/10">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
            {LEGAL.map((l) => (
              <li key={l.name}>
                <Link to={l.path} className="text-cream-100/75 hover:text-cream-50 transition">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream-100/60">
          <div>© {new Date().getFullYear()} Retirement Hobby Hub. Made with care in Phoenix, Arizona.</div>
          <div className="text-center sm:text-right">
            245 Cedar Lane, Phoenix, AZ 85001, USA · retirementhobbyhub@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
