import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome, faLayerGroup, faPaperPlane, faPlus, faMinus, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIAL_LINKS, RESUME_LINKS } from "../data/about";

const MOBILE_BREAKPOINT = 800;
const OBSERVER_THRESHOLD = 0;

const NAVIGATION_ITEMS = [
  { id: "home", icon: faHome, label: "About" },
  { id: "projects", icon: faLayerGroup, label: "Projects" },
  { id: "contact", icon: faPaperPlane, label: "Contact" }
];

function Navbar({ scrollToSection, homeRef, projectsRef, contactRef }) {
  const [activeSection, setActiveSection] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClickOpen, setIsClickOpen] = useState(false);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showResumeDropdown, setShowResumeDropdown] = useState(false);

  const sectionRefs = { home: homeRef, projects: projectsRef, contact: contactRef };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(isMobileView);
      if (!isMobileView) setIsOpenMobile(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sections = Object.entries(sectionRefs).map(([id, ref]) => ({ ref, id }));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: OBSERVER_THRESHOLD }
    );
    sections.forEach(({ ref, id }) => {
      if (ref?.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, [homeRef, projectsRef, contactRef]);

  const isOpen = isMobile ? isOpenMobile : (isClickOpen || isHovered);

  const handleToggle = () => {
    if (isMobile) {
      setIsOpenMobile(!isOpenMobile);
    } else {
      if (isOpen) {
        setIsClickOpen(false);
        setIsHovered(false); 
      } else {
        setIsClickOpen(true);
      }
    }
  };

  const NavItemContent = ({ icon, label, active }) => (
    <div className={`relative flex items-center cursor-pointer transition-colors duration-200 ${active ? "text-primary" : "text-gray hover:text-white"}`}>
      <div className="w-6 flex justify-center items-center flex-shrink-0">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <h4 className={`
        absolute left-10 text-base whitespace-nowrap transition-all duration-300 ease-out
        ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}
      `}>
        {label}
      </h4>
    </div>
  );

  return (
    <>
      {isMobile && (
        <button 
          onClick={handleToggle}
          className="fixed top-6 left-6 z-[80] text-white bg-dark2 border border-dark3 px-4 py-3 shadow-md"
        >
          <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-sm transition-all" />
        </button>
      )}

      <AnimatePresence>
        {isMobile && isOpenMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpenMobile(false)}
          />
        )}
      </AnimatePresence>

      <nav
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setShowResumeDropdown(false);
        }}
        className={`
          bg-dark2 text-white h-screen z-50 flex flex-col transition-all duration-500 ease-in-out
          ${isMobile ? "fixed inset-y-0 left-0 shadow-2xl" : "sticky top-0"}
          ${isOpen ? "w-64 p-12" : isMobile ? "w-0 p-0 overflow-hidden" : "w-16 p-5 py-12"}
        `}
      >
        {!isMobile && (
          <div className={`flex ${isOpen ? "justify-end" : "justify-center"} mb-8 transition-all`}>
            <button 
              className="cursor-pointer text-white hover:text-primary transition"
              onClick={handleToggle}
            >
              <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="text-sm" />
            </button>
          </div>
        )}

        {isMobile && isOpen && <div className="h-12 mb-6 flex-shrink-0" />}

        <div className="flex flex-col mb-12 min-h-[140px] justify-start">
          <div className={`
            text-left whitespace-nowrap transition-all duration-300 ease-out
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"}
          `}>
            <h1 className="text-left text-2xl mt-2 leading-tight">
              Hello! I'm <br />
              <span className="text-primary font-bold">Mu Zhang</span>
            </h1>
            <h1 className="text-left mt-4 text-white font-normal leading-relaxed">
              Data Analyst <br />
              Designer <br />
              Developer
            </h1>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="relative">
            <div onClick={() => setShowResumeDropdown(!showResumeDropdown)}>
              <NavItemContent 
                icon={faFileLines} 
                label={<span>Resume <FontAwesomeIcon icon={showResumeDropdown ? faMinus : faPlus} className="text-sm ml-1" /></span>} 
              />
            </div>
            
            <AnimatePresence>
              {showResumeDropdown && isOpen && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute top-0 left-full ml-2 flex flex-col z-50 shadow-2xl "
                >
                  {Object.entries(RESUME_LINKS).map(([key, link]) => (
                    <a key={key} href={link} target="_blank" rel="noopener noreferrer" className="block">
                      <button className="px-4 py-2 text-sm bg-dark2 font-heading font-bold border border-dark3 text-gray hover:text-white hover:border-primary transition uppercase cursor-pointer whitespace-nowrap w-full text-left">
                        {key}
                      </button>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="no-underline">
            <NavItemContent icon={faLinkedin} label="LinkedIn" />
          </a>
          
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="no-underline">
            <NavItemContent icon={faGithub} label="Github" />
          </a>
        </div>
      
        <ul className="flex flex-col space-y-6 mt-12 flex-1/3">
          {NAVIGATION_ITEMS.map(({ id, icon, label }) => (
            <li key={id} onClick={() => { scrollToSection(sectionRefs[id]); if (isMobile) setIsOpenMobile(false); }}>
              <NavItemContent icon={icon} label={label} active={activeSection === id} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
