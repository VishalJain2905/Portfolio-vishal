import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, KeyRound, MessagesSquare, Users, type LucideIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { profile, whyMe, workProcess } from '../data/resume';
import { tint } from '../clay';

const whyIcons: LucideIcon[] = [Code2, Users, MessagesSquare, KeyRound];

export function Process() {
  return (
    <section id="process" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          label="How I work"
          title={
            <>
              A simple process, <span className="text-accent">no surprises</span>
            </>
          }
          subtitle="You always know what's being built, when it ships and what it costs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workProcess.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`clay-hover ${tint(i)} p-6`}
            >
              <span className="clay-icon bg-white/80 h-12 w-12 mb-4 font-display text-lg font-semibold text-accent-dim">
                {s.step}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="clay p-6 sm:p-10 !rounded-[2.5rem]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">Why clients work with me</h3>
            <a href="#contact" className="btn-primary self-start">
              Book a free call
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {whyMe.map((w, i) => {
              const Icon = whyIcons[i] ?? Code2;
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="clay-inset p-5 flex items-start gap-4"
                >
                  <span className={`clay-icon ${tint(i + 2)} h-11 w-11 text-accent-dim`}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h4 className="font-bold text-ink mb-1">{w.title}</h4>
                    <p className="text-sm text-ink-muted leading-relaxed">{w.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-muted">
            Based in {profile.location.split(',')[0]}, India · working with clients remotely.
          </p>
        </div>
      </div>
    </section>
  );
}
