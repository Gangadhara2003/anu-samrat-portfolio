"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { SectionHeader } from "@/components/SectionHeader";

const categories = ["All", "Social Media", "Branding", "Content", "Marketing", "Editorial"];

const posts = [
  { id: 1, src: "/Posts/1.jpeg", title: "Creative Campaign Visual", category: "Social Media", link: "https://www.instagram.com/p/DVaYFy8Da1P/" },
  { id: 2, src: "/Posts/2.png", title: "Brand Identity Post", category: "Branding", link: "https://www.instagram.com/p/DVScl09jxP7/" },
  { id: 3, src: "/Posts/3.png", title: "Engagement Content Piece", category: "Content", link: "https://www.instagram.com/p/DRqfbH6l-il/" },
  { id: 4, src: "/Posts/4.png", title: "Strategic Marketing Post", category: "Marketing", link: "https://www.instagram.com/p/DTwi9DlD8Y6/" },
  { id: 5, src: "/Posts/5.png", title: "Creative Carousel Design", category: "Social Media", link: "https://www.instagram.com/p/DVLjC5sCZBs/" },
  { id: 6, src: "/Posts/6.png", title: "Visual Storytelling Post", category: "Content", link: "https://www.instagram.com/p/DUGAQfRgAVe/" },
  { id: 7, src: "/Posts/7.png", title: "Editorial Design Post", category: "Editorial", link: "https://www.instagram.com/p/DQT9IlxCR2U/" },
  { id: 8, src: "/Posts/8.png", title: "Campaign Launch Creative", category: "Marketing", link: "https://www.instagram.com/p/DSCz6u1Cd0h/" },
  { id: 9, src: "/Posts/9.png", title: "Social Content Strategy", category: "Social Media", link: "https://www.instagram.com/p/DQRVSX4Dxz_/" },
  { id: 10, src: "/Posts/10.png", title: "Brand Awareness Post", category: "Branding", link: "https://www.instagram.com/p/DQ3_nh6kV7H/" },
  { id: 11, src: "/Posts/11.png", title: "Content Series Design", category: "Content", link: "https://www.instagram.com/p/DRelI1sAiNh/" },
  { id: 12, src: "/Posts/12.png", title: "Marketing Visual Asset", category: "Marketing", link: "https://www.instagram.com/p/DTxaZnwjwNh/" },
  { id: 13, src: "/Posts/13.png", title: "Creative Brief Visual", category: "Branding", link: "https://www.instagram.com/p/DTrcyr8D3GM/" },
  { id: 14, src: "/Posts/14.png", title: "Social Engagement Post", category: "Social Media", link: "https://www.instagram.com/p/DVLmqjsCQpP/" },
  { id: 15, src: "/Posts/15.png", title: "Editorial Written Piece", category: "Editorial", link: "https://www.instagram.com/p/DCjMm2YyFFw/" },
  { id: 16, src: "/Posts/16.png", title: "Visual Identity Design", category: "Branding", link: "https://www.instagram.com/p/DCjMm2YyFFw/" },
  { id: 17, src: "/Posts/17.png", title: "Content Concept Post", category: "Content", link: "https://www.instagram.com/p/DQl86wRCS2D/" },
  { id: 18, src: "/Posts/18.png", title: "Creative Writing Showcase", category: "Editorial", link: "https://www.instagram.com/p/DQT8hE7CYV_/" },
  { id: 19, src: "/Posts/19.png", title: "Campaign Strategy Post", category: "Marketing", link: "https://www.instagram.com/p/DPlntn3CUpp/" },
  { id: 20, src: "/Posts/20.jpeg", title: "Brand Content Visual", category: "Social Media", link: "https://www.instagram.com/p/DC3O4Ljq0kc/" },
];

const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedPost, setSelectedPost] = React.useState<typeof posts[0] | null>(null);

  const filteredPosts =
    activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <SectionHeader
            eyebrow="✦ Portfolio"
            title="Featured"
            highlight="work"
            accent="orange"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            A wall of Instagram posts — content strategy, branding visuals, and creative
            campaigns, pinned up for you.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              className={`ink-border-2 wobble px-4 py-1.5 text-lg font-bold hard-shadow-sm press ${
                activeCategory === cat ? "bg-sketch-orange" : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Polaroid wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredPosts.map((post, index) => (
            <motion.button
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onClick={() => setSelectedPost(post)}
              style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
              className="group relative bg-white ink-border p-2 pb-8 hard-shadow-sm hover:hard-shadow hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left"
            >
              {/* Tape + pin */}
              <span className="tape" style={{ top: -10, left: "50%", marginLeft: -40 }} />
              <span className="thumbtack" style={{ top: -6, right: 8 }} />
              <div className="relative aspect-square overflow-hidden ink-border-2">
                <Image
                  src={post.src}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <p className="mt-2 text-base font-bold leading-tight line-clamp-1 px-1">
                {post.title}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            className="relative max-w-lg w-full bg-white ink-border wobble p-3 pb-6 hard-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="tape" style={{ top: -12, left: "50%", marginLeft: -55, width: 110 }} />
            <div className="relative aspect-square overflow-hidden ink-border-2">
              <Image src={selectedPost.src} alt={selectedPost.title} fill className="object-cover" />
            </div>
            <div className="px-2 pt-4">
              <span className="inline-block bg-sketch-yellow ink-border-2 wobble px-2.5 py-0.5 text-sm font-bold">
                {selectedPost.category}
              </span>
              <h3 className="text-2xl mt-2">{selectedPost.title}</h3>
              <a
                href={selectedPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-sketch-orange ink-border-2 wobble px-5 py-2 text-lg font-bold hard-shadow-sm press"
              >
                View on Instagram ↗
              </a>
            </div>
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-sketch-red text-white ink-border-2 flex items-center justify-center text-xl font-bold hard-shadow-sm press"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-24">
        <hr className="dashed-divider" />
      </div>
    </section>
  );
}
