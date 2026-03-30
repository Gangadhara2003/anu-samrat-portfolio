"use client";

import { motion } from "framer-motion";

const references = [
  {
    name: "Professor Surname",
    role: "Head of Department, English Literature",
    organization: "University of Mysore",
    note: "Anusamrat demonstrated exceptional analytical writing and a rare ability to communicate complex literary ideas with clarity. A standout student in creative and critical thinking.",
  },
  {
    name: "Content Lead",
    role: "Senior Content Strategist",
    organization: "PlatLobby by VirelApp Unwire",
    note: "A dedicated and insightful team member who consistently elevated the quality of scripts and content strategy. His promotion from intern to team lead was well-earned.",
  },
];

export function References() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[var(--surface-raised)]">
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
              References
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Professional <span className="text-gradient">References</span>
          </motion.h2>
        </div>

        {/* Reference cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {references.map((ref, index) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--surface)] rounded-2xl p-8 border border-[var(--border)] hover:border-amber-500/30 transition-all duration-500 hover:shadow-lg relative"
            >
              {/* Quote icon */}
              <div className="text-amber-500/20 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-[var(--muted)] text-sm leading-relaxed italic mb-6">
                &ldquo;{ref.note}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-sm">
                  {ref.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{ref.name}</h4>
                  <p className="text-xs text-[var(--muted)]">
                    {ref.role}, {ref.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
