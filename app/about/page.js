"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-red-900 via-black to-red-900 text-white px-4 sm:px-6 md:px-8 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* 🔹 LEFT SIDE - About + Skills */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <FaAward className="text-red-500 text-3xl sm:text-4xl" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">
              About Me
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6"
          >
            Hi, I’m{" "}
            <span className="text-red-400 font-semibold">Shahrukh Bilal</span>, a
            dedicated <span className="text-red-400">MERN Stack Developer</span>{" "}
            trained at{" "}
            <span className="text-yellow-400">Logic Racks Academy</span>. I build responsive, scalable web applications with clean architecture and smooth user experiences. I’m passionate about turning complex problems into elegant software solutions and constantly learning new technologies to grow as a professional.

I work with React, Next.js, Node.js, Express, and MongoDB to build production-ready applications. I also enjoy creating animations with Framer Motion and optimizing UI with Tailwind CSS.

When I’m not coding, I explore new tools, contribute to open source, and keep building projects that push my skills further.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl font-semibold mb-4 text-red-400"
          >
            My Technical Skills
          </motion.h2>

          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-2 gap-2 sm:gap-3 text-gray-200 text-sm sm:text-base"
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
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <div className="relative group w-56 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-108 lg:h-96">
            <Image
              src="/certificate2.JPG"
              alt="Certificate"
              fill
              className="rounded-3xl object-cover border-4 border-red-500 shadow-[0_0_30px_rgba(255,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
            />

            {/* Glow Animation Layer */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>

          {/* 🔗 PDF Link */}
          <a
            href="/Shahrukh Bilal (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text-yellow-400 hover:text-red-400 transition text-lg font-medium"
          >
            📄 View Full Certificate (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}
