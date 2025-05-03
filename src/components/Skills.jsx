import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    'React',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'TypeScript',
  ];

  const backendSkills = [
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'AWS',
    'Git',
  ];

  const additionalSkills = [
    'Problem Solving',
    'Agile Methodologies',
    'Team Collaboration',
    'Communication',
    'UI/UX Design',
  ];
  const backgroundAnimation = {
    initial: {
      background: 'linear-gradient(to bottom right, #111111, #0a0a0a)',
    },
    whileInView: {
      background: 'linear-gradient(to bottom right, #111111 70%)',
    },
    transition: { duration: 0.1, ease: 'easeOut' },
  };

  return (
    <motion.div
      className="py-12 sm:py-20 text-white"
      initial="initial"
      whileInView="whileInView"
      variants={backgroundAnimation}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold leading-8 text-gray-100 mb-6">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-6 items-center justify-start">
          <div className="flex-1 min-w-[250px] space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">Frontend Development</h3>
            <div className="flex flex-wrap gap-4">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="text-gray-300 text-sm">{skill}</div>
              ))}
            </div>
          </div>
          <div className="hidden md:block border-l-2 border-gray-300 h-full"></div>
          <div className="flex-1 min-w-[250px] space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">Backend Development</h3>
            <div className="flex flex-wrap gap-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="text-gray-300 text-sm">{skill}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 border-b-2 border-gray-300"></div>
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-200">Additional Skills</h3>
          <div className="flex flex-wrap gap-4">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="text-gray-300 text-sm">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
