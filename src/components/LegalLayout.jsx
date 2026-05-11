import PageHero from './PageHero';

export default function LegalLayout({ eyebrow, title, description, image, crumbs, lastUpdated, children }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} image={image} crumbs={crumbs} />
      <section className="py-20 bg-cream-50">
        <div className="container-wide max-w-4xl">
          {lastUpdated && (
            <p className="text-sm text-wood-600 mb-8">Last updated: <span className="font-medium text-wood-800">{lastUpdated}</span></p>
          )}
          <article className="prose-wood">{children}</article>
        </div>
      </section>
    </>
  );
}
