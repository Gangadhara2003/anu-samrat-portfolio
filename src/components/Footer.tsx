"use client";

import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home", wavy: "wavy-orange" },
  { name: "About", href: "#about", wavy: "wavy-yellow" },
  { name: "Skills", href: "#skills", wavy: "wavy-blue" },
  { name: "Experience", href: "#experience", wavy: "wavy-red" },
  { name: "Portfolio", href: "#portfolio", wavy: "wavy-orange" },
  { name: "Contact", href: "#contact", wavy: "wavy-blue" },
];

const socials = [
  { label: "WA", href: "https://wa.me/918762835357", bg: "bg-sketch-blue" },
  { label: "in", href: "https://www.linkedin.com/in/anusamrat-m-8592b2277/", bg: "bg-sketch-orange" },
  { label: "IG", href: "https://www.instagram.com/__anusamrat13?igsh=bjZiaDR2bThvbG5n", bg: "bg-sketch-red" },
  { label: "@", href: "mailto:samratanu133@gmail.com", bg: "bg-sketch-yellow" },
];

export function Footer() {
  return (
    <footer className="relative mt-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 pb-10">
        <div className="bg-white ink-border wobble p-8 sm:p-10 hard-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <Link href="/" className="text-2xl font-bold" style={{ fontFamily: "var(--font-kalam)" }}>
                <span className="text-sketch-orange">{"{"}</span>Portfolio
                <span className="text-sketch-orange">{"}"}</span>
              </Link>
              <p className="text-lg text-ink/75 leading-relaxed max-w-xs mt-3">
                Content Writer & Creative Strategist crafting narratives that inform, engage,
                and convert. Based in Bengaluru, India.
              </p>
              <div className="flex items-center gap-3 mt-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 ${s.bg} ink-border-2 wobble flex items-center justify-center text-base font-bold hard-shadow-sm press`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={`wavy-link ${link.wavy} text-lg`}>
                      → {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl mb-4">Get In Touch</h3>
              <div className="space-y-2 text-lg text-ink/75">
                <p><a href="mailto:samratanu133@gmail.com" className="wavy-link">samratanu133@gmail.com</a></p>
                <p><a href="tel:+919620539633" className="wavy-link wavy-blue">+91 9620539633</a></p>
                <p>📍 Bengaluru, India</p>
              </div>
            </div>
          </div>

          <hr className="dashed-divider my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-base text-ink/65">
            <p>&copy; {new Date().getFullYear()} Anusamrat M. All rights reserved.</p>
            <p>Sketched with <span className="text-sketch-red">♥</span> for storytelling</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
