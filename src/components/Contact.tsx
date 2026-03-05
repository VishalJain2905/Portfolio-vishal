import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/resume';

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-grid">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-xl mb-4"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-400 mb-10"
        >
          Open to opportunities and collaborations.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 glow-border flex flex-col sm:flex-row flex-wrap justify-center gap-6"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors"
          >
            <Mail size={20} className="shrink-0" /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/-/g, '')}`}
            className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors"
          >
            <Phone size={20} className="shrink-0" /> {profile.phone}
          </a>
          <span className="flex items-center gap-3 text-zinc-500">
            <MapPin size={20} className="shrink-0" /> {profile.location}
          </span>
          <div className="flex gap-4 w-full justify-center sm:w-auto">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-zinc-400 hover:border-accent hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-border text-zinc-400 hover:border-accent hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
