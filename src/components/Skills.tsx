"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const skillGroups = [
  {
    category: "Content & Writing",
    emoji: "✍️",
    bg: "bg-sketch-orange/20",
    chip: "bg-sketch-orange/30",
    rot: -1.5,
    items: [
      "Content Writing", "Copywriting", "Scriptwriting", "Blogs & Articles",
      "Screenplay & Dialogue", "Technical Writing", "Editing & Review", "Proofreading",
    ],
  },
  {
    category: "Marketing & SEO",
    emoji: "📈",
    bg: "bg-sketch-yellow/50",
    chip: "bg-sketch-yellow",
    rot: 1.5,
    items: [
      "SEO Optimization", "Keyword Research", "Meta Business Suite", "Google Trends",
      "Social Media Strategy", "Brand Strategy", "Digital Marketing", "Platform IQ",
    ],
  },
  {
    category: "Tools & Tech",
    emoji: "⚙️",
    bg: "bg-sketch-blue/20",
    chip: "bg-sketch-blue/30",
    rot: 1,
    items: ["MS Office", "Canva", "WordPress", "Notion", "Jira", "HTML", "Python", "Agile & Scrum"],
  },
  {
    category: "AI Tools",
    emoji: "🤖",
    bg: "bg-sketch-red/15",
    chip: "bg-sketch-red/25",
    rot: -1,
    items: ["Claude", "ChatGPT", "Elevenlabs", "Kittl", "Notebook LLM", "Gemini", "Prompt Engineering"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <SectionHeader
            eyebrow="✦ Expertise"
            title="My"
            highlight="toolbox"
            accent="blue"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className={`relative ${group.bg} ink-border wobble p-7 hard-shadow tilt-hover`}
              style={{ transform: `rotate(${group.rot}deg)` }}
            >
              <span className="thumbtack" style={{ top: -7, right: 24 }} />
              <div className="flex items-center gap-3 mb-5">
                <span className="text-4xl">{group.emoji}</span>
                <h3 className="text-2xl">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-block ${group.chip} ink-border-2 wobble px-3 py-1 text-base font-bold`}
                  >
                    {skill}
                  </span>
                ))}
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
