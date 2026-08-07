import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faOctopusDeploy, faDeviantart } from "@fortawesome/free-brands-svg-icons";
import ArtAbout from "./ArtAbout";
import ArtWorks from "./ArtWorks";
import ArtEvents from "./ArtEvents";

function Art() {
  const [activeTab, setActiveTab] = useState("works");
  
  const topRef = useRef(null);

  const TABS = ["works", "events", "about"];

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderHero = () => {
    return (
      <div ref={topRef} className="flex-col w-full overflow-hidden relative min-h-[240px] flex justify-center items-center p-4 lg:p-8">
        <div className="relative z-10 flex flex-row justify-start items-center h-full gap-4 md:gap-8">
          <div className="relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center">
            <img 
              src="/art/pfp.webp" 
              alt="logo" 
              className="w-full h-full object-contain pointer-events-none select-none" 
            />
          </div>
          <div className="flex flex-col justify-center items-start text-left">
            <h1 className="text-2xl md:text-4xl font-bold">Gniminis</h1>
            <div className="mt-2 flex flex-col gap-1 items-start">
              <p className="text-md md:text-lg font-medium text-white">doodles and dohickeys</p>
              <div className="flex gap-2 md:gap-4 text-xs md:text-base text-gray mt-2">
                <a href="https://www.instagram.com/gniminis/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faInstagram} className="text-primary" /> Instagram
                </a>
                <a href="https://www.mihuashi.com/profiles/677531" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faOctopusDeploy} className="text-primary" /> MiHuaShi
                </a>
                <a href="https://www.deviantart.com/gniminion" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faDeviantart} className="text-primary" /> DA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTabs = () => (
    <div className="flex space-x-4 mb-8 overflow-x-auto no-scrollbar px-8 lg:px-12">
      {TABS.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 transition-all duration-300 whitespace-nowrap bg-dark2 font-heading uppercase text-sm tracking-widest cursor-pointer ${
            activeTab === tab ? "border border-primary text-white" : "border border-transparent text-gray hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pb-20">
      <div className="w-full max-w-6xl">
        <div className="text-white text-center">
          {renderHero()}
          {renderTabs()}
          <div className="mt-4">
            {activeTab === "works" && <ArtWorks onScrollToTop={scrollToTop} />}
            {activeTab === "events" && <ArtEvents onScrollToTop={scrollToTop} />}
            {activeTab === "about" && <ArtAbout />}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Art;
