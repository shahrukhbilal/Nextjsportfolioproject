"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center  bg-gradient-to-r from-red-900 via-black to-red-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🔹 LEFT SIDE - About + Skills */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // slide in from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <FaAward className="text-red-500 text-4xl" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
              About Me
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 leading-relaxed text-lg mb-6"
          >
            I'm <span className="text-red-400 font-semibold">Shahrukh Bilal</span>, 
            a dedicated <span className="text-red-400">MERN Stack Developer</span> trained at 
            <span className="text-yellow-400"> Logic Racks Academy</span>. I love building 
            modern web applications that are clean, fast, and scalable — using 
            React, Node.js, and MongoDB.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl font-semibold mb-4 text-red-400"
          >
            My Technical Skills
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-2 gap-3 text-gray-200"
          >
            <li className="hover:text-red-400 transition">React.js</li>
            <li className="hover:text-red-400 transition">Node.js</li>
            <li className="hover:text-red-400 transition">MongoDB</li>
            <li className="hover:text-red-400 transition">Express.js</li>
            <li className="hover:text-red-400 transition">Tailwind CSS</li>
            <li className="hover:text-red-400 transition">JavaScript (ES6+)</li>
            <li className="hover:text-red-400 transition">Next.js</li>
          </motion.ul>
        </motion.div>

        {/* 🔹 RIGHT SIDE - Certificate Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // slide from right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative group w-72 h-72 md:w-96 md:h-96">
            <Image
              src="/certificate image.jpg"
              alt="Certificate"
              fill
              className="rounded-3xl object-cover border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
            />

            {/* Glow Animation Layer */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
