"use client"

export function About() {
    return (
        <div id="about" className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Professional Summary</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                        About Me
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        I am a Multidisciplinary Content Writer and Creative Strategist with expertise spanning SEO content, scripts, technical communication, and brand-led storytelling.
                    </p>
                    <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Adept at building cohesive content frameworks, optimizing for search performance and driving cross-functional creative execution. I am dedicated to producing work that informs, engages and advances strategic objectives through thoughtful messaging and disciplined planning.
                    </p>
                </div>

                {/* Soft Skills highlighted underneath */}
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {[
                            { name: 'Team Leadership', description: 'Proven ability to manage cross-functional teams and drive creative execution.' },
                            { name: 'Communication', description: 'Expert in translating complex ideas into relatable storytelling content.' },
                            { name: 'Problem-Solving & R&D', description: 'Strong research skills for identifying trends and developing strategic content.' },
                            { name: 'Analytical Thinking', description: 'Data-driven approach to content planning using analytics and metrics.' },
                        ].map((feature) => (
                            <div key={feature.name} className="relative pl-4">
                                <dt className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-slate-600 dark:text-slate-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
