import { useState } from "react";

function ProjCard({ title, image, hover, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className = "flex flex-col">
      <div 
        className="relative rounded-lg overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition duration-300 ${
            hovered ? "brightness-30" : "brightness-100"
          }`}
        />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl p-16">
            {hover}
          </div>
        )}
      </div>
      <div className="border-l-2 border-left border-primary mt-4 text-left">
        <h2 className="ml-4 text-xl text-white font-semibold"> {title} </h2>
        <text className="ml-4 text-base text-gray"> {desc} </text>
      </div>
      
    </div>
  );
}
export default ProjCard;
