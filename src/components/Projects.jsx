import ProjectCard from "./ProjectCard";

function Project() {
    const projects = [
        {
            name: "Ibom Blockchain (IBX)",
            description:
                "Contributed to the digital presence of West Africa's leading blockchain movement — accelerating blockchain adoption, innovation, infrastructure, and community growth across the ecosystem.",
            technologies: "Next.js, TypeScript",
            live: "https://www.ibomblockchain.com/",
            github: "https://github.com/Mitchelxebec"
        },
        {
            name: "E-Learning Platform",
            description:
                "Built a responsive e-learning platform that makes online education simple and accessible. Users can explore content and learn at their own pace with a clean, focused UI.",
            technologies: "JavaScript, HTML, CSS",
            live: "https://e-learning-one-gamma.vercel.app/",
            github: "https://github.com/Mitchelxebec"
        },
        {
            name: "PayApi",
            description:
                "Developed a modern payment API platform with secure integration and seamless developer experience, supporting scalable payment workflows and efficient backend communication.",
            technologies: "x402, Express.js, MongoDB, TypeScript, React",
            live: "https://pay-api-ochre.vercel.app/",
            github: "https://github.com/Mitchelxebec"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </div>
    );
}

export default Project;
