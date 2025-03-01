import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Project from './components/Project';
import './App.css'

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    { title: "Project A", description: "Description of Project A" },
    { title: "Project B", description: "Description of Project B" },
    { title: "Project C", description: "Description of Project C" },
    { title: "Project D", description: "Description of Project D" },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      
      <div className="flex-1 overflow-auto p-8">
        <section ref={homeRef} className="min-h-screen flex items-center">
          <h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
        </section>

        <section ref={projectsRef} className="min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Project key={index} title={project.title} description={project.description} />
            ))}
          </div>
        </section>
        <section ref={contactRef} className="min-h-screen">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-300">Reach out to me here.</p>
        </section>
      </div>
    </div>
  )
}
export default App
