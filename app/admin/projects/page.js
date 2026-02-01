"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ManageProjects() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  // Modal & Edit state
  const [showModal, setShowModal] = useState(false);
  const [editProject, setEditProject] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    features: "",
    techStack: "",
    image: "",
    github: "",
    liveDemo: "",
  });

  // 🔹 Load projects
  const load = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/projects", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to load projects");
      }

      const data = await res.json();
      setItems(Array.isArray(data) ? data : data.projects || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // 🔹 Delete project
  const delItem = async (id) => {
    if (!confirm("Delete this project?")) return;

    try {
      setDeletingId(id);

      const res = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Delete failed (admin only?)");
      }

      await load();
    } catch (err) {
      alert(err.message || "Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  // 🔹 Open edit modal
  const editItem = (project) => {
    setEditProject(project);
    setForm(project); // pre-fill fields
    setShowModal(true);
  };

  // 🔹 Submit (create or update)
  const submit = async (e) => {
    e.preventDefault();
    try {
      const url = editProject
        ? `/api/projects/${editProject._id}`
        : "/api/projects";
      const method = editProject ? "PUT" : "POST";
  


      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Operation failed");

      setShowModal(false);
      setEditProject(null);
      setForm({
        title: "",
        description: "",
        features: "",
        techStack: "",
        image: "",
        github: "",
        liveDemo: "",
      });
      await load();
      alert(editProject ? "✅ Project updated!" : "✅ Project uploaded!");
    } catch (err) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Projects</h1>

      {/* 🔄 Loading */}
      {loading && (
        <p className="text-gray-500 text-center">Loading projects...</p>
      )}

      {/* ❌ Error */}
      {error && <p className="text-red-600 text-center font-medium">{error}</p>}

      {/* 📭 Empty */}
      {!loading && !error && items.length === 0 && (
        <p className="text-gray-500 text-center">No projects found</p>
      )}

      {/* 📦 Projects */}
      {!loading && !error && items.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((p) => (
            <div
              key={p._id}
              className="rounded-xl border p-4 shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-600 mt-1">{p.description}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => delItem(p._id)}
                  disabled={deletingId === p._id}
                  className="px-3 py-1 bg-red-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deletingId === p._id ? "Deleting..." : "Delete"}
                </button>

                <button
                  onClick={() => editItem(p)}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✏️ Edit / Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-950/90 backdrop-blur-md border border-gray-700 shadow-2xl rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 space-y-4"
    >
            <h2 className="text-2xl font-bold text-white text-center">
              {editProject ? "Edit Project 🚀" : "Upload Project 🚀"}
            </h2>

            <form onSubmit={submit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="text-gray-300 text-sm">Project Title</label>
                <input
                  className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter project title..."
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                  }
                  required
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
                  required
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
                  onChange={(e) =>
                    setForm({ ...form, features: e.target.value })
                  }
                />
              </div>

              {/* Tech Stack */}
              <div>
                <label className="text-gray-300 text-sm">Tech Stack</label>
                <input
                  className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="React, Node.js, MongoDB, Tailwind CSS..."
                  value={form.techStack}
                  onChange={(e) =>
                    setForm({ ...form, techStack: e.target.value })
                  }
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="text-gray-300 text-sm">Image URL</label>
                <input
                  className="border border-gray-600 bg-gray-800 text-white p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://your-image-link.com"
                  value={form.image}
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.value })
                  }
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
                  onChange={(e) =>
                    setForm({ ...form, liveDemo: e.target.value })
                  }
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditProject(null);
                    setForm({
                      title: "",
                      description: "",
                      features: "",
                      techStack: "",
                      image: "",
                      github: "",
                      liveDemo: "",
                    });
                  }}
                  className="px-4 py-2 border rounded text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  {editProject ? "Update Project" : "Upload Project"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
