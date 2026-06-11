"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const accents = [
  { tape: "rgba(251,146,60,0.45)", pin: "bg-sketch-orange", stamp: "#c2410c", tilt: -2 },
  { tape: "rgba(96,165,250,0.4)", pin: "bg-sketch-blue", stamp: "#1d4ed8", tilt: 1.5 },
  { tape: "rgba(239,68,68,0.35)", pin: "bg-sketch-red", stamp: "#b91c1c", tilt: -1.5 },
  { tape: "rgba(234,179,8,0.45)", pin: "bg-sketch-yellow", stamp: "#a16207", tilt: 2 },
];

const experience = [
  {
    role: "Social Media Manager",
    company: "Thistle Media",
    type: "Digital Media Agency",
    period: "Oct 2025 – Present",
    achievements: [
      "Led creative planning for campaigns, directing concepts and guiding design/edit workflows.",
      "Delivered copywriting and ad content for entertainment, wellness, childcare, and industrial B2B sectors.",
      "Developed website copy and conducted content audits to refine brand voice.",
    ],
  },
  {
    role: "Content Writer",
    company: "Klarecon",
    type: "Internet Publishing",
    period: "Jul 2025 – Sep 2025",
    achievements: [
      "Produced SEO-optimized blogs and articles for international startup clients (B2B, B2C, SaaS, D2C).",
      "Applied keyword research and SEO tools to improve organic reach.",
      "Collaborated with clients on blogs, ad copies, long-form articles, and website audits.",
    ],
  },
  {
    role: "Content Strategist & Team Lead",
    company: "PlatLobby by VirelApp Unwire",
    type: "Infotainment Startup",
    period: "May 2025 – Present",
    achievements: [
      "Promoted from R&D Intern → Scriptwriter → Content Strategist.",
      "Managed cross-functional team of writers, editors, and researchers.",
      "Analyzed YouTube analytics to guide content planning and channel growth.",
    ],
  },
  {
    role: "Marketing & Content Intern",
    company: "Pehchaan The Street School",
    type: "Non-Governmental Organization",
    period: "Apr 2025 – Jun 2025",
    achievements: [
      "Authored emotional blogs and poems raising awareness about social issues.",
      "Created campaign content to attract volunteers.",
    ],
  },
  {
    role: "Scriptwriter",
    company: "PadhleAkshay (YouTube)",
    type: "Educational Content",
    period: "Jan 2024 – Apr 2025",
    achievements: [
      "Wrote educational video scripts simplifying concepts for ages 14–21.",
      "Used hooks, CTAs, and storytelling to improve retention.",
    ],
  },
  {
    role: "Freelance Ghost Writer",
    company: "Self Employed",
    type: "Creative Services",
    period: "Feb 2024 – Present",
    achievements: [
      "Contributed to screenwriting drafts and dialogue for short films & ads.",
      "Wrote captions and taglines for creators.",
    ],
  },
];

function CheckItem({ text, color }: { text: string; color: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex-shrink-0 w-5 h-5 bg-white ink-border-2 flex items-center justify-center rotate-[-4deg]">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
          <path d="M3 13l5 6L21 4" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-lg leading-snug text-ink/80">{text}</span>
    </li>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader eyebrow="✦ Career" title="My winding" highlight="journey" accent="red" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            Six stops on the map so far — follow the trail from{" "}
            <span className="marker font-bold">now</span> all the way back to where it began. ✎
          </motion.p>
        </div>

        <div className="relative">
          {/* Wavy hand-drawn trail */}
          <svg
            className="absolute top-0 bottom-0 left-7 md:left-1/2 md:-translate-x-1/2 w-12 h-full pointer-events-none"
            viewBox="0 0 24 1080"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 0 C 24 60, 0 120, 12 180 C 24 240, 0 300, 12 360 C 24 420, 0 480, 12 540 C 24 600, 0 660, 12 720 C 24 780, 0 840, 12 900 C 24 960, 0 1020, 12 1080"
              stroke="#1a1a1a"
              strokeWidth="3"
              strokeDasharray="1 11"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>

          {/* NOW flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            className="relative z-10 mb-10 flex md:justify-center"
          >
            <span className="ml-1 md:ml-0 inline-flex items-center gap-1.5 bg-sketch-red text-white ink-border wobble px-4 py-1.5 text-lg font-bold hard-shadow-sm">
              ★ NOW
            </span>
          </motion.div>

          <div className="space-y-12 md:space-y-16">
            {experience.map((item, i) => {
              const a = accents[i % accents.length];
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.35 }}
                  className="relative md:grid md:grid-cols-2 md:items-start"
                >
                  {/* Milestone number pin on the trail */}
                  <span
                    className={`absolute z-20 left-7 md:left-1/2 -translate-x-1/2 top-3 w-12 h-12 ${a.pin} ink-border rounded-full flex items-center justify-center text-2xl font-bold hard-shadow-sm`}
                    style={{ fontFamily: "var(--font-kalam)" }}
                  >
                    {i + 1}
                  </span>

                  {/* Card */}
                  <div
                    className={
                      left
                        ? "md:col-start-1 md:pr-16 pl-16 md:pl-0"
                        : "md:col-start-2 md:pl-16 pl-16"
                    }
                  >
                    <div
                      className="relative bg-white ink-border wobble p-6 pt-8 hard-shadow tilt-hover"
                      style={{ transform: `rotate(${a.tilt}deg)` }}
                    >
                      {/* Washi tape */}
                      <span
                        className="absolute -top-3 left-8 w-24 h-7 ink-border-2 rotate-[-4deg]"
                        style={{ background: a.tape, backdropFilter: "blur(1px)" }}
                      />

                      {/* Type tab */}
                      <span className="inline-block bg-sketch-yellow ink-border-2 wobble-alt px-3 py-0.5 text-sm font-bold mb-2">
                        {item.type}
                      </span>

                      <h3 className="text-2xl sm:text-3xl leading-tight">{item.role}</h3>
                      <p className="text-xl font-bold mt-1">
                        <span className="marker-orange">{item.company}</span>
                      </p>

                      {/* Rubber-stamp date */}
                      <span
                        className="inline-block mt-3 mb-4 px-3 py-1 text-base font-bold border-2 border-dashed wobble rotate-[-2deg]"
                        style={{ color: a.stamp, borderColor: a.stamp }}
                      >
                        📅 {item.period}
                      </span>

                      <ul className="space-y-2.5">
                        {item.achievements.map((ach, idx) => (
                          <CheckItem key={idx} text={ach} color={a.stamp} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Where it began flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            className="relative z-10 mt-12 flex md:justify-center"
          >
            <span className="ml-1 md:ml-0 inline-flex items-center gap-1.5 bg-ink text-paper wobble-alt ink-border px-4 py-1.5 text-lg font-bold hard-shadow-sm">
              ✎ where it began
            </span>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-24">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
