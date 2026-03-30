"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

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
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-[var(--surface-raised)]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="section-divider" />
              <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                Contact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-playfair)]">
              Got a story to tell?
              <br />
              <span className="text-gradient">Let&apos;s write it together.</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--muted)] leading-relaxed max-w-lg">
              Whether it&apos;s a brand narrative, a YouTube script, or a content strategy — I&apos;m ready to bring your vision to life with words that work.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)] uppercase tracking-wider">Email</p>
                  <a href="mailto:samratanu133@gmail.com" className="font-semibold hover:text-amber-500 transition-colors">
                    samratanu133@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)] uppercase tracking-wider">Phone</p>
                  <a href="tel:+919620539633" className="font-semibold hover:text-amber-500 transition-colors">
                    +91 9620539633
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[var(--muted)] uppercase tracking-wider">Location</p>
                  <p className="font-semibold">Bengaluru, India</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://wa.me/918762835357"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium hover:bg-green-500/20 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/anusamrat-m-8592b2277/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[var(--surface)] rounded-3xl p-8 border border-[var(--border)] shadow-xl relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-[var(--muted)] text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all placeholder:text-[var(--muted)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all placeholder:text-[var(--muted)]"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="contact-message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground)] text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all placeholder:text-[var(--muted)] resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
