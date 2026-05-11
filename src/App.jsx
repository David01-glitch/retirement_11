import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import HobbyPage from './pages/HobbyPage';
import BlogPage from './pages/BlogPage';
import CommunityPage from './pages/CommunityPage';
import TutorialsPage from './pages/TutorialsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import RefundPage from './pages/RefundPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/gardening" element={<HobbyPage />} />
          <Route path="/painting" element={<HobbyPage />} />
          <Route path="/woodworking" element={<HobbyPage />} />
          <Route path="/knitting" element={<HobbyPage />} />
          <Route path="/diy-crafts" element={<HobbyPage />} />
          <Route path="/pottery" element={<HobbyPage />} />
          <Route path="/cooking" element={<HobbyPage />} />
          <Route path="/photography" element={<HobbyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}
