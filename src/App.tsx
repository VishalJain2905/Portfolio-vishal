import { useState, useCallback } from 'react';
import { Nav } from './components/Nav';
import { CarIntro } from './components/CarIntro';
import { ThreeBackground } from './components/ThreeBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <div className="min-h-screen bg-void text-zinc-200">
      {!introComplete && <CarIntro onComplete={handleIntroComplete} />}
      <ThreeBackground />
      <div className="fixed inset-0 z-[5] pointer-events-none bg-gradient-to-b from-void/40 via-void/10 to-void/45" />
      <div className="relative z-10">
        <Nav />
        <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
      </div>
    </div>
  );
}
