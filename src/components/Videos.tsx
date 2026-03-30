"use client";

import { motion } from "framer-motion";

const videos = [
  { id: "v53lvlSbzcs", title: "Featured Video 1" },
  { id: "yKlUDJTWpw8", title: "Featured Video 2" },
  { id: "D5_4XQPyDkQ", title: "Featured Video 3" },
  { id: "iR9yc54Cxj0", title: "Featured Video 4" },
  { id: "xQ5OGic9xhU", title: "Featured Video 5" },
  { id: "SgESWe9GhHo", title: "Featured Video 6" },
  { id: "6O18wTdUK0Q", title: "Featured Video 7" },
  { id: "84NBaYPDPHs", title: "Featured Video 8" },
  { id: "ikZPjSCrRV8", title: "Featured Video 9" },
];

export function Videos() {
  return (
    <section id="videos" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]" />
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
              Videos
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Top <span className="text-gradient">Videos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[var(--muted)] text-lg"
          >
            Scripts that simplified complex concepts and scaled educational content on YouTube.
          </motion.p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-[var(--border)] hover:border-amber-500/30 bg-[var(--surface)] transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
