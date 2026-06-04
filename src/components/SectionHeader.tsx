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
      className={`mb-12 sm:mb-14 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      <p className={`mono-label mb-3 ${dark ? 'text-teal-400' : 'text-teal-700'}`}>{label}</p>
      <h2
        className={`font-display text-3xl sm:text-4xl font-medium leading-tight tracking-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
