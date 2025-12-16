import connectDB from "@/lib/mongodb";
import User from "@/model/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password, role, jwtSecret } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    if (role === "admin" && !jwtSecret) {
      return Response.json(
        { message: "JWT Secret is required for admin" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let hashedJwtSecret = null;
    if (role === "admin") {
      hashedJwtSecret = await bcrypt.hash(jwtSecret, 10);
    }

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
      jwtSecret: hashedJwtSecret,
    });

    // 🔐 JWT TOKEN GENERATE
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 🍪 COOKIE SET
    const response = Response.json(
      {
        message: "User registered & logged in",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 }
    );

    response.headers.set(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Strict`
    );

    return response;

  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
