"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const certifications = [
  { title: "Google Digital Marketing & E-Commerce", org: "Google (Coursera)", date: "2025", medal: "🏅", accent: "bg-sketch-orange", rot: -2 },
  { title: "Content Strategy for Professionals", org: "Northwestern University", date: "2025", medal: "🎖️", accent: "bg-sketch-blue", rot: 2 },
  { title: "SEO Specialization", org: "UC Davis (Coursera)", date: "2025", medal: "🏆", accent: "bg-sketch-yellow", rot: -1.5 },
  { title: "AI in Digital Marketing", org: "Online Certification", date: "2024", medal: "⭐", accent: "bg-sketch-red", rot: 1.5 },
  { title: "Creative Writing Fundamentals", org: "Wesleyan University", date: "2024", medal: "📜", accent: "bg-sketch-blue", rot: -1 },
];

const ribbonClip = "polygon(0 0, 100% 0, 100% 100%, 50% 72%, 0 100%)";

function Medal({ emoji, date, accent }: { emoji: string; date: string; accent: string }) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Medallion */}
      <div className={`relative z-10 w-24 h-24 ${accent} ink-border rounded-full flex flex-col items-center justify-center hard-shadow-sm`}>
        {/* inner dashed ring */}
        <span className="absolute inset-2 rounded-full border-2 border-dashed border-ink/40" />
        <span className="text-2xl leading-none">{emoji}</span>
        <span className="text-xl font-bold mt-0.5" style={{ fontFamily: "var(--font-kalam)" }}>
          {date}
        </span>
      </div>
      {/* Pleated ribbon tails */}
      <div className="-mt-4 flex gap-1.5">
        <span className={`w-6 h-12 ${accent} ink-border-2`} style={{ clipPath: ribbonClip, transform: "rotate(-9deg)" }} />
        <span className={`w-6 h-12 ${accent} ink-border-2`} style={{ clipPath: ribbonClip, transform: "rotate(9deg)" }} />
      </div>
    </div>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader eyebrow="✦ Certifications" title="Earned my" highlight="medals" accent="orange" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            Five badges pinned to the board — and the collection keeps growing. 🏅
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40, rotate: cert.rot * 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: cert.rot }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, type: "spring", bounce: 0.4 }}
              whileHover={{ rotate: 0, y: -6 }}
              className="flex flex-col items-center"
            >
              <Medal emoji={cert.medal} date={cert.date} accent={cert.accent} />

              {/* Citation card overlapping the ribbon */}
              <div className="relative -mt-3 w-full bg-white ink-border wobble px-5 pt-6 pb-5 hard-shadow text-center">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white ink-border-2 wobble px-3 py-0.5 text-sm font-bold whitespace-nowrap">
                  ✓ Completed
                </span>
                <h3 className="text-xl leading-tight mt-1">{cert.title}</h3>
                <p className="text-lg text-ink/70 mt-2">{cert.org}</p>
              </div>
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
