import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Skill from "@/model/Skill";

// GET all skills
export async function GET() {
  try {
    console.log("Attempting to connect with MongoDB...");
    await connectDB();

    const skills = await Skill.find();
    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching skills", error: error.message },
      { status: 500 }
    );
  }
}

// POST new skill
export async function POST(request) {
  try {
    await connectDB();

    // Get body from request
    const { name, level } = await request.json();

    // Create new skill
    const newSkill = await Skill.create({ name, level });

    return NextResponse.json(newSkill, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error adding skill", error: error.message },
      { status: 500 }
    );
  }
}
