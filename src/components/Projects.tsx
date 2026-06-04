import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { projects } from '../data/resume';

export function Projects() {
  return (
    <section id="projects" className="section-shell bg-slate-50">
      <div className="section-inner">
        <SectionHeader
          label="Projects"
          title="Selected work"
          subtitle="Live products and platforms across Web3, ed-tech, mobility, and real-time systems."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const CardWrapper = project.url ? 'a' : 'div';
            const cardProps = project.url
              ? {
                  href: project.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {};

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.06 }}
              >
                <CardWrapper
                  {...cardProps}
                  className={`card-pro-hover block p-6 sm:p-7 h-full ${
                    project.url ? 'group cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className={`text-base font-semibold leading-snug ${
                        project.url
                          ? 'text-slate-900 group-hover:text-teal-700 transition-colors'
                          : 'text-slate-900'
                      }`}
                    >
                      {project.name}
                    </h3>
                    {project.url && (
                      <span className="shrink-0 rounded-full border border-slate-200 p-2 text-slate-400 group-hover:border-teal-200 group-hover:text-teal-700 transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardWrapper>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
