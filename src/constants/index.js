import food from "../assets/projects/food.png";
import BookStay from "../assets/projects/BookStay.jpeg";


export const HERO_CONTENT = `With over 1 year of experience in internships, I have developed strong skills in front-end technologies (React, Next.js) and back-end technologies (Node.js, MySQL, MongoDB), along with expertise in AWS Cloud,Video Editing and Canva. My goal is to leverage this expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
   {
    year: "December 2024 - February 2025",
    role: "Frontend Developer Intern",
    company: "CrackQuant",
    description: [
      `A Frontend Developer where I Create the simulations for the Quant Questions. And Help in managing the backend also.`,
    ],
    technologies: [
      "Next.js 14",
      "SEO",
      "React.js",
      "Javascript",
      "TypeScript",
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
    year: "March 2023 - Present",
    role: "Web Developer (Robotics Club) Iris Club",
    company: "IIIT-Dharwad",
    description: [
      `Crafted and evaluated engaging semester projects for a class of 193 students in collaboration with Dr. Varun Kumar, contributing to improved overall course quality.`,
    ],
    technologies: ["Javascript","Nodejs","Reactjs", "Collaboration"],
  },
  
];

export const PROJECTS = [
  {
    title: "Foody.com",
    image: food,
    description: [
      "Developed a real-time food delivery app with a smooth user experience.",
    ],
    technologies: ["TypeSript",,"Nextjs", "React.js", "Tailwind CSS","MongoDB Atlas", "NodeJs","ExpressJs"],
  },
  {
    title: "Book Stay",
image:BookStay,
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
      "Framer-motion",
    ],
    link: "https://book-stay-eta.vercel.app/",
  },
];

export const CONTACT = {
  email: "saliarya24@gmail.com",
};
