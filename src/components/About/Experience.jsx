import { useState } from "react";
import { EXPERIENCES, EDUCATION } from "../../data/about";

function Experience() {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <div className="mx-auto p-4 lg:p-6 text-white">
      <div className="flex gap-0">
        <button
          className={`hover:cursor-pointer border-t border-l border-r border-dark3 px-6 py-2 transition-all duration-300 z-10 relative ${
            activeTab === "Experience"
              ? "bg-dark text-white font-medium"
              : "bg-dark3 text-gray "
          }`}
          style={{ marginBottom: "-1px" }}
          onClick={() => setActiveTab("Experience")}
        >
          <h3 className="text-sm uppercase">Experience</h3>
        </button>

        <button
          className={`hover:cursor-pointer border-t border-l border-r border-dark3 px-6 py-2 transition-all duration-300 z-10 relative ${
            activeTab === "Education"
              ? "bg-dark text-white font-medium"
              : "bg-dark3 text-gray "
          }`}
          style={{ marginBottom: "-1px" }}
          onClick={() => setActiveTab("Education")}
        >
          <h3 className="text-sm uppercase">Education</h3>
        </button>
      </div>

      <div key={activeTab}
           className="border border-dark3 bg-dark p-4 overflow-y-auto transition-all duration-500 max-h-[400px]">
        {activeTab === "Experience"
          ? EXPERIENCES.map((exp, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex text-left items-start gap-3">
                  <img 
                    src={exp.logo} 
                    alt={exp.institution} 
                    className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1 min-w-0"> 
                    <h3 className="text-sm md:text-base font-medium">{exp.role}</h3>
                    <p className="text-xs md:text-sm text-gray">{exp.institution}</p>
                  </div>
                </div>
                <p className="text-left mt-2 text-xs md:text-sm text-gray pl-[52px] md:pl-15 break-words">
                  {exp.description}
                </p>
              </div>
            ))
          : EDUCATION.map((edu, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex text-left items-start gap-3">
                  <img 
                    src={edu.logo} 
                    alt={edu.institution} 
                    className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0 object-contain"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-medium">{edu.degree}</h3>
                    <p className="text-xs md:text-sm text-gray">{edu.institution}</p>
                  </div>
                </div>
                <p className="text-left mt-2 text-xs md:text-sm text-gray pl-[52px] md:pl-15 break-words">
                  {edu.description}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Experience;
