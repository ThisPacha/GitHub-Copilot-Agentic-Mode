import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/octofit_db";

export default async function connectDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB", MONGODB_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}
