import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { AiAgents } from './components/AiAgents';
import { Skills } from './components/Skills';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-ink overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <AiAgents />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
