"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    jwtSecret: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔐 frontend validation
    if (form.role === "admin" && !form.jwtSecret) {
      alert("❌ JWT Secret is required for admin");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('commming data is :', data)

      if (res.ok) {
        alert("✅ Registration Successful!");

        // role based redirect
        if (form.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/login");
        }
      } else {
        alert(`❌ ${data.message || "Registration failed"}`);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-black to-purple-900 px-4">
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
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-yellow-400 mb-6"
        >
          Registration
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name, Email, Password */}
          {["name", "email", "password"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <label className="block text-sm text-gray-200 mb-2 capitalize">
                {field}
              </label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </motion.div>
          ))}

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <label className="block text-sm text-gray-200 mb-2">
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white focus:ring-2 focus:ring-pink-500 outline-none"
            >
              <option value="" className="text-black">Select Role</option>
              <option value="admin" className="text-black">Admin</option>
              <option value="user" className="text-black">User</option>
            </select>
          </motion.div>

          {/* JWT Secret (Only Admin) */}
          {form.role === "admin" && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <label className="block text-sm text-gray-200 mb-2">
                Admin JWT Secret
              </label>
              <input
                type="password"
                name="jwtSecret"
                value={form.jwtSecret}
                onChange={handleChange}
                required
                placeholder="Enter admin secret key"
                className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-red-500 outline-none"
              />
            </motion.div>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-300 mt-5">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-400 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </section>
  );
}
