"use client";

import { motion } from "framer-motion";

type Accent = "orange" | "yellow" | "blue" | "red";

const accentBg: Record<Accent, string> = {
  orange: "bg-sketch-orange",
  yellow: "bg-sketch-yellow",
  blue: "bg-sketch-blue",
  red: "bg-sketch-red text-white",
};

const accentStroke: Record<Accent, string> = {
  orange: "#fb923c",
  yellow: "#eab308",
  blue: "#60a5fa",
  red: "#ef4444",
};

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  accent = "orange",
  align = "left",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  accent?: Accent;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center flex flex-col items-center" : ""}>
      <motion.span
        initial={{ opacity: 0, rotate: -8, y: 12 }}
        whileInView={{ opacity: 1, rotate: -2, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block ink-border-2 wobble px-4 py-1 mb-5 text-base font-bold hard-shadow-sm ${accentBg[accent]}`}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl leading-tight"
      >
        {title}{" "}
        {highlight && (
          <span className="relative inline-block">
            <span className="relative z-10">{highlight}</span>
            <svg
              className="absolute -bottom-2 left-0 w-full z-0"
              height="16"
              viewBox="0 0 200 16"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 9C40 4 80 12 120 7C160 2 180 11 198 6"
                stroke={accentStroke[accent]}
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )}
      </motion.h2>
    </div>
  );
}
