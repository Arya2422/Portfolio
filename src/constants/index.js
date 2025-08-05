import Project from "../assets/projects/Project.jpg";
import grocery from "../assets/projects/grocery.jpg";
import pass from "../assets/projects/pass.jpg";

export const HERO_CONTENT = `With over 1 year of experience in internships, I have developed strong skills in front-end technologies (React, Next.js,TypeScript) and back-end technologies (Node.js, MySQL, MongoDB), along with expertise in Video Editing and Canva. My goal is to learn DevOps and leverage this expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Full-Stack Developer",
    company: "Reliance Industries Limited",
    description: [
      `Built a full-stack MOC (Management of Change) Tracking System improving regulatory compliance by 25%.`,
      `Designed modular, responsive UIs with React.js and Tailwind CSS for workflows like Initiation, Verification, and Approval.`,
      `Developed RESTful APIs using Node.js and integrated Skelta BPM APIs for role-based task routing.`,
      `Implemented dashboards with filters, file uploads, auto-generated audit trails, and role-based access control.`,
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "Skelta BPM"
    ],
  },
  {
    year: "March 2025 - Present",
    role: "Full-Stack Developer Intern",
    company: "ShowTime",
    description: [
      `Developed a mobile pet care app for Southeast Asia using React Native and Node.js, enhancing market reach.`,
      `Implemented onboarding, pet profile management, vaccination tracking, and appointment scheduling.`,
      `Built a gamified betting website with dynamic rewards, profile upgrades, and integrated frontend/backend logic.`,
    ],
    technologies: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Figma"
    ],
  },
  {
    year: "December 2024 - February 2025",
    role: "Full-Stack Developer Intern",
    company: "CrackQuant",
    description: [
      `Built a robust e-commerce clothing platform with features like auth, cart, live tracking, Razorpay payments, and an admin dashboard.`,
      `Created interactive QuantAnalytics simulations covering probability and expected value.`,
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Razorpay",
      "REST APIs"
    ],
  },
  // {
  //   year: "June 2024 - July 2024",
  //   role: "Full-Stack Developer Intern",
  //   company: "Foody.com",
  //   description: [
  //     `Developed a food ordering and delivery app with full-stack features like registration, auth, live order tracking, and payments.`,
  //     `Enabled users to select restaurants, place orders, and monitor delivery status through a responsive UI.`,
  //   ],
  //   technologies: [
  //     "React.js",
  //     "Next.js",
  //     "Node.js",
  //     "MongoDB",
  //     "TypeScript",
  //     "REST APIs"
  //   ],
  // },
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
