"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const experience = [
  {
    role: "Social Media Manager",
    company: "Thistle Media",
    type: "Digital Media Agency",
    period: "Oct 2025 – Present",
    dot: "bg-sketch-orange",
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
    dot: "bg-sketch-blue",
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
    dot: "bg-sketch-red",
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
    dot: "bg-sketch-orange",
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
    dot: "bg-sketch-blue",
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
    dot: "bg-sketch-red",
    achievements: [
      "Contributed to screenwriting drafts and dialogue for short films & ads.",
      "Wrote captions and taglines for creators.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="✦ Career"
            title="My"
            highlight="journey"
            accent="red"
          />
        </div>

        <div className="relative max-w-3xl mx-auto pl-10 md:pl-0">
          {/* Dashed hand-drawn timeline */}
          <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-0 border-l-[3px] border-dashed border-ink/40 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                {/* Timeline dot */}
                <span
                  className={`absolute -left-[34px] md:left-auto top-4 w-4 h-4 rounded-full ${item.dot} ink-border-2 z-10 ${
                    index % 2 === 0 ? "md:-right-[8px] md:left-auto" : "md:-left-[8px]"
                  }`}
                />
                <div
                  className="bg-white ink-border wobble p-5 hard-shadow-sm tilt-hover"
                  style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
                >
                  <span className="inline-block bg-sketch-yellow ink-border-2 wobble px-2.5 py-0.5 text-sm font-bold mb-2">
                    {item.type}
                  </span>
                  <h3 className="text-2xl leading-tight">{item.role}</h3>
                  <p className="text-lg font-bold text-sketch-orange mt-0.5">{item.company}</p>
                  <p className="text-base text-ink/60 mt-0.5">📅 {item.period}</p>
                  <ul className="mt-3 space-y-1.5">
                    {item.achievements.map((a, idx) => (
                      <li key={idx} className="text-base text-ink/75 flex gap-2">
                        <span className="text-sketch-red">✎</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-24">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
