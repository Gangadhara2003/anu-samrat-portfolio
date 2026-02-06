"use client"

export function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} Anusamrat M. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
