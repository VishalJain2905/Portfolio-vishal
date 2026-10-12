import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
};

export function SectionHeader({ label, title, subtitle, align = 'left', dark = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-10 sm:mb-14 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      <p className={`label-pill mb-4 ${dark ? '!bg-white/10 !text-violet-200 !shadow-none' : ''}`}>{label}</p>
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-tight tracking-tight ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-violet-200/80' : 'text-ink-muted'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
