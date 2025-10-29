"use client";
import { useEffect, useState } from "react";

export default function ManageProjects() {
  const [items, setItems] = useState([]);

  const load = async () => {
    const data = await fetch("/api/projects").then(r=>r.json());
    setItems(data);
  };
  useEffect(() => { load(); }, []);

  const delItem = async (id) => {
    const ok = confirm("Delete this project?");
    if (!ok) return;
    const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
    if (res.ok) load(); else alert("Delete failed (admin only?)");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Manage Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(p=>(
          <div key={p._id} className="rounded-xl border p-4 shadow">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.description}</p>
            <div className="flex gap-3 mt-3">
              <button onClick={()=>delItem(p._id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
              {/* For brevity, edit flow can be a modal or separate page */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
