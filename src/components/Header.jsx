import React from "react";
import { useState } from "react";

function Header() {
    const [isOpen, SetIsOpen] = useState(false);

    const navColors = {
        SKILLS: "hover:text-shadow-[0_0_20px_rgba(0,207,255,0.8)] hover:text-[#00CFFF]",
        PROJECT: "hover:text-shadow-[0_0_20px_rgba(255,60,172,0.8)] hover:text-[#FF3CAC]",
        CONTACT: "hover:shadow-[0_0_35px_rgba(13,17,23,1),0_0_60px_rgba(13,17,23,0.9)]",
    };

    return (
        <>
            <div className="flex justify-between items-center p-5 bg-[#0D1117]
                             max-sm:fixed top-0 left-0 w-full z-50
                             sm:px-20 sm:py-20 md:p-5"
            >
                <h1 className="font-bold cursor-pointer text-3xl text-green-500">
                    MITCHEL OKOH
                </h1>
                <nav>
                    {/* Hamburger button (visible on small screens) */}
                    <button
                        className="md:hidden flex flex-col space-y-1 mt-2"
                        onClick={() => SetIsOpen(!isOpen)}
                    >
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                    </button>

                    {/* Desktop Menu */}
                    <ul id="nav" className=" hidden md:flex list-none  gap-10 text-green-500">
                        {/* PROJECT */}
                        <li className="relative group">
                            <a
                                href="#project"
                                className={`cursor-pointer transition-all duration-300 relative z-10 ${navColors.PROJECT}`}
                            >
                                PROJECTS
                            </a>
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-amber-50 text-black text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-20">
                                My Projects
                            </div>
                        </li>

                        {/* SKILLS */}
                        <li className="relative group">
                            <a
                                href="#skills"
                                className={`cursor-pointer transition-all duration-300 relative z-10 ${navColors.SKILLS}`}
                            >
                                SKILL BADGE
                            </a>
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-amber-50 text-black text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-20">
                                My Skills 
                            </div>
                        </li>

                        {/* CONTACT */}
                        <li className="relative group">
                            <a
                                href="#contact"
                                className={`cursor-pointer transition-all duration-300 relative z-10 ${navColors.CONTACT}`}
                            >
                                CONTACT
                            </a>
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-amber-50 text-black text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-20">
                                My Contacts
                            </div>
                        </li>
                    </ul>

                    {/* Phone Menu */}
                    {isOpen && (
                        <div className={`fixed top-19 right-0 h-full w-2/3 bg-gray-800 transform
                                        ${isOpen ? "translate-x-0" : "translate-x-full"}
                                        transition-transform duration-100 ease-in-out md:hidden z-40
                                        `}
                        >
                            <ul className="flex flex-col items-center justify-center h-full space-y-6">
                                <li className="hover:text-emerald-400 cursor-pointer"><a href="#home" onClick={() => SetIsOpen(!isOpen)}>Home</a></li>
                                <li className="hover:text-emerald-400 cursor-pointer"><a href="#project" onClick={() => SetIsOpen(!isOpen)}>Projects</a></li>
                                <li className="hover:text-emerald-400 cursor-pointer"><a href="#skills" onClick={() => SetIsOpen(!isOpen)}>Skill Badge</a></li>
                                <li className="hover:text-emerald-400 cursor-pointer"><a href="#contact" onClick={() => SetIsOpen(!isOpen)}>Contact</a></li>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}

export default Header;
