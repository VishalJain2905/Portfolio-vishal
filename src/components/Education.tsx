import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/resume';

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-xl mb-10 flex items-center gap-3"
        >
          <GraduationCap size={22} /> Education
        </motion.h2>
        {education.map((edu, i) => (
          <motion.article
            key={edu.institution}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 sm:p-8 glow-border"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{edu.institution}</h3>
            <p className="mono-label text-accent-dim mb-2">{edu.degree}</p>
            <p className="text-zinc-500 text-sm mono-label">
              {edu.period} · {edu.details}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
