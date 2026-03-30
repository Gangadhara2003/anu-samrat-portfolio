"use client";

import { motion } from "framer-motion";
import { Video, PenTool, FileText, Megaphone, ArrowUpRight } from "lucide-react";

const works = [
    {
        title: "YouTube Scripts & Strategy",
        description: "Wrote student-friendly scripts for PadhleAkshay (ages 14–21) and business/infotainment scripts for VirelApp. Simplified complex concepts like AI, Finance, and Economics.",
        icon: Video,
        tags: ["Scriptwriting", "YouTube Strategy", "EdTech", "Infotainment"],
        color: "text-red-500",
        bg: "bg-red-50 dark:bg-red-500/10",
    },
    {
        title: "SEO Content & Blogs",
        description: "Produced SEO-optimized blogs for international B2B/B2C startups at Klarecon. Authored emotional narratives for Pehchaan The Street School to drive social awareness.",
        icon: FileText,
        tags: ["SEO", "Blogging", "Content Marketing", "Storytelling"],
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
        title: "Brand Copywriting",
        description: "Delivered ad copies, captions, and website content for Thistle Media. Tailored messaging for diverse industries including wellness, childcare, and industrial B2B.",
        icon: Megaphone,
        tags: ["Copywriting", "Digital Ads", "Brand Voice", "Social Media"],
        color: "text-amber-500",
        bg: "bg-amber-50 dark:bg-amber-500/10",
    },
    {
        title: "Screenwriting & Creative",
        description: "Contributed to screenwriting drafts, dialogue refinement, and scene development for short films and digital ads as a freelance ghostwriter.",
        icon: PenTool,
        tags: ["Screenwriting", "Creative Writing", "Dialogues", "Fiction"],
        color: "text-purple-500",
        bg: "bg-purple-50 dark:bg-purple-500/10",
    }
];

export function Work() {
    return (
        <section id="work" className="py-24 sm:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-base font-semibold leading-7 text-indigo-600"
                    >
                        Portfolio
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                    >
                        Selected Works
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300"
                    >
                        A snapshot of my contributions across digital media, education, and creative storytelling.
                    </motion.p>
                </div>

                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {works.map((work, index) => (
                        <motion.article
                            key={work.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-start justify-between bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 group hover:-translate-y-1"
                        >
                            <div className="flex items-center justify-between w-full mb-6">
                                <div className={`p-3 rounded-xl ${work.bg} ${work.color}`}>
                                    <work.icon className="h-6 w-6" />
                                </div>
                                <div className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                                    <ArrowUpRight className="h-5 w-5" />
                                </div>
                            </div>

                            <div className="relative">
                                <h3 className="mt-3 text-xl font-bold leading-6 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {work.title}
                                </h3>
                                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                                    {work.description}
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {work.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-md bg-slate-50 dark:bg-slate-800/50 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
