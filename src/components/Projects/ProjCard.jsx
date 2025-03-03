import { useState } from "react";

function ProjCard({ title, image }) {
  const [hovered, setHovered] = useState(false);

  return (
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
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
          {title}
        </div>
      )}
    </div>
  );
}
export default ProjCard;
