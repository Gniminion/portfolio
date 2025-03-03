import { useState } from "react";
function Experience() {
  const [activeTab, setActiveTab] = useState("Experience");

  const experiences = [
    {
      logo: "🏢",
      institution: "Mikomiko SG | 2025",
      role: "UX/UI Designer and Product Managment",
      description: "",
    },
    {
      logo: "🏢",
      institution: "University of Waterloo, Faculty of Mathematics | 2024",
      role: "Animator for Educational Works",
      description: "Designed, storyboarded, and edited videos for a learning how to learn series.",
    },
  ];

  const education = [
    {
      logo: "🎓",
      institution: "University of Waterloo | 2023 - Current",
      degree: "Computational Mathematics & Biostatistics (Bachelor of Mathematics, Honours)",
      description: "Cumulative average ~80%, relevant coursework in statistical analysis, data structures, object oriented programming, bioinformatics, and more.",
    },
    {
      logo: "🎓",
      institution: "Nexus International School | 2020 - 2023",
      degree: "International Baccalaureate Bilingual Diploma",
      description: "Scored 38 with Higher Level subjects Mathematics, Biology, and Computer Science. High performance in native language literature courses Chinese & English.",
    },
  ];

  return (
    <div className="max-w-lg mx-auto p-6 bg-dark2 text-white rounded-lg shadow-lg">

      <div className="flex rounded-lg p-1">
        <button
          className={`hover:cursor-pointer border-2 border-dark3 flex-1 px-2 py-1 rounded-l-lg transition-all duration-300 ${
            activeTab === "Experience"
              ? "bg-dark3 text-white font-semibold"
              : "bg-dark text-gray"
          }`}
          onClick={() => setActiveTab("Experience")}
        >
          <span className="text-sm">Experience</span>
        </button>

        <button
          className={`hover:cursor-pointer border-2 border-dark3 flex-1 px-2 py-1 rounded-r-lg transition-all duration-300 ${
            activeTab === "Education"
              ? "bg-dark3 text-white font-semibold"
              : "bg-dark text-gray"
          }`}
          onClick={() => setActiveTab("Education")}
        >
          <span className="text-sm">Education</span>
        </button>
      </div>

      <div className="mt-4 border-2 border-dark3 bg-dark rounded-lg p-6 h-84 overflow-y-auto transition-all">
        {activeTab === "Experience"
          ? experiences.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex text-left space-x-4">
                  <span className="text-3xl">{exp.logo}</span>
                  <div>
                    <h3 className="text-base font-semibold">{exp.role}</h3>
                    <p className="text-sm text-gray">{exp.institution}</p>
                  </div>
                </div>
                <p className="text-left ml-12 mt-2 text-sm text-gray">{exp.description}</p>
              </div>
            ))
          : education.map((edu, index) => (
              <div key={index} className="mb-6">
                <div className="flex text-left space-x-4">
                  <span className="text-3xl">{edu.logo}</span>
                  <div>
                    <h3 className="text-base font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-gray">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-left ml-12 mt-2 text-sm text-gray">{edu.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
export default Experience