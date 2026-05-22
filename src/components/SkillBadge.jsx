import React from "react";

function SkillBagde() {
    let skills = [
        { image: "../../src/assets/icons8-html-5-48.png", tech: "HTML5" },
        { image: "../../src/assets/icons8-css3-48.png", tech: "CSS3" },
        { image: "../../src/assets/icons8-javascript-48.png", tech: "JavaScript" },
        { image: "../../src/assets/react.svg", tech: "React" },
    ]

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
                <div key={index} className="mx-auto flex flex-col border-2 border-gray-800 rounded-xl 
                                            p-3 sm:p-6 md:p-8 
                                            w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                >
                    <img src={skill.image} alt={skill.tech} className="h-[100px] w-[100px] mx-auto" />
                    <p className="">{skill.tech}</p>
                </div>
            ))}
        </div>
    )
}

export default SkillBagde;