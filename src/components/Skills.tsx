import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { skills } from '../data/resume';

const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Languages', items: skills.languages },
  { title: 'Frontend', items: skills.frontend },
  { title: 'Backend', items: skills.backend },
  { title: 'Databases', items: skills.databases },
  { title: 'Messaging', items: skills.messaging },
  { title: 'API & Architecture', items: skills.api },
  { title: 'AI & Automation', items: ['AI Agents', 'LLMs', 'Agentic AI', 'OpenCLAW', 'AI Tools'] },
  { title: 'Cloud & DevOps', items: [...skills.devops, ...skills.cloud] },
];

export function Skills() {
  return (
    <section id="skills" className="section-shell bg-white">
      <div className="section-inner">
        <SectionHeader label="Skills" title="Technical expertise" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map(({ title, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.04 }}
              className="card-pro p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wide text-teal-700 mb-3">{title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span key={s} className="text-xs text-slate-600 bg-slate-50 border border-slate-100 rounded px-2 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
