import mongoose from "mongoose";

export default async function connectionDB() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL as string);
    console.log("Database connection successful");
  } catch (err: any) {
    console.error("Database connection error:", err.message);
    throw new Error(err.message);
  }
}

