"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    id: 1,
    year: "2024 - 2025",
    title: "MERN Stack Developer",
    place: "Logic Racks",
    description:
      "Worked on multiple MERN stack projects using React, Tailwind CSS, and JavaScript, node/express, MongoDb.",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    year: "2024 - 2025",
    title: "Frontend Developer",
    place: "Logic Racks",
    description:
      "Worked on multiple projects using React, Tailwind CSS, and JavaScript.",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    year: "2014 - 2015",
    title: "Matriculate",
    place: "govt Central Model School Minawali",
    description:
      "Studied core concepts of computer",
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
  },
];

const MyJourney = () => {
  return (
    <section
      className="py-16 bg-gradient-to-r from-red-900 via-black to-red-900 text-white"
      id="journey"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          🌍 My <span className="text-white">Journey</span>
        </h2>

        <div className="relative border-l-4 border-gradient-to-b from-blue-600 via-purple-500 to-pink-500 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon Circle with Glow */}
              <motion.div
                className="absolute -left-12 top-1 flex items-center justify-center w-12 h-12 bg-white border-4 border-blue-500 rounded-full shadow-lg"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.icon}
              </motion.div>

              {/* Card */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-500 border-l-4 border-blue-500"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-sm text-gray-500">{item.year}</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-1">
                  {item.title}
                </h3>
                <p className="text-gradient font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  {item.place}
                </p>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
