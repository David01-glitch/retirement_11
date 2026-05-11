import PageHero from '../components/PageHero';
import Contact from '../sections/Contact';
import FAQ from '../sections/FAQ';
import heroImg from '../assets/images/hero/retirement-garden.jpg';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        description="Questions, story ideas, partnership requests — write to us and we'll reply personally."
        image={heroImg}
        crumbs={['Contact']}
      />
      <Contact />
      <FAQ />
    </>
  );
}
