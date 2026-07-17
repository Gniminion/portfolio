import React, { useState } from "react";
import { ART_PIECES } from "../../data/art";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function ArtWorks({ onScrollToTop }) {
  const [selectedArt, setSelectedArt] = useState(null);

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
          onClick={onScrollToTop}
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
    <>
      {renderGallery()}
      {renderModal()}
    </>
  );
}

export default ArtWorks;
