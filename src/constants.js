// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
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


export const SkillsInfo = [
   {
    title: 'Frontend',
    skills: [
        {name: 'Html', logo: htmlLogo},
        {name: 'CSS', logo: cssLogo}, 
        {name: 'JavaScript', logo: javascriptLogo},
        {name: 'React JS', logo: reactjsLogo},   
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
      role: "React Developer",
      company: "Artificizen",
      date: "Oct 2025 - Present",
      desc: "React Developer specializing in building responsive, data-driven web applications with React.js, Tailwind CSS, and REST API integration. Experienced in creating dynamic UI components, authentication flows, dashboards, and AI-powered calling interfaces. Skilled in state management, reusable component design, and writing clean, maintainable code. Focused on performance, smooth user experience, and delivering production-ready frontend solutions.",
      skills: [
        "React js",
        "Api Integration",
        "Tailwind css",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "jQuery"
      ]  
    },
    {
      id: 1,
      img: defaultImg,
      role: "Front End Developer",
      company: "Exact Themes",
      date: "May 2024 - August 2025",
      desc: "Developed 10+ responsive websites using HTML, CSS, Bootstrap, and JavaScript, including eCommerce and portfolio projects. Redesigned outdated UIs, improved performance, and converted Figma/XD designs into pixel-perfect interfaces. Optimized PageSpeed scores and used AI tools like ChatGPT and GitHub Copilot to speed up development and enhance code quality.",
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
      company: "Webverse Digital",
      date: "April 2023 - March 2024",
      desc: "Developed dynamic front-end features animated components, data-driven UI for two long-term projects. Fixed 50+ bugs across legacy codebases, improving site stability and reducing clientreported issues.",
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
      "Roma — Empowering your security at every stage, from Startup to SMB to Enterprise. This project showcases a modern, security-focused digital experience crafted to represent Roma’s mission of delivering reliable protection and confidence across businesses of all sizes.",
    image: romaLogo,
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "JavaScript", "PHP"],
    github: "https://github.com/m-abdullah-code/roma.git",
    webapp: "https://armadasec.co/",
  },
  {
    id: 1,
    title: "Quala",
    description:
      "Quala — We’re the Koalas, a creative-strategic team blending organizational psychology, gamified learning, theater, and Air-Force-grade debriefs to design unforgettable experiences. This project reflects Quala’s mission of sparking insight, building connection, and driving leadership transformation with playful yet powerful impact.",
    image: qualaImg,
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    github: "https://github.com/m-abdullah-code/quala.git",
    webapp: "https://qualagroup.com/en/",
  },
  {
    id: 2,
    title: "Bativie",
    description:
      "Bativie — Restoring Life and Hope to the Neighborhoods. This project represents Bativie’s mission of community revival, focusing on impactful design and meaningful digital presence that supports neighborhood upliftment and renewed hope.",
    image: bativieImg,
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    github: "https://github.com/m-abdullah-code/bativie.git",
    webapp: "https://bativie.com/",
  },
  {
    id: 3,
    title: "Bengingi",
    description:
      "Bengingi — If you want to cook our food. This project reflects the culture, flavor, and identity of Bengingi, designed to bring their culinary spirit to digital life with a warm, inviting, and authentic experience.",
    image: bengingiImg,
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "WordPress"],
    github: "https://github.com/m-abdullah-code/bengingi.git",
    webapp: "https://www.bengingi.com/",
  }
];
  