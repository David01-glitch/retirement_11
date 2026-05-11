import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import Reveal from '../components/Reveal';
import { trackEvent } from '../utils/analytics';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    trackEvent('contact_submit');
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream-50">
      <div className="container-wide">
        <Reveal className="max-w-2xl mx-auto text-center mb-14">
          <span className="heading-eyebrow">Get in Touch</span>
          <h2 className="section-title mt-3">We'd love to hear from you</h2>
          <p className="mt-5 text-lg text-wood-800/70">
            Questions, story ideas, partnership requests — write to us and we'll reply personally.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-7">
          <Reveal className="lg:col-span-2 wood-card p-8 sm:p-10">
            <h3 className="font-serif text-2xl text-wood-800 mb-6">Contact details</h3>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-full bg-olive-500/10 grid place-items-center shrink-0">
                  <Mail className="w-5 h-5 text-olive-700" />
                </span>
                <div>
                  <div className="text-sm text-wood-600">Email us</div>
                  <a href="mailto:retirementhobbyhub@gmail.com" className="font-semibold text-wood-800 hover:text-olive-700">
                    retirementhobbyhub@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-full bg-terracotta-500/10 grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5 text-terracotta-600" />
                </span>
                <div>
                  <div className="text-sm text-wood-600">Visit us</div>
                  <div className="font-semibold text-wood-800">245 Cedar Lane<br />Phoenix, AZ 85001, USA</div>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-11 h-11 rounded-full bg-wood-500/15 grid place-items-center shrink-0">
                  <Phone className="w-5 h-5 text-wood-700" />
                </span>
                <div>
                  <div className="text-sm text-wood-600">Office hours</div>
                  <div className="font-semibold text-wood-800">Mon — Fri · 9am — 5pm MST</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-cream-200">
              <div className="text-sm text-wood-600 mb-3">Follow our journey</div>
              <div className="flex gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social link" className="w-11 h-11 rounded-full bg-cream-100 hover:bg-olive-600 hover:text-cream-50 text-wood-800 grid place-items-center transition">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden h-40 bg-gradient-to-br from-olive-400 to-olive-700 relative">
              <div className="absolute inset-0 grid place-items-center text-cream-50 text-center px-4">
                <div>
                  <MapPin className="w-7 h-7 mx-auto mb-2" />
                  <div className="font-semibold">Phoenix, Arizona</div>
                  <div className="text-sm opacity-90">245 Cedar Lane</div>
                </div>
              </div>
              <div className="absolute inset-0 opacity-25 bg-grain" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3 wood-card p-8 sm:p-10">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-5">
                <h3 className="font-serif text-2xl text-wood-800">Send a message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your name" type="text" placeholder="Margaret W." />
                  <Field label="Email" type="email" placeholder="your@email.com" />
                </div>
                <Field label="Subject" type="text" placeholder="A gentle hello" />
                <div>
                  <label className="block font-semibold text-wood-800 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your hobbies, questions, or ideas…"
                    className="w-full px-5 py-4 rounded-2xl bg-cream-100 border-2 border-transparent focus:border-olive-500 outline-none text-wood-800 resize-none"
                  />
                </div>
                <motion.button whileTap={{ scale: 0.97 }} className="btn-primary">
                  <Send className="w-4 h-4" /> Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                <div className="w-20 h-20 mx-auto rounded-full bg-olive-500 grid place-items-center mb-5">
                  <Send className="w-8 h-8 text-cream-50" />
                </div>
                <h3 className="font-serif text-3xl text-wood-800">Thank you!</h3>
                <p className="mt-3 text-wood-600">Your message is on its way. We'll reply within a day.</p>
              </motion.div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }) {
  return (
    <div>
      <label className="block font-semibold text-wood-800 mb-2">{label}</label>
      <input required type={type} placeholder={placeholder}
        className="w-full px-5 py-4 rounded-2xl bg-cream-100 border-2 border-transparent focus:border-olive-500 outline-none text-wood-800" />
    </div>
  );
}
