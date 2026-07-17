export const CATEGORIES = ["All", "Data", "Design", "Development"];

export const PROJECTS = [
  { 
    title: "ProtectSUS", 
    category: ["Design", "Development"], 
    image: "protectsus.webp", 
    desc: "Agentic powered code auditor with GitHub integration that debates findings and generates PRs.",
    priority: true,
    link: "https://devpost.com/software/protetsus",
    tags: ["Next.js", "Typescript", "NextAuth", "Github", "MongoDB", "Agentic AI"],
    fullDescription: {
      role: ` Full Stack / Frontend Developer
      UI/UX Architect`,
    
      duration: `48 Hours
      Jan 2026`,

      deliverables:`Frontend Application
      Admin Dashboard
      Demo Video
      Source Code
      `,
    
      team: `4 Members
      For NexHacks 2026
      Best Use of MongoDB`,
    
      overview: {
        content: `[ProtectSUS](https://www.protectsus.tech/) is a code security auditor that finds vulnerabilities and generates fixes. Most security tools bury developers in false positives, but we built something that cut through the noise with context aware analysis and seamless GitHub integration.

I was responsible for the entire frontend architecture, building an application that balances sophisticated backend logic with an intuitive user experience. Beyond the core scanning workflow, I included an admin page and supporting infrastructure to signal scalability.

The design uses a trust driven gradient to convey technical credibility and innovation. Every layout was built to be responsive across mobile and desktop, and defensive against last minute feature changes.`,
        images: [
          {
            src: "screensus.webp",
            caption: "ProtectSUS web interface featuring code scanning and vulnerability highlighting, and GitHub App Integration"
          }
        ]
      },
    
      problem: {
        content: `
Security tools today fail developers in these critical ways:
* Traditional scanners flag syntax patterns without understanding logic, generating hundreds of false positives that get ignored
* Existing tools don't explain *why* something is vulnerable or how to fix it effectively
* Security checks require developers to leave their GitHub workflow and use external tools

The real cost of poor security tooling is huge, breaches average millions in damages, often traceable to human error that better tooling could catch. We needed a system that works like a trusted senior engineer: 

### Challenges assumptions, explains the reasoning intuitively, offers solutions, and integrates into existing workflows.`
      },      
    
      development: {
        content: `
I led frontend development using **Next.js and TypeScript**, handling everything from design decisions to responsive implementation. My challenge wasn't just building features, but rather building components that could flex around uncertain backend outputs and build credibility.

### My contributions included:
* Implemented secure GitHub OAuth via NextAuth.js for user login and repository access
* Designed and built a comprehensive admin dashboard to validate stack functionality, usage analytics and performance metrics
* Built the landing page and flow to code scanner UI with syntax highlighting and vulnerability visualisation
* Implemented responsive darkmode design for desktop and mobile devices using Tailwind CSS

The frontend communicates with Python based backend AI agents (OpenAI, Claude, Gemini) that work in parallel, where one searches for general bugs, another audits dependencies, a third synthesizes their debate. MongoDB serves as both a results store and RAG system, letting AI agents query historical vulnerability patterns to improve recommendations over time.

Explore the [full open source codebase on GitHub!](https://github.com/pujara-narayana/protectSUS)`,
        
        images: [
          {
            src: "adminsus.webp",
            caption: "Comprehensive frontend admin dashboard"
          }
        ]
      },
    
      outcome: {
        content: `ProtectSUS won **Best Use of MongoDB**, but the real win was building something that felt legitimate. We didn't cut corners to save 48 hours, including a professional landing page and shipping with polish sent the message that security tooling deserves to be taken seriously.

### Key accomplishments:    
1. Built a production quality frontend with attention to responsive design, color psychology, and user centered interactions
2. Engineered components to handle variable length AI outputs and adapt to last minute feature changes without UI breaking
3. Included supporting infrastructure and multi-page layout that signaled scalability beyond a hackathon sprint
4. Allowed developers to also choose to never leave GitHub, where scanning, feedback, and PR creation can happen in the tool they already use

The project demonstrated that thoughtful frontend design and robust implementation can take a complex system and make it feel intuitive and trustworthy.

View the [submission on DevPost](https://devpost.com/software/protetsus), check out the [demo video](https://youtu.be/Obq2vTh7gec?si=Erm17X7fRPZMgqlp), or explore the [live application](https://www.protectsus.tech/).`
      }
    }
    
  },
  { 
    title: "Tech Investments Analysis", 
    category: ["Data", "Development"], 
    image: "cxc.webp", 
    desc: "Building a predictive model and dashboard to advise investors in Canada's tech industry.",
    priority: true,
    link: "https://github.com/Gniminion/tech-investment-analysis",
    tags: ["Python", "Pandas", "Git", "Dash", "Scikit-learn", "Machine Learning", "Data Visualisation"],
    fullDescription: {
      role: ` Data Scientist
      Frontend Developer
      Machine Learning Analyst`,
    
      duration: `2 Weeks
      Mar - Apr 2025`,

      deliverables:`Data Visualisation Dashboard
      Insights Report and Slides
      Aggregated Dataset
      Source Code
      `,
    
      team: `4 Members
      For CxC 2025 Hackathon
      RunQL Challenge`,
    
      overview: {
        content: `This data science hackathon project for [CxC 2025](https://devpost.com/software/runql-canadian-tech-investment-analysis?ref_content=my-projects-tab&ref_feature=my_projects) aims to help investors make data-driven decisions in Canada's rapidly evolving tech sector. By analysing historical investment data and market trends provided by RunQL, our team developed a predictive model and dashboard for investment insights. 

I was responsible for data cleaning, preprocessing, regional visualisation, predictive modelling, and final deployment and presentation.

Our [comprehensive dashboard](https://tech-investment-analysis.onrender.com/) shows trends from funding stages, investor demographics, regions, and more. The interface allows users to explore trends interactively and read about related insights.
`,
        images: [
          {
            src: "tidash.webp",
            caption: "In our dashboard, Investment Trends Overtime trends can be filtered by year, province, and funding stage."
          }
        ]
      },
    
      problem: {
        content: `
Canada’s tech ecosystem is growing rapidly, yet investment data is often fragmented, complex, or difficult to interpret.
Stakeholders lack accessible tools to:
* Understand historical funding trends by region and sector
* Identify which sectors are rising or slowing in investor interest
* Forecast future investment dynamics

### Our goal was to turn messy investment data into usable, comprehensive insights through an interactive, open platform.`
      },      
    
      development: {
        content: `
We tackled the challenge by transforming unstructured funding datasets into a refined pipeline for data cleaning, aggregation, and exploration.

### My contributions included:
* Data Cleaning & Preprocessing: Resolved inconsistencies across sectors, deal sizes, and regional entries and removed irrelevant columns, aggregating into comprehensive datasets.
* Regional Analysis: Compared funding dynamics in hubs like Toronto, Vancouver, Montreal, and emerging cities, developing an interactive dot map.
* Dashboard Skeleton: Built the interface framework in Dash for dynamic visualisation
* Machine Learning Models: Developed and evaluated (using k-fold cross-validation) Random Forest regressors/classifiers to forecast sectoral funding probabilities, determining the top 5 predicted sectors with the most investments in 2025.



`,
        
        images: [
          {
            src: "modeltest.webp",
            caption: "ML model accuracy comparison to determine Random Forest approach"
          }
        ]
      },
    
      outcome: {
        content: `Our project was recognised at the [CxC 2025 RunQL Track](https://devpost.com/software/runql-canadian-tech-investment-analysis?ref_content=my-projects-tab&ref_feature=my_projects) as a runner up project.

### Key results:    
1. Built a pipeline for cleaning and analysing investment datasets
2. Delivered a predictive tool and dashboard that can be extended for real-world investor use
3. Open-sourced the project for future contributors and further development

We learned how to distill complex data into a [comprehensive report](https://docs.google.com/document/d/1AiPb38hWNCZXd5Xq7SNgfiy1YsRb904nUEvD_FRxBnE/edit?tab=t.0) under tight hackathon timelines, combining technical rigor with user-centered design.`
      }
    }
    
  },
  { 
    title: "MikoMiko Product Website", 
    category: ["Design", "Development"], 
    image: "mikoai.webp",
    desc: "Developing an info site for an ACG creation platform, increasing traction for product and recruitment.",
    priority: false,
    link: "https://mikomiko.ai",
    tags: ["React", "Tailwind CSS", "Figma", "Next.js", "Git", "SEO"],
    fullDescription: {
      role: ` UI/UX Designer
      Frontend Developer`,
    
      duration: `4 Months
      May - Aug 2025`,

      deliverables:`Source Code
      Figma Designs
      `,
    
      team: `Independent Project for Mikomiko SG`,
    },
  },
  {
    title: "Dan Wolczuk Website",
    category: ["Data", "Design", "Development"],
    image: "profsite.webp",
    desc: "Redesigning a website for a professor to showcase resources and publications, based on web analytics.",
    priority: false,
    link: "https://drive.google.com/file/d/1c-Caq6i8vIhg_FC7Go49jBNxeYLO8SLU/view?usp=sharing",
    tags: ["UX Research", "HTML/CSS", "JavaScript", "Figma"],
    fullDescription: {
      role: ` UI/UX Designer
      Frontend Developer`,
      duration: `4 Months
      Jan - Apr 2026`,
      deliverables:`Source Code
      Figma Designs
      Website Demo
      Full Documentation
      `,
      team: `Independent Project for Prof. Dan Wolczuk`,
    },

  },
  { 
    title: "BloomWatch", 
    category: ["Data", "Development"], 
    image: "bloomwatch.webp",
    desc: "Using satellite data to predict wildflower blooms. NASA Space Apps 2025 global nominee.",
    priority: false,
    link: "https://youtu.be/EMwjfaa0v68",
    tags: ["Python", "MODIS Data", "Predictive Modelling", "Data Visualisation"],
    fullDescription: {
      role: ` Data Analyst
      Project Manager
      Researcher`,
    
      duration: `48 Hours
      Oct 2025`,

      deliverables:`Web Application
      Mobile Design
      Demo Video
      Source Code
      `,
    
      team: `4 Members
      For NASA Space Apps 2025
      Global Nominee and Canadian Top Placer`,
    },
  },
  { 
    title: "Modelling Cancer on a Chip Systems", 
    category: ["Data"], 
    image: "cancer.webp",
    desc: "Using biological and mathematical models to understand and advance tumour drug delivery systems.",
    priority: false,
    link: "https://drive.google.com/file/d/1DG7go2jheZ0MGaO-mX_jS8KRhXHsdW-J/view?usp=drive_link",
    tags: ["Research", "COSMOL", "Mathematical Modelling"],
    fullDescription: {
      role: ` Researcher
      Presenter`,
    
      duration: `4 Months
      May - Aug 2025`,

      deliverables:`Presentation Slides
      Mathematical Models
      `,
    
      team: `3 Mentees
      For Directed Reading Program
      University of Waterloo`,
    },
  },
  { 
    title: "Getaway Ghost", 
    category: ["Design", "Development"], 
    image: "ghost.webp",
    desc: "A 2 player online bluffing boardgame based on Ghosts released in 1982, for UW Game Jam 2026.",
    priority: false,
    link: "https://gniminion.itch.io/getaway-ghost",
    tags: ["Game Design", "Firebase", "Next.js"],
    fullDescription: {
      role: ` Game Designer
      Developer
      Asset Artist`,
    
      duration: `48 Hours
      Jul 2026`,

      deliverables:` Game Prototype
      `,
    
      team: `Solo Dev
      For UW Game Jam 2026`,
    },
  },
  { 
    title: "Subletting in California", 
    category: "Data", 
    image: "sublet.webp",
    desc: "Advising real estate stakeholders on the housing trends in California through exploratory analysis.",
    priority: false,
    link: "https://github.com/Gniminion/rchive/blob/main/Datafest%202025/DataFest%202025.pdf",
    tags: ["R", "Data Visualisation", "Market Research"],
    fullDescription: {
      role: ` Data Analyst
      Researcher`,
    
      duration: `24 hours
      May 2025`,

      deliverables:`Analysis Report
      Data Visualisations
      Presentation Slides`,

      team: `3 Members
      For DataFest 2025`,
    },
  },
  { 
    title: "Learn More Video Series", 
    category: ["Design"], 
    image: "learnmore.webp",
    desc: "Storyboarding, designing, and editing videos to help students approach learning effectively.",
    priority: false,
    link: "https://www.youtube.com/@LearnMoreWithDanWolczuk/videos",
    tags: ["Photoshop", "Premiere Pro", "Storyboarding", "Animation"],
    fullDescription: {
      role: `Animator
      Video Editor
      Storyboarder`,
    
      duration: `4 Months
      May - Aug 2024`,

      deliverables:`12 Educational Videos
      Animation Assets
      Thumbnail Designs
      Translation Subtitles
      `,
    
      team: `Collaboration with Prof. Dan Wolczuk
      University of Waterloo`,
    },
  }, 
  // { 
  //   title: "Conference Tracker", 
  //   category: ["Data", "Development"], 
  //   image: "contrack.webp",
  //   desc: "A tool for front desk workers to efficiently manage attendee information and check in process.",
  //   priority: false,
  //   link: "https://github.com/Gniminion/conference-tracker",
  //   tags: ["Java", "SwingGUI", "OOP", "Prototyping"]
  // },
  { 
    title: "Personal Art Portfolio", 
    category: ["Design"], 
    image: "artport.webp",
    desc: "A broad collection of my smaller works, including educational comics and performance photography.",
    priority: false,
    link: "https://drive.google.com/file/d/1_bqNCADLANv-hy4M5-cUlOTYx1igkg8y/view?usp=sharing",
    tags: ["Graphic Design", "Photoshop", "Photography"]
  },
  // { 
  //   title: "This Portfolio Site ↗", 
  //   category: ["Development"], 
  //   image: "prototype.webp",
  //   desc: "A simple, intuitive portfolio template to showcase personal works",
  //   priority: false,
  //   link: "https://github.com/Gniminion/portfolio",
  //   tags: ["React", "Tailwind CSS", "Vite", "Git"]
  // },
];

export const PAPERS = [
  { title: "Machine Translation in Human Oriented Workplaces", category: "HCI",
    year: "2023",
    desc: "Machine translation covers the task of preserving the meaning of the input text and producing fluent text in the output language. As machine translation tools become more prevalent in daily life, there are, of course, benefits and drawbacks. This paper attempts to provide a holistic perspective in translation machines and human interaction by interviewing industry professionals.",
    link: "https://drive.google.com/file/d/1LIBhIGGU2dM3YiRdivpGxKs3GqQOslPe/view?usp=drive_link" },
  { title: "Rationality and Emotion in Permadeath Game Design",  category: "Game Theory",
    year: "2025",
    desc: "A non rigourous study of how permadeath transforms game theory into emotional experience using Risk of Rain 2 as a case study. Analysis demonstrates psychological triggers like greed and the sunk-cost fallacy drive irrational play to create engagement.",
    link: "https://drive.google.com/file/d/1EBHBK5NG58tck8u1gWbJglPOeoSglNmo/view?usp=sharing" }, 
  { title: "Comparing Shiny Hunting Methods in Generation 5 Pokemon Games",  category: "Statistics",
    year: "2024",
    desc: "A short statstical exploration applying the Poisson distribution on encounter and hatching rates to find a optimal method in aquiring a shiny Axew in Pokemon Black and White games.",
    link: "https://drive.google.com/file/d/1laTHjA4geHkGhKSTaHqzkBBX6ZgArRoG/view?usp=drive_link" },  
  { title: "Evaluating the Iconic Design Behind the Ramune Bottle", category: "Mathematics", 
    year: "2023",
    desc: "This mathematical investigation aims to understand the structure and related volume of the Codd neck bottle in the hopes of finding why alterations have been made that takes away from its original authenticity, using applications of integration (volumes of revolution), geometric visualisation, and polynomial interpolations with matricies.",
    link: "https://drive.google.com/file/d/13-ZeC8RwwzlLL3vGj4JQjwpHCcQwB93d/view?usp=drive_link" },
  // { title: "Investigating Osmolarity in Relation to Mitosis Rate in Meristem Cells", category: "Biology",
  //   year: "2023",
  //   desc: "A month long project involving collecting both quantitative and qualitative data using laboratory techniques. The results of this paper supports the hypothesis that higher osmolarity limits mitosis and the cell division process in Allium cepa root meristem cells.",
  //   link: "https://drive.google.com/file/d/15A94JMMRH8zltPuQeRgWzNTQX3K2LSte/view?usp=drive_link" },
  
];
