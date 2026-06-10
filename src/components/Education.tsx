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
    tab: "bg-sketch-orange",
    rot: -1.5,
  },
  {
    period: "2020 – 2022",
    degree: "Pre-University (PUC / 12th)",
    institution: "Board of Pre-University Education, Karnataka",
    description:
      "Completed pre-university education in the Arts stream with focus on humanities and languages.",
    highlight: "Arts & Humanities",
    tab: "bg-sketch-blue",
    rot: 1.5,
  },
  {
    period: "2008 – 2020",
    degree: "Secondary Education (SSLC / 10th)",
    institution: "Karnataka Secondary Education Board",
    description:
      "Completed schooling with strong academic performance in English and social sciences.",
    highlight: "Foundation Studies",
    tab: "bg-sketch-red",
    rot: -1,
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="✦ Education"
            title="Academic"
            highlight="background"
            accent="yellow"
          />
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white ink-border wobble p-6 sm:p-8 pt-9 hard-shadow tilt-hover"
              style={{ transform: `rotate(${item.rot}deg)` }}
            >
              {/* Date "file tab" */}
              <span
                className={`absolute -top-4 left-6 ${item.tab} ink-border-2 wobble-alt px-4 py-1 text-base font-bold hard-shadow-sm`}
              >
                {item.period}
              </span>
              <h3 className="text-2xl leading-tight">{item.degree}</h3>
              <p className="text-lg font-bold text-sketch-orange mt-1">{item.institution}</p>
              <p className="text-lg text-ink/75 mt-3 leading-relaxed">{item.description}</p>
              <span className="inline-block mt-4 bg-sketch-yellow ink-border-2 wobble px-3 py-1 text-base font-bold">
                🎯 {item.highlight}
              </span>
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
