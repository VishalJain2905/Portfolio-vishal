import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { experience } from '../data/resume';

export function Experience() {
  return (
    <section id="experience" className="section-shell bg-white">
      <div className="section-inner">
        <SectionHeader label="Experience" title="Professional work" subtitle="From intern to senior engineer — shipping production software." />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.article
              key={job.company + job.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-pro-hover p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{job.company}</h3>
                  <p className="text-teal-700 text-sm font-medium mt-0.5">{job.role}</p>
                </div>
                <p className="mono-label text-slate-500 shrink-0">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="space-y-2.5">
                {job.points.map((point, j) => (
                  <li key={j} className="text-slate-600 text-sm sm:text-[15px] leading-relaxed pl-4 border-l-2 border-slate-200">
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
