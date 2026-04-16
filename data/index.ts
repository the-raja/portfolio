export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My constant Companion ",
    description: "From building my projects to solving complex problems.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/8.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Building with globally adopted technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Continuously Improving My Core Skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Constantly learning, evolving, and pushing the boundaries of what’s possible",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Certifications",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    certifications: [
      { name: "DS & AIML", link: "/Certificate_DS_AIML.pdf" },
      {
        name: "Python, EDA, SQL, Machine Learning, NLP, Deep Learning and Gen AI",
        link: "#",
      },
      {
        name: "AWS- Cloud Architecting",
        link: "https://www.credly.com/badges/3e18b768-bea5-4a12-a568-e5ff8bebc765/linked_in_profile",
      },
      {
        name: "UiPath Academy Automation Explorer Training",
        link: "https://credentials.uipath.com/00a60a1f-69e8-4c82-b760-5dd7e34c620c#acc.s9tzEf8L",
      },
    ],
  },
  {
    id: 6,
    title: "Let’s build something together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 2,
    title: "Real-Time Chess Game",
    des: "A client-side AI that calculates win probability based on a sophisticated heuristic evaluation function built with Node.js, Express, and Socket.io.",
    img: "/chess.png",
    iconLists: [
      "/next.svg",
      "/express.svg",
      "/ts.svg",
      "/stream.svg",
      "/c.svg",
    ],
    link: "https://chess-18sx.onrender.com/",
  },
  {
    id: 4,
    title: "Smart Hostel Mess Feedback System",
    des: "A centralized feedback platform that transforms unstructured hostel complaints into structured, actionable insights, enhancing transparency and data-driven decision-making.",
    img: "/messy.png",
    iconLists: ["/next.svg", "/express.svg", "/ts.svg", "/c.svg", ["/re.svg"]],
    link: "https://messy-matters.vercel.app/",
  },

  {
    id: 1,
    title: "Smart File Management",
    des: "A powerful storage management designed for effortless file organization, retrieval, and collaboration",
    img: "/cloudly.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://cloudly-storage.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.- Winston Churchill. This quote has guided me through tough times and reminded me to keep pushing forward.",
    name: "",
    title: "5. Guiding Principles",
  },
  {
    quote:
      "As I look back on my journey, I'm excited about the future and the opportunities ahead. I invite you to explore my resume and projects to see the work that I'm passionate about. Let's connect and create something amazing together.",
    name: "",
    title: "6. CONCLUSION",
  },
  {
    quote:
      "I'm RAJA, a passionate developer with a knack for creating innovative solutions. My journey in the tech world began with a fascination for problem-solving and has grown into a fulfilling career filled with challenges, continuous learning, and significant achievements",
    name: "",
    title: "1. New Beginnings",
  },
  {
    quote:
      "I first discovered my interest in TECH during high school when I programmed my first basic game. This initial spark led me to pursue a degree in Computer Science",
    name: "",
    title: "2. Discovering Passion",
  },
  {
    quote:
      "My path wasn't always smooth. I faced challenges like debugging complex code and developing unique websites, which taught me resilience and problem-solving. This experience taught me resilience, time management, and the importance of teamwork. Overcoming these hurdles, I learned the value of perseverance and the power of collaboration.",
    name: "",
    title: "3. Overcoming Challenges",
  },
  {
    quote:
      "Throughout my career, I've been fortunate to achieve several milestones. I've made many websites, including cloning the Apple iPhone 14 website and developing a version of ChatGPT. These projects not only showcased my technical skills but also reaffirmed my dedication to leveraging technology for impactful solutions.",
    name: "",
    title: "4. Career Milestones",
  },
];

import {
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaCuttlefish,
  FaMicrosoft,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiTensorflow,
  SiNumpy,
  SiTailwindcss,
  SiMongodb,
  SiJsonwebtokens,
  SiSocketdotio,
} from "react-icons/si";

export const techStack = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "C", icon: FaCuttlefish }, // fix for C
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "Express.js", icon: SiExpress },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "NumPy", icon: SiNumpy },
      { name: "TailwindCSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: SiJsonwebtokens }, // fallback
      { name: "JWT Auth", icon: SiJsonwebtokens },
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: FaMicrosoft },
      { name: "Docker", icon: FaDocker },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],
  },
  {
    title: "Core Competencies",
    items: [
      { name: "DSA" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "System Design" },
      { name: "Scalable Systems" },
    ],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    desc: "• Solved 300+ problems\n• Strong in time & space optimization\n• Applied DSA in real-world projects",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Object-Oriented Programming (OOP)",
    desc: "• Designed modular & reusable systems\n• Strong in abstraction, inheritance, polymorphism\n• Focus on clean architecture",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Problem Solving & Software Engineering",
    desc: "• Break down complex problems efficiently\n• Write clean, scalable code\n• Focus on correctness & performance",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Systems Thinking",
    desc: "• Understand system design & data flow\n• Optimize interactions between components\n• Build reliable & scalable systems",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/the-raja",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/_th3.raja",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/theraja/",
  },
  {
    id: 4,
    img: "/linktree.svg",
    link: "https://linktr.ee/th3_raja",
  },
];
