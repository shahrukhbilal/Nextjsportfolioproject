"use client"; // agar Next.js app router use kar rahe ho
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center bg-gradient-to-r from-red-900 via-black to-red-900 text-white px-8">
      {/* 🔹 Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -50 }} // start (upar se invisible)
        animate={{ opacity: 1, y: 0 }}   // end (neeche aa jaye visible)
        transition={{ duration: 1 }}
        className="flex w-full items-center gap-5 mb-12"
      >
        <FaLaptopCode className="text-yellow-400 text-5xl" />
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Tech World:{" "}
          <span className="text-red-400">Where Ideas Become Software</span>
        </h1>
      </motion.div>

      {/* 🔹 Main Content (Text + Image side by side) */}
      <div className="flex mx-3.5 flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side Content */}
        <div className="max-w-2xl text-center md:text-left">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }} // left se slide in
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I am <span className="text-red-400">Shahrukh Bilal</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl font-semibold mb-6"
          >
            MERN Stack Developer | Full Stack Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="max-w-xl text-lg mb-8 text-gray-300"
          >
            I build modern web applications with React, Next.js, Node.js, and
            MongoDB. Check out my projects and skills below!
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // neeche se upar slide
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <Link
              href="/projects"
              className="bg-red-400 hover:bg-red-600 px-6 py-3 rounded-lg font-medium transition-transform hover:scale-105"
            >
              View Projects
            </Link>

            <a
              href="/cv.pdf"
              download
              className="border border-white px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white font-medium transition-transform hover:scale-105"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // zoom out se start
          animate={{ opacity: 1, scale: 1 }}   // zoom in + visible
          transition={{ duration: 1.2, delay: 1 }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          <Image
            src="/profile.jpg"
            alt="My Profile Picture"
            fill
            className="rounded-4xl object-cover border-4 border-red-400 shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
