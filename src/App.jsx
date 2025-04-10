import { useRef } from "react";
import Navbar from './components/Navbar';
import Project from './components/Projects/Projects';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import './App.css'

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex h-screen bg-dark text-white overflow-hidden">
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
      
      <div className="flex-1 overflow-y-auto p-8 lg:p-12 w-full max-w-full">
        <section ref={homeRef} className=" -mt-4">
          <h2 className="text-left text-3xl font-bold">About</h2>
          <About/>
        </section>

        <section ref={projectsRef} className="mt-8">
          <h2 className="text-left text-3xl font-bold mb-8">Projects</h2>
          <Project/>
        </section>

        <section ref={contactRef} className="mt-8 mb-4">
          <h2 className="text-left text-3xl font-bold">Contact</h2>
          <Contact/>
        </section>
      </div>
    </div>
  );
}

export default App;
