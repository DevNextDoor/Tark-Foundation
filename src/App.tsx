import { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { EventBanner } from './components/EventBanner';
import { Footer } from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { OriginPage } from './pages/OriginPage';
import { ProgramsPage } from './pages/ProgramsPage';

export function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Prevent scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  // Handle smooth scrolling to deep-linked anchor tags on routes with hashes
  useEffect(() => {
    const validAnchors = ['#principles', '#journey', '#contact', '#impact'];
    const currentHash = location.hash || '';

    if (validAnchors.includes(currentHash) || (location.pathname === '/origin' && currentHash)) {
      let id = currentHash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    } else if (!currentHash) {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 1.5,
        smoothWheel: true
      }}
    >
      <div className="min-h-screen bg-tark-bg font-sans text-tark-navy selection:bg-tark-gold selection:text-tark-navy">
        {loading && <Loader onComplete={() => setLoading(false)} />}

        <Navbar />
        <EventBanner />

        <main>
          <Routes>
            <Route path="/origin" element={<OriginPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}
export default App;