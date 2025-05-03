import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Twitter Clone',
      href: 'https://github.com/abhishek-kumar-91/twitterClone',
      imageSrc: './twitter.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, Nodejs, Redux-toolkit, ExpressJS, MongoDB, TailwindCSS',
    },
    {
      id: 2,
      name: 'Mystery Message | Stay Anonymous',
      href: 'https://github.com/abhishek-kumar-91/mystery-message',
      imageSrc: './mystery.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'NextJs, TypeScript, MongoDB, OpenAI API, TailwindCSS, NextAuth, Resend-Email, ZOD Validation, Shadcn/UI',
    },
    {
      id: 3,
      name: 'Music Art',
      href: 'https://github.com/abhishek-kumar-91/MusicService-NextApp',
      imageSrc: './music.png',
      imageAlt: "Front of men's Basic Tee in black.",
      live: 'https://music-service-smoky.vercel.app/',
      color: 'NextJS, Shadcn/UI, TailwindCSS',
    },
    {
      id: 4,
      name: 'Pet Adopt',
      href: 'https://github.com/abhishek-kumar-91/petAdopt',
      imageSrc: 'petAdopt.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Reactjs, Nodejs, ExpressJs, MySQL',
    },

    {
      id: 5,
      name: 'Weather App',
      href: 'https://github.com/abhishek-kumar-91/WeatherApp',
      imageSrc: 'weather.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJs, CSS3, Weather API, Figma',
    },
    {
      id: 6,
      name: 'Crud Operation',
      href: 'https://github.com/abhishek-kumar-91/crud_operation',
      imageSrc: 'crud.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, NodeJS, ExpressJS, MongoDB, NodeMailer',
    },
    {
      id: 7,
      name: 'Venue Dashboard',
      href: 'https://github.com/abhishek-kumar-91/venueAdminLogin',
      imageSrc: './venue.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, Apex Chart, API Integration',
    },

    {
      id: 8,
      name: 'Crypto Dashboard',
      href: 'https://github.com/abhishek-kumar-91/cryptoLiveDashboard',
      imageSrc: './crypto.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'Reactjs, CoinGecko API, CSS3',
    },
    {
      id: 9,
      name: 'Bubble Game',
      href: 'https://github.com/abhishek-kumar-91/bubbleGame',
      imageSrc: './bubble.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'HTML5, CSS3, JavaScript',
    },
    {
      id: 10,
      name: 'Jobs Board UI',
      href: 'https://github.com/abhishek-kumar-91/JobsBoard',
      imageSrc: './jobs.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, TailwindCSS',
    },
    {
      id: 11,
      name: 'Trello Clone',
      href: 'https://github.com/abhishek-kumar-91/trelloClone',
      imageSrc: './dashboard.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, Typescript, TailwindCSS, ChatGPT Api',
    },

    {
      id: 12,
      name: 'Netflix Clone',
      href: 'https://github.com/abhishek-kumar-91/Netflix-Clone',
      imageSrc: './2.png',
      imageAlt: "Front of men's Basic Tee in black.",
      color: 'ReactJS, CSS3, Movie API',
    },
   
   
   


    // More products...
  ]

  return (
    <section id="projects" className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-white text-4xl sm:text-5xl font-bold text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center gap-6 opacity-0 hover:opacity-100 transition-opacity">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-3xl hover:text-gray-400 transition" />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="text-white text-3xl hover:text-gray-400 transition" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed min-h-[4px]">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
