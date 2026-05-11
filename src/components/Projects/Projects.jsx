import { useState, useRef } from "react";
import ProjCard from "./ProjCard";
import Papers from "./Papers";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../data/projects";
import { CATEGORIES } from "../../data/projects";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const hoverTimeout = useRef(null);

  const filteredProjects = PROJECTS.filter(project => 
    activeCategory === "All" || (Array.isArray(project.category) ? project.category.includes(activeCategory) : project.category === activeCategory)
  );

  const handleHover = (project) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    if (project && isAnimating) return;

    if (project) {
      setHoveredProject(project);
    } else {
      hoverTimeout.current = setTimeout(() => {
        setHoveredProject(null);
      }, 200); 
    }
  };

  const formatCategory = (cat) => {
    return Array.isArray(cat) ? cat.join(" · ").toUpperCase() : cat.toUpperCase();
  };

  const renderCategoryButtons = () => (
    <div className="flex space-x-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
      {CATEGORIES.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 transition-all duration-300 whitespace-nowrap bg-dark2 font-heading uppercase text-sm tracking-widest cursor-pointer hover:text-white ${
            activeCategory === category ? "border border-primary text-white" : "border border-dark3 text-gray hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );

  const InfoRow = ({ label, value }) => {
    if (!value) return null;
    return (
      <div className="mb-4">
        <span className="block text-sm text-white font-heading font-bold mb-1">{label}</span>
        <span className="block text-xs text-white font-sans whitespace-pre-line leading-tight">{value}</span>
      </div>
    );
  };

  return (
    <section className="text-white text-sm w-full">
      {renderCategoryButtons()}
      
      <div className="flex flex-col lg:flex-row gap-4 relative" onMouseLeave={() => handleHover(null)}>
        <div className={`transition-all duration-500 ease-in-out ${hoveredProject ? 'lg:w-[60%]' : 'w-full'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {filteredProjects.map((project) => (
              <div 
                key={project.title}
                onMouseEnter={() => handleHover(project)}
                className="h-full"
              >
                <motion.div layout className="h-full">
                  <ProjCard 
                    {...project}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
          {hoveredProject && (
            <motion.div 
              onMouseEnter={() => { if (hoverTimeout.current) clearTimeout(hoverTimeout.current); }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onAnimationStart={(definition) => {
                if (definition === "exit") setIsAnimating(true);
              }}
              className="hidden lg:flex lg:w-[40%] flex-col sticky top-24 h-fit border-l border-dark3 pl-8 overflow-y-auto max-h-[80vh] no-scrollbar"
            >
              <h3 className=" text-primary font-heading font-bold text-xs mb-2 ">
                {formatCategory(hoveredProject.category)}
              </h3>
              <h2 className="text-3xl font-heading font-bold mb-4 leading-none">{hoveredProject.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {hoveredProject.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-dark font-heading font-bold border border-dark3 text-gray tracking-tighter uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-white text-sm leading-relaxed mb-6 font-sans">
                {hoveredProject.desc}
              </p>

              {hoveredProject.fullDescription && (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <InfoRow label="Role" value={hoveredProject.fullDescription.role} />
                  <InfoRow label="Duration" value={hoveredProject.fullDescription.duration} />
                  <InfoRow label="Team" value={hoveredProject.fullDescription.team} />
                  <InfoRow label="Deliverables" value={hoveredProject.fullDescription.deliverables} />
                </div>
              )}

              <div className="mt-auto pt-4 border-t italic text-gray text-xs font-mono">
                {hoveredProject.priority ? "[ click card to read full case study ]" : "[ click card to visit external project ]"}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="mt-12">
        <Papers/>
      </div>
    </section>
  );
}

export default Projects;
