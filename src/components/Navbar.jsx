import React from "react";
import { Home, Folder, Mail} from "lucide-react";
import gitIcon from '../assets/github.svg';
import ldIcon from '../assets/linkedin.svg';

function Navbar({ scrollToSection, homeRef, projectsRef, contactRef }) {
  return (
    <nav className="w-76 h-screen bg-dark2 p-12 flex flex-col space-y-3 text-white">
      <h1 className="text-3xl text-white ml-4 text-left"> 
        Hello! I'm <br/> 
        <span className="text-primary font-bold">Mu Zhang</span> <br/>
      </h1>
      <h3 className="text-left ml-4">
        Data Analyst <br/>
        UI Designer<br/>
        Web Developer
      </h3>
      <div className="flex ml-4 mt-4 items-center space-x-4 text-sm">
        <a href="https://www.linkedin.com/in/mu-mingming-zhang/" target="_blank">
          <button className="px-2 py-1 border-2 text-gray rounded cursor-pointer hover:text-primary transition-all">
            Resume
          </button>
        </a>
        <a href="https://github.com/Gniminion" target="_blank">
          <button className="text-white rounded cursor-pointer hover:text-primary transition-all" >
            <img src={gitIcon} alt="GitHub Icon" className="w-6 h-6 filter invert" />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/mu-mingming-zhang/" target="_blank">
          <button className="text-white rounded cursor-pointer hover:text-primary transition-all">
            <img src={ldIcon} alt="LinkedIn Icon" className="w-6 h-6 filter invert" />
          </button>
        </a>
      </div>
      <ul className="space-y-4 text-base font-semibold mt-8 flex-col items-center justify-center">
        <li 
          onClick={() => scrollToSection(homeRef)} 
          className="flex items-center space-x-2 cursor-pointer hover:text-primary ml-4"
        >
          <Home className="text-white" /> <span>Home</span>
        </li>
        <li 
          onClick={() => scrollToSection(projectsRef)} 
          className="flex items-center space-x-2 cursor-pointer hover:text-primary ml-4"
        >
          <Folder className="text-white" /> <span>Projects</span>
        </li>
        <li 
          onClick={() => scrollToSection(contactRef)} 
          className="flex items-center space-x-2 cursor-pointer hover:text-primary ml-4"
        >
          <Mail className="text-white" /> <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
