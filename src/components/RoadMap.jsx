import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const timeline = [
  {
    id: 1,
    type: "education",
    title: "HSC - 86%",
    institution: "Sri Shankar College",
    date: "Jul 2018 – May 2020",
    location: "",
  },
  {
    id: 2,
    type: "education",
    title: "BCA - CGPA 8.69",
    institution: "ATSS College Of Business Studies And Computer Applications",
    date: "Oct 2021 – May 2024",
    location: "Pune, Maharashtra",
  },
  {
    id: 3,
    type: "experience",
    title: "Frontend Developer Intern",
    institution: "Prodigal AI",
    date: "Jan 2024 – May 2024",
    location: "Remote",
    description: `Translated Figma designs into responsive UI using React.js.\nReduced dev time by 30%.\nUsed lazy loading & code-splitting to reduce load time by 40%.`,
  },
];

const RoadMap = () => {
  const reversedTimeline = [...timeline].reverse();

  return (
    <section id="roadmap" className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reversedTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              className="bg-gray-900 text-white p-6 rounded-xl shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white text-black p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  {item.type === "education" ? (
                    <FaGraduationCap className="text-xl text-blue-500" />
                  ) : (
                    <FaBriefcase className="text-xl text-yellow-500" />
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.institution}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">
                {item.date}
                {item.location && ` • ${item.location}`}
              </p>
              {item.description && (
                <ul className="mt-2 text-gray-400 text-sm whitespace-pre-line">
                  {item.description.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-16 md:mt-14 text-left md:text-center p-6">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Open Source Contribution: PR - Merged
          </h3>
          <div className="space-y-6">
            <p className="text-white text-lg">
              <span className="font-semibold bg-gray-900 px-4 py-1 rounded-lg mr-5">
                Issue:
              </span>
              Ghost - fix:link-docs-missing <span className="text-gray-400">#22262</span>
              <a
                href="https://github.com/TryGhost/Ghost/pull/22262"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 pl-4 underline hover:text-blue-300"
              >
                Merged
              </a>
            </p>

            <p className="text-white text-lg">
              <span className="font-semibold bg-gray-900 px-4 py-1 rounded-lg mr-5">
                Issue:
              </span>
              food-delivery-multivendor - Fix:Display vendors on the list and also adding new vendor{" "}
              <span className="text-gray-400">#1005</span>
              <a
                href="https://github.com/enatega/food-delivery-multivendor/pull/1005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 pl-4 underline hover:text-blue-300"
              >
                Merged
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
