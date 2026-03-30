"use client";

import { motion } from "framer-motion";

const reels = [
  { id: "DTemYiUk870", url: "https://www.instagram.com/reel/DTemYiUk870/embed/captioned/" },
  { id: "DULJ-54ky0D", url: "https://www.instagram.com/reel/DULJ-54ky0D/embed/captioned/" },
  { id: "DSaAMrCjMwn", url: "https://www.instagram.com/reel/DSaAMrCjMwn/embed/captioned/" },
  { id: "DUVgbhQAR33", url: "https://www.instagram.com/reel/DUVgbhQAR33/embed/captioned/" },
];

const reelStats = [
  { value: "50K+", label: "Total Reach", emoji: "🚀" },
  { value: "10K+", label: "Views", emoji: "👁️" },
  { value: "1K+", label: "Likes", emoji: "❤️" },
  { value: "Featured", label: "Content", emoji: "⭐" },
];

export function Reels() {
  return (
    <section id="reels" className="relative py-24 sm:py-32 overflow-hidden bg-[var(--surface-raised)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="section-divider" />
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
              Reels & Shorts
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Creative <span className="text-gradient">Highlights</span>
          </motion.h2>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {reelStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--surface)] rounded-2xl p-5 border border-[var(--border)] text-center hover:border-amber-500/30 transition-all"
            >
              <span className="text-2xl block mb-2">{stat.emoji}</span>
              <div className="text-xl sm:text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-[var(--muted)] mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Embedded Reels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-[var(--border)] hover:border-amber-500/30 bg-[var(--surface)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={reel.url}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
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
    </section>
  );
}
