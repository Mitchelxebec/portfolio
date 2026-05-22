function Footer() {
    const contacts = [
        {
            label: "Email",
            value: "mitchelokoh@gmail.com",
            href: "mailto:mitchelokoh@gmail.com",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: "hover:border-green-500 hover:text-green-400 hover:shadow-[0_0_16px_rgba(34,197,94,0.25)]"
        },
        {
            label: "GitHub",
            value: "github.com/mitchelokoh",
            href: "https://github.com/Mitchelxebec",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                        0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                        1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338
                        -2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65
                        0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337
                        1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688
                        0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
                        0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            ),
            color: "hover:border-gray-400 hover:text-gray-200 hover:shadow-[0_0_16px_rgba(156,163,175,0.25)]"
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/mitchelokoh",
            href: "https://linkedin.com/in/mitchelokoh",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
                        1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
                        3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065
                        2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771
                        C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227
                        24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            color: "hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_16px_rgba(59,130,246,0.25)]"
        },
        {
            label: "X / Twitter",
            value: "x.com/mitchelokoh",
            href: "https://x.com/Okoh_mitchel",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401
                        6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161
                        17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            color: "hover:border-white hover:text-white hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]"
        },
        {
            label: "Location",
            value: "Uyo, Nigeria",
            href: null,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: "hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_16px_rgba(251,191,36,0.25)]"
        },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Heading */}
            <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-1 bg-green-500 rounded-full" />
                <h2 className="text-2xl font-bold text-green-500 tracking-wide uppercase">Contact</h2>
            </div>
            <p className="text-gray-400 text-sm mb-10 ml-11">
                Have a project, internship, freelance opportunity, or collaboration in mind?
                I'd love to connect and discuss how I can help build impactful digital experiences.
            </p>

            {/* Intro card */}
            <div className="bg-[#0d1117] border border-gray-700 rounded-2xl p-8 mb-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    Let's Build Something Great
                </h3>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-6">
                    Have a project idea, freelance opportunity, or collaboration in mind? I'm always open
                    to discussing innovative ideas, Web3 products, and scalable digital experiences.
                </p>
                <a
                    href="mailto:mitchelokoh@gmail.com"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 
                               text-black font-semibold px-6 py-3 rounded-xl 
                               transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                    Get In Touch
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>

            {/* Contact links grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {contacts.map((c) => (
                    c.href ? (
                        <a
                            key={c.label}
                            href={c.href}
                            target={c.href.startsWith("mailto") ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className={`flex items-center gap-4 bg-[#0d1117] border border-gray-700 
                                        rounded-xl p-4 text-gray-400 transition-all duration-300 ${c.color}`}
                        >
                            <span className="shrink-0">{c.icon}</span>
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500 mb-0.5">{c.label}</p>
                                <p className="text-sm font-medium truncate">{c.value}</p>
                            </div>
                        </a>
                    ) : (
                        <div
                            key={c.label}
                            className={`flex items-center gap-4 bg-[#0d1117] border border-gray-700 
                                        rounded-xl p-4 text-gray-400 transition-all duration-300 ${c.color}`}
                        >
                            <span className="shrink-0">{c.icon}</span>
                            <div className="min-w-0">
                                <p className="text-xs text-gray-500 mb-0.5">{c.label}</p>
                                <p className="text-sm font-medium truncate">{c.value}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 pt-6 text-center">
                <p className="text-gray-600 text-xs">
                    © {new Date().getFullYear()} Mitchel Okoh · Built with React & Tailwind CSS
                </p>
            </div>
        </div>
    );
}

export default Footer;
