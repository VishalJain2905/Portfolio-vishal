import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/resume';

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-grid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-xl mb-10 flex items-center gap-3"
        >
          <Briefcase size={22} /> Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((job, i) => (
            <motion.article
              key={job.company + job.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-6 sm:p-8 glow-border group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                    {job.company}
                  </h3>
                  <p className="mono-label text-accent-dim">{job.role}</p>
                </div>
                <div className="text-sm text-zinc-500 mono-label">
                  <span>{job.period}</span>
                  <span className="mx-2">·</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {job.points.map((point, j) => (
                  <li key={j} className="text-zinc-400 text-sm sm:text-base leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
