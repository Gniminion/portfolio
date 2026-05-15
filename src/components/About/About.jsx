import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Experience from "./Experience";
import { ABOUT_TEXT } from "../../data/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SOCIAL_LINKS, RESUME_LINKS } from "../../data/about";

function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const renderHero = () => {
    return (
      <motion.div 
        variants={item}
        className="flex-col w-full overflow-hidden relative min-h-[300px] flex justify-center p-8 lg:p-12"
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/favicon.ico')`,
            backgroundSize: 'cover',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        />
        <div className="relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">张</span> MU <br />
            <span className="text-primary">沐</span> ZHANG
          </h1>
          <div className="mt-4 flex flex-col gap-1">
            <p className="text-lg md:text-xl font-medium text-white">
              Data Driven Developer
            </p>
            <p className="text-sm md:text-base text-gray">
              Mathematics @ UWaterloo
            </p>
            
            <div className="flex gap-4 text-gray">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={RESUME_LINKS.development} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <p className="text-sm font-mono italic">[ view resume → ]</p>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderAboutTxt = () => (
    <motion.div 
      variants={item}
      className="text-sm md:text-base text-left bg-dark2 p-6 md:p-8 flex flex-col gap-4 w-full h-full"
    >
      <p className="font-medium"> 
        I'm a data enthusiast interested in delivering 
        <span className="text-primary font-medium"> intuitive visualisations for technical concepts. </span> 
      </p>
      <div>
        <p className="text-gray leading-relaxed">{ABOUT_TEXT.description}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="flex-1 overflow-auto">
      <motion.div 
        className="mt-8 text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full items-stretch">
          <div className="flex flex-col w-full h-full">
            {renderHero()}
            {renderAboutTxt()}
          </div>
          
          <motion.div variants={item} className="flex flex-col w-full h-full bg-dark2 overflow-hidden">
            <Experience />
          </motion.div>
        </div>

        <motion.div variants={item} className="mt-8">
          <Skill />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
