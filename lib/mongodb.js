import mongoose from "mongoose";

let isConnected = false; // Track connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("🟢 MongoDB already connected, skipping reconnect...");
    return;
  }

  console.log("🔄 Attempting to connect to MongoDB...");

  try {
    // Check if the environment variable is actually loaded
    if (!process.env.MONGO_URI) {
      throw new Error("❌ MONGO_URI is not defined in your environment variables!");
    }

    // Try to connect
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 8000, // ⏳ Timeout to detect slow or blocked connections
    });

    isConnected = true;
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("\n🚨 MONGODB CONNECTION FAILED 🚨");
    console.error("Error Message:", error.message);

    // 🔍 Detect specific common causes
    if (error.message.includes("ECONNREFUSED")) {
      console.error("🧱 Reason: Connection refused — check your cluster is running and accessible.");
    } else if (error.message.includes("ETIMEOUT")) {
      console.error("⏰ Reason: Connection timed out — check Network Access (IP whitelist).");
    } else if (error.message.includes("authentication")) {
      console.error("🔑 Reason: Invalid username or password in connection string.");
    } else if (error.message.includes("ENOTFOUND")) {
      console.error("🌐 Reason: DNS issue — cluster hostname not reachable.");
    } else {
      console.error("⚙️ Full Stack Trace:\n", error.stack);
    }

    console.error("\n💡 Tips:");
    console.error("1️⃣ Make sure your MongoDB Atlas cluster is active (not paused).");
    console.error("2️⃣ Check your Network Access IP whitelist (should be 0.0.0.0/0 for open access).");
    console.error("3️⃣ Verify username & password in connection string.");
    console.error("4️⃣ Restart the server after .env changes.\n");
  }
};

export default connectDB;
