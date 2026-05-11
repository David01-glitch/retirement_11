import { motion } from 'framer-motion';
import { Sprout, Heart, Users, BookOpen, Award, Coffee } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import Newsletter from '../sections/Newsletter';
import heroImg from '../assets/images/hobbies/gardening.jpg';
import sarah from '../assets/images/community/sarah.jpg';
import robert from '../assets/images/community/robert.jpg';
import maria from '../assets/images/community/maria.jpg';
import henry from '../assets/images/community/henry.jpg';

const VALUES = [
  { icon: Heart, title: 'Warmth over Performance', body: 'We are not a productivity site. We celebrate slow progress, lopsided pottery, and crooked first knit rows.' },
  { icon: Users, title: 'Community over Algorithm', body: 'No infinite scroll, no engagement bait. Real people sharing real projects with real patience.' },
  { icon: BookOpen, title: 'Craft over Content', body: 'Our tutorials are written by people who do the work, photographed in good light, and tested before they ship.' },
  { icon: Award, title: 'Accessibility First', body: 'Large fonts, strong contrast, simple navigation, and tutorials that consider arthritis, vision, and seated practice.' },
];

const TEAM = [
  { name: 'Margaret Whitfield', role: 'Founder & Editor', img: maria, bio: 'Former librarian, lifelong gardener, started this hub from her kitchen table in 2017.' },
  { name: 'Robert Hensley', role: 'Woodworking Lead', img: robert, bio: 'Retired aerospace engineer turned full-time furniture maker and patient teacher.' },
  { name: 'Sarah Mendoza', role: 'Photography Editor', img: sarah, bio: 'Retired schoolteacher who walks 5 miles every morning with a camera in hand.' },
  { name: 'Henry Caldwell', role: 'Community Steward', img: henry, bio: 'Retired airline captain who reads every introduction and welcomes every new member.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A warm corner of the internet, made by hand"
        description="We started Retirement Hobby Hub in 2017 with one belief: that retirement should feel like a beginning, not an ending. Nine years later, we are still writing every word and answering every email."
        image={heroImg}
        crumbs={['About']}
      />

      <section className="py-20 bg-cream-50">
        <div className="container-wide max-w-4xl prose-wood">
          <h2>Why we exist</h2>
          <p>
            When Margaret retired from the public library in 2016, she expected the days to fill themselves.
            They did not. The first month was beautiful. The second was quiet. By the third, she was searching
            online for a knitting tutorial that did not assume you were already an expert — and could not find
            one written with care for someone learning at 62.
          </p>
          <p>
            So she wrote one. Then a gardening one. Then a piece on starting watercolor without overwhelm. The
            articles found readers. The readers wrote back. A few sent photographs of their first projects.
            Slowly, gently, a community grew on her porch.
          </p>
          <p>
            Retirement Hobby Hub is what that porch has become. Twelve thousand members across all fifty states
            and forty-three countries. A weekly newsletter on Sunday mornings. Monthly hobby challenges. A
            culture of patience over performance, craft over content, and warmth over hustle.
          </p>

          <h2>What makes us different</h2>
          <p>
            We are deliberately small. We do not sell your data. We do not run pop-ups. We do not chase trends.
            Every article is written by a contributor who actually does the hobby. Every tutorial is tested by
            three members before it is published. Every photograph is shot in natural light by someone who
            understands that retirement eyes appreciate clarity over cleverness.
          </p>
          <p>
            We are also free. All articles, tutorials, and community forums are open to anyone. We are
            reader-supported through our optional Sunday Letter and occasional partnerships with small craft
            brands we genuinely love. We will never run intrusive ads or sell your information.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-100/60 bg-grain">
        <div className="container-wide">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <span className="heading-eyebrow">Our Values</span>
            <h2 className="section-title mt-3">Four things we believe</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="wood-card p-7"
              >
                <span className="w-12 h-12 rounded-2xl bg-olive-500/15 grid place-items-center mb-4">
                  <v.icon className="w-6 h-6 text-olive-700" />
                </span>
                <h3 className="font-serif text-xl text-wood-800">{v.title}</h3>
                <p className="mt-3 text-wood-800/75 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-50">
        <div className="container-wide">
          <Reveal className="max-w-2xl mx-auto text-center mb-12">
            <span className="heading-eyebrow">Our Team</span>
            <h2 className="section-title mt-3">The people behind the porch</h2>
            <p className="mt-5 text-lg text-wood-800/70">Four retirees who write, photograph, and steward the community every week.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="wood-card p-6 text-center"
              >
                <img src={t.img} alt={t.name} className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-cream-50 shadow-soft" />
                <h3 className="mt-4 font-serif text-xl text-wood-800">{t.name}</h3>
                <div className="text-sm text-olive-700 font-semibold">{t.role}</div>
                <p className="mt-3 text-sm text-wood-800/75 leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-100/60">
        <div className="container-wide max-w-4xl prose-wood">
          <h2>By the numbers</h2>
          <ul>
            <li><strong>12,000+</strong> community members across 43 countries</li>
            <li><strong>480+</strong> original tutorials published since 2017</li>
            <li><strong>9 years</strong> of weekly Sunday letters, never missed</li>
            <li><strong>3 members</strong> test every tutorial before publication</li>
            <li><strong>0</strong> intrusive ads, sold data, or sponsored posts written as editorial</li>
          </ul>

          <h2>How we make money</h2>
          <p>
            We are reader-supported. Our primary income comes from a small percentage of members who choose to
            subscribe to our extended Sunday Letter for $5 a month. We occasionally partner with small craft
            suppliers we use personally — when we do, we disclose the relationship clearly. We do not run
            display advertising and we do not sell our newsletter list.
          </p>

          <h2>Get in touch</h2>
          <p>
            We read every email. Whether you have a question, a story idea, want to contribute, or just want to
            say hello, write to <a href="mailto:retirementhobbyhub@gmail.com">retirementhobbyhub@gmail.com</a>. We
            reply within one business day.
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
