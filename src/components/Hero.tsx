import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Github } from 'lucide-react';
import { ThreeBackground } from './ThreeBackground';
import { profile, highlights } from '../data/resume';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="section-inner relative z-10 w-full max-w-6xl pt-28 pb-24">
        <div className="grid lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] gap-12 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto lg:mx-0 w-full max-w-[320px]"
          >
            <div className="profile-frame aspect-[4/5]">
              <img src="/profile.png" alt={profile.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {highlights.map((stat) => (
                <div key={stat.label} className="card-pro px-4 py-3">
                  <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative text-center lg:text-left">
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
              className="mono-label text-teal-700 mb-5"
            >
              {profile.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative font-display text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-[1.08] tracking-tight mb-4"
            >
              Hi, I&apos;m {profile.name.split(' ')[0]}.
              <br />
              <span className="text-slate-500 font-normal text-3xl sm:text-4xl md:text-[2.75rem]">
                I build systems & AI agents.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative text-slate-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              {profile.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative flex flex-wrap justify-center lg:justify-start items-center gap-3"
            >
              <a href="#ai" className="btn-primary">
                AI Dominate
                <ArrowUpRight size={16} />
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary">
                Contact
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-200 text-slate-500 hover:text-teal-700 hover:border-teal-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-slate-200 text-slate-500 hover:text-teal-700 hover:border-teal-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 mono-label text-slate-400 hover:text-teal-700 transition-colors"
      >
        Scroll ↓
      </a>
    </section>
  );
}
