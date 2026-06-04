import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { education } from '../data/resume';

export function Education() {
  return (
    <section id="education" className="section-shell bg-slate-50">
      <div className="section-inner">
        <SectionHeader label="Education" title="Academic background" />
        {education.map((edu) => (
          <motion.article
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-pro max-w-2xl p-6 sm:p-8"
          >
            <p className="mono-label text-slate-500 mb-2">{edu.period}</p>
            <h3 className="text-lg font-semibold text-slate-900">{edu.institution}</h3>
            <p className="text-slate-600 mt-1">{edu.degree}</p>
            <p className="text-teal-700 text-sm font-medium mt-2">{edu.details}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
