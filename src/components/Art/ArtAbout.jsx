import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function ArtAbout() {
  return (
    <div className="px-8 lg:px-12 max-w-6xl text-left text-gray text-sm md:text-base">
      <p>
        Welcome to my grove! Call me <span className="text-white">MingMing</span> or <span className="text-white">Gnim</span>, a developer by night and doodler by night (I'm not a morning person). I like creating art for franchises I like, as well as creatures and sci-fi. This page is a collection of art I've made over the years for the love of the game.
      </p>
      <p className="mt-4">
        You can access my slightly more professional <a href="https://drive.google.com/file/d/1_bqNCADLANv-hy4M5-cUlOTYx1igkg8y/view?usp=sharing" target="_blank" rel="noreferrer" className="font-heading text-primary hover:underline transition-colors">Art Portfolio</a> and 
        hire my unemployed bum for development work by checking out my <a href="https://muzhang.dev" target="_blank" rel="noreferrer" className="font-heading text-primary hover:underline transition-colors">Main Website</a>.
      </p>
      <p className="mt-4">
        For art related business enquires, try <span className="text-white">gniminis [at] gmail [dot] com</span>, 
        and follow me on <a href="https://www.instagram.com/gniminis/" target="_blank" rel="noreferrer" className="font-heading text-primary hover:underline transition-colors pl-1"> <FontAwesomeIcon icon={faInstagram} /> Instagram </a> for my eternal gratitude.
      </p>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/art/anime3x3.webp" alt="My favourite anime" className="w-full h-auto mb-4" />
            <p className="text-gray mb-2">My Favourite Anime</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/art/music3x3.webp" alt="My favourite music" className="w-full h-auto mb-4" />
            <p className="text-gray mb-2">My Favourite Music</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/art/game3x3.webp" alt="My favourite games" className="w-full h-auto mb-4" />
            <p className="text-gray mb-2">My Favourite Games</p>
          </div>
        </div>

        <p className="mt-8 flex items-center justify-center">
        °‧ 𓆝 𓆟 𓆞 ·｡
        </p>
      </div>
    </div>
  );
}

export default ArtAbout;
