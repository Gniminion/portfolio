import { useState, useEffect, useRef } from "react";
import { Email } from "react-obfuscate-email";
import Navbar from './components/Navbar';
import Project from './components/Projects/Projects';
import About from "./components/About/About";
import './App.css'

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, -16);
  };

  return (
    <div className="flex h-screen bg-dark text-white overflow-hidden">
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      
      <div className="flex-1 overflow-auto p-16">
        <section ref={homeRef} className="min-h-screen -mt-8">
          <h2 className="text-left text-3xl font-bold">About</h2>
          <About/>
        </section>

        <section ref={projectsRef} className="min-h-screen mt-8">
          <h2 className="text-left text-3xl font-bold mb-8">Projects</h2>
          <Project/>
        </section>

        <section ref={contactRef} className="min-h-screen flex items-center justify-center">
          <div className="text-center flex flex-col">
            <h2 className="text-3xl font-bold">Contact</h2>
            <Email className="text-primary" email="mingmingzhangcd@gmail.com">Email</Email>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
