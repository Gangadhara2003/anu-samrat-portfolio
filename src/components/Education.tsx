"use client";

import { motion } from "framer-motion";

const education = [
  {
    period: "2022 – 2025",
    degree: "Bachelor of Arts in English (BA)",
    institution: "University of Mysore",
    description: "Focused on English literature, linguistics, and creative writing. Developed strong foundational skills in analytical writing, critical thinking, and narrative construction.",
    highlight: "English Literature & Creative Writing",
  },
  {
    period: "2020 – 2022",
    degree: "Pre-University (PUC / 12th)",
    institution: "Board of Pre-University Education, Karnataka",
    description: "Completed pre-university education in Arts stream with focus on humanities and languages.",
    highlight: "Arts & Humanities",
  },
  {
    period: "2008 – 2020",
    degree: "Secondary Education (SSLC / 10th)",
    institution: "Karnataka Secondary Education Board",
    description: "Completed mandatory schooling with strong academic performance in English and social sciences.",
    highlight: "Foundation Studies",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="section-divider" />
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Education
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Academic <span className="text-gradient">Background</span>
          </motion.h2>
        </div>

        {/* Education cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[var(--surface)] rounded-2xl p-6 sm:p-8 border border-[var(--border)] hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                {/* Date badge */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-mono font-bold">
                    {item.period}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold group-hover:text-amber-500 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--muted)] bg-[var(--surface-raised)] px-2.5 py-1 rounded-full border border-[var(--border)]">
                      🎯 {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-amber-500/30 group-hover:bg-amber-500 transition-colors rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
