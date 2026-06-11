"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const education = [
  {
    period: "2022 – 2025",
    degree: "Bachelor of Arts in English (BA)",
    institution: "University of Mysore",
    description:
      "Focused on English literature, linguistics, and creative writing. Built strong foundations in analytical writing, critical thinking, and narrative construction.",
    highlight: "English Literature & Creative Writing",
    seal: "🎓",
    accent: "bg-sketch-orange",
    marker: "marker-orange",
    tilt: -2,
    shift: "md:-translate-x-6",
  },
  {
    period: "2020 – 2022",
    degree: "Pre-University (PUC / 12th)",
    institution: "Board of Pre-University Education, Karnataka",
    description:
      "Completed pre-university education in the Arts stream with focus on humanities and languages.",
    highlight: "Arts & Humanities",
    seal: "📖",
    accent: "bg-sketch-blue",
    marker: "marker-blue",
    tilt: 2,
    shift: "md:translate-x-10",
  },
  {
    period: "2008 – 2020",
    degree: "Secondary Education (SSLC / 10th)",
    institution: "Karnataka Secondary Education Board",
    description:
      "Completed schooling with strong academic performance in English and social sciences.",
    highlight: "Foundation Studies",
    seal: "✏️",
    accent: "bg-sketch-yellow",
    marker: "marker",
    tilt: -1.5,
    shift: "md:-translate-x-2",
  },
];

function Seal({ emoji, accent }: { emoji: string; accent: string }) {
  return (
    <span className="relative inline-flex w-16 h-16 items-center justify-center shrink-0">
      {/* two stacked rotated squares = 8-point rosette */}
      <span className={`absolute inset-0 ${accent} ink-border-2`} />
      <span className={`absolute inset-0 ${accent} ink-border-2 rotate-45`} />
      <span className={`absolute inset-[7px] rounded-full ${accent} ink-border-2 flex items-center justify-center text-2xl`}>
        {emoji}
      </span>
    </span>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader eyebrow="✦ Education" title="Report" highlight="cards" accent="yellow" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            Three pages pulled straight from the school notebook — sealed, stamped, and graded. 🎓
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-14">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 50, rotate: item.tilt * 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: item.tilt }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.35 }}
              className={`relative ${item.shift}`}
            >
              {/* Thumbtack holding the page */}
              <span className="thumbtack" style={{ top: -6, left: "50%", marginLeft: -7 }} />

              <div className="relative bg-white ink-border wobble hard-shadow tilt-hover overflow-hidden">
                {/* red margin line */}
                <span className="absolute top-0 bottom-0 left-10 w-0 border-l-2 border-sketch-red/50" />

                {/* Notched year ribbon */}
                <span
                  className={`ribbon ${item.accent} ink-border-2 inline-block pl-5 pr-9 py-1.5 text-lg font-bold`}
                >
                  {item.period}
                </span>

                {/* ruled body */}
                <div className="ruled-paper pl-14 pr-6 sm:pr-8 py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl sm:text-3xl leading-tight">{item.degree}</h3>
                      <p className="text-xl font-bold mt-1">
                        <span className={item.marker}>{item.institution}</span>
                      </p>
                    </div>
                    <div className="-rotate-6">
                      <Seal emoji={item.seal} accent={item.accent} />
                    </div>
                  </div>

                  <p className="text-lg leading-[34px] text-ink/80 mt-2">{item.description}</p>

                  {/* Grade-sticker highlight */}
                  <span className="inline-block mt-4 px-3 py-1 text-base font-bold border-2 border-dashed border-ink/50 wobble rotate-[-1.5deg] bg-paper">
                    🎯 {item.highlight}
                  </span>
                </div>
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
