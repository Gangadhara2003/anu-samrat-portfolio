"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const reels = [
  { id: "DTemYiUk870", url: "https://www.instagram.com/reel/DTemYiUk870/embed/captioned/" },
  { id: "DULJ-54ky0D", url: "https://www.instagram.com/reel/DULJ-54ky0D/embed/captioned/" },
  { id: "DSaAMrCjMwn", url: "https://www.instagram.com/reel/DSaAMrCjMwn/embed/captioned/" },
  { id: "DUVgbhQAR33", url: "https://www.instagram.com/reel/DUVgbhQAR33/embed/captioned/" },
];

const reelStats = [
  { value: "50K+", label: "Total Reach", emoji: "🚀", bg: "bg-sketch-orange/30", rot: -2 },
  { value: "10K+", label: "Views", emoji: "👁️", bg: "bg-sketch-blue/25", rot: 1.5 },
  { value: "1K+", label: "Likes", emoji: "❤️", bg: "bg-sketch-red/20", rot: -1.5 },
  { value: "Featured", label: "Content", emoji: "⭐", bg: "bg-sketch-yellow/60", rot: 2 },
];

export function Reels() {
  return (
    <section id="reels" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionHeader
            eyebrow="✦ Reels & Shorts"
            title="Creative"
            highlight="highlights"
            accent="blue"
          />
        </div>

        {/* Stats — pinned notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-14"
        >
          {reelStats.map((stat) => (
            <div
              key={stat.label}
              className={`relative ${stat.bg} ink-border wobble p-5 text-center hard-shadow-sm`}
              style={{ transform: `rotate(${stat.rot}deg)` }}
            >
              <span className="thumbtack" style={{ top: -7, left: "50%", marginLeft: -7 }} />
              <span className="text-3xl block mb-1">{stat.emoji}</span>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-base text-ink/70 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Reels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ transform: `rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)` }}
              className="relative bg-white ink-border wobble p-2.5 hard-shadow tilt-hover"
            >
              <span className="tape" style={{ top: -10, left: "50%", marginLeft: -40 }} />
              <div className="relative w-full overflow-hidden ink-border-2" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={reel.url}
                  className="absolute inset-0 w-full h-full"
                  scrolling="no"
                  allowFullScreen
                  loading="lazy"
                  title={`Instagram Reel ${reel.id}`}
                />
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
