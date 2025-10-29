"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MySkillsSection = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-r from-red-900 via-black to-red-900 text-white"
      id="skills"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* 🔹 Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }} // upar se fade-in
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          🚀 My <span className="text-white">Skills</span>
        </motion.h2>

        {/* 🔹 Skills List */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill._id}
              initial={{ opacity: 0, x: -100 }} // left se slide
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Skill Name + % */}
              <div className="flex justify-between mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="font-medium text-gray-200"
                >
                  {skill.name}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-sm text-gray-300"
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }} // start: empty
                  animate={{ width: `${skill.level}%` }} // fill till level
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  className="bg-gradient-to-r from-red-400 via-pink-500 to-red-600 h-3 rounded-full shadow-lg"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkillsSection;
