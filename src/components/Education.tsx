import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { education } from '../data/resume';

export function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <SectionHeader label="Education" title="Academic background" />
        {education.map((edu) => (
          <motion.article
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay max-w-2xl p-6 sm:p-8 flex items-start gap-5"
          >
            <span className="clay-icon clay-sky h-14 w-14 text-accent-dim">
              <GraduationCap size={24} />
            </span>
            <div>
              <p className="mono-label mb-2">{edu.period}</p>
              <h3 className="font-display text-xl font-semibold text-ink">{edu.institution}</h3>
              <p className="text-ink-muted mt-1">{edu.degree}</p>
              <p className="clay-chip clay-mint mt-3">{edu.details}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
