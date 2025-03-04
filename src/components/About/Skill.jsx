import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faRProject, faGitAlt, faFigma, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPenNib } from "@fortawesome/free-solid-svg-icons";

function Skill() {
  const skills = [
    { logo: faGitAlt, name: "Git", description: "Version control" },
    { logo: faRProject, name: "R", description: "Statistical analysis" },
    { logo: faDatabase, name: "SQL", description: "Database queries" },
    { logo: faPython, name: "Python", description: "Data science" },
    { logo: faReact, name: "React", description: "Web development" },
    { logo: faCss3Alt, name: "Tailwind", description: "Web development" },
    { logo: faFigma, name: "Figma", description: "UI mockups" },
    { logo: faPenNib, name: "Adobe Suite", description: "Graphic design" },
  ];
  
  
    return (
      <div className="p-8">
        <h2 className="text-left text-xl font-bold text-white mb-4 -mt-2">Skills</h2>
        <div className=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className=" border-2 border-dark3 flex text-left items-center bg-dark text-white p-4 rounded-md shadow-md w-full">
              <FontAwesomeIcon icon={skill.logo} size="2x" className="mr-4 text-primary" />
              <img 
                src={skills.logo} 
                alt={skills.name} 
              /> 
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