import React from "react";
function Skill() {
    const skills = [
      { logo: "💻", name: "Git", description: "Version control" },
      { logo: "💻", name: "R", description: "Statistical analysis" },
      { logo: "💻", name: "SQL", description: "Database queries" },
      { logo: "💻", name: "Python", description: "Data science" },
      { logo: "💻", name: "ReactJS", description: "Web development" },
      { logo: "💻", name: "HTML / CSS", description: "Web development" },
      { logo: "💻", name: "Figma", description: "UI mockups" },
      { logo: "💻", name: "Adobe Suite", description: "Graphic design" },
    ];
  
    return (
      <div className="p-8">
        <h2 className="text-left text-xl font-bold text-white mb-4 -mt-2">Skills</h2>
        <div className=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className=" border-2 border-dark3 flex text-left items-center bg-dark text-white p-4 rounded-md shadow-md w-full">
              <span className="text-3xl mr-4">{skill.logo}</span>
              <div>
                <h3 className="text-md font-semibold">{skill.name}</h3>
                <p className="text-sm text-gray">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
export default Skill