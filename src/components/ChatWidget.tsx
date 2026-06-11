"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const quickActions = [
  { label: "Hire Me", emoji: "💼", bg: "bg-sketch-orange/30", action: () => (window.location.href = "#contact") },
  { label: "Browse Portfolio", emoji: "🎨", bg: "bg-sketch-blue/25", action: () => (window.location.href = "#portfolio") },
  { label: "Ask About Skills", emoji: "⚡", bg: "bg-sketch-yellow/60", action: () => (window.location.href = "#skills") },
  { label: "Get Resume", emoji: "📄", bg: "bg-sketch-red/20", action: () => window.open("https://drive.google.com/file/d/1qsvksGE078igNhp80O3uxWDHwkTyyTyd/view", "_blank") },
  { label: "Watch Videos", emoji: "🎬", bg: "bg-sketch-blue/25", action: () => (window.location.href = "#videos") },
  { label: "WhatsApp Me", emoji: "💬", bg: "bg-sketch-orange/30", action: () => window.open("https://wa.me/918762835357", "_blank") },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 bg-paper ink-border wobble hard-shadow overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-sketch-yellow ink-border-2 border-t-0 border-x-0 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white ink-border-2 flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <h3 className="text-xl leading-tight">Anusamrat M</h3>
                  <p className="text-base text-ink/70">Content Writer & Strategist</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-lg text-ink/80 mb-3">👋 Hey! Pick a quick action:</p>
              <div className="space-y-2">
                {quickActions.map((action, i) => (
                  <button
                    key={action.label}
                    onClick={() => {
                      action.action();
                      setIsOpen(false);
                    }}
                    style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
                    className={`w-full flex items-center gap-3 ${action.bg} ink-border-2 wobble px-4 py-2.5 text-left text-lg font-bold hard-shadow-sm press`}
                  >
                    <span className="text-xl">{action.emoji}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 ink-border wobble flex items-center justify-center text-2xl font-bold hard-shadow press ${
          isOpen ? "bg-white" : "bg-sketch-orange animate-float"
        }`}
        aria-label="Open quick actions"
      >
        {isOpen ? <X className="w-6 h-6" /> : "💬"}
      </button>
    </div>
  );
}
