"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // 🌈 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 🚀 Handle form submission (send to backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message ❌");
      }
    } catch (err) {
      toast.error("Something went wrong ⚠️");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 via-black to-red-900 text-white flex items-center justify-center px-6 py-10">
      <ToastContainer position="top-center" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-white/30"
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-8">
            I’d love to hear from you! Whether you want to discuss a project, ask a question, or just say hi 👋
          </p>

          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 text-gray-800">
              <FaEnvelope className="text-red-600 text-xl" />
              <span>southsec021karachi.com</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 text-gray-800">
              <FaPhoneAlt className="text-red-600 text-xl" />
              <span>+92 3186198386</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 text-gray-800">
              <FaMapMarkerAlt className="text-red-600 text-xl" />
              <span>Karachi, Pakistan</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/"
              target="_blank"
              className="text-red-600 text-4xl transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://linkedin.com/"
              target="_blank"
              className="text-red-600 text-4xl transition"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-semibold text-red-800 mb-4">Send a Message</h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-black"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-black"
              placeholder="Your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white text-black"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-black font-medium py-3 rounded-lg shadow-md hover:opacity-90 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
