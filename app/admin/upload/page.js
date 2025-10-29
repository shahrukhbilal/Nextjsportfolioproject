"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminUpload() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    features: "",
    techStack: "",
    image: "",
    github: "",
    liveDemo: "",
  });

  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("✅ Project uploaded successfully!");
      router.push("/admin/projects");
    } else {
      alert("❌ Upload failed (are you logged in as admin?)");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gray-950/80 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl p-8 w-full max-w-2xl space-y-6"
      >
        <h1 className="text-3xl font-extrabold text-white text-center">
          Upload New Project 🚀
        </h1>

        <form onSubmit={submit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="text-gray-300 text-sm">Project Title</label>
            <input
              className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project title..."
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-300 text-sm">Description</label>
            <textarea
              className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Short project description..."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>

          {/* Features */}
          <div>
            <label className="text-gray-300 text-sm">Key Features</label>
            <textarea
              className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="List main features (use bullet points or commas)"
              value={form.features}
              onChange={(e) => setForm({ ...form, features: e.target.value })}
            />
          </div>

          {/* Tech Stack */}
          <div>
            <label className="text-gray-300 text-sm">Tech Stack</label>
            <input
              className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="React, Node.js, MongoDB, Tailwind CSS..."
              value={form.techStack}
              onChange={(e) => setForm({ ...form, techStack: e.target.value })}
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="text-gray-300 text-sm">Image URL</label>
            <input
              className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://your-image-link.com"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
          </div>

          {/* GitHub & Live Demo URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="GitHub Repository URL"
              value={form.github}
              onChange={(e) => setForm({ ...form, github: e.target.value })}
            />
            <input
              className="border border-gray-600 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Live Demo URL"
              value={form.liveDemo}
              onChange={(e) => setForm({ ...form, liveDemo: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition-all duration-300"
            type="submit"
          >
            Upload Project
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
