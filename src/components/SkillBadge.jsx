function SkillBadge() {
    const skills = [
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            tech: "HTML5",
            color: "group-hover:border-orange-500 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.4)]"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            tech: "CSS3",
            color: "group-hover:border-blue-500 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            tech: "JavaScript",
            color: "group-hover:border-yellow-400 group-hover:shadow-[0_0_16px_rgba(250,204,21,0.4)]"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            tech: "React",
            color: "group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            tech: "Node.js",
            color: "group-hover:border-green-500 group-hover:shadow-[0_0_16px_rgba(34,197,94,0.4)]"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            tech: "Express.js",
            color: "group-hover:border-gray-400 group-hover:shadow-[0_0_16px_rgba(156,163,175,0.4)]"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            tech: "MongoDB",
            color: "group-hover:border-emerald-500 group-hover:shadow-[0_0_16px_rgba(16,185,129,0.4)]"
        },
        {
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            tech: "Next.js",
            color: "group-hover:border-white group-hover:shadow-[0_0_16px_rgba(255,255,255,0.2)]"
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {skills.map((skill) => (
                <div
                    key={skill.tech}
                    className={`group flex flex-col items-center gap-3 bg-[#0d1117] 
                                border border-gray-700 rounded-2xl p-5 
                                transition-all duration-300 cursor-default
                                ${skill.color}`}
                >
                    <img
                        src={skill.icon}
                        alt={skill.tech}
                        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.tech}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default SkillBadge;
