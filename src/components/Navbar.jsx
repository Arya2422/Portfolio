import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="mx-2 w-10 flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center text-2xl gap-4">
        <a href="#home" className="hover:text-blue-600 transition-all">Home</a>
        <a href="#contact" className="hover:text-blue-600 transition-all">Contact</a>
        <a href="#projects" className="hover:text-blue-600 transition-all">Projects</a>
        <a target="_blank" href="https://www.linkedin.com/in/arya-sali-13171227a/">
          <FaLinkedin className="hover:text-blue-600 hover:-translate-y-[1px] transition-all" />
        </a>
        <a target="_blank" href="https://github.com/Arya2422">
          <FaGithub className="hover:text-white hover:-translate-y-[1px] transition-all" />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
