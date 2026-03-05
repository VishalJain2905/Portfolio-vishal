import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-grid">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-xl mb-6"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-xl p-6 sm:p-8 glow-border"
        >
          <p className="text-zinc-300 leading-relaxed mb-4">
            I'm a <span className="text-accent font-medium">Senior Software Engineer</span> with hands-on experience building
            full-stack web applications, RESTful APIs, and real-time systems. I focus on scalable architecture, clean code,
            and seamless user experiences.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I enjoy working with <span className="text-accent-dim">NestJS</span>, <span className="text-accent-dim">React</span>,{' '}
            <span className="text-accent-dim">Kafka</span>, and <span className="text-accent-dim">Redis</span> to deliver
            performant, maintainable solutions. When I'm not coding, I like exploring microservices design and
            machine-learning applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
