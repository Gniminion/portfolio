import { faPython, faReact, faRProject, faGitAlt, faFigma, faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faPenNib } from "@fortawesome/free-solid-svg-icons";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/mu-mingming-zhang/",
  github: "https://github.com/Gniminion"
};

export const RESUME_LINKS = {
  data: "https://drive.google.com/file/d/1ADIf70muNJ8-3cfBq9fl_phIe-qyPsNJ/view?usp=sharing",
  design: "https://drive.google.com/file/d/1gEpBPREDA1-45ev4s0xq_p_G-AL14o7E/view?usp=sharing",
  development: "https://drive.google.com/file/d/1WlBkeJLJegctwOMq939ofD5V0Y3ma_qc/view?usp=sharing"
};

export const PROFILE_IMAGE = {
    src: "me.webp",
    alt: "Photo of Mu Zhang",
  };
  
  export const ABOUT_TEXT = {
    highlight: "I'm a data enthusiast interested in delivering intuitive visualisations for technical concepts.",
    description: "People call me MingMing, and a lot of my interests relate to nerdy media. When I'm not designing or coding, you can also find me making origamis and translating!"
  }; 
  
export const EXPERIENCES = [
    {
      logo: "geo.svg",
      institution: "H2O Geomatics · 2026",
      role: "Fullstack Web Developer",
      description: "[ Ongoing ] Developing a data dashboard for environmental variables to allow for analysis across spatiotemporal scales.",
    },
    {
      logo: "nflogo.webp",
      institution: "NeuroFlex · 2026",
      role: "Frontend and Data Visualisation Developer",
      description: "Surfacing data insights through dashboard workflows and optimising web  experiences.",
    },
    {
      logo: "mikomiko.webp",
      institution: "Mikomiko SG · 2025",
      role: "UX/UI Designer and Product Management",
      description: "Providing intuitive user interfaces for an ACG tool platform. Involved in frontend development of product websites.",
    },
    {
      logo: "waterloo.webp",
      institution: "UW Mathematics Faculty · 2024",
      role: "Animator for Educational Works",
      description: "Designed, storyboarded, and edited videos for a learning how to learn series.",
    },
  ];

export const EDUCATION = [
    {
      logo: "waterloo.webp",
      institution: "University of Waterloo · 2023 - 2028",
      degree: "Bachelor of Mathematics · Major in Computational Mathematics & Biostatistics · Minor in Cognitive Science",
      description: "Relevant coursework in statistical analysis, data structures, object oriented programming, bioinformatics, and more.",
    },
    {
      logo: "coursera.webp",
      institution: "Coursera · 2024",
      degree: "Google Data Analytics Certificate",
      description: "Completed modules in database foundations and computational tools with Excel, SQL, R, and Tableau.",
    },
    {
      logo: "ib.webp",
      institution: "Nexus International School · 2020 - 2023",
      degree: "International Baccalaureate Bilingual Diploma",
      description: "High scoring in Higher Level Mathematics, Biology, and Computer Science.",
    },
  ];

export const SKILLS = [
    { logo: faGitAlt, name: "Git", description: "Version Control" },
    { logo: faRProject, name: "R", description: "Data Analysis" },
    { logo: faDatabase, name: "SQL", description: "Data Analysis" },
    { logo: faPython, name: "Pandas · Python", description: "Data Analysis" },
    { logo: faReact, name: "React · JS · TS", description: "Frontend Development" },
    { logo: faCss3Alt, name: "Tailwind · CSS", description: "Frontend Development" },
    { logo: faFigma, name: "Figma", description: "UI/UX Design" },
    { logo: faPenNib, name: "Adobe Suite", description: "Graphic Design" },
  ];