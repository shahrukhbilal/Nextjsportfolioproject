"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import About from "@/app/about/page";
import Link from "next/link";


const timeline = [
  {
    id: 1,
    year: "2021 - 2022",
    title: "Beginning of My Tech Journey",
    description:
      "Discovered a passion for technology and started learning the fundamentals of web development — HTML, CSS, and JavaScript. Built my first responsive webpage, which ignited my interest in creating digital experiences.",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "Frontend Development",
    description:
      "Focused on mastering frontend technologies such as React.js and Tailwind CSS. Developed interactive UI components and small projects to strengthen practical skills and understanding of modern web applications.",
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    year: "2023 - 2024",
    title: "Backend Development",
    description:
      "Expanded my expertise to backend development using Node.js, Express.js, and MongoDB. Learned to build RESTful APIs, connect them with frontend applications, and manage databases efficiently for real-world projects.",
    icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
  },
  {
    id: 4,
    year: "2024 - 2025",
    title: "Full-Stack Projects",
    place: "Logic Racks Academy",
    description:
      "Completed a professional web development course at Logic Racks Academy, where I further honed my skills in building full-stack applications. Developed projects using React.js + Vite, implementing features like JWT authentication, API integration, and deployment for production-ready applications.",
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
                <p className="text-gradient font-large bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-purple-600 font-extrabold">
                  {item.place}
                </p>
                <p className="mt-2 text-gray-600">{item.description}</p>
                
              </motion.div>
                          
            </motion.div>


            
          ))}
        </div>
         <p className="font-large  text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white font-extrabold">You can visit the <Link href="/about" className="text-red-600 underline">
  About page
</Link> to see my certificate from Logic Racks Academy.</p>
      </div>
    </section>
  );
};

export default MyJourney;
