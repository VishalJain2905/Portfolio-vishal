import { motion } from 'framer-motion';
import { Bot, Check, Rocket, Server, ShoppingBag, Wrench, Zap, type LucideIcon } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { services } from '../data/resume';
import { tint } from '../clay';

const icons: LucideIcon[] = [Rocket, ShoppingBag, Zap, Bot, Server, Wrench];

export function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          label="Services"
          title={
            <>
              What I can <span className="text-accent">build for you</span>
            </>
          }
          subtitle="Whether you're starting from an idea or scaling an existing product, I handle the full build — design to deployment."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i] ?? Rocket;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06 }}
                className="clay-hover p-6 sm:p-7 flex flex-col"
              >
                <span className={`clay-icon ${tint(i)} h-14 w-14 mb-5 text-accent-dim`}>
                  <Icon size={24} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{service.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="mt-auto space-y-2">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent-dim">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
