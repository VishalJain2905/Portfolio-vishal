import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { profile } from '../data/resume';

export function About() {
  return (
    <section id="about" className="section-shell bg-slate-50">
      <div className="section-inner">
        <SectionHeader
          label="About"
          title={
            <>
              Engineering leader who ships{' '}
              <span className="text-slate-500">products that scale</span>
            </>
          }
          subtitle="Full-stack development, distributed systems, and AI-powered automation."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-slate-600 leading-relaxed"
          >
            <p className="text-lg text-slate-700">
              I&apos;m <strong className="text-slate-900 font-semibold">{profile.name}</strong>, a Senior
              Software Engineer at Techvirtue building NestJS APIs, React frontends, and real-time
              infrastructure with Kafka and Redis.
            </p>
            <p>
              I also design <strong className="text-slate-800">AI agent systems</strong> — autonomous
              teams that handle engineering, growth, and operations so companies can move faster with
              less manual overhead.
            </p>
            <p className="text-sm text-slate-500">{profile.motto}</p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="quote-block card-pro p-8"
          >
            <p className="font-display text-xl text-slate-800 italic leading-relaxed">{profile.quote}</p>
            <footer className="mt-4 text-sm font-medium text-slate-500">— {profile.name}</footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
