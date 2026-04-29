// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import jQueryLogo from './assets/tech_logo/jQuery.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import phpLogo from './assets/tech_logo/phpLogo.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import chatgptLogo from './assets/tech_logo/chatgptIcon.png';

// Experience Section Logo's
import metaViz from './assets/company_logo/metaViz.webp';
import defaultImg from './assets/company_logo/default.png';
import artificizen from './assets/company_logo/Artificizen-Logo.webp';

// Education Section Logo's
import school from './assets/education_logo/school.png';
import cgc from './assets/education_logo/cgc.jpeg';
import llu from './assets/education_logo/llu.jpeg';

// Project Section Logo's
import romaLogo from './assets/work_logo/roma.png';
import qualaImg from './assets/work_logo/quala.png';
import bativieImg from './assets/work_logo/bativie.png';
import bengingiImg from './assets/work_logo/bengingi.png';
import inokronImg from './assets/work_logo/inokron-proj.png'
import sumaImg from './assets/work_logo/suma.png'
import michealImg from './assets/work_logo/micheal-proj.png'
import paulImg from './assets/work_logo/paul-proj.png'


export const SkillsInfo = [
   {
    title: 'Frontend',
    skills: [
        {name: 'Html', logo: htmlLogo},
        {name: 'CSS', logo: cssLogo}, 
        {name: 'JavaScript', logo: javascriptLogo},
        {name: 'React JS', logo: reactjsLogo},   
        {name: 'Next JS', logo: nextjsLogo},
        {name: 'Tailwind CSS', logo: tailwindcssLogo},
        {name: 'Bootstrap', logo: bootstrapLogo},
        {name: 'jQuery', logo: jQueryLogo}
    ]
   },
   {
    title: 'Backend',
    skills: [  
        {name: 'PHP', logo: phpLogo},
        {name: 'MySQL', logo: mysqlLogo}, 
    ]
   },
   {
    title: 'Languages',
    skills: [ 
        {name: 'JavaScript', logo: javascriptLogo},
        {name: 'TypeScript', logo: typescriptLogo}
    ]
   },
   {
    title: 'Tools',
    skills: [ 
        {name: 'GitHub', logo: githubLogo},
        {name: 'VS Code', logo: vscodeLogo},  
        {name: 'Figma', logo: figmaLogo},
        {name: 'Chat Gpt', logo: chatgptLogo}
    ]
   }
]

export const experiences = [
    {
      id: 0,
      img: artificizen,
      role: "Frontend Developer",
      company: "Artificizen",
      location: "Lahore, Pakistan",
      date: "Oct 2025 - Present",
      desc: [
        "Led frontend development using React.js, Next.js and integrated APIs for dynamic data rendering",
        "Implemented advanced React concepts including Hooks, Context API, and React Router for seamless navigation and state management",
        "Built responsive and interactive UI components using Tailwind CSS and Framer Motion",
        "Collaborated with cross-functional teams to deliver high-quality, production-ready web solutions"
      ],
      skills: [
        "React js",
        "Next js",
        "React Hooks",
        "React Router",
        "State Management",
        "Api Integration",
        "Tailwind css",
        "HTML",
        "CSS"
      ]  
    },
    {
      id: 1,
      img: defaultImg,
      role: "Front End Developer",
      company: "Exact Themes",
      location: "Lahore, Pakistan",
      date: "May 2024 - August 2025",
      desc: [
        "Developed 10+ responsive websites using HTML, CSS, Bootstrap, and JavaScript",
        "Converted Figma/XD designs into pixel-perfect, responsive web interfaces",
        "Optimized web performance and PageSpeed scores for various client projects"
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "jQuery"
      ]  
    },
    {
      id: 2,
      img: metaViz,
      role: "Web Developer",
      company: "MetaViz",
      location: "Lahore, Pakistan",
      date: "April 2023 - March 2024",
      desc: [
        "Developed dynamic front-end features and animated components for multiple projects",
        "Fixed 50+ bugs across legacy codebases, improving site stability and performance",
        "Implemented data-driven UI components using PHP and JavaScript"
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Bootstrap",
        "Brilliant Directory"
      ]  
    }
]

export const educations = [
    {
        id: 0,
        img: llu,
        school: "Lahore Leads University",
        degree: "Bachelor of Science in Information Technology",
        date: "Sep 2019 - May 2023",
        grade: "3.19 CGPA",
        desc: "I completed my BSIT from Lahore Leads University, where I studied core IT subjects including programming, databases, networking, and web development. Throughout my degree, I worked on multiple projects that strengthened my technical skills and understanding of modern IT concepts."
    },
    {
        id: 1,
        img: cgc,
        school: "Central group of college",
        degree: "ICS",
        date: "Aug 2017 - Aug 2019",
        desc: "I completed my Intermediate in Computer Science (ICS – Statistics) from Central Group of College. During this program, I studied core subjects such as Computer Science, Mathematics, and Statistics, which developed my analytical and logical reasoning skills. This combination of subjects strengthened my understanding of data analysis, problem-solving, and computing fundamentals. My ICS journey built a strong base for my future studies and interest in technology."
    },
    {
        id: 2,
        img: school,
        school: "Lahore Educator High School",
        degree: "Matric (Science)",
        date: "March 2015 - April 2017",
        desc: "I completed my Matric (Science) from Lahore Educator High School, where I built a strong academic foundation in subjects like Physics, Chemistry, Biology, and Mathematics. During this period, I developed analytical thinking, problem-solving skills, and a keen interest in science and technology. My matriculation years played an important role in shaping my educational journey and overall personal growth"
    }
]

export const projects = [
  {
    id: 0,
    title: "Roma",
    description:
      "Roma — Empowering security at every stage, from Startup to SMB to Enterprise with reliable protection.",
    image: romaLogo,
    category: "WordPress",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "JavaScript", "PHP"],
    github: "https://github.com/m-abdullah-code/roma.git",
    webapp: "https://armadasec.co/",
  },
  {
    id: 1,
    title: "Quala",
    description:
      "Quala — A creative-strategic team blending psychology and gamified learning to design unforgettable experiences.",
    image: qualaImg,
    category: "WordPress",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    github: "https://github.com/m-abdullah-code/quala.git",
    webapp: "https://qualagroup.com/en/",
  },
  {
    id: 2,
    title: "Bativie",
    description:
      "Bativie — Restoring life and hope to neighborhoods through impactful design and community-focused digital presence.",
    image: bativieImg,
    category: "WordPress",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    github: "https://github.com/m-abdullah-code/bativie.git",
    webapp: "https://bativie.com/",
  },
  {
    id: 3,
    title: "Bengingi",
    description:
      "Bengingi — Bringing authentic culinary spirit to life with a warm, inviting, and authentic digital experience.",
    image: bengingiImg,
    category: "WordPress",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress"],
    github: "https://github.com/m-abdullah-code/bengingi.git",
    webapp: "https://www.bengingi.com/",
  },
  {
    id: 4,
    title: "Smart Feed Monitoring",
    description:
      "Inokron is a comprehensive livestock farm management system designed to monitor and manage animal health, feed schedules, and barn climate conditions. It features real-time alerts for heat stress, predictive feed status monitoring, multi-language support (English and Slovenian), and an intuitive dashboard with climate charts and analytics — streamlining farm operations through automation and data-driven insights.",
    image: inokronImg,
    category: "React/Next",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration", "Recharts", "Redux Toolkit", "Responsive Web Design"],
    github: "https://github.com/M-Abdullah-code",
    webapp: "http://72.146.216.68:3000/dashboard",
  },
  {
    id: 5,
    title: "Suma (Automotive Calling Agent)",
    description:
      "Suma is an AI-powered automotive calling agent that enables businesses to manage voice calls, schedule appointments, and automate customer interactions. It integrates Retell API for intelligent voice responses, provides a user-friendly dashboard for call tracking, and streamlines appointment booking with secure authentication.",
    image: sumaImg,
    category: "React/Next",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "API Integration", "Recharts", "Redux Toolkit"],
    github: "https://github.com/M-Abdullah-code",
    webapp: "http://13.62.92.163:3000/",
  },
  {
    id: 6,
    title: "AIRag (AI-Powered Document Intelligence Platform)",
    description:
      "This is an AI RAG (Retrieval Augmented Generation) Application built with React, TypeScript, and Vite. It enables users to upload documents, YouTube URLs, and web content, then interact with them through an AI-powered chat interface. The project includes authentication, role-based access (admin/user), and document management with Tailwind CSS styling.",
    image: michealImg,
    category: "React/Next",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "API Integration", "Recharts", "Redux Toolkit", "Responsive Web Design"],
    github: "https://github.com/M-Abdullah-code",
    webapp: "http://18.190.215.175:3000/",
  },
  {
    id: 7,
    title: "Paul AI Dialer (Smart Outbound Calling Platform)",
    description:
      "Paul AI Dialer is a web-based AI-powered calling platform built with React, TypeScript, and Vite. It enables users to manage campaigns, schedule appointments, configure AI voice agents, and create automated call flows using Retell integration. Designed for sales teams and call centers, it provides automated outbound calling with AI-driven voice interactions, dashboard analytics, and CSV contact import for bulk dialing operations.",
    image: paulImg,
    category: "React/Next",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "API Integration", "Recharts", "Redux Toolkit"],
    github: "https://github.com/M-Abdullah-code",
    webapp: "http://3.135.250.76:5173/",
  }
];
  