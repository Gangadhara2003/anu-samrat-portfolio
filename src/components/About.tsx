"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    icon: "📝",
    title: "Content Writing & SEO",
    description:
      "SEO-optimized blogs, articles, and web copy that ranks and resonates. Data-driven strategy for B2B, B2C, SaaS, and D2C brands.",
    bg: "bg-sketch-orange/30",
    rot: -2,
    shadow: "hard-shadow-orange",
  },
  {
    icon: "🎬",
    title: "Scriptwriting & Storytelling",
    description:
      "YouTube scripts, screenplays, and dialogue for educational and narrative-driven content. Hooks that retain, stories that convert.",
    bg: "bg-sketch-blue/30",
    rot: 1.5,
    shadow: "hard-shadow-blue",
  },
  {
    icon: "📢",
    title: "Brand Strategy & Marketing",
    description:
      "Social media strategy, campaign copy, ad creatives, and brand voice development — cohesive narratives across every touchpoint.",
    bg: "bg-sketch-red/25",
    rot: -1,
    shadow: "hard-shadow-red",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="✦ About Me"
            title="Narratives that"
            highlight="inform & convert"
            accent="orange"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl leading-relaxed text-ink/80"
          >
            I bridge the gap between complex ideas and relatable storytelling — from
            SEO blogs for global startups to YouTube scripts watched by thousands.
            Every word is intentional, every sentence serves a purpose.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: "spring", bounce: 0.4 }}
              className={`relative bg-white ink-border wobble p-7 ${service.shadow} tilt-hover`}
              style={{ transform: `rotate(${service.rot}deg)` }}
            >
              {/* Wobbly icon circle */}
              <div
                className={`w-16 h-16 ${service.bg} ink-border-2 rounded-full flex items-center justify-center text-3xl mb-5`}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl mb-3">{service.title}</h3>
              <p className="text-lg leading-relaxed text-ink/75">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dashed divider */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-24">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
