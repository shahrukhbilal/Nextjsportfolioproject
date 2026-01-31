"use client";
import { useEffect, useState } from "react";

export default function ManageProjects() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Projects</h1>

      {/* 🔄 Loading */}
      {loading && (
        <p className="text-gray-500 text-center">Loading projects...</p>
      )}

      {/* ❌ Error */}
      {error && (
        <p className="text-red-600 text-center font-medium">{error}</p>
      )}

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
                  className="px-3 py-1 bg-red-600 text-white rounded 
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deletingId === p._id ? "Deleting..." : "Delete"}
                </button>

                {/* Edit flow can be modal / separate page */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
