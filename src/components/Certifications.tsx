"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Google Digital Marketing & E-Commerce",
    org: "Google (Coursera)",
    date: "2025",
    status: "Completed",
  },
  {
    title: "Content Strategy for Professionals",
    org: "Northwestern University (Coursera)",
    date: "2025",
    status: "Completed",
  },
  {
    title: "SEO Specialization",
    org: "UC Davis (Coursera)",
    date: "2025",
    status: "Completed",
  },
  {
    title: "AI in Digital Marketing",
    org: "Online Certification",
    date: "2024",
    status: "Completed",
  },
  {
    title: "Creative Writing Fundamentals",
    org: "Wesleyan University (Coursera)",
    date: "2024",
    status: "Completed",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden">
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
              Certifications
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Certified <span className="text-gradient">Knowledge</span>
          </motion.h2>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)] hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg relative overflow-hidden"
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {cert.status}
                </span>
                <span className="text-xs text-[var(--muted)] font-mono">{cert.date}</span>
              </div>
              <h3 className="text-lg font-bold group-hover:text-amber-500 transition-colors leading-tight">
                {cert.title}
              </h3>
              <p className="text-sm text-[var(--muted)] mt-2">{cert.org}</p>
              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-amber-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
