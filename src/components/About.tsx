"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "📝",
    title: "Content Writing & SEO",
    description:
      "SEO-optimized blogs, articles, and web copy that ranks and resonates. Data-driven content strategy for B2B, B2C, SaaS, and D2C brands.",
  },
  {
    icon: "🎬",
    title: "Scriptwriting & Storytelling",
    description:
      "YouTube scripts, screenplays, and dialogue for educational, infotainment, and narrative-driven content. Hooks that retain, stories that convert.",
  },
  {
    icon: "📢",
    title: "Brand Strategy & Marketing",
    description:
      "Social media strategy, campaign copy, ad creatives, and brand voice development. Building cohesive narratives across every touchpoint.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="section-divider" />
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              About Me
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Crafting narratives that
            <br />
            <span className="text-gradient">inform, engage & convert</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-2xl"
          >
            I specialize in bridging the gap between complex ideas and relatable storytelling.
            From SEO blogs for global startups to YouTube scripts watched by thousands,
            I build content ecosystems that drive measurable business outcomes.
            My approach combines analytical thinking with creative instinct — every word is intentional,
            every sentence serves a purpose.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-4xl block mb-6">{service.icon}</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
