import React, { useState, useEffect } from "react";

function ProjNav({ scrollToSection, sections }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px 0px 0px', threshold: 0 }
    );

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="w-76 h-screen bg-dark2 p-12 flex flex-col justify-center text-white sticky top-0 z-10">
      <ul className="flex flex-col justify-center flex-1 space-y-4 text-base">
        {sections.map(({ label, ref, id }, index) => (
          <li
            key={index}
            onClick={() => scrollToSection(ref)}
            className={`flex items-center space-x-2 cursor-pointer ml-4 transition-all ${
              activeSection === id ? "text-white font-bold" : "text-gray"
            }`}
          >
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ProjNav;
