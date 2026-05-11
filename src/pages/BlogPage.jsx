import PageHero from '../components/PageHero';
import Articles from '../sections/Articles';
import Newsletter from '../sections/Newsletter';
import heroImg from '../assets/images/blog/herb-garden.jpg';

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Blog"
        title="Stories from the porch"
        description="Reflections, tutorials, and gentle wisdom — written by retirees, for retirees. Tap any article to read it inline."
        image={heroImg}
        crumbs={['Blog']}
      />
      <Articles />
      <Newsletter />
    </>
  );
}
