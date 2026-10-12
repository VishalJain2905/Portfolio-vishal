import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { experience } from '../data/resume';
import { tint } from '../clay';

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <SectionHeader label="Experience" title="Professional work" subtitle="From intern to senior engineer — shipping production software." />

        <div className="space-y-7">
          {experience.map((job, i) => (
            <motion.article
              key={job.company + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="clay-hover p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  <span className={`clay-icon ${tint(i)} h-12 w-12 text-accent-dim`}>
                    <Briefcase size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{job.company}</h3>
                    <p className="text-accent-dim text-sm font-bold mt-0.5">{job.role}</p>
                  </div>
                </div>
                <p className="clay-chip bg-white/70 mono-label shrink-0 self-start">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="space-y-2.5 sm:pl-16">
                {job.points.map((point, j) => (
                  <li key={j} className="relative pl-5 text-ink-muted text-sm sm:text-[15px] leading-relaxed">
                    <span className="absolute left-0 top-[0.55em] h-2 w-2 rounded-full bg-accent/60" />
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
