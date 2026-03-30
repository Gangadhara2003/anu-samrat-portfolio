"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What content writing services do you offer?",
    answer: "I offer a comprehensive range of writing services including SEO blog posts, website copy, ad copy, YouTube scripts, screenwriting, ghostwriting, social media content, brand storytelling, technical writing, and content strategy development. Each project is tailored to the client's unique brand voice and objectives.",
  },
  {
    question: "What tools and technologies do you work with?",
    answer: "I work with industry-standard tools including MS Office Suite, WordPress, Canva, Notion, and Jira for project management. For SEO, I use Google Trends, Meta Business Suite, and keyword research tools. I also leverage AI tools like Claude, ChatGPT, Gemini, and Elevenlabs to enhance productivity.",
  },
  {
    question: "How do you approach a new content project?",
    answer: "My process starts with understanding the brand, audience, and goals. I research the topic thoroughly, analyze competitors, identify keywords (for SEO work), create an outline, write the draft, and refine through editing cycles. I believe in data-driven content strategy backed by creative storytelling.",
  },
  {
    question: "Can you write scripts for YouTube videos?",
    answer: "Absolutely. I have extensive experience writing educational and infotainment scripts for YouTube channels. I specialize in crafting hooks that boost retention, clear explanations that simplify complex topics, and CTAs that drive engagement. My scripts have been used for channels targeting audiences aged 14–21.",
  },
  {
    question: "What industries have you worked with?",
    answer: "I've worked across diverse industries including EdTech, SaaS, D2C, B2B industrial, wellness, childcare, entertainment, NGO/social impact, and startup ecosystems. This breadth of experience allows me to adapt my writing style to any industry or audience.",
  },
  {
    question: "How can I hire you for a project?",
    answer: "You can reach out through the contact form on this site, email me at samratanu133@gmail.com, or message me on WhatsApp. I typically respond within 24 hours. Share your project brief, timeline, and budget, and we can discuss the best approach together.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="section-divider" />
                <span className="text-sm font-semibold uppercase tracking-widest text-amber-500">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight font-[family-name:var(--font-playfair)]">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                Got questions? Here are answers to the most common ones. Feel free to reach out if you need more details.
              </p>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-[var(--surface)] rounded-2xl border transition-all duration-300 ${
                    openIndex === index
                      ? "border-amber-500/30 shadow-lg"
                      : "border-[var(--border)] hover:border-amber-500/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-out ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
