import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Brain, Network, Sparkles, Zap } from 'lucide-react';
import { aiDominate, profile } from '../data/resume';

const pillarIcons = [Network, Brain, Zap];

export function AiAgents() {
  return (
    <section id="ai" className="section-shell bg-slate-950 text-white border-slate-800">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <Sparkles size={14} />
            {aiDominate.brand}
          </span>
          <span className="text-sm text-slate-400">{aiDominate.tagline}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.12] text-white mb-6">
              {aiDominate.headline}
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">{aiDominate.subheadline}</p>
            <p className="text-slate-400 leading-relaxed">{aiDominate.description}</p>
            <a
              href={`mailto:${profile.email}?subject=AI Dominate — Build my AI agent team`}
              className="btn-primary mt-10 bg-teal-500 hover:bg-teal-400"
            >
              {aiDominate.cta}
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid gap-4"
          >
            {aiDominate.pillars.map(({ title, description }, i) => {
              const Icon = pillarIcons[i] ?? Bot;
              return (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mono-label text-teal-400/90 mb-6">Your generative agent team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiDominate.agents.map((agent, i) => (
              <motion.div
                key={agent.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-5 transition-colors hover:border-teal-500/40"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Bot size={16} className="text-teal-400" />
                  <h3 className="font-semibold text-white text-sm">{agent.role}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{agent.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-slate-500 text-sm max-w-2xl mx-auto"
        >
          This isn&apos;t automation with scripts. It&apos;s your first{' '}
          <span className="text-teal-400 font-medium">AI-dominate company</span> — every department,
          powered by agents that generate outcomes, not just answers.
        </motion.p>
      </div>
    </section>
  );
}
