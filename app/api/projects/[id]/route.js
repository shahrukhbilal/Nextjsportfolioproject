import  connectDB  from "@/lib/mongodb";
import Project from "@/model/Project";
import { requireAdmin } from "@/lib/auth";

export async function GET(_req, { params }) {
  await connectDB();
  const item = await Project.findById(params.id);
  if (!item) return Response.json({ message: "Not found" }, { status: 404 });
  return Response.json(item);
}

export async function PUT(req, context) {
  const params = await context.params; // ✅ VERY IMPORTANT

  const gate = await requireAdmin(req);
  if (!gate.ok) {
    return Response.json(gate.body, { status: gate.status });
  }

  await connectDB();

  const data = await req.json();

  

  const updated = await Project.findByIdAndUpdate(
    params.id,
    data,
    { new: true }
  );

  if (!updated) {
    return Response.json(
      { message: "No document found with this id" },
      { status: 404 }
    );
  }

  return Response.json(updated);
}



export async function DELETE(req, context) {
  const params = await context.params;  // ✅ unwrap the promise
  

  const gate = await requireAdmin(req);
  if (!gate.ok) return Response.json(gate.body, { status: gate.status });

  await connectDB();
  await Project.findByIdAndDelete(params.id);
  return Response.json({ ok: true });
}

