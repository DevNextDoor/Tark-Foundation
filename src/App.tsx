import React, { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useRouter } from './lib/router';
import { Home } from './pages/Home';
import { OriginPage } from './pages/OriginPage';
import { ProgramsPage } from './pages/ProgramsPage';

export function App() {
  const [loading, setLoading] = useState(true);
  const route = useRouter();

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

  // Handle smooth scrolling to deep-linked anchor tags on hash routes
  useEffect(() => {
    const validAnchors = ['#/principles', '#/journey', '#/contact', '#/impact'];
    const currentHash = window.location.hash;
    
    if (validAnchors.includes(currentHash) || currentHash.includes('#/origin#')) {
      let id = '';
      if (currentHash.includes('#/origin#')) {
        id = currentHash.split('#/origin#')[1];
      } else {
        id = currentHash.replace('#/', '');
      }
      
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200); // 200ms delay to let the page component mount
      }
    } else if (currentHash === '#/' || !currentHash) {
      window.scrollTo({ top: 0 });
    }
  }, [route]);

  // Routing switch
  const renderPage = () => {
    if (route.startsWith('#/origin')) {
      return <OriginPage />;
    }
    if (route.startsWith('#/programs')) {
      return <ProgramsPage />;
    }
    return <Home />;
  };

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

        <main>
          {renderPage()}
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}
export default App;