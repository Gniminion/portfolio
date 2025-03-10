import { useState } from "react";
import ProjCard from "./ProjCard";

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
      desc: "A tool for front desk workers to efficiently mangage attendee information and check in process",
      link: "https://github.com/Gniminion/conference-tracker" },
    { title: "This Portfolio Site", category: ["Design", "Development"], image: "prototype.png",
      desc: "A simple, intuitive portfolio template to showcase personal works",
      link: "https://github.com/Gniminion/portfolio" },

  ];

  const categories = ["All", "Data", "Design", "Development"];

  const filtered = activeCat === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeCat));

  return (
    <section className="text-white">
      <div className="flex space-x-4 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setactiveCat(category)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeCat === category 
                ? "border-2 border-primary text-white" 
                : "border-2 border-dark3 text-gray hover:bg-dark2 hover:cursor-pointer"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8">
        {filtered.map((project, index) => (
          <a href={project.link} target="_blank" >
            <ProjCard key={index} title={project.title} image={project.image} desc={project.desc}/>
          </a>
        ))}
      </div>
    </section>
  );
}
export default Projects;
