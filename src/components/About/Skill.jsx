import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faReact, faRProject, faGitAlt, faFigma, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPenNib } from "@fortawesome/free-solid-svg-icons";

function Skill() {
  const skills = [
    { logo: faGitAlt, name: "Git", description: "Version control" },
    { logo: faRProject, name: "R", description: "Statistical analysis" },
    { logo: faDatabase, name: "SQL", description: "Database queries" },
    { logo: faPython, name: "Pandas | Python", description: "Data analysis" },
    { logo: faReact, name: "React | JS", description: "Web development" },
    { logo: faCss3Alt, name: "Tailwind | CSS", description: "Web development" },
    { logo: faFigma, name: "Figma", description: "UI mockups" },
    { logo: faPenNib, name: "Adobe Suite", description: "Graphic design" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" }
    }
  };

  return (
    <div className="p-6 overflow-auto">
      <h2 className="text-left text-xl font-bold text-white mb-4 -mt-2">Skills</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="border-2 border-dark3 flex text-left items-center bg-dark text-white p-4 rounded-md w-full overflow-hidden"
          >
            <FontAwesomeIcon icon={skill.logo} size="2x" className="mr-4 text-primary" />
            <div>
              <h3 className="text-sm md:text-base font-semibold">{skill.name}</h3>
              <p className="text-sm md:text-base text-gray">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
