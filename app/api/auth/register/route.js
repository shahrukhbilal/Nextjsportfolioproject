import connectDB from "@/lib/mongodb";
import User from "@/model/User";
import bcrypt from 'bcrypt'

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    // check user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "admin", // default role admin (ya phir "user" bhi ho sakta hai)
    });

    return Response.json({ message: "User registered", user }, { status: 201 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
