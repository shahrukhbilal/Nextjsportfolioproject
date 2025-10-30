"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-900 via-black to-red-900 text-white flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/30"
      >
        {/* ---------- LEFT SECTION ---------- */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent text-center md:text-left leading-tight">
            Contact Me
          </h2>
          <p className="text-gray-700 mb-6 text-center md:text-left text-sm sm:text-base">
            Have a question, idea, or project in mind? Feel free to reach out
            using the form. I’d love to hear from you!
          </p>
          <ul className="space-y-3 text-gray-800 text-center md:text-left text-sm sm:text-base">
            <li>
              <strong>Email:</strong> southsec021karachi@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +92 3186198386
            </li>
            <li>
              <strong>Location:</strong> Karachi, Pakistan
            </li>
          </ul>
        </div>

        {/* ---------- RIGHT SECTION (FORM) ---------- */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-red-800 mb-4 text-center md:text-left leading-tight">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-800 text-sm sm:text-base"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-800 text-sm sm:text-base"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none text-gray-800 text-sm sm:text-base resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition duration-300 disabled:opacity-70 text-sm sm:text-base"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </motion.div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
