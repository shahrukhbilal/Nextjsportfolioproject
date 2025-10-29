import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const TOKEN_NAME = "token";

// Password hash & compare
export async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

export async function comparePassword(password, hash) {
    return bcrypt.compare(password, hash);
}

// Sign JWT
export async function signToken(payload){
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
}

// Get user from cookie
export async function getUserFromCookie() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get(TOKEN_NAME)?.value;
        if (!token) return null;
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}

// Set auth cookie
export async function setAuthCookie(payload) {
  const token = await signToken(payload);
  const cookieStore = await cookies();
  cookieStore.set({
    name: TOKEN_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}

// Clear auth cookie
export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.set(TOKEN_NAME, "", { path: "/", maxAge: 0 });
}

// Admin check (API route me use)
export async function requireAdmin() {
  try {
    const user = await getUserFromCookie();

    if (!user || user.role !== "admin") {
      return {
        ok: false,
        status: 403,
        body: { message: "Admin only" },
      };
    }

    return {
      ok: true,
      status: 200,
      body: user,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      body: { message: "Server error" },
    };
  }
}