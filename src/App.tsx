import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { AiAgents } from './components/AiAgents';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AiAgents />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
