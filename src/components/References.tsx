"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const references = [
  {
    name: "Professor Surname",
    role: "Head of Department, English Literature",
    organization: "University of Mysore",
    note: "Anusamrat demonstrated exceptional analytical writing and a rare ability to communicate complex literary ideas with clarity. A standout student in creative and critical thinking.",
    bg: "bg-sketch-yellow/60",
    avatar: "bg-sketch-orange",
    rot: -2,
  },
  {
    name: "Content Lead",
    role: "Senior Content Strategist",
    organization: "PlatLobby by VirelApp Unwire",
    note: "A dedicated and insightful team member who consistently elevated the quality of scripts and content strategy. His promotion from intern to team lead was well-earned.",
    bg: "bg-sketch-blue/20",
    avatar: "bg-sketch-blue",
    rot: 1.5,
  },
];

export function References() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="✦ References"
            title="Kind"
            highlight="words"
            accent="red"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          {references.map((ref, index) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ transform: `rotate(${ref.rot}deg)` }}
              className={`relative ${ref.bg} ink-border wobble p-8 hard-shadow tilt-hover`}
            >
              <span className="tape tape-2" style={{ top: -10, right: 30, width: 90 }} />
              <span className="text-6xl leading-none text-ink/30" style={{ fontFamily: "var(--font-kalam)" }}>
                &ldquo;
              </span>
              <p className="text-xl leading-relaxed -mt-4">{ref.note}</p>
              <div className="flex items-center gap-3 mt-6">
                <div className={`w-12 h-12 rounded-full ${ref.avatar} ink-border-2 flex items-center justify-center font-bold text-xl`}>
                  {ref.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-lg font-bold">{ref.name}</h4>
                  <p className="text-base text-ink/70">{ref.role}, {ref.organization}</p>
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
