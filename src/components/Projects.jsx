import React from "react";
import ProjectCard from "./ProjectCard";

function Project() {
    const projects = [
        {
            name: "CryptoKitties",
            description: "Join CryptoKitties to claim airdrop points, place bets. Collect points, climb the leaderboard, and enjoy a fun crypto gaming twist.",
            technologies: "JavaScript",
            link: "https://cryptokitties-nine.vercel.app/"
        },
        {
            name: "E-Learning",
            description: "Discover an e-learning platform built for growth. Take online classes, learn at your own pace, and see measurable results.",
            technologies: "JavaScript",
            link: "https://e-learning-one-gamma.vercel.app/"
        },
        {
            name: "Huddle",
            description: "Host meetings, join discussions, and attend conferences all in one app. Connect with others and build your community online.",
            technologies: "HTML/CSS",
            link: "https://huddle-landing-page-alpha-tawny.vercel.app/"
        },
        {
            name: "Alarm Clock",
            description: "A lightweight alarm clock app to set alarms quickly and easily. First created to test my skills, now ready to help you stay on time.",
            technologies: "JavaScript",
            link: "https://alarm-clock-steel.vercel.app/"
        },
        {
            name: "Reminder Clock",
            description: "Stay on top of important dates with this reminder clock app. Set events, get alerts, and keep your schedule stress-free..",
            technologies: "JavaScript",
            link: `https://reminder-clock-six.vercel.app/`
        },
        {
            name: "To-Do List App",
            description: "Plan your day smarter with this to-do list app. Organize tasks, highlight important ones in all caps, and stay prepared.",
            technologies: "JavaScript",
            link: `https://reminder-clock-six.vercel.app/`
        },
        {
            name: "Notepad App",
            description: "A lightweight notepad site to quickly write, save, and organize notes online. Perfect for jotting down tasks, or reminders anytime.",
            technologies: "JavaScript",
            link: `https://note-pad-topaz-eight.vercel.app/`
        },
        {
            name: "Animepahe",
            description: "A responsive landing page inspired by Animepahe, featuring a clean design, smooth navigation, and mobile-friendly layout.",
            technologies: "JavaScript",
            link: `https://animepahe-nine.vercel.app/`
        },

    ]

    return (
        <div className='h-[620px] overflow-y-auto pr-2'>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Project;