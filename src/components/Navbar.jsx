import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className=" mx-2 w-10 flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" /> */}
        <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">

  <path 
    d="M150 400L250 100L350 400H310L285 325H215L190 400H150ZM250 175L215 290H285L250 175Z"
    fill="#666666"
  />
  
 
  <path 
    d="M340 100L440 400L540 100H500L440 325L380 100H340Z"
    fill="#666666"
  />
  
  x
  <path 
    d="M620 125C620 110 605 100 580 100C555 100 540 110 540 125C540 150 565 160 590 170C630 185 670 205 670 250C670 300 630 325 580 325C530 325 490 300 490 250V225H530V250C530 275 545 285 580 285C615 285 630 275 630 250C630 225 605 215 580 205C540 190 500 170 500 125C500 75 540 60 580 60C630 60 670 75 670 125V150H620V125Z"
    fill="#666666"
  />
</svg>
      </div>
      <div className="m-8 flex items-center justify-center text-2xl gap-4">
        <a target="_blank" href="https://www.linkedin.com/in/arya-sali-13171227a/">
          <FaLinkedin className="hover:text-blue-600 hover:-translate-y-[1px] transition-all " />
        </a>
        <a target="_blank" href="https://github.com/Arya2422">
          <FaGithub className="hover:text-white hover:-translate-y-[1px] transition-all " />
        </a>
       
        {/* <a target="_blank" href="https://www.codechef.com/users/aniii1802">
          <SiCodechef className="hover:text-white hover:-translate-y-[1px] transition-all " />
        </a> */}
        {/* <a target="_blank" href="https://codeforces.com/profile/Aniii_1802">
          <SiCodeforces className="hover:text-red-500 bg-clip-text hover:-translate-y-[1px] transition-all " />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
