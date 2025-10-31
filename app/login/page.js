"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Login Successful!");
        router.push("/admin");
      } else {
        alert(data.message || "❌ Login failed");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-black to-purple-900 px-4 sm:px-6 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-yellow-400 mb-6"
        >
          Admin Login
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {["email", "password"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <label className="block text-sm text-gray-200 mb-2 capitalize">
                {field}
              </label>
              <input
                type={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                required
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:ring-pink-400 transition-all duration-300"
              />
            </motion.div>
          ))}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-sm text-gray-300 mt-5"
        >
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-yellow-400 hover:text-red-400 hover:underline transition-colors duration-300"
          >
            Register
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
