"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home", wavy: "wavy-orange" },
  { name: "About", href: "#about", wavy: "wavy-yellow" },
  { name: "Skills", href: "#skills", wavy: "wavy-blue" },
  { name: "Experience", href: "#experience", wavy: "wavy-red" },
  { name: "Portfolio", href: "#portfolio", wavy: "wavy-orange" },
  { name: "Videos", href: "#videos", wavy: "wavy-blue" },
  { name: "Contact", href: "#contact", wavy: "wavy-red" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 bg-white wobble ink-border px-5 py-3 transition-all duration-300 ${scrolled ? "hard-shadow-sm" : "hard-shadow"
          }`}
        aria-label="Global"
      >
        {/* Logo in curly braces */}
        <Link
          href="/"
          className="shrink-0 text-xl sm:text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-kalam)" }}
        >
          <span className="text-sketch-orange">{"{"}</span>
          Portfolio
          <span className="text-sketch-orange">{"}"}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`wavy-link ${item.wavy} text-lg text-ink`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center bg-sketch-yellow ink-border-2 wobble-alt px-4 py-1.5 text-base font-bold hard-shadow-sm press"
        >
          Hire Me ✦
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center bg-sketch-yellow ink-border-2 wobble p-2 hard-shadow-sm press"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50 bg-ink/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-paper ink-border px-6 py-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-kalam)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-sketch-orange">{"{"}</span>Portfolio
                <span className="text-sketch-orange">{"}"}</span>
              </Link>
              <button
                type="button"
                className="bg-sketch-red text-white ink-border-2 wobble p-2 hard-shadow-sm press"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-10 space-y-2">
              {navigation.map((item, i) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block bg-white ink-border-2 wobble px-4 py-3 text-xl font-bold hard-shadow-sm press"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://wa.me/918762835357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-sketch-blue ink-border-2 wobble px-4 py-2.5 text-base font-bold hard-shadow-sm press"
              >
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/anusamrat-m-8592b2277/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-sketch-orange ink-border-2 wobble px-4 py-2.5 text-base font-bold hard-shadow-sm press"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
