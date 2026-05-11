import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

function ProjectNav({ project, sections, activeSection, onSectionClick, onBackClick, isMobile, isOpenMobile, setIsOpenMobile }) {
  if (!project) return null;

  return (
    <>
      <AnimatePresence>
        {isMobile && isOpenMobile && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[70]"
            onClick={() => setIsOpenMobile(false)}
          />
        )}
      </AnimatePresence>

      <nav className={`
        bg-dark2 text-white transition-all duration-500 ease-in-out flex flex-col
        ${isMobile ? 'fixed inset-y-0 left-0 z-[80] shadow-2xl overflow-hidden' : 'w-72 h-screen p-12 sticky top-0'}
        ${isMobile ? (isOpenMobile ? "w-72 p-12" : "w-0 p-0") : ""}
      `}>
        <div className={`flex flex-col h-full w-48 transition-opacity duration-300 ${isMobile && !isOpenMobile ? "opacity-0" : "opacity-100"}`}>
          {isMobile && <div className="h-24 mb-4" />}
          
          {!isMobile && (
            <button onClick={onBackClick} className="flex items-center text-gray hover:text-white mb-8 text-sm cursor-pointer">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> More Projects
            </button>
          )}

          <div className="flex-none">
            <h2 className="text-2xl font-bold mb-4 leading-tight">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags?.map(tag => (
                <span key={tag} className="px-2 py-1 text-xs bg-dark font-heading font-bold border border-dark3 text-gray uppercase tracking-tighter">{tag}</span>
              ))}
            </div>
            {!isMobile && project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors cursor-pointer inline-block text-sm">
                View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
              </a>
            )}
          </div>

          <ul className="mt-12 space-y-6 border-l border-dark3">
            {Object.entries(sections).map(([id, label]) => (
              <li key={id} onClick={() => { onSectionClick(id); setIsOpenMobile(false); }}
                className={`cursor-pointer transition-all pl-4 -ml-px border-l-2 whitespace-nowrap ${activeSection === id ? 'text-primary border-primary' : 'text-gray hover:text-white border-transparent'}`}>
                <h4 className="text-sm font-medium">{label}</h4>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default ProjectNav;
