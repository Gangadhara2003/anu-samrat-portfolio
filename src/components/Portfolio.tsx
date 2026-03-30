"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

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

export function Portfolio() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedPost, setSelectedPost] = React.useState<typeof posts[0] | null>(null);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden bg-[var(--surface-raised)]">
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
              Portfolio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-[var(--muted)] text-lg"
          >
            A collection of Instagram posts showcasing content strategy, branding visuals, and creative campaigns.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25"
                  : "bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-amber-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer border border-[var(--border)] hover:border-amber-500/30 transition-all"
              onClick={() => setSelectedPost(post)}
            >
              <Image
                src={post.src}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-medium text-amber-400 mb-1">{post.category}</span>
                <h4 className="text-sm font-bold text-white leading-tight">{post.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        </div>

      {/* Lightbox Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-2xl w-full bg-[var(--surface)] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square">
              <Image
                src={selectedPost.src}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-amber-500 uppercase tracking-wider">{selectedPost.category}</span>
              <h3 className="text-xl font-bold mt-2">{selectedPost.title}</h3>
              <a
                href={selectedPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-amber-500 text-white text-sm font-semibold hover:bg-amber-600 transition-colors"
              >
                View on Instagram
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
