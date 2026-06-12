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
      "Managed social media strategy across hospitals, gaming, skincare, FMCG, tech, B2B, childcare & wellness — adapting brand voice for each.",
      "Wrote copy for social posts, Meta & Google ads, and website content while leading campaign planning, shoots, UGC & influencer marketing end-to-end.",
      "Owned multi-account client communication — briefs, approvals, creative direction & feedback loops.",
      "Tracked performance data, built reports, and conducted brand & content audits to refine strategy and sharpen conversion.",
    ],
  },
  {
    role: "Content Strategist, Scriptwriter & Team Lead",
    company: "PlatLobby by VirelApp – Unwire",
    type: "Infotainment Startup",
    period: "May 2025 – Present",
    achievements: [
      "Started in R&D researching business, economics, AI & film; tracked viral trends via Google Trends and competitor analysis.",
      "Scripted fiction, case studies, reviews & infotainment — built PlatLobby's Instagram from scratch through format experimentation.",
      "Grew into Content Strategist, leading a cross-functional team of writers, editors, designers & researchers.",
      "Trained scriptwriting & R&D interns on research, ideation and execution while keeping teams aligned across timelines.",
    ],
  },
  {
    role: "Content Writer",
    company: "Klarecon",
    type: "Internet Publishing",
    period: "Jul 2025 – Sep 2025",
    achievements: [
      "Wrote SEO-driven blogs, articles, website copy & long-form content for U.S.-based startup clients across B2B, B2C, SaaS & D2C.",
      "Produced ad scripts, YouTube scripts & promotional copy balancing brand tone with conversion intent.",
      "Created SOPs, onboarding playbooks & internal knowledge documentation for client operations.",
      "Collaborated directly with clients on diverse content needs — editorial pieces to technical writing.",
    ],
  },
  {
    role: "Social Media, Content Writing & Marketing Intern",
    company: "Pehchaan The Street School",
    type: "Non-Governmental Organization",
    period: "Jan 2025 – Apr 2025",
    achievements: [
      "Wrote blogs, articles, poems & stories around social issues — making cause-driven content feel human, not performative.",
      "Produced campaign content across Instagram, Medium, Quora, Blogger & Reddit with basic SEO to drive organic reach.",
      "Planned content calendars and coordinated activity schedules across platforms and internal teams.",
      "Built promotional content to push volunteer sign-ups and grow collaborations with partners.",
    ],
  },
  {
    role: "Scriptwriter",
    company: "PadhleAkshay (YouTube)",
    type: "Educational Content",
    period: "Apr 2024 – Dec 2024",
    achievements: [
      "Wrote long-format scripts for a 14–22 audience spanning Physics, Chemistry, English & socio-psychological infotainment.",
      "Built scripts around YouTube retention mechanics — hooks, pacing & CTAs to keep viewers watching.",
      "Made dense academic concepts watchable by wrapping them in narrative structures without sacrificing depth.",
    ],
  },
  {
    role: "Freelance Ghostwriter",
    company: "Self-Employed",
    type: "Creative Services",
    period: "Ongoing",
    achievements: [
      "Wrote scripts, screenwriting drafts, dialogue & scene development for short films, microdramas & digital ads.",
      "Developed reel ideas, UGC scripts & creative concepts for creators and brands — in their voice, not mine.",
      "Crafted captions, one-liners & taglines for social pages and independent creators across niches.",
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
          <SectionHeader eyebrow="✦ Career" title="The Road" highlight="So Far" accent="red" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            The journey of learning and evolving across brands, content and strategies.
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
