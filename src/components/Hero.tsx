import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Github } from 'lucide-react';
import { ThreeBackground } from './ThreeBackground';
import { profile, highlights } from '../data/resume';
import { tint } from '../clay';

function StatGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${className}`}>
      {highlights.map((stat, i) => (
        <div key={stat.label} className={`clay ${tint(i)} !rounded-3xl px-4 py-3 sm:px-5 sm:py-4`}>
          <p className="font-display text-lg sm:text-xl font-semibold text-ink">{stat.value}</p>
          <p className="text-[11px] sm:text-xs text-ink-muted leading-snug mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-0 lg:min-h-screen flex items-center">
      <div aria-hidden className="clay-blob clay-pink h-24 w-24 sm:h-32 sm:w-32 top-28 -left-8 sm:left-6" />
      <div
        aria-hidden
        className="clay-blob clay-mint h-16 w-16 sm:h-20 sm:w-20 bottom-16 right-6 sm:right-16"
        style={{ animationDelay: '-2s' }}
      />
      <div
        aria-hidden
        className="clay-blob clay-lemon hidden md:block h-12 w-12 top-36 right-[38%]"
        style={{ animationDelay: '-4s' }}
      />

      <div className="section-inner relative z-10 w-full max-w-6xl pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pb-24">
        <div className="flex flex-col lg:grid lg:grid-cols-[320px_1fr] xl:grid-cols-[340px_1fr] gap-10 lg:gap-14 xl:gap-20 lg:items-center">
          <div className="order-1 lg:order-2 relative text-center lg:text-left">
            <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-[min(420px,45vw)] h-[min(420px,70vh)] opacity-30 pointer-events-none [mask-image:linear-gradient(to_left,black_25%,transparent_80%)]">
              <ThreeBackground />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-5 sm:mb-6"
            >
              <span className="clay-chip clay-mint gap-2 text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availability}
              </span>
              <span className="label-pill">{profile.tagline}</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.08] tracking-tight mb-4"
            >
              Hi, I&apos;m <span className="text-accent">{profile.name.split(' ')[0]}</span>.
              <br />
              <span className="font-medium text-ink-muted text-2xl sm:text-4xl md:text-[2.6rem]">
                I build products that grow your business.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative text-ink-muted text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-7 sm:mb-9"
            >
              {profile.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative flex flex-wrap justify-center lg:justify-start items-center gap-3"
            >
              <a href="#contact" className="btn-primary">
                Start your project
                <ArrowUpRight size={16} />
              </a>
              <a href="#projects" className="btn-secondary">
                See my work
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-round" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-round" aria-label="GitHub">
                <Github size={18} />
              </a>
            </motion.div>

            <StatGrid className="mt-8 lg:hidden" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start mx-auto lg:mx-0 w-full lg:max-w-[340px]"
          >
            <div className="lg:hidden flex flex-col items-center gap-3 mt-2">
              <div className="profile-frame w-24 h-28 !rounded-3xl shrink-0">
                <img src="/profile.png" alt={profile.name} className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="hidden lg:block w-full">
              <div className="clay clay-lilac p-3 !rounded-[2.5rem]">
                <div className="profile-frame aspect-[4/5] !border-0">
                  <img src="/profile.png" alt={profile.name} className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <StatGrid className="mt-7" />
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#services"
        className="hidden sm:inline-flex clay-chip bg-white/70 absolute bottom-8 left-1/2 -translate-x-1/2 z-10 mono-label hover:text-accent transition-colors"
      >
        Scroll ↓
      </a>
    </section>
  );
}
