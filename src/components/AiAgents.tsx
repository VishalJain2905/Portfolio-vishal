import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, Brain, Network, Sparkles, Zap } from 'lucide-react';
import { aiDominate, profile } from '../data/resume';
import { tint } from '../clay';

const pillarIcons = [Network, Brain, Zap];

export function AiAgents() {
  return (
    <section id="ai" className="section-shell">
      <div className="section-inner">
        <div className="clay-dark relative overflow-hidden p-6 sm:p-10 lg:p-14 text-white">
          <div aria-hidden className="clay-blob clay-lilac opacity-20 h-40 w-40 -top-10 -right-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="clay-chip clay-lilac gap-2 px-4 py-1.5 uppercase tracking-wider text-accent-dim">
              <Sparkles size={14} />
              {aiDominate.brand}
            </span>
            <span className="text-sm text-violet-200/80">{aiDominate.tagline}</span>
          </motion.div>

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-14">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.12] text-white mb-6">
                {aiDominate.headline}
              </h2>
              <p className="text-lg text-violet-100/90 leading-relaxed mb-4">{aiDominate.subheadline}</p>
              <p className="text-violet-200/70 leading-relaxed">{aiDominate.description}</p>
              <a href={`mailto:${profile.email}?subject=AI Dominate — Build my AI agent team`} className="btn-primary mt-9">
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
                  <div key={title} className="clay-dark-card p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <span className={`clay-icon ${tint(i + 1)} h-11 w-11 text-accent-dim`}>
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white mb-1">{title}</h3>
                        <p className="text-sm text-violet-200/75 leading-relaxed">{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative">
            <p className="mono-label !text-violet-200/80 mb-6">Your generative agent team</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiDominate.agents.map((agent, i) => (
                <motion.div
                  key={agent.role}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="clay-dark-card p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`clay-icon ${tint(i)} h-9 w-9 !rounded-xl text-accent-dim`}>
                      <Bot size={16} />
                    </span>
                    <h3 className="font-bold text-white text-sm">{agent.role}</h3>
                  </div>
                  <p className="text-sm text-violet-200/75 leading-relaxed">{agent.focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative mt-12 text-center text-violet-200/70 text-sm max-w-2xl mx-auto"
          >
            This isn&apos;t automation with scripts. It&apos;s your first{' '}
            <span className="text-violet-200 font-bold">AI-dominate company</span> — every department, powered by
            agents that generate outcomes, not just answers.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
