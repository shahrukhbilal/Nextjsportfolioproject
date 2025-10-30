"use client";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-red-900 via-black to-red-900 text-white px-5 sm:px-8 py-10">
      {/* 🔹 Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-3 sm:gap-5 mb-10 text-center sm:text-left"
      >
        <FaLaptopCode className="text-yellow-400 text-4xl sm:text-5xl" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Tech World:{" "}
          <span className="text-red-400">Where Ideas Become Software</span>
        </h1>
      </motion.div>

      {/* 🔹 Main Content (Text + Image side by side) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side Content */}
        <div className="max-w-2xl text-center md:text-left px-2">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Hi, I am <span className="text-red-400">Shahrukh Bilal</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl font-semibold mb-6"
          >
            MERN Stack Developer | Full Stack Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="max-w-xl text-base sm:text-lg mb-8 text-gray-300"
          >
            I build modern web applications with React, Next.js, Node.js, and
            MongoDB. Check out my projects and skills below!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/projects"
              className="bg-red-400 hover:bg-red-600 px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105 text-center"
            >
              View Projects
            </Link>

            <a
              href="/cv.pdf"
              download
              className="border border-white px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white font-medium transition-transform hover:scale-105 text-center"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0"
        >
          <Image
            src="/newProfile.png"
            alt="My Profile Picture"
            fill
            className="rounded-3xl object-cover border-4 border-red-400 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
