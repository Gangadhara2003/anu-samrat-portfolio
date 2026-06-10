"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const contactItems = [
  { icon: Mail, label: "Email", value: "samratanu133@gmail.com", href: "mailto:samratanu133@gmail.com", bg: "bg-sketch-orange" },
  { icon: Phone, label: "Phone", value: "+91 9620539633", href: "tel:+919620539633", bg: "bg-sketch-blue" },
  { icon: MapPin, label: "Location", value: "Bengaluru, India", href: undefined, bg: "bg-sketch-red" },
];

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow="✦ Contact"
              title="Got a story"
              highlight="to tell?"
              accent="orange"
            />
            <p className="mt-8 text-xl sm:text-2xl leading-relaxed text-ink/80 max-w-lg">
              A brand narrative, a YouTube script, or a full content strategy — let&apos;s
              bring your vision to life with words that <span className="marker font-bold">work.</span>
            </p>

            <div className="mt-10 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4 bg-white ink-border-2 wobble px-4 py-3 hard-shadow-sm tilt-hover">
                    <div className={`w-12 h-12 ${item.bg} ink-border-2 rounded-full flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-ink" />
                    </div>
                    <div>
                      <p className="text-sm text-ink/60">{item.label}</p>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block" style={{ transform: "rotate(-1deg)" }}>
                    {inner}
                  </a>
                ) : (
                  <div key={item.label} style={{ transform: "rotate(1deg)" }}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Sticky-note form */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 2 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#fef9c3] ink-border wobble p-7 sm:p-9 hard-shadow"
          >
            {/* Tape on the sticky note */}
            <span className="tape" style={{ top: -12, left: "50%", marginLeft: -55, width: 110 }} />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 bg-white ink-border-2 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-sketch-red" />
                </div>
                <h3 className="text-3xl mb-2">Message Sent!</h3>
                <p className="text-lg text-ink/75">Thanks for reaching out — I&apos;ll reply soon. ✦</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-3xl">Drop me a note ✎</h3>
                <div>
                  <label htmlFor="contact-name" className="block text-lg font-bold mb-1.5">Name</label>
                  <input type="text" name="name" id="contact-name" required className="sketch-input" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-lg font-bold mb-1.5">Email</label>
                  <input type="email" name="email" id="contact-email" required className="sketch-input" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-lg font-bold mb-1.5">Message</label>
                  <textarea name="message" id="contact-message" rows={4} required className="sketch-input resize-none" placeholder="Tell me about your project..." />
                </div>
                {error && <p className="text-sketch-red text-lg font-bold text-center">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-ink text-paper ink-border wobble-alt px-6 py-4 text-xl font-bold hard-shadow press disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
