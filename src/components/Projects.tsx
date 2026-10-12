import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { projects } from '../data/resume';
import { tint } from '../clay';

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          label="Projects"
          title={
            <>
              Products I&apos;ve <span className="text-accent">shipped</span>
            </>
          }
          subtitle="Real products used by real people — across Web3, EdTech, mobility, e-commerce and real-time apps."
        />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-7">
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
                  className={`clay-hover ${tint(i)} block p-6 sm:p-8 h-full ${project.url ? 'group cursor-pointer' : ''}`}
                >
                  <p className="mono-label !text-accent-dim mb-2">{project.category}</p>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-lg sm:text-xl font-semibold leading-snug text-ink">
                      {project.name}
                    </h3>
                    {project.url && (
                      <span className="btn-round !h-10 !w-10 shrink-0 group-hover:text-accent group-hover:-translate-y-1">
                        <ArrowUpRight size={16} />
                      </span>
                    )}
                  </div>
                  <p className="text-ink-muted text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="clay-chip bg-white/75">
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
