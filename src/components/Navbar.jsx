import React from "react";
import { Home, Folder, Mail } from "lucide-react";

function Navbar({ scrollToSection, homeRef, projectsRef, contactRef }) {
  return (
    <nav className="w-64 h-full bg-gray-800 p-6 flex flex-col space-y-6">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="space-y-4">
        <li onClick={() => scrollToSection(homeRef)} className="flex items-center space-x-2 cursor-pointer">
          <Home /> <span>Home</span>
        </li>
        <li onClick={() => scrollToSection(projectsRef)} className="flex items-center space-x-2 cursor-pointer">
          <Folder /> <span>Projects</span>
        </li>
        <li onClick={() => scrollToSection(contactRef)} className="flex items-center space-x-2 cursor-pointer">
          <Mail /> <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar
