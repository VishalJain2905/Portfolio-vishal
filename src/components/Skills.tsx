import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skills } from '../data/resume';

const skillGroups: { title: string; key: keyof typeof skills }[] = [
  { title: 'Languages', key: 'languages' },
  { title: 'Frontend', key: 'frontend' },
  { title: 'Backend', key: 'backend' },
  { title: 'Databases', key: 'databases' },
  { title: 'Messaging & Cache', key: 'messaging' },
  { title: 'API & Architecture', key: 'api' },
  { title: 'DevOps & Tools', key: 'devops' },
  { title: 'Auth', key: 'auth' },
  { title: 'Cloud', key: 'cloud' },
  { title: 'Soft Skills', key: 'soft' },
  { title: 'Interests', key: 'interests' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-xl mb-10 flex items-center gap-3"
        >
          <Code2 size={22} /> Technical Skills & Interests
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ title, key }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
              className="glass rounded-xl p-5 glow-border"
            >
              <h3 className="mono-label text-accent mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {(skills[key] as string[]).map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 rounded text-xs text-zinc-400 bg-surface border border-border hover:border-accent/30 hover:text-accent transition-colors"
                  >
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
