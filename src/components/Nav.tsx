import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/resume';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'ai', label: 'AI Dominate' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-200/50'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[4.25rem] flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5 font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline text-sm">{profile.name.split(' ')[0]}</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors ${
                link.id === 'ai'
                  ? 'text-teal-700 hover:text-teal-800'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="btn-primary py-2.5 px-5 text-xs">
            Hire me
            <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-5 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-slate-700 font-medium py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href={`mailto:${profile.email}`} className="btn-primary mt-2 w-fit" onClick={() => setOpen(false)}>
                Hire me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
