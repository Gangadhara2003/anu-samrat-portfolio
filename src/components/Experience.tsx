"use client"

const experience = [
    {
        role: "Social Media Manager",
        company: "Thistle Media (Digital Media Agency)",
        period: "Oct 2025 - Present",
        description: "Digital Media Agency",
        achievements: [
            "Led creative planning for campaigns by directing concepts, guiding design and edit workflows.",
            "Delivered copywriting and advertising content for entertainment, wellness, childcare, and industrial B2B sectors.",
            "Developed website copy and conducted content audits to improve clarity and brand voice.",
            "Tracked and analyzed social media performance to refine content strategies."
        ]
    },
    {
        role: "Content Writer",
        company: "Klarecon (Internet Publishing)",
        period: "Jul 2025 - Sep 2025",
        description: "Startup Client Services",
        achievements: [
            "Produced SEO-optimized blogs and articles for international startup clients (B2B, B2C, SaaS, D2C).",
            "Delivered copywriting and creative ad content tailored to different business models.",
            "Applied keyword research and SEO tools to improve organic reach.",
            "Collaborated with clients on blogs, ad copies, long-form articles, and website audits."
        ]
    },
    {
        role: "Content Strategist, Scriptwriter & Team Lead",
        company: "PlatLobby by VirelApp Unwire",
        period: "May 2025 - Present",
        description: "Infotainment Startup",
        achievements: [
            "Promoted from R&D intern to Scriptwriter to Content Strategist.",
            "Managed cross-functional team of writers, editors, and researchers.",
            "Created engaging case studies/scripts on business, economics, startups, films, finance, AI.",
            "Analyzed YouTube analytics to guide content planning and channel growth."
        ]
    },
    {
        role: "Marketing & Content Writing Intern",
        company: "Pehchaan The Street School (NGO)",
        period: "Apr 2025 - Jun 2025",
        description: "Non-Governmental Organization",
        achievements: [
            "Authored emotional blogs/poems raising awareness about social issues.",
            "Created campaign content to attract volunteers.",
            "Produced narrative-driven content tailored for diverse audiences."
        ]
    },
    {
        role: "Scriptwriter",
        company: "PadhleAkshay (YouTube Channel)",
        period: "Jan 2024 - Apr 2025",
        description: "Educational Content",
        achievements: [
            "Wrote educational video scripts simplifying concepts for ages 14–21.",
            "Used hooks, CTAs, and storytelling to improve retention.",
            "Designed informative yet entertaining scripts."
        ]
    },
    {
        role: "Freelance Ghost Writer",
        company: "Self Employed",
        period: "Feb 2024 - Present", // Inferred start or ongoing
        description: "Creative Services",
        achievements: [
            "Contributed to screenwriting drafts and dialogue for short films/ads.",
            "Wrote captions and taglines for creators.",
            "Supported concept ideation and character-driven narratives."
        ]
    }
]

export function Experience() {
    return (
        <div id="experience" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Career History</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        Professional Experience
                    </p>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {experience.map((item) => (
                        <div key={`${item.company}-${item.role}`} className="group relative p-8 border-l-4 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-indigo-600 dark:hover:border-indigo-500 transition-colors shadow-sm rounded-r-lg">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                                <h3 className="text-lg font-semibold leading-6 text-slate-900 dark:text-white flex items-center">
                                    {item.role}
                                </h3>
                                <time dateTime={item.period} className="text-sm leading-6 text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
                                    {item.period}
                                </time>
                            </div>

                            <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                                {item.company}
                            </p>
                            <ul className="list-disc leading-7 text-slate-600 dark:text-slate-300 pl-5 space-y-2 text-sm">
                                {item.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
