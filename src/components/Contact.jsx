import React from "react";
import { CONTACT } from "../constants";
import resume from "../assets/Arya Resume.pdf";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Contact Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        If Any Queries, Reach out to me at given mail
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="my-4 inline-block p-4 bg-gray-700 text-white rounded-md border border-neutral-800"
        >
          {CONTACT.email}
        </a>
      </motion.div>

      {/* Resume Download Button */}
      <div className="flex justify-center mt-10">
        <a href={resume} download>
          <button className="flex items-center px-4 py-2 bg-gray-800 border-2 border-gray-700 rounded-md text-white hover:bg-gray-700 transition-all">
            <svg
              className="w-6 h-6 mr-2"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
            </svg>
            <span>Resume</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
