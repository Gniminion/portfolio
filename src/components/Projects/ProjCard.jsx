import { useState } from "react";

function ProjCard({ title, image, hover, desc }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div 
        className="relative rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="pt-[56.25%] relative">
          <img 
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={image} 
            alt={title}
          />
        </div>
      </div>
      
      <div className="border-l-2 border-primary mt-4 text-left pl-4 flex-1">
        <h2 className="text-lg md:text-xl text-white font-semibold">{title}</h2>
        <p className="text-sm md:text-base text-gray mt-1">{desc}</p>
      </div>
    </div>
  );
}

export default ProjCard;
