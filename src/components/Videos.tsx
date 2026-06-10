"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

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
    <section id="videos" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <SectionHeader
            eyebrow="✦ Videos"
            title="Top"
            highlight="videos"
            accent="red"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            Scripts that simplified complex concepts and scaled educational content on YouTube. 🎬
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}
              className="relative bg-white ink-border wobble p-3 hard-shadow tilt-hover"
            >
              <span className="thumbtack thumbtack-orange" style={{ top: -6, left: 18 }} />
              <span className="thumbtack" style={{ top: -6, right: 18 }} />
              <div className="relative aspect-video overflow-hidden ink-border-2">
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

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-24">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
