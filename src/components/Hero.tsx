"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "2.5+", label: "Years Exp", rot: -2 },
  { value: "5+", label: "Companies", rot: 1.5 },
  { value: "30+", label: "Projects", rot: -1 },
  { value: "15+", label: "Skills", rot: 2 },
];

const floatingDoodles = [
  { emoji: "✏️", className: "top-10 left-[8%] text-5xl", delay: 0 },
  { emoji: "</>", className: "top-24 right-[10%] text-3xl font-bold text-sketch-blue", delay: 1.2 },
  { emoji: "✦", className: "bottom-32 left-[14%] text-4xl text-sketch-orange", delay: 0.6 },
  { emoji: "📎", className: "bottom-20 right-[16%] text-4xl", delay: 1.8 },
  { emoji: "✱", className: "top-1/2 left-[4%] text-3xl text-sketch-red", delay: 0.9 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Floating doodles */}
      {floatingDoodles.map((d, i) => (
        <motion.span
          key={i}
          className={`pointer-events-none absolute hidden sm:block ${d.className}`}
          animate={{ y: [0, -12, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
        >
          {d.emoji}
        </motion.span>
      ))}

      <div className="mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-3 order-2 lg:order-1 text-center lg:text-left">
            {/* Sticky-note tag */}
            <motion.div
              initial={{ opacity: 0, rotate: -6, y: 10 }}
              animate={{ opacity: 1, rotate: -3, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-sketch-yellow ink-border-2 wobble px-4 py-1.5 mb-8 hard-shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-sketch-red animate-pulse" />
              <span className="text-base font-bold">Available for new projects!</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight"
            >
              <span className="block">Stories &amp;</span>
              <span className="block">Strategies that</span>
              <span className="block mt-1">
                seek the{" "}
                <span className="relative inline-block text-sketch-orange">
                  attention
                  {/* Hand-drawn scribble underline */}
                  <svg
                    className="absolute -bottom-3 left-0 w-full"
                    height="20"
                    viewBox="0 0 300 20"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="scribble-path"
                      d="M3 12C50 5 100 15 150 9C200 3 250 13 297 7"
                      stroke="#fb923c"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
              <span className="block mt-1 text-ink/70">you deserve.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-xl sm:text-2xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-ink/80"
            >
              Creative Strategist • Content Writer • Copywriter • Social Media Executive —
              Conveying the{" "}
              <span className="marker-blue font-bold">stories through ideas</span> and{" "}
              <span className="marker font-bold">Ideas through stories.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5"
            >
              <Link
                href="#portfolio"
                className="bg-sketch-orange text-ink ink-border wobble px-7 py-3.5 text-xl font-bold hard-shadow press"
              >
                View Portfolio →
              </Link>
              <Link
                href="#contact"
                className="bg-white text-ink ink-border wobble-alt px-7 py-3.5 text-xl font-bold hard-shadow press"
              >
                Hire Me ✦
              </Link>
            </motion.div>

            {/* Stats — pinned notes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative bg-white ink-border-2 wobble px-3 py-4 text-center hard-shadow-sm"
                  style={{ transform: `rotate(${stat.rot}deg)` }}
                >
                  <span className="thumbtack" style={{ top: -7, left: "50%", marginLeft: -7 }} />
                  <div className="text-3xl font-bold text-sketch-orange">{stat.value}</div>
                  <div className="mt-1 text-sm text-ink/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Polaroid portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative animate-float-slow">
              {/* Tape pieces */}
              <span className="tape" style={{ top: -12, left: 30, width: 110 }} />
              <span className="tape tape-2" style={{ top: -12, right: 30, width: 110 }} />
              {/* Polaroid frame */}
              <div className="bg-white ink-border p-3 pb-14 hard-shadow rotate-2">
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 overflow-hidden ink-border-2">
                  <Image
                    src="/hero-portrait.png"
                    alt="Anusamrat M - Content Writer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <p
                  className="mt-3 text-center text-2xl"
                  style={{ fontFamily: "var(--font-kalam)" }}
                >
                  Anusamrat M✍️
                </p>
              </div>
              {/* Floating mini badge */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-4, 2, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-8 bg-sketch-blue ink-border-2 wobble px-3 py-2 hard-shadow-sm"
              >
                <span className="text-base font-bold">🎬 Creative Strategist</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
