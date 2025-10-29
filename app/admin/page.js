import Link from "next/link";
import { getUserFromCookie } from "@/lib/auth";

export default async function AdminDashboard() {
  const user = await getUserFromCookie(); // auth.js ka function, async ho sakta hai
console.log("User from cookie:", user);

  if (!user || user.role !== "admin") {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600 mb-4">Not authorized.</p>
        <Link href="/auth/login" className="text-blue-600 underline">Login</Link>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/admin/upload" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Upload Project
        </Link>
        <Link href="/admin/projects" className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition">
          Manage Projects
        </Link>
      </div>
    </div>
  );
}
