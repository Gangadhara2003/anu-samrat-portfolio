"use client"

import { CheckCircle2 } from "lucide-react"

const skills = [
    {
        category: "Content & Writing",
        items: [
            "Content Writing", "Copywriting", "Scriptwriting & Development",
            "Blogs, Articles & Essays", "Screenplay & Dialogue Writing",
            "Technical Writing", "Academic Simplification",
            "Editing, Review & Audit", "Proofreading"
        ]
    },
    {
        category: "Marketing & SEO",
        items: [
            "SEO Optimization", "Keyword Research", "Meta Business Suite",
            "Google Trends", "Social Media Strategy", "Brand Strategy",
            "Digital Marketing", "Social Media Optimization",
            "Social Media Platform IQ"
        ]
    },
    {
        category: "Tools & Technologies",
        items: [
            "MS Office Suite", "Canva", "WordPress", "Notion", "Jira",
            "HTML", "Python", "C", "Agile & Scrum"
        ]
    },
    {
        category: "AI Tools",
        items: [
            "Claude", "ChatGPT", "Elevenlabs", "Kittl", "Notebook LLM",
            "Gemini", "Prompt Engineering"
        ]
    },
]

export function Skills() {
    return (
        <div id="skills" className="py-24 sm:py-32 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">My Expertise</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Core Skills & Tools
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm bg-slate-50 dark:bg-slate-900/50">
                            <h3 className="text-xl font-bold leading-7 text-slate-900 dark:text-white mb-6">
                                {skillGroup.category}
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="flex gap-x-3 items-center">
                                        <CheckCircle2 className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                                        <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
