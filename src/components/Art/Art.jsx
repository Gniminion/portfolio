import React, { useState, useRef } from "react";
import { ART_PIECES } from "../../data/art";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faOctopusDeploy, faDeviantart } from "@fortawesome/free-brands-svg-icons";

function Art() {
  const [selectedArt, setSelectedArt] = useState(null);
  const [activeTab, setActiveTab] = useState("works");
  
  const topRef = useRef(null);

  const TABS = ["works", "about"];

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

  const renderAbout = () => (
    <div className="px-8 lg:px-12 max-w-6xl text-left text-gray text-sm md:text-base">
      <p>
        Welcome to my grove! Call me <span className="text-white">MingMing</span> or <span className="text-white">Gnim</span>, a developer by night and doodler by night (I'm not a morning person). I like creating art for franchises I like, as well as creatures and sci-fi. This page is a collection of art I've made over the years for the love of the game.
      </p>
      <p className="mt-4">
        You can access my slightly more professional <a href="https://drive.google.com/file/d/1_bqNCADLANv-hy4M5-cUlOTYx1igkg8y/view?usp=sharing" target="_blank" rel="noreferrer" className="text-white hover:underline transition-colors">Art Portfolio</a> and 
        hire my unemployed bum for development work by checking out my <a href="https://muzhang.dev" target="_blank" rel="noreferrer" className="text-white hover:underline transition-colors">Main Website</a>.
      </p>
      <p className="mt-4">
        For art related business enquires, try <span className="text-white">gniminis [at] gmail [dot] com</span>, 
        and follow me on <a href="https://www.instagram.com/gniminis/" target="_blank" rel="noreferrer" className="text-white hover:underline transition-colors pl-1"> <FontAwesomeIcon icon={faInstagram} /> Instagram </a> for my eternal gratitude.
      </p>
      <p className="mt-4">
        °‧ 𓆝 𓆟 𓆞 ·｡
      </p>
    </div>
  );

  const renderGallery = () => {
    const sortedArt = [...ART_PIECES].sort((a, b) => b.id - a.id);
    const leftCol = sortedArt.filter((_, idx) => idx % 2 === 0);
    const rightCol = sortedArt.filter((_, idx) => idx % 2 !== 0);

    const ArtItem = (art) => (
      <div
        key={art.id}
        onClick={() => setSelectedArt(art)}
        onContextMenu={(e) => e.preventDefault()}
        className="relative cursor-pointer overflow-hidden mb-2 md:mb-0"
      >
        <img
          src={`/art/${art.image}`}
          alt={art.title}
          onDragStart={(e) => e.preventDefault()}
          className="w-full h-auto block select-none pointer-events-none"
        />
        <div className="absolute inset-0 z-10 bg-transparent" />
      </div>
    );

    return (
      <div className="w-full px-8 lg:px-12 flex flex-col items-center">
        <div className="w-full flex flex-col md:hidden gap-2">
          {sortedArt.map((art) => ArtItem(art))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-4">{leftCol.map((art) => ArtItem(art))}</div>
          <div className="flex flex-col gap-4">{rightCol.map((art) => ArtItem(art))}</div>
        </div>
        
        <button 
            onClick={scrollToTop}
            className="mt-16 mb-8 text-gray text-xs md:text-sm font-mono italic hover:text-white transition-colors cursor-pointer"
          >
            °‧ 𓆝 𓆟 𓆞 [ back to top ] 𓆝 𓆟 𓆞 ·｡
        </button>
      </div>
    );
  };

  const renderModal = () => {
    if (!selectedArt) return null;
    const hasInfo = selectedArt.title?.trim() || selectedArt.description?.trim();

    return (
      <div
        className="fixed inset-0 bg-black backdrop-blur-md z-50 flex items-center justify-center p-6 md:p-12 overflow-y-auto"
        onClick={() => setSelectedArt(null)}
      >
        <button
          onClick={() => setSelectedArt(null)}
          className="fixed top-6 right-6 md:top-8 md:right-8 z-[60] text-gray hover:text-white transition-colors p-2"
        >
          <FontAwesomeIcon icon={faMinus} className="text-3xl" />
        </button>

        <div
          className="relative shadow-2xl flex flex-col bg-dark w-fit max-w-[90vw] mx-auto overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-black flex items-center justify-center">
            <img
              src={`/art/${selectedArt.image}`}
              alt={selectedArt.title}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="max-h-[90vh] w-auto block select-none pointer-events-none"
            />
            <div className="absolute inset-0 z-20 bg-transparent" onContextMenu={(e) => e.preventDefault()} />
          </div>

          {hasInfo && (
            <div className="bg-dark2 relative z-20">
              {selectedArt.title && <h2 className="text-lg md:text-xl font-bold text-white px-6 pt-4">{selectedArt.title}</h2>}
              {selectedArt.description && <p className="text-gray text-xs md:text-sm px-6 pb-4 pt-1">{selectedArt.description}</p>}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pb-20">
      <div className="w-full max-w-6xl">
        <div className="text-white text-center">
          {renderHero()}
          {renderTabs()}
          <div className="mt-4">
            {activeTab === "works" ? renderGallery() : renderAbout()}
          </div>
        </div>
      </div>
      {renderModal()}
    </div>
  );
}

export default Art;
