import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { projects } from '../data/resume';

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-xl mb-10 flex items-center gap-3"
        >
          <FolderGit2 size={22} /> Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="glass rounded-xl p-6 glow-border group hover:border-accent/30 transition-colors"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-accent transition-colors mb-2">
                {project.name}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-accent-glow text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
