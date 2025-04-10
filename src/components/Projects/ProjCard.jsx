import { useState } from "react";

function ProjCard({ title, image, hover, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className = "flex flex-col">
      <div 
        className="relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img 
          src={image} 
          alt={title} 
        />
        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl p-24">
            {hover}
          </div>
        )}
      </div>
      <div className="border-l-2 border-primary mt-4 text-left pl-4">
        <h2 className="text-xl text-white font-semibold">{title}</h2>
        <p className="text-base text-gray-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}
export default ProjCard;
