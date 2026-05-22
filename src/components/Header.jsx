import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Projects", href: "#project" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#0D1117]/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4 sm:px-10">
                {/* Logo */}
                <a href="#home" className="font-bold text-xl sm:text-2xl text-green-500 tracking-tight font-mono">
                    Mitchel Okoh
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="text-sm font-semibold px-4 py-2 rounded-lg border border-green-500 
                                   text-green-400 hover:bg-green-500 hover:text-black 
                                   transition-all duration-200"
                    >
                        Resume
                    </a>
                </nav>

                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="flex flex-col gap-1 px-5 pb-5 bg-[#0D1117] border-t border-gray-800">
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="py-3 text-gray-300 hover:text-green-400 transition-colors duration-200 border-b border-gray-800 last:border-0"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        onClick={() => setIsOpen(false)}
                        className="mt-3 text-center py-2.5 rounded-lg border border-green-500 
                                   text-green-400 hover:bg-green-500 hover:text-black 
                                   transition-all duration-200 font-semibold text-sm"
                    >
                        Download Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
