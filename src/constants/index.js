import Project from "../assets/projects/Project.jpg";
import grocery from "../assets/projects/grocery.jpg";
import pass from "../assets/projects/pass.jpg";

export const HERO_CONTENT = `With over 1 year of experience in internships, I have developed strong skills in front-end technologies (React, Next.js,TypeScript) and back-end technologies (Node.js, MySQL, MongoDB), along with expertise in Video Editing and Canva. My goal is to learn DevOps and leverage this expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - Present",
    role: "Frontend Engineer Intern",
    company: "CrackQuant",
    description: [
      `As a Frontend Developer at Crack Quant, I specialize in building engaging simulations for quant questions, driving the development of interactive learning experiences.`,
      `I collaborate on curating and suggesting innovative questions that enrich the question bank, ensuring the content stays relevant and challenging.`,
      `I also play a key role in backend integrations, from connecting APIs to managing Firebase for seamless sign-in and sign-up functionalities.`,
    ],
    technologies: [
      "Next.js 14",
      "SEO",
      "React.js",
      "Javascript",
      "TypeScript",
      "Rest Api",
      "ExpressJs"
    ],
  },
  {
    year: "June 2023 - August 2023",
    role: "Frontend Developer Intern",
    company: "Oasis Infobyte",
    description: [
      `A full-stack web application with capabilities for ordering a good Taste of food.`,
      `  It can use the functionalities such as Selecting the restaurant, ordering food, tracking the order,etc. `,
    ],
    technologies: [
      "Next.js 14",
      "SEO",
      "React.js",
      "Python",
      "Javascript",
      "TypeScript",
    ],
  },
  {
    year: "March 2023 - December 2023",
    role: "Web Developer (Robotics Club) Iris Club",
    company: "IIIT-Dharwad",
    description: [
      `Crafted and evaluated engaging semester projects for a class of 193 students in collaboration with Dr. Varun Kumar, contributing to improved overall course quality.`,
    ],
    technologies: ["Javascript","Nodejs","Reactjs","Project Management"],
  },
];

export const PROJECTS = [
  {
    title: "HashGuard",
    image: Project,
    description: [
      "This project is designed to provide a secure identity management system based on the Aadhaar number, using a Virtual ID (VID) for authentication.",
    ],
    technologies: ["Python", "Next.js", "Tailwind CSS"],
    link: "https://hashguard.vercel.app/",
  },
  {
    title: "Grocery Web App",
    image: grocery,
    description: [
      "Designed and developed a responsive and scalable cloud-based web application for managing tasks, including assigning tasks to other users.",
      " Implemented express-validator for HTML injection defense and XSS attack reduction, and used bcrypt.js for secure password storage.",
    ],
    technologies: [
      "MongoDB Atlas",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    link: "https://github.com/Arya2422/Grocery_App",
  },
  {
    title: "CipherForge",
    image: pass,
    description: [
      "Build a Password Generate Web App in my learning days of Web Development.",
    ],
    technologies: ["Javascript"],
    link: "https://cipherforge.vercel.app/",
  },
];

export const CONTACT = {
  email: "saliarya24@gmail.com",
};
