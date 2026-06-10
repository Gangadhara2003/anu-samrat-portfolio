"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const certifications = [
  { title: "Google Digital Marketing & E-Commerce", org: "Google (Coursera)", date: "2025", bg: "bg-sketch-orange/25", rot: -2 },
  { title: "Content Strategy for Professionals", org: "Northwestern University", date: "2025", bg: "bg-sketch-blue/25", rot: 1.5 },
  { title: "SEO Specialization", org: "UC Davis (Coursera)", date: "2025", bg: "bg-sketch-yellow/60", rot: -1 },
  { title: "AI in Digital Marketing", org: "Online Certification", date: "2024", bg: "bg-sketch-red/20", rot: 2 },
  { title: "Creative Writing Fundamentals", org: "Wesleyan University", date: "2024", bg: "bg-sketch-blue/25", rot: -1.5 },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="✦ Certifications"
            title="Certified"
            highlight="knowledge"
            accent="orange"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              style={{ transform: `rotate(${cert.rot}deg)` }}
              className={`relative ${cert.bg} ink-border wobble p-6 hard-shadow tilt-hover`}
            >
              <span className="thumbtack" style={{ top: -7, right: 22 }} />
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block bg-white ink-border-2 wobble px-2.5 py-0.5 text-sm font-bold">
                  ✓ Completed
                </span>
                <span className="text-base font-bold text-ink/60">{cert.date}</span>
              </div>
              <h3 className="text-xl leading-tight">{cert.title}</h3>
              <p className="text-lg text-ink/70 mt-2">{cert.org}</p>
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
