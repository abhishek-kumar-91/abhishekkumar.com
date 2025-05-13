import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Ai Trip Planner",
      href: "https://github.com/abhishek-kumar-91/AI-Trip-Planner",
      imageSrc: "./aiTrip.png",
      imageAlt: "Front of men's Basic Tee in black.",
      live: "https://ai-trip-planner-one-livid.vercel.app/",
      color: "ReactJS, Clerk-Auth, Redux-toolkit, TailwindCSS, ApexChart, TypeScript",
    },

    {
      id: 2,
      name: "TaskForge",
      href: "https://github.com/abhishek-kumar-91/taskforge",
      imageSrc: "./taskForge.png",
      imageAlt: "Front of men's Basic Tee in black.",
      live: "https://taskforge-beta.vercel.app/",
      color: "NextJS, Clerk-Auth, TailwindCSS, PostgreSQL, Prisma, Supabase, ShadCn, CI/CD, Git Actions",
    },

    {
      id: 3,
      name: "AI-Hire",
      href: "https://github.com/abhishek-kumar-91/AI-Hire",
      imageSrc: "./aiHire.png",
      imageAlt: "Front of men's Basic Tee in black.",
      live: "https://ai-hire.vercel.app/",
      color: "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS, Google Auth, GemniAI",
    },
    {
      id: 4,
      name: "Tweet",
      href: "https://github.com/abhishek-kumar-91/twitterClone",
      imageSrc: "./twitter.png",
      imageAlt: "Front of men's Basic Tee in black.",
      live: "https://twitter-clone-navy-sigma.vercel.app/",
      color: "ReactJS, Nodejs, Redux-toolkit, ExpressJS, MongoDB, TailwindCSS",
    },
    {
      id: 5,
      name: "Mystery Message | Stay Anonymous",
      href: "https://github.com/abhishek-kumar-91/mystery-message",
      imageSrc: "./mystery.png",
      imageAlt: "Front of men's Basic Tee in black.",
      color:
        "NextJs, TypeScript, MongoDB, OpenAI API, TailwindCSS, NextAuth, Resend-Email, ZOD Validation, Shadcn/UI",
    },
   
    {
      id: 6,
      name: "Pet Adopt",
      href: "https://github.com/abhishek-kumar-91/petAdopt",
      imageSrc: "petAdopt.png",
      imageAlt: "Front of men's Basic Tee in black.",
      color: "Reactjs, Nodejs, ExpressJs, MySQL",
    },

    {
      id: 7,
      name: "Weather App",
      href: "https://github.com/abhishek-kumar-91/WeatherApp",
      imageSrc: "weather.png",
      imageAlt: "Front of men's Basic Tee in black.",
      live: "https://weather-app-blond-rho.vercel.app/",
      color: "ReactJs, CSS3, Weather API, Figma",
    },
   
    {
      id: 8,
      name: "Venue Dashboard",
      href: "https://github.com/abhishek-kumar-91/venueAdminLogin",
      imageSrc: "./venue.png",
      imageAlt: "Front of men's Basic Tee in black.",
      color: "ReactJS, Apex Chart, API Integration",
    },

    {
      id: 9,
      name: "Crypto Dashboard",
      href: "https://github.com/abhishek-kumar-91/cryptoLiveDashboard",
      imageSrc: "./crypto.png",
      imageAlt: "Front of men's Basic Tee in black.",
      live: "https://crypto-live-dashboard-topaz.vercel.app/",
      color: "Reactjs, CoinGecko API, CSS3",
    },
    {
      id: 10,
      name: "Bubble Game",
      href: "https://github.com/abhishek-kumar-91/bubbleGame",
      imageSrc: "./bubble.png",
      imageAlt: "Front of men's Basic Tee in black.",
      color: "HTML5, CSS3, JavaScript",
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]"
              variants={item}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center gap-6 opacity-0 hover:opacity-100 transition-opacity">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-white text-3xl hover:text-gray-400 transition" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-white text-3xl hover:text-gray-400 transition" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.color}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
