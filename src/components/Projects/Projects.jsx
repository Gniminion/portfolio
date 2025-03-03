import { useState } from "react";
import ProjCard from "./ProjCard";

function Projects() {
  const [activeCat, setactiveCat] = useState("All");

  const projects = [
    { title: "Tech Investments Analysis", category: ["Data", "Development"], image: "src/assets/cxc.png", 
      link: "https://github.com/Gniminion/tech-investment-analysis" },
    { title: "Learn More Video Series", category: "Design", image: "src/assets/learnmore.png",
      link: "https://www.youtube.com/@LearnMoreWithDanWolczuk/videos" },
    { title: "This Portfolio Site", category: ["Design", "Development"], image: "src/assets/prototype.png",
      link: "https://github.com/Gniminion/gniminion.github.io" },
  ];

  const categories = ["All", "Data", "Design", "Development"];

  // Filter projects based on the active category
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
            <ProjCard key={index} title={project.title} image={project.image} />
          </a>
        ))}
      </div>
    </section>
  );
}
export default Projects;
