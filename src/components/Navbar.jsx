import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome, faLayerGroup, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Navbar({ scrollToSection, homeRef, projectsRef, contactRef }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px 0px 0px', threshold: 0 } 
    );

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id; 
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [homeRef, projectsRef, contactRef]);
  return (
    <nav className="w-76 h-screen bg-dark2 p-12 flex flex-col justify-center text-white sticky top-0 z-10">
      <div className="absolute top-12 left-12">
        <h1 className="text-3xl text-white ml-4 text-left"> 
          Hello! I'm <br/> 
          <span className="text-primary font-bold">Mu Zhang</span> <br/>
        </h1>
        <h3 className="text-left ml-4 mt-4">
          Data Analyst <br/>
          UX / UI Designer<br/>
          Aspiring Developer
        </h3>
        <div className="flex ml-4 mt-4 items-center space-x-4 text-sm">
          <a href="https://www.linkedin.com/in/mu-mingming-zhang/" target="_blank">
            <button className="px-2 py-1 border-2 text-gray rounded cursor-pointer hover:text-primary transition-all">
              Resume
            </button>
          </a>
          <a href="https://github.com/Gniminion" target="_blank">
            <button className="text-white rounded cursor-pointer hover:text-primary transition-all" >
              <FontAwesomeIcon icon={faGithub}  alt="Github Icon" className="text-2xl" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/mu-mingming-zhang/" target="_blank">
            <button className="text-white rounded cursor-pointer hover:text-primary transition-all">
              <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn Icon" className="text-2xl" />
            </button>
          </a>
        </div>
      </div>
      <ul className="flex flex-col justify-center flex-1 space-y-4 text-base">
        <li 
          onClick={() => scrollToSection(homeRef)} 
          className={`flex items-center space-x-2 cursor-pointer ml-4 transition-all ${
            activeSection === "home" ? "text-white font-bold" : "text-gray"
          }`}
        >
          <FontAwesomeIcon icon={faHome} className="text-xl" /> <span>Home</span>
        </li>
        <li 
          onClick={() => scrollToSection(projectsRef)} 
          className={`flex items-center space-x-2 cursor-pointer ml-4 transition-all ${
            activeSection === "projects" ? "text-white font-bold" : "text-gray"
          }`}
        >
          <FontAwesomeIcon icon={faLayerGroup} className="text-xl" /> <span>Projects</span>
        </li>
        <li 
          onClick={() => scrollToSection(contactRef)} 
          className={`flex items-center space-x-2 cursor-pointer ml-4 transition-all ${
            activeSection === "contact" ? "text-white font-bold" : "text-gray"
          }`}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-xl" /> <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
