import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiPython, SiJavascript, SiTypescript, SiMysql } from "react-icons/si";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiReactquery } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 7 },
  animate: {
    y: [7, -7],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.2)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaAws className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.0)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FcLinux className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiReactquery className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPython className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.4)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.6)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.8)}
          animate="animate"
          initial="initial"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
