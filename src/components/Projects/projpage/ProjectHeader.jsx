import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus, faMinus, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function ProjectHeader({ project, isMobileMenuOpen, setIsMobileMenuOpen, onBackClick }) {
  return (
    <div className="md:hidden fixed top-6 left-6 right-6 z-[90] flex items-center justify-between pointer-events-none">
      <div className="flex gap-2 pointer-events-auto">
        <button onClick={onBackClick} className="flex items-center justify-center w-12 h-12 bg-dark2 text-white border border-dark3 shadow-md">
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex items-center justify-center w-12 h-12 bg-dark2 text-white border border-dark3 shadow-md">
          <FontAwesomeIcon icon={isMobileMenuOpen ? faMinus : faPlus} className="text-sm" />
        </button>
      </div>
      {project?.link && (
        <div className="pointer-events-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline transition-colors cursor-pointer text-sm bg-dark2 px-3 py-2 border border-dark3"
          >
            View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
          </a>
        </div>
      )}
    </div>
  );
}

export default ProjectHeader;
