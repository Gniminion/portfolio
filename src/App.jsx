import { useRef } from "react";
import Navbar from './components/Navbar';
import Project from './components/Projects/Projects';
import About from "./components/About/About";
import Contact from "./components/Contact";
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
      
      <div className="flex-1 overflow-auto p-16">
        <section ref={homeRef} className="min-h-screen -mt-8">
          <h2 className="text-left text-3xl font-bold">About</h2>
          <About/>
        </section>

        <section ref={projectsRef} className="min-h-screen mt-8">
          <h2 className="text-left text-3xl font-bold mb-8">Projects</h2>
          <Project/>
        </section>

        <section ref={contactRef} className="min-h-screen mt-8 -mb-8 flex flex-col justify-center">
          <h2 className="text-left text-3xl font-bold">Contact</h2>
          <Contact/>
        </section>
      </div>
    </div>
  );
}

export default App;
