import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/resume';


const navLinks = [
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'ai', label: 'AI Dominate' },
  { id: 'about', label: 'About' },
  { id: 'faq', label: 'FAQ' },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 z-50 px-3 sm:px-5 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'}`}>
      <nav className="clay max-w-6xl mx-auto h-16 pl-3 pr-3 sm:pl-4 flex items-center justify-between !rounded-full">
        <a href="#hero" className="flex items-center gap-2.5 font-bold text-ink">
          <span className="clay-icon clay-lilac h-10 w-10 !rounded-full font-display text-sm font-semibold text-accent-dim">
            {profile.initials}
          </span>
          <span className="hidden sm:inline font-display text-lg font-medium">{profile.name.split(' ')[0]}</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/80 ${
                link.id === 'ai' ? 'text-accent-dim' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 py-2.5 px-5 text-xs">
            Start a project
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="btn-round lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            className="clay lg:hidden max-w-6xl mx-auto mt-3 p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="rounded-2xl px-4 py-2.5 font-semibold text-ink-muted hover:bg-white/80 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary mt-2 w-fit" onClick={() => setOpen(false)}>
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
