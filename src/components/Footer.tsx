import { motion } from 'framer-motion';
import { profile } from '../data/resume';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mono-label text-zinc-500 text-sm"
        >
          © {year} {profile.name}. All rights reserved.
        </motion.p>
        <div className="flex gap-6">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="mono-label text-zinc-500 hover:text-accent text-sm transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mono-label text-zinc-500 hover:text-accent text-sm transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
