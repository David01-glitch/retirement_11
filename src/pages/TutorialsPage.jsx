import PageHero from '../components/PageHero';
import Tutorials from '../sections/Tutorials';
import Projects from '../sections/Projects';
import Newsletter from '../sections/Newsletter';
import heroImg from '../assets/images/tutorials/garden-bed.jpg';

export default function TutorialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Video Tutorials"
        title="Watch, pause, build alongside us"
        description="Slow-paced, captioned, and shot in good light. Each tutorial is designed to be paused and revisited."
        image={heroImg}
        crumbs={['Tutorials']}
      />
      <Tutorials />
      <Projects />
      <Newsletter />
    </>
  );
}
