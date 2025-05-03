import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-4 text-center">

        {/* Infinite bounce animation */}
        <motion.h4
  className="text-lg font-semibold"
  animate={{ y: [0, -10, 0] }}
  transition={{
    repeat: Infinity,
    repeatType: "loop",
    duration: 1.5, // Faster bounce cycle
    ease: "easeInOut", // Smooth in & out
  }}
>
  Built & designed with 💻 by Abhishek Kumar
</motion.h4>

        <p className="text-sm text-gray-400">
          Passionate Frontend Developer. Focused on clean design, smooth UX & real-world problem solving.
        </p>

        <div className="flex space-x-6 text-xl mt-2">
          <a href="https://github.com/abhishek-kumar-91" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kumar-91/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-400 transition" />
          </a>
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-gray-400 transition" />
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">“Lets build something impactful together.”</p>
      </div>
    </footer>
  );
}

export default Footer;
