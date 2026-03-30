"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const quickActions = [
  {
    label: "Hire Me",
    emoji: "💼",
    action: () => window.location.href = "#contact",
  },
  {
    label: "Browse Portfolio",
    emoji: "🎨",
    action: () => window.location.href = "#portfolio",
  },
  {
    label: "Ask About Skills",
    emoji: "⚡",
    action: () => window.location.href = "#skills",
  },
  {
    label: "Get Resume",
    emoji: "📄",
    action: () => window.open("mailto:samratanu133@gmail.com?subject=Resume Request", "_blank"),
  },
  {
    label: "Watch Videos",
    emoji: "🎬",
    action: () => window.location.href = "#videos",
  },
  {
    label: "WhatsApp Me",
    emoji: "💬",
    action: () => window.open("https://wa.me/918762835357", "_blank"),
  },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 bg-[var(--surface)] rounded-2xl border border-[var(--border)] shadow-2xl overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-amber-500 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Anusamrat M</h3>
                  <p className="text-amber-100 text-xs">Content Writer & Strategist</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <p className="text-sm text-[var(--muted)] mb-4">
                👋 Hey! How can I help you today? Pick a quick action below:
              </p>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => {
                      action.action();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--surface-raised)] border border-[var(--border)] hover:border-amber-500/30 hover:bg-amber-500/5 transition-all text-left text-sm font-medium group"
                  >
                    <span className="text-lg">{action.emoji}</span>
                    <span className="group-hover:text-amber-500 transition-colors">{action.label}</span>
                    <svg className="w-4 h-4 text-[var(--muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)]"
            : "bg-amber-500 text-white shadow-amber-500/30"
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>
    </div>
  );
}
