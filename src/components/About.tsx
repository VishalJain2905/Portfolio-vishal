import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { profile } from '../data/resume';

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          label="About"
          title={
            <>
              Engineering leader who ships <span className="text-accent">products that scale</span>
            </>
          }
          subtitle="Full-stack development, distributed systems, and AI-powered automation."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay p-7 sm:p-9 space-y-5 text-ink-muted leading-relaxed"
          >
            <p className="text-lg text-ink">
              I&apos;m <strong className="font-bold">{profile.name}</strong>, a Senior Software Engineer at
              Techvirtue building NestJS APIs, React frontends, and real-time infrastructure with Kafka and Redis.
            </p>
            <p>
              I also design <strong className="text-ink">AI agent systems</strong> — autonomous teams that handle
              engineering, growth, and operations so companies can move faster with less manual overhead.
            </p>
            <p className="clay-chip clay-mint">{profile.motto}</p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="quote-block clay clay-lilac p-8 sm:p-10 m-0"
          >
            <span className="clay-icon clay-peach h-12 w-12 mb-5 text-accent-dim">
              <Quote size={20} />
            </span>
            <p className="font-display text-xl sm:text-2xl text-ink leading-relaxed">{profile.quote}</p>
            <footer className="mt-5 text-sm font-semibold text-ink-muted">— {profile.name}</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
