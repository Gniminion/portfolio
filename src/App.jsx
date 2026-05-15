import { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Project from './components/projects/Projects';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ProjectPage from "./components/projects/projpage/ProjectPage";
import Art from "./components/Art/Art";
import './App.css'

const BASE_URL = import.meta.env.BASE_URL;

export default function App() {
  const MainContent = () => {
    const homeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    const location = useLocation();
    
    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      if (location.hash === "#projects") {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);

    return (
      <div className="flex h-screen text-white overflow-hidden">
        <Navbar 
          scrollToSection={scrollToSection} 
          homeRef={homeRef} 
          projectsRef={projectsRef} 
          contactRef={contactRef} 
        />
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 lg:p-12 w-full max-w-6xl mx-auto">
            <section ref={homeRef} id="home" className="-mt-4">
              <About/>
            </section>

            <section ref={projectsRef} id="projects" className="mt-20">
              <h2 className="text-left text-3xl font-heading mb-8"> PROJECTS</h2>
              <Project/>
            </section>

            <section ref={contactRef} id="contact" className="mt-20 mb-20">
              <h2 className="text-left text-3xl font-heading mb-8">CONTACT</h2>
              <Contact/>
            </section>
            <div className="flex flex-col items-center gap-2 mb-4">
            <div className="flex items-center gap-2 text-gray text-xs font-mono md:text-sm">
              <img 
                src="/mooncipher.webp" 
                className="h-4 w-auto object-contain" 
              />
              <span className="text-center">
                © mu zhang 2026 <br/>
                <a href="mailto:m75zhang@uwaterloo.ca" className="hover:underline italic">
                  [ m75zhang @ uwaterloo.ca ]
                </a>
              </span>
              <img 
                src="/mooncipher.webp" 
                className="h-4 w-auto object-contain" 
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

const ArtPage = () => {
  return (
    <div className="flex h-screen text-white overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <Art />
      </div>
    </div>
  );
}

  return (
    <Router basename={BASE_URL}>
      <div className="min-h-screen grid-background">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
