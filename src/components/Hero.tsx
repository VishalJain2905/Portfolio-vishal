import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/resume';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 pt-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mono-label text-accent mb-4"
        >
          &gt; Full Stack Developer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
        >
          {profile.headline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-zinc-500"
        >
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={16} /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/-/g, '')}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={16} /> {profile.phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {profile.location}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 mt-8"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass glow-border hover:border-accent/50 transition-colors text-zinc-400 hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg glass glow-border hover:border-accent/50 transition-colors text-zinc-400 hover:text-accent"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-accent/40 flex justify-center pt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span
          className="w-1 h-2 rounded-full bg-accent"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
