import { useRef, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectNav from './ProjectNav';
import ProjectHeader from './ProjectHeader';
import ProjectSection from './ProjectSection';
import { PROJECTS } from '../../../data/projects';

const SECTION_NAMES = {
  overview: "Overview",
  problem: "Problem",
  development: "Development",
  outcome: "Outcome"
};

const SUMMARY_FIELDS = [
  { label: 'Role', key: 'role' },
  { label: 'Team', key: 'team' },
  { label: 'Deliverables', key: 'deliverables' },
  { label: 'Duration', key: 'duration' },
];

const createSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

function ProjectPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobile, setIsMobile] = useState(false);

  const sectionRefs = {
    overview: useRef(null), problem: useRef(null), development: useRef(null), outcome: useRef(null)
  };

  const priorityProjects = PROJECTS.filter(p => p.priority === true);
  const project = PROJECTS.find(p => createSlug(p.title) === id);
  const priorityIndex = priorityProjects.findIndex(p => createSlug(p.title) === id);
  const scrollContainerRef = useRef(null);
  
  // cycle through priority projects
  const nextProject = priorityIndex !== -1 
    ? priorityProjects[(priorityIndex + 1) % priorityProjects.length]
    : priorityProjects[0];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => { if (!project) navigate('/'); }, [project, navigate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.3 }
    );
    Object.values(sectionRefs).forEach(ref => ref.current && observer.observe(ref.current));
    return () => observer.disconnect();
  }, [project]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [id]);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden text-white">
      <ProjectNav
        project={project}
        sections={SECTION_NAMES}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        onBackClick={() => navigate('/#projects')}
        isMobile={isMobile}
        isOpenMobile={isMobileMenuOpen}
        setIsOpenMobile={setIsMobileMenuOpen}
      />

      <div className="flex-1 flex flex-col min-h-0">
        <ProjectHeader
          project={project}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          onBackClick={() => navigate('/#projects')}
        />

        <main ref={scrollContainerRef} className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-6 lg:p-12">
            {project?.image && (
              <div className="aspect-video mb-12">
                <img src={`/projects/${project.image}`} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}

            <section className="mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6 text-sm">
                {SUMMARY_FIELDS.map(({ label, key }) => (
                  <div key={key}>
                    <h3 className="font-medium text-white mb-1">{label}</h3>
                    <p className="text-gray whitespace-pre-line">{project?.fullDescription?.[key]}</p>
                  </div>
                ))}
              </div>
            </section>

            {Object.entries(SECTION_NAMES).map(([id, title]) => (
              <ProjectSection 
                key={id} id={id} title={title} 
                content={project?.fullDescription?.[id]?.content} 
                images={project?.fullDescription?.[id]?.images} 
                forwardedRef={sectionRefs[id]} 
              />
            ))}

            <section className="pt-8 mb-8 border-t">
              <button
                className="max-w-xl bg-primary py-2 px-4 cursor-pointer"
                onClick={() => navigate(`/project/${createSlug(nextProject.title)}`)}
              >
                <h2>Next Project →</h2>
              </button>
            </section>
            <img 
                src="/mooncipher.webp" 
                className="flex h-4 w-auto object-contain text-gray text-xs md:text-sm mb-8" 
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProjectPage;
