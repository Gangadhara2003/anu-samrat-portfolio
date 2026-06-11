"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const skillGroups = [
  {
    category: "Content & Writing",
    emoji: "✍️",
    label: "bg-sketch-orange",
    rot: -2,
    items: [
      "Content Writing", "Copywriting", "Scriptwriting & Development", "Blogs & Articles",
      "Screenplay", "Editorial", "Reviews & Audits", "Ad Writing",
      "UGC Content", "Documentation", "Proofreading",
    ],
  },
  {
    category: "Strategy & Marketing",
    emoji: "📈",
    label: "bg-sketch-yellow",
    rot: 2,
    items: [
      "Content Strategy", "Campaign Strategy", "Brand Strategy", "Social Media Strategy",
      "Digital Marketing", "Email Marketing", "Influencer Marketing",
      "Talent Acquisition", "Basic SEO", "Keyword Research",
    ],
  },
  {
    category: "Platforms & Social Media",
    emoji: "📱",
    label: "bg-sketch-blue",
    rot: -1.5,
    items: [
      "Instagram", "Facebook", "WhatsApp Business", "LinkedIn",
      "YouTube", "Reddit", "X", "Discord", "Meta Business Suite",
    ],
  },
  {
    category: "Tools & Software",
    emoji: "⚙️",
    label: "bg-sketch-orange",
    rot: 1.5,
    items: [
      "Hootsuite", "Klaviyo", "HubSpot", "Zapier", "Monday.com", "ClickUp",
      "Notion", "Jira", "Trello", "Google Trends", "Canva",
      "Google Sheets", "MS Word", "HTML", "Agile & Scrum",
    ],
  },
  {
    category: "AI & Emerging Tech",
    emoji: "🤖",
    label: "bg-sketch-red text-white",
    rot: -2,
    items: [
      "ChatGPT", "Claude", "Gemini", "ElevenLabs", "NotebookLM",
      "Prompt Engineering", "AI Image Generation", "AI Video Generation",
    ],
  },
  {
    category: "Design & Presentation",
    emoji: "🎨",
    label: "bg-sketch-yellow",
    rot: 2,
    items: [
      "Canva", "Design Theory", "Color Theory",
      "Google Slides", "MS PowerPoint", "Cursor",
    ],
  },
];

const stickerColors = [
  "bg-sketch-orange/30",
  "bg-sketch-blue/25",
  "bg-sketch-yellow/60",
  "bg-sketch-red/20",
  "bg-white",
];
const rotations = [-4, 3, -2, 5, -3, 4, -5, 2, -3, 4];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <SectionHeader eyebrow="✦ Expertise" title="Hall of" highlight="Skillset" accent="blue" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            Every skill I&apos;ve invested my interest in and want to keep developing further.
          </motion.p>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <div key={group.category}>
              <div className="grid md:grid-cols-[210px_1fr] gap-6 md:gap-8 items-start">
                {/* Category tab label */}
                <motion.div
                  initial={{ opacity: 0, x: -30, rotate: group.rot * 3 }}
                  whileInView={{ opacity: 1, x: 0, rotate: group.rot }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  className={`relative ${group.label} ink-border wobble px-5 py-4 hard-shadow-sm md:sticky md:top-28`}
                >
                  <span className="thumbtack" style={{ top: -7, right: 18 }} />
                  <span className="text-4xl block">{group.emoji}</span>
                  <h3 className="text-2xl leading-tight mt-1">{group.category}</h3>
                  <span className="text-base opacity-80">{group.items.length} stickers</span>
                </motion.div>

                {/* Scattered stickers */}
                <div className="flex flex-wrap gap-3 sm:gap-4 pt-1">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: rotations[i % rotations.length] }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, type: "spring", bounce: 0.5 }}
                      whileHover={{ rotate: 0, y: -5, scale: 1.08 }}
                      className={`inline-block ${stickerColors[i % stickerColors.length]} ink-border-2 wobble px-4 py-1.5 text-lg font-bold hard-shadow-sm cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {gi < skillGroups.length - 1 && <hr className="dashed-divider mt-10" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-24">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
