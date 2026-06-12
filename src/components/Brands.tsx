"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

const brands = [
  { src: "/Brands worked with/1.jpeg", tape: "rgba(251,146,60,0.4)", rot: -3 },
  { src: "/Brands worked with/2.jpeg", tape: "rgba(96,165,250,0.4)", rot: 2 },
  { src: "/Brands worked with/3.jpeg", tape: "rgba(239,68,68,0.3)", rot: -1.5 },
  { src: "/Brands worked with/4.jpeg", tape: "rgba(234,179,8,0.45)", rot: 3 },
  { src: "/Brands worked with/5.jpeg", tape: "rgba(96,165,250,0.4)", rot: -2.5 },
  { src: "/Brands worked with/6.jpeg", tape: "rgba(251,146,60,0.4)", rot: 1.5 },
  { src: "/Brands worked with/7.jpeg", tape: "rgba(239,68,68,0.3)", rot: -2 },
  { src: "/Brands worked with/8.jpeg", tape: "rgba(234,179,8,0.45)", rot: 2.5 },
  { src: "/Brands worked with/9.jpeg", tape: "rgba(96,165,250,0.4)", rot: -2 },
  { src: "/Brands worked with/10.jpeg", tape: "rgba(251,146,60,0.4)", rot: 2 },
  { src: "/Brands worked with/11.jpeg", tape: "rgba(239,68,68,0.3)", rot: -3 },
  { src: "/Brands worked with/12.jpeg", tape: "rgba(234,179,8,0.45)", rot: 1.5 },
  { src: "/Brands worked with/13.jpeg", tape: "rgba(96,165,250,0.4)", rot: -1.5 },
];

export function Brands() {
  return (
    <section id="brands" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <SectionHeader eyebrow="✦ Clients" title="Brands I've" highlight="worked with" accent="blue" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-ink/75"
          >
            A handful of logos stuck to the corkboard — teams and brands I&apos;ve created for. 📌
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.src}
              initial={{ opacity: 0, y: 36, rotate: brand.rot * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: brand.rot }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, type: "spring", bounce: 0.4 }}
              whileHover={{ rotate: 0, y: -6, scale: 1.04 }}
              className="group relative bg-white ink-border wobble p-4 hard-shadow"
            >
              {/* Washi tape */}
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 ink-border-2 rotate-[-3deg]"
                style={{ background: brand.tape, backdropFilter: "blur(1px)" }}
              />
              <div className="relative h-24 w-full overflow-hidden">
                <Image
                  src={brand.src}
                  alt={`Brand logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
