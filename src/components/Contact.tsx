"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
    return (
        <div id="contact" className="relative isolate bg-slate-50 dark:bg-slate-900 py-24 sm:py-32 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Let&apos;s work together</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Open to opportunities in Content Strategy, Scriptwriting, and Digital Marketing. Based in Bengaluru, India.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-x-4 items-center">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <Mail className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white">Email</h3>
                                <a href="mailto:samratanu133@.com" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">samratanu133@.com</a>
                            </div>
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <Phone className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white">Phone</h3>
                                <a href="tel:+919620539633" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">+91 9620539633</a>
                            </div>
                        </div>
                        <div className="flex gap-x-4 items-center">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 text-slate-900 dark:text-white">Location</h3>
                                <p className="text-slate-600 dark:text-slate-300">Bengaluru, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Simple Contact Form */}
                    <form action="mailto:samratanu133@.com" method="POST" encType="text/plain" className="flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">Name</label>
                            <div className="mt-2.5">
                                <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 sm:text-sm sm:leading-6" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">Email</label>
                            <div className="mt-2.5">
                                <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 sm:text-sm sm:leading-6" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">Message</label>
                            <div className="mt-2.5">
                                <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-300 dark:ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-slate-800 sm:text-sm sm:leading-6" required />
                            </div>
                        </div>
                        <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex justify-center items-center gap-2">
                            Send Message <Send className="h-4 w-4" />
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
