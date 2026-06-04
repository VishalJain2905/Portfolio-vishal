import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { profile } from '../data/resume';

export function Contact() {
  return (
    <section id="contact" className="section-shell bg-white">
      <div className="section-inner">
        <div className="card-pro max-w-3xl mx-auto p-8 sm:p-12 text-center">
          <SectionHeader
            label="Contact"
            title="Let's build something"
            subtitle="Open to full-time roles, AI agent projects, and technical consulting."
            align="center"
          />

          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-xl sm:text-2xl font-semibold text-slate-900 hover:text-teal-700 transition-colors mb-8"
          >
            {profile.email}
          </motion.a>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} />
              Send email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} />
              GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center justify-center gap-2">
              <MapPin size={14} /> {profile.location}
            </span>
            <span className="inline-flex items-center justify-center gap-2">
              <Phone size={14} />
              <a href={`tel:${profile.phone.replace(/-/g, '')}`} className="hover:text-teal-700">
                {profile.phone}
              </a>
            </span>
          </div>

          <a
            href={`mailto:${profile.email}?subject=AI Dominate`}
            className="inline-flex items-center gap-1 mt-8 text-sm font-semibold text-teal-700 hover:text-teal-800"
          >
            Discuss AI Dominate for your company
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
