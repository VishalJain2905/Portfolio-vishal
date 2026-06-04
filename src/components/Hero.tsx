import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Github } from 'lucide-react';
import { ThreeBackground } from './ThreeBackground';
import { profile, highlights } from '../data/resume';

function StatGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 gap-2 sm:gap-3 ${className}`}>
      {highlights.map((stat) => (
        <div key={stat.label} className="card-pro px-3 py-2.5 sm:px-4 sm:py-3">
          <p className="text-base sm:text-lg font-bold text-slate-900">{stat.value}</p>
          <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-0 lg:min-h-screen flex items-center overflow-hidden bg-white">
      <div className="section-inner relative z-10 w-full max-w-6xl pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24">
        <div className="flex flex-col lg:grid lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] gap-8 lg:gap-12 xl:gap-20 lg:items-center">
          {/* Text first on mobile */}
          <div className="order-1 lg:order-2 relative text-center lg:text-left">
            <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-[min(420px,45vw)] h-[min(420px,70vh)] opacity-[0.35] pointer-events-none">
              <div className="relative w-full h-full">
                <ThreeBackground />
                <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 to-transparent" />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mono-label text-teal-700 mb-4 sm:mb-5"
            >
              {profile.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative font-display text-3xl sm:text-5xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight mb-3 sm:mb-4"
            >
              Hi, I&apos;m {profile.name.split(' ')[0]}.
              <br />
              <span className="text-slate-500 font-normal text-2xl sm:text-4xl md:text-[2.75rem]">
                I build systems & AI agents.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative text-slate-600 text-sm sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8"
            >
              {profile.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative flex flex-wrap justify-center lg:justify-start items-center gap-2.5 sm:gap-3"
            >
              <a href="#ai" className="btn-primary text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-6">
                AI Dominate
                <ArrowUpRight size={16} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-6">
                Contact
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-slate-200 text-slate-500 hover:text-teal-700 hover:border-teal-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-slate-200 text-slate-500 hover:text-teal-700 hover:border-teal-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </motion.div>

            <StatGrid className="mt-6 lg:hidden" />
          </div>

          {/* Photo below on mobile — very small */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start mx-auto lg:mx-0 w-full lg:max-w-[320px]"
          >
            <div className="lg:hidden flex flex-col items-center gap-3 mt-2">
              <div className="profile-frame w-[4.5rem] h-[5.5rem] rounded-xl shrink-0 shadow-md">
                <img
                  src="/profile.png"
                  alt={profile.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="hidden lg:block w-full">
              <div className="profile-frame aspect-[4/5]">
                <img src="/profile.png" alt={profile.name} className="w-full h-full object-cover object-top" />
              </div>
              <StatGrid className="mt-6" />
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 mono-label text-slate-400 hover:text-teal-700 transition-colors"
      >
        Scroll ↓
      </a>
    </section>
  );
}
