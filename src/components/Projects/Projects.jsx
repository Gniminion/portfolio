import { useState } from "react";
import ProjCard from "./ProjCard";
import { motion } from "framer-motion";

function Projects() {
  const [activeCat, setactiveCat] = useState("All");

  const projects = [
    { title: "Tech Investments Analysis", category: ["Data", "Development"], image: "cxc.png", 
      desc: "Building a predictive model and dashboard to advise investors in Canada's tech industry",
      link: "https://github.com/Gniminion/tech-investment-analysis" },
    { title: "Learn More Video Series", category: "Design", image: "learnmore.png",
      desc: "Storyboarding, designing, and editing fun animated videos for students to learn effectively",
      link: "https://www.youtube.com/@LearnMoreWithDanWolczuk/videos" },
    { title: "Conference Tracker", category: ["Data", "Development"], image: "contrack.png",
      desc: "A tool for front desk workers to efficiently manage attendee information and check in process",
      link: "https://github.com/Gniminion/conference-tracker" },
    { title: "This Portfolio Site", category: ["Design", "Development"], image: "prototype.png",
      desc: "A simple, intuitive portfolio template to showcase personal works",
      link: "https://github.com/Gniminion/portfolio" },
  ];

  const card = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" }
    }
  };

  const categories = ["All", "Data", "Design", "Development"];

  const filtered = activeCat === "All"
    ? projects
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeCat)
          : project.category === activeCat
      );

  return (
    <section className="text-white text-sm flex flex-col w-full px-4">
      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2 hide-scrollbar">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setactiveCat(category)}
            className={`px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
              activeCat === category 
                ? "border-2 border-primary text-white" 
                : "border-2 border-dark3 text-gray hover:cursor-pointer"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {filtered.map((project, index) => (
          <motion.a layout
            href={project.link} 
            key={`${project.title}-${activeCat}`} 
            initial="hidden"
            animate="visible"
            variants={card}
            className="block hover:scale-[1.02]"
          >
            <ProjCard 
              title={project.title} 
              image={project.image} 
              desc={project.desc}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
