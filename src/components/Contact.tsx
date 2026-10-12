import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Github, MapPin, Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { profile } from '../data/resume';

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="clay clay-lilac relative overflow-hidden max-w-3xl mx-auto p-8 sm:p-12 text-center !rounded-[2.5rem]">
          <div aria-hidden className="clay-blob clay-peach h-20 w-20 -top-6 -left-6" />
          <div aria-hidden className="clay-blob clay-mint h-14 w-14 -bottom-4 -right-3" style={{ animationDelay: '-3s' }} />

          <SectionHeader
            label="Contact"
            title="Have an idea? Let's make it real."
            subtitle="Tell me what you want to build. You'll get a free 30-minute discovery call and an honest plan with timeline and cost — no obligation."
            align="center"
          />

          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="clay-inset inline-block px-5 py-3 text-lg sm:text-2xl font-display font-semibold text-ink hover:text-accent transition-colors mb-8 break-all"
          >
            {profile.email}
          </motion.a>

          <div className="relative flex flex-wrap justify-center gap-3 mb-8">
            <a
              href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Vishal, I'd like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent('Project enquiry — free discovery call')}`}
              className="btn-secondary"
            >
              <CalendarCheck size={16} />
              Book a free call
            </a>
            <a href={`mailto:${profile.email}`} className="btn-secondary">
              <Mail size={16} />
              Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} />
              GitHub
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 text-sm">
            <span className="clay-chip bg-white/70 justify-center gap-2">
              <MapPin size={14} /> {profile.location}
            </span>
            <a href={`tel:${profile.phone.replace(/-/g, '')}`} className="clay-chip bg-white/70 justify-center gap-2 hover:text-accent">
              <Phone size={14} /> {profile.phone}
            </a>
          </div>

          <a
            href={`mailto:${profile.email}?subject=AI Dominate`}
            className="inline-flex items-center gap-1 mt-8 text-sm font-bold text-accent-dim hover:text-accent"
          >
            Discuss AI Dominate for your company
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
