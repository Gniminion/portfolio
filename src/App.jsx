import { useState, useEffect, useRef } from "react";
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from "./components/About";
import './App.css'

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    { title: "Project 1", description: "Description" },
    { title: "Project 2", description: "Description" },
    { title: "Project 3", description: "Description" },
    { title: "Project 4", description: "Description" },
  ];

  return (
    <div className="flex h-screen bg-dark text-white">
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      
      <div className="flex-1 overflow-auto p-16">
        <section ref={homeRef} className="min-h-screen mb-8 -mt-8">
          <h2 className="text-left text-3xl font-bold ">About</h2>
          <About/>
        </section>

        <section ref={projectsRef} className="min-h-screen">
          <h2 className="text-left text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div>
                <Project title={project.title} description={project.description} />
              </div>
            ))}
          </div>
        </section>

        <section ref={contactRef} className="min-h-screen flex items-center justify-center">
          <h2 className="text-3xl font-bold">Contact</h2>
        </section>
      </div>
    </div>
  );
}

export default App;
