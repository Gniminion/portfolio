import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function ProjCard({ title, image, desc, tags, priority, link }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (priority) {
      e.preventDefault();
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      navigate(`/project/${slug}`);
    } else if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className="flex flex-col h-full bg-dark2 p-4 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group transition-all duration-300 ease-in-out">
        <div className="pt-[55%] relative">
          <img 
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered && priority ? 'opacity-30 scale-105' : 'opacity-100 scale-100'
            }`}
            src={`/projects/${image}`} 
            alt={title}
          />
          {priority && (
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <h4 className="text-white !font-mono">Read Case Study →</h4>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-left flex-1">
        <h2 className="text-lg md:text-xl text-white font-heading font-bold tracking-tight">
          {title}
          {!priority && (
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2 text-sm text-primary" />
          )}
        </h2>

        <div className="lg:hidden flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs bg-dark font-heading font-bold border border-dark3 text-gray tracking-tighter uppercase">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-gray text-sm mt-3 leading-relaxed font-sans line-clamp-3">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ProjCard;
