"use client"

import { Video, PenTool, FileText, Megaphone } from "lucide-react"

const works = [
    {
        title: "YouTube Scripts & Strategy",
        description: "Wrote student-friendly scripts for PadhleAkshay (ages 14–21) and business/infotainment scripts for VirelApp. Simplified complex concepts like AI, Finance, and Economics.",
        icon: Video,
        tags: ["Scriptwriting", "YouTube Strategy", "EdTech", "Infotainment"]
    },
    {
        title: "SEO Content & Blogs",
        description: "Produced SEO-optimized blogs for international B2B/B2C startups at Klarecon. Authored emotional narratives for Pehchaan The Street School to drive social awareness.",
        icon: FileText,
        tags: ["SEO", "Blogging", "Content Marketing", "Storytelling"]
    },
    {
        title: "Brand Copywriting",
        description: "Delivered ad copies, captions, and website content for Thistle Media. Tailored messaging for diverse industries including wellness, childcare, and industrial B2B.",
        icon: Megaphone,
        tags: ["Copywriting", "Digital Ads", "Brand Voice", "Social Media"]
    },
    {
        title: "Screenwriting & Creative",
        description: "Contributed to screenwriting drafts, dialogue refinement, and scene development for short films and digital ads as a freelance ghostwriter.",
        icon: PenTool,
        tags: ["Screenwriting", "Creative Writing", "Dialogues", "Fiction"]
    }
]

export function Work() {
    return (
        <div id="work" className="py-24 sm:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Portfolio</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Selected Works
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        A snapshot of my contributions across digital media, education, and creative storytelling.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {works.map((work) => (
                        <article key={work.title} className="flex flex-col items-start justify-between bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors border border-slate-200 dark:border-slate-800">
                            <div className="flex items-center gap-x-4 text-xs">
                                {work.tags.map(tag => (
                                    <span key={tag} className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                                    <span className="absolute inset-0" />
                                    <work.icon className="h-5 w-5 inline-block mr-2 mb-1" />
                                    {work.title}
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                                    {work.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
