import React from "react";

function ProjectCard({ project }) {
    // Set color based on technology
    let techColor = "";
    if (project.technologies === "JavaScript") {
        techColor = "text-[#00CFFF] border-[#00CFFF]";
    } else if (project.technologies === "HTML/CSS") {
        techColor = "text-[#FF3CAC] border-[#FF3CAC]";
    } else {
        techColor = "text-[#0D1117] border-[#0D1117]";
    }

    // For hover effect
    const glowColors = {
        JavaScript: "hover:shadow-[0_0_20px_rgba(0,207,255,0.8)] hover:text-[#00CFFF] hover:border-[#00CFFF]",
        "HTML/CSS": "hover:shadow-[0_0_20px_rgba(255,60,172,0.8)] hover:text-[#FF3CAC] hover:border-[#FF3CAC]",
        Default: "hover:shadow-[0_0_20px_rgba(13,17,23,0.8)] hover:text-[#0D1117] hover:border-[#0D1117]",
    };

    const techClass = glowColors[project.technologies] || glowColors.Default;

    return (
        <div className="flex flex-col border-2 border-gray-800 rounded-xl 
                                            p-3 sm:p-6 md:p-8 
                                            w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        >

            {/* Project Name */}
            <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-3 text-green-500">
                {project.name}
            </h3>

            {/* Project Description */}
            <p className="mb-4 text-xs sm:text-sm md:text-base text-gray-300">
                {project.description}
            </p>

            <div className="mt-auto  flex flex-col items-center gap-3">
                {/* Tech Button */}
                <button
                    className={`mt-2 border rounded-2xl transition-all duration-300
                    w-full sm:w-auto
                    px-3 py-1 text-xs
                    sm:px-4 sm:py-2 sm:text-sm
                    md:px-6 md:py-3 md:text-base
                    ${techColor} ${techClass}`}
                >
                    {project.technologies}
                </button>
                {/* Project Link */}
                <a
                    className="text-blue-500 underline inline-block mt-4
                   text-xs sm:text-sm sm:block md:text-base"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
