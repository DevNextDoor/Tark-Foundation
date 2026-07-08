import React, { useEffect, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Principles } from './components/Principles';
import { Programs } from './components/Programs';
import { Team } from './components/Team';
import { Timeline } from './components/Timeline';
import { Advisors } from './components/Advisors';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function App() {
  const [loading, setLoading] = useState(true);

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
          <Hero />
          <Ticker />
          <About />
          <MissionVision />
          <Principles />
          <Programs />
          <Team />
          <Timeline />
          <Advisors />
          <CTA />
        </main>

        <Footer />
      </div>
    </ReactLenis>
  );
}
export default App;