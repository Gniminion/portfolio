import { useState } from "react";

function Experience() {
  const [activeTab, setActiveTab] = useState("Experience");

  const experiences = [
    {
      logo: "mikomiko.png",
      institution: "Mikomiko SG | 2025",
      role: "UX/UI Designer and Product Management",
      description: "Providing intuitive user interfaces for a AI tool platform.",
    },
    {
      logo: "waterloo.png",
      institution: "UW Mathematics Faculty | 2024",
      role: "Animator for Educational Works",
      description: "Designed, storyboarded, and edited videos for a learning how to learn series.",
    },
  ];

  const education = [
    {
      logo: "waterloo.png",
      institution: "University of Waterloo | 2023 - 2028",
      degree: "Bachelor of Mathematics (Computational Mathematics & Biostatistics)",
      description: "Relevant coursework in statistical analysis, data structures, object oriented programming, bioinformatics, and more.",
    },
    {
      logo: "coursera.png",
      institution: "Coursera | 2024",
      degree: "Google Data Analytics Certificate",
      description: "Completed modules in database foundations and computational tools with Excel, SQL, R, and Tableau.",
    },
    {
      logo: "ib.png",
      institution: "Nexus International School | 2020 - 2023",
      degree: "International Baccalaureate Bilingual Diploma",
      description: "High scoring in Higher Level Mathematics, Biology, and Computer Science.",
    },
  ];

  return (
    <div className="mx-auto p-4 md:p-6 bg-dark2 text-white rounded-lg">
      <div className="flex rounded-lg">
        <button
          className={`hover:cursor-pointer border-2 border-dark3 flex-1 px-2 py-2 rounded-l-lg transition-all duration-300 ${
            activeTab === "Experience"
              ? "bg-dark3 text-white font-semibold"
              : "bg-dark text-gray"
          }`}
          onClick={() => setActiveTab("Experience")}
        >
          <span className="text-sm md:text-base">Experience</span>
        </button>

        <button
          className={`hover:cursor-pointer border-2 border-dark3 flex-1 px-2 py-2 rounded-r-lg transition-all duration-300 ${
            activeTab === "Education"
              ? "bg-dark3 text-white font-semibold"
              : "bg-dark text-gray"
          }`}
          onClick={() => setActiveTab("Education")}
        >
          <span className="text-sm md:text-base">Education</span>
        </button>
      </div>

      <div className="mt-4 border-2 border-dark3 bg-dark rounded-lg p-4 overflow-y-auto transition-all max-h-[400px]">
        {activeTab === "Experience"
          ? experiences.map((exp, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex text-left items-start gap-3">
                  <img 
                    src={exp.logo} 
                    alt={exp.institution} 
                    className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1 min-w-0"> 
                    <h3 className="text-sm md:text-base font-semibold break-words">{exp.role}</h3>
                    <p className="text-xs md:text-sm text-gray">{exp.institution}</p>
                  </div>
                </div>
                <p className="text-left mt-2 text-xs md:text-sm text-gray pl-[52px] md:pl-15 break-words">
                  {exp.description}
                </p>
              </div>
            ))
          : education.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex text-left items-start gap-3">
                  <img 
                    src={edu.logo} 
                    alt={edu.institution} 
                    className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-semibold break-words">{edu.degree}</h3>
                    <p className="text-xs md:text-sm text-gray">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-left mt-2 text-xs md:text-sm text-gray pl-[52px] md:pl-16 break-words">
                  {edu.description}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Experience;
