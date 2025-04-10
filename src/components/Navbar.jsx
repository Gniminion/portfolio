import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faHome, faLayerGroup, faPaperPlane, faBars, } from "@fortawesome/free-solid-svg-icons";

function Navbar({ scrollToSection, homeRef, projectsRef, contactRef }) {
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(true);

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
      { threshold: 0 }
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
    <nav
      className={`bg-dark2 text-white h-screen sticky flex flex-col transition-all duration-500 ${open ? "w-60 p-12" : "w-16 p-5"}`}
    >

      <div className="flex justify-end">
        <FontAwesomeIcon
          icon={faBars}
          className="text-white text-2xl cursor-pointer"
          onClick={() => setOpen(!open)} />
      </div>

      <div className="transition-all duration-500 flex flex-1/6">
        {open && (
          <div className = "text-left">
            <h1 className="text-left text-2xl font-bold mt-2">
              Hello! I'm <br />
              <span className="text-primary">Mu Zhang</span>
            </h1>
            <h1 className="text-left text-sm mt-4 text-white">
              Data Analyst <br />
              UX / UI Designer <br />
              Web Developer
            </h1>
            <a href="https://www.linkedin.com/in/mu-mingming-zhang/">
            <button className="px-2 py-1 border-2 border-gray text-sm text-gray rounded cursor-pointer mt-4 mb-8">
              Resume
            </button>
           </a>
          </div>
        )}
      </div>

      <div className={`flex items-center ${open ? "space-x-4" : "flex-col space-y-4"} transition-all duration-500 cursor-pointer`}>
        <a href="https://www.linkedin.com/in/mu-mingming-zhang/" target="_blank">
          <button className="text-white hover:text-primary transition">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl"  />
          </button>
        </a>
        <a href="https://github.com/Gniminion" target="_blank">
          <button className="text-white hover:text-primary transition">
            <FontAwesomeIcon icon={faGithub} className="text-2xl"  />
          </button>
        </a>
      </div>
    
    <ul className="flex flex-col space-y-4 mt-12 flex-1/3">
        <li
          onClick={() => scrollToSection(homeRef)}
          className={`flex items-center gap-3 cursor-pointer transition-all ${activeSection === "home" ? "text-white font-bold" : "text-gray-400"}`}
        >
          <FontAwesomeIcon icon={faHome} className="text-xl" />
          {open && <span className="text-sm">Home</span>}
        </li>
        <li
          onClick={() => scrollToSection(projectsRef)}
          className={`flex items-center gap-3 cursor-pointer transition-all ${activeSection === "projects" ? "text-white font-bold" : "text-gray-400"}`}
        >
          <FontAwesomeIcon icon={faLayerGroup} className="text-xl" />
          {open && <span className="text-sm">Projects</span>}
        </li>
        <li
          onClick={() => scrollToSection(contactRef)}
          className={`flex items-center gap-3 cursor-pointer transition-all ${activeSection === "contact" ? "text-white font-bold" : "text-gray-400"}`}
        >
          <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
          {open && <span className="text-sm">Contact</span>}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
