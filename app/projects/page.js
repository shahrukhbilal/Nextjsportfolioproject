"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-8">
      {/* 🔹 Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center md:text-center leading-tight">
  My <span className="text-red-500">Projects</span>
</h1>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Here are some of my featured works built using the{" "}
          <span className="text-red-400 font-semibold">MERN Stack</span>.  
          Each project showcases my expertise in full-stack development,
          clean UI design, and scalable backend structure.
        </p>
      </motion.div>

      {/* 🔹 Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((p, i) => (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 bg-opacity-70 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition-all duration-300"
            >
              {/* 🔸 Project Image */}
              {p.image && (
                <div className="relative w-full h-56">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* 🔸 Project Details */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-red-400">{p.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {p.description}
                </p>

                {/* 🔹 Features */}
                {p.features?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-400 mb-1">
                      ✨ Features:
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {p.features.map((f, index) => (
                        <li key={index}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 🔹 Tech Stack */}
                {p.techStack?.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-sm text-gray-400 mb-1">
                      🧠 Tech Stack:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {p.techStack.map((t, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 🔹 Buttons */}
                <div className="flex items-center justify-between pt-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                    >
                      <FaCodeBranch /> GitHub
                    </a>
                  )}
                  {p.liveDemo && (
                    <a
                      href={p.liveDemo}
                      target="_blank"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 col-span-full"
          >
            No projects found.
          </motion.p>
        )}
      </div>
    </section>
  );
}
