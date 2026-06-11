"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const references = [
  {
    name: "Professor Surname",
    role: "Head of Department, English Literature",
    organization: "University of Mysore",
    note: "Anusamrat demonstrated exceptional analytical writing and a rare ability to communicate complex literary ideas with clarity. A standout student in creative and critical thinking.",
    stamp: "bg-sketch-orange",
    sig: "text-sketch-orange",
    rot: -2,
    stampRot: 5,
  },
  {
    name: "Content Lead",
    role: "Senior Content Strategist",
    organization: "PlatLobby by VirelApp Unwire",
    note: "A dedicated and insightful team member who consistently elevated the quality of scripts and content strategy. His promotion from intern to team lead was well-earned.",
    stamp: "bg-sketch-blue",
    sig: "text-sketch-blue",
    rot: 1.5,
    stampRot: -7,
  },
];

export function References() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader eyebrow="✦ References" title="Postcards of" highlight="kind words" accent="red" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            A couple of notes that landed in the mailbox — signed, sealed, delivered. ✉️
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
          {references.map((ref, index) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 40, rotate: ref.rot * 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: ref.rot }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, type: "spring", bounce: 0.35 }}
              whileHover={{ rotate: 0, y: -5 }}
              className="relative bg-white ink-border wobble p-7 pb-16 hard-shadow"
            >
              {/* Postage stamp with initial */}
              <div
                className="absolute top-5 right-5 bg-paper p-1 border-2 border-dashed border-ink/60"
                style={{ transform: `rotate(${ref.stampRot}deg)` }}
              >
                <div className={`w-14 h-16 ${ref.stamp} ink-border-2 flex flex-col items-center justify-center leading-none`}>
                  <span className="text-3xl font-bold" style={{ fontFamily: "var(--font-kalam)" }}>
                    {ref.name.charAt(0)}
                  </span>
                  <span className="text-[10px] font-bold mt-1">★ POST</span>
                </div>
              </div>
              {/* Postmark */}
              <div className="absolute top-7 right-24 w-16 h-16 rounded-full border-[2.5px] border-ink/40 flex items-center justify-center -rotate-12 opacity-60">
                <span className="text-[9px] font-bold text-center leading-tight text-ink/70">
                  KIND ✦ WORDS
                </span>
              </div>

              {/* Quote */}
              <span className="text-6xl leading-none text-ink/25" style={{ fontFamily: "var(--font-kalam)" }}>
                &ldquo;
              </span>
              <p className="text-xl leading-relaxed -mt-5 pr-2">{ref.note}</p>

              {/* Signature */}
              <div className="mt-6">
                <span className={`relative inline-block text-3xl ${ref.sig}`} style={{ fontFamily: "var(--font-kalam)" }}>
                  — {ref.name}
                  <svg className="absolute -bottom-2 left-6 w-[85%]" height="12" viewBox="0 0 180 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 7C40 2 80 10 120 5C150 1 165 8 178 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
                <p className="text-base text-ink/70 mt-2">{ref.role}, {ref.organization}</p>
              </div>

              {/* Approval stamp */}
              <span className="absolute bottom-4 right-5 border-[3px] border-sketch-red text-sketch-red wobble px-3 py-1 text-base font-bold opacity-70" style={{ transform: "rotate(-8deg)" }}>
                ✓ RECOMMENDS
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
