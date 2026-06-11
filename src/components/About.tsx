"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    icon: "📝",
    title: "Content Writing & SEO",
    description:
      "SEO-optimized blogs, articles, and web copy that ranks and resonates. Data-driven strategy for B2B, B2C, SaaS, and D2C brands.",
    seal: "bg-sketch-orange",
    shadow: "hard-shadow-orange",
    marker: "marker-orange",
    place: "lg:col-start-1 lg:row-start-1",
    tilt: -2.5,
  },
  {
    icon: "🎬",
    title: "Scriptwriting & Storytelling",
    description:
      "YouTube scripts, screenplays, and dialogue for educational and narrative-driven content. Hooks that retain, stories that convert.",
    seal: "bg-sketch-blue",
    shadow: "hard-shadow-blue",
    marker: "marker-blue",
    place: "lg:col-start-3 lg:row-start-1",
    tilt: 2.5,
  },
  {
    icon: "📢",
    title: "Brand Strategy & Marketing",
    description:
      "Social media strategy, campaign copy, ad creatives, and brand voice development — cohesive narratives across every touchpoint.",
    seal: "bg-sketch-red",
    shadow: "hard-shadow-red",
    marker: "marker",
    place: "lg:col-start-2 lg:row-start-2",
    tilt: -1.5,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="✦ About Me"
            title="Intent behind"
            highlight="all this"
            accent="orange"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl leading-relaxed text-ink/80"
          >
            Started with a fascination for storytelling and a habit of dissecting what makes ideas resonate.
            That curiosity grew into a career across content, copywriting, scripting, and social media.
            Today, I build stories, strategies, and systems designed to{" "}
            <span className="marker font-bold">earn attention and drive value.</span>
          </motion.p>
        </div>

        {/* Brainstorm mind-map */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-x-10 lg:gap-y-16 items-start">
          {/* Doodle connector arrows (desktop only) */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none -z-0"
            viewBox="0 0 1000 600"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M430 150 C 330 150, 300 150, 250 170" stroke="#1a1a1a" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" opacity="0.45" />
            <path d="M570 150 C 670 150, 700 150, 750 170" stroke="#1a1a1a" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" opacity="0.45" />
            <path d="M500 230 C 500 320, 500 340, 500 380" stroke="#1a1a1a" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round" opacity="0.45" />
          </svg>

          {/* Central hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="relative z-10 mx-auto lg:col-start-2 lg:row-start-1 order-first"
          >
            <div className="relative w-44 h-44 bg-sketch-yellow ink-border rounded-full flex flex-col items-center justify-center text-center hard-shadow animate-float-slow">
              <span className="thumbtack" style={{ top: 14, left: "50%", marginLeft: -7 }} />
              <span className="text-4xl">✍️</span>
              <span className="text-3xl mt-1" style={{ fontFamily: "var(--font-kalam)" }}>
                What I do
              </span>
            </div>
            {/* scribbles around hub */}
            <span className="absolute -right-6 -top-2 text-2xl text-sketch-orange rotate-12">✦</span>
            <span className="absolute -left-6 bottom-2 text-2xl text-sketch-blue -rotate-12">✱</span>
          </motion.div>

          {/* Service idea-bubbles */}
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotate: service.tilt * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: service.tilt }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, type: "spring", bounce: 0.4 }}
              className={`relative z-10 bg-white ink-border wobble p-7 pt-9 ${service.shadow} tilt-hover ${service.place} max-w-sm`}
            >
              {/* seal icon overlapping the top edge */}
              <span
                className={`absolute -top-7 left-6 w-14 h-14 ${service.seal} ink-border rounded-full flex items-center justify-center text-2xl hard-shadow-sm rotate-[-6deg]`}
              >
                {service.icon}
              </span>
              <span className="absolute top-3 right-4 text-xl text-ink/30">{`0${index + 1}`}</span>

              <h3 className="text-2xl leading-tight mt-1">
                <span className={service.marker}>{service.title}</span>
              </h3>
              <p className="text-lg leading-relaxed text-ink/75 mt-3">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-24">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
