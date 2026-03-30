"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Content & Writing",
    emoji: "✍️",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/20",
    dotColor: "bg-rose-500",
    items: [
      "Content Writing", "Copywriting", "Scriptwriting",
      "Blogs & Articles", "Screenplay & Dialogue",
      "Technical Writing", "Academic Simplification",
      "Editing & Review", "Proofreading"
    ],
  },
  {
    category: "Marketing & SEO",
    emoji: "📈",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/20",
    dotColor: "bg-amber-500",
    items: [
      "SEO Optimization", "Keyword Research", "Meta Business Suite",
      "Google Trends", "Social Media Strategy", "Brand Strategy",
      "Digital Marketing", "Social Media Optimization",
      "Platform IQ"
    ],
  },
  {
    category: "Tools & Technologies",
    emoji: "⚙️",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    dotColor: "bg-blue-500",
    items: [
      "MS Office Suite", "Canva", "WordPress", "Notion", "Jira",
      "HTML", "Python", "C", "Agile & Scrum"
    ],
  },
  {
    category: "AI Tools",
    emoji: "🤖",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    dotColor: "bg-emerald-500",
    items: [
      "Claude", "ChatGPT", "Elevenlabs", "Kittl",
      "Notebook LLM", "Gemini", "Prompt Engineering"
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

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
              Expertise
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Skills & <span className="text-gradient">Arsenal</span>
          </motion.h2>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className={`relative rounded-2xl border ${group.borderColor} bg-gradient-to-br ${group.color} p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{group.emoji}</span>
                <h3 className="text-xl font-bold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)]/80 border border-[var(--border)] text-sm font-medium text-[var(--foreground)] backdrop-blur-sm hover:border-amber-500/30 hover:bg-amber-500/5 transition-all cursor-default"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${group.dotColor}`} />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
