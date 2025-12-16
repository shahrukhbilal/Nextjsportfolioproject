import Link from "next/link";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function AdminDashboard() {
  const cookieStore =await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <NotAuthorized />;
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return <NotAuthorized />;
  }

  if (decoded.role !== "admin") {
    return <NotAuthorized />;
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <div className="flex gap-4">
        <Link href="/admin/upload" className="px-4 py-2 bg-blue-600 text-white rounded">
          Upload Project
        </Link>
        <Link href="/admin/projects" className="px-4 py-2 bg-gray-900 text-white rounded">
          Manage Projects
        </Link>
      </div>
    </div>
  );
}

function NotAuthorized() {
  return (
    <div className="p-8 text-center">
      <p className="text-red-600 mb-4">Not authorized.</p>
      <Link href="/auth/login" className="text-blue-600 underline">
        Login
      </Link>
    </div>
  );
}
