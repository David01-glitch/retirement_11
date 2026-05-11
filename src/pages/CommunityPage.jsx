import PageHero from '../components/PageHero';
import Community from '../sections/Community';
import Newsletter from '../sections/Newsletter';
import heroImg from '../assets/images/community/sarah.jpg';

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="A warm corner of the internet"
        description="Twelve thousand kind people, hand-written introductions, and a culture of patience over performance."
        image={heroImg}
        crumbs={['Community']}
      />
      <Community />
      <Newsletter />
    </>
  );
}
