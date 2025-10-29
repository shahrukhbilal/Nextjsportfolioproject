import  connectDB  from "@/lib/mongodb";
import Project from "@/model/Project";
import { requireAdmin } from "@/lib/auth";

export async function GET() {
  await connectDB();
  const items = await Project.find().sort({ createdAt: -1 });
  return Response.json(items);
}

export async function POST(req) {
  const gate = await requireAdmin();
  if (!gate.ok) {
    return Response.json(gate.body, { status: gate.status });
  }

  await connectDB();
  const body = await req.json();
  const project = await Project.create(body);

  return Response.json(project, { status: 201 });
}