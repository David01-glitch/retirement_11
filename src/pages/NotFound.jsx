import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] grid place-items-center bg-cream-50 bg-grain pt-24">
      <div className="text-center px-6">
        <span className="heading-eyebrow">404</span>
        <h1 className="font-serif text-5xl sm:text-6xl mt-3 text-wood-800">Page not found</h1>
        <p className="mt-5 max-w-md mx-auto text-wood-800/70">
          The path you followed seems to have wandered off through the garden. Let's get you back to the porch.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </section>
  );
}
