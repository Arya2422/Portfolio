import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aryasali.png";
import { motion } from "framer-motion";

// Animation for individual letters
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Stagger effect for letters
const containerAnimation = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const splitTextIntoLetters = (text) => {
  return text.split("").map((char, index) => (
    <motion.span key={index} variants={letterAnimation}>
      {char}
    </motion.span>
  ));
};

const Hero = () => {
  const name = "Arya Vinayak Sali";

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start bg-gray-800 p-6 rounded-lg shadow-lg">
            <motion.h1
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 text-white"
            >
              {splitTextIntoLetters(name)}
            </motion.h1>
            <motion.span
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
            </motion.span>
            <motion.p
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl font-light tracking-tighter bg-white text-gray-900 p-4 rounded-lg shadow-md"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-xl bg-gradient-to-b from-black"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src={profilePic}
              alt="Arya Vinayak Sali"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
