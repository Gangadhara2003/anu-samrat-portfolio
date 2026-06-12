"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const reels = [
  { id: "DZXq7CgPXEN", title: "Creative Reel Concepts", url: "https://www.instagram.com/reel/DZXq7CgPXEN/embed/captioned/" },
  { id: "DVitG0Xk3G6", title: "Visual Hook Reel", url: "https://www.instagram.com/reel/DVitG0Xk3G6/embed/captioned/" },
  { id: "DSaAMrCjMwn", title: "Meme Usage × Viral", url: "https://www.instagram.com/reel/DSaAMrCjMwn/embed/captioned/" },
  { id: "DX6wBtNitjS", title: "AI Generated Reels", url: "https://www.instagram.com/reel/DX6wBtNitjS/embed/captioned/" },
  { id: "DTemYiUk870", title: "Featured Reel", url: "https://www.instagram.com/reel/DTemYiUk870/embed/captioned/" },
  // { id: "DULJ-54ky0D", title: "Featured Reel", url: "https://www.instagram.com/reel/DULJ-54ky0D/embed/captioned/" },
  { id: "DUVgbhQAR33", title: "Featured Reel", url: "https://www.instagram.com/reel/DUVgbhQAR33/embed/captioned/" },
];

export function Reels() {
  return (
    <section id="reels" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <SectionHeader
            eyebrow="✦ Reels & Shorts"
            title="Creative"
            highlight="Reels"
            accent="blue"
          />
        </div>

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
                  title={reel.title}
                />
              </div>
              <p className="text-center text-base font-bold leading-tight mt-2 px-1">{reel.title}</p>
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
