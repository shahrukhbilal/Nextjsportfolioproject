"use client";
import React from "react";
import { motion } from "framer-motion";

const MySkillsSection = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Vite", level: 80 },
        { name: "Postman", level: 75 },
        { name: "JWT Authentication", level: 80 },
        { name: "Deployment (Vercel)", level: 85 },
      ],
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-r from-red-900 via-black to-red-900 text-white"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          🚀 My <span className="text-white">Skills</span>
        </motion.h2>

        {/* Categories side by side */}
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          {skillsData.map((categoryItem, catIndex) => (
            <motion.div
              key={catIndex}
              className="flex-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                {categoryItem.category}
              </h3>

              {/* Skills List */}
              <div className="space-y-6">
                {categoryItem.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + catIndex * 0.2 }}
                  >
                    {/* Skill Name + % */}
                    <div className="flex justify-between mb-2">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 + catIndex * 0.2 }}
                        className="font-medium text-gray-200"
                      >
                        {skill.name}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 + catIndex * 0.2 }}
                        className="text-sm text-gray-300"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 + catIndex * 0.2 }}
                        className="bg-gradient-to-r from-red-400 via-pink-500 to-red-600 h-3 rounded-full shadow-lg"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkillsSection;
