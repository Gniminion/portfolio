import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SKILLS } from "../../data/about";

function Skill() {

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
    <div className=" overflow-auto">
      <h2 className="text-left text-xl  text-white mb-4">My Stack</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className=" bg-dark2 flex text-left items-center bg-dark text-white p-4  w-full overflow-hidden"
          >
            <FontAwesomeIcon icon={skill.logo} size="2x" className="mr-4 text-primary" />
            <div>
              <h3 className="text-sm md:text-base font-medium">{skill.name}</h3>
              <p className="text-sm md:text-base text-gray">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skill;
