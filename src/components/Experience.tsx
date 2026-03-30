"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Social Media Manager",
    company: "Thistle Media",
    type: "Digital Media Agency",
    period: "Oct 2025 – Present",
    color: "bg-amber-500",
    achievements: [
      "Led creative planning for campaigns, directing concepts and guiding design/edit workflows.",
      "Delivered copywriting and ad content for entertainment, wellness, childcare, and industrial B2B sectors.",
      "Developed website copy and conducted content audits to refine brand voice.",
      "Tracked social media performance metrics to optimize content strategies.",
    ],
  },
  {
    role: "Content Writer",
    company: "Klarecon",
    type: "Internet Publishing",
    period: "Jul 2025 – Sep 2025",
    color: "bg-blue-500",
    achievements: [
      "Produced SEO-optimized blogs and articles for international startup clients (B2B, B2C, SaaS, D2C).",
      "Delivered copywriting and creative ad content tailored to different business models.",
      "Applied keyword research and SEO tools to improve organic reach.",
      "Collaborated with clients on blogs, ad copies, long-form articles, and website audits.",
    ],
  },
  {
    role: "Content Strategist & Team Lead",
    company: "PlatLobby by VirelApp Unwire",
    type: "Infotainment Startup",
    period: "May 2025 – Present",
    color: "bg-emerald-500",
    achievements: [
      "Promoted from R&D Intern → Scriptwriter → Content Strategist.",
      "Managed cross-functional team of writers, editors, and researchers.",
      "Created engaging case studies/scripts on business, economics, AI, and finance.",
      "Analyzed YouTube analytics to guide content planning and channel growth.",
    ],
  },
  {
    role: "Marketing & Content Writing Intern",
    company: "Pehchaan The Street School",
    type: "Non-Governmental Organization",
    period: "Apr 2025 – Jun 2025",
    color: "bg-rose-500",
    achievements: [
      "Authored emotional blogs and poems raising awareness about social issues.",
      "Created campaign content to attract volunteers.",
      "Produced narrative-driven content for diverse audiences.",
    ],
  },
  {
    role: "Scriptwriter",
    company: "PadhleAkshay (YouTube Channel)",
    type: "Educational Content",
    period: "Jan 2024 – Apr 2025",
    color: "bg-purple-500",
    achievements: [
      "Wrote educational video scripts simplifying concepts for ages 14–21.",
      "Used hooks, CTAs, and storytelling to improve retention.",
      "Designed informative yet entertaining scripts.",
    ],
  },
  {
    role: "Freelance Ghost Writer",
    company: "Self Employed",
    type: "Creative Services",
    period: "Feb 2024 – Present",
    color: "bg-cyan-500",
    achievements: [
      "Contributed to screenwriting drafts and dialogue for short films & ads.",
      "Wrote captions and taglines for creators.",
      "Supported concept ideation and character-driven narratives.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-[var(--surface-raised)]">
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
              Career
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 top-2 w-3 h-3 rounded-full ${item.color} -translate-x-1/2 ring-4 ring-[var(--background)] z-10`} />

                {/* Content card */}
                <div className="ml-14 md:ml-0 md:w-1/2">
                  <div className={`bg-[var(--surface)] rounded-2xl p-6 border border-[var(--border)] hover:border-amber-500/30 hover:shadow-lg transition-all duration-500 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mt-3">{item.role}</h3>
                    <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">
                      {item.company}
                    </p>
                    <p className="text-xs text-[var(--muted)] mt-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.period}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-[var(--muted)] flex gap-2">
                          <span className={`mt-1.5 w-1 h-1 rounded-full ${item.color} flex-shrink-0`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
