import mongoose from "mongoose";
import "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected"),
    );
    await mongoose.connect(MONGODB_URI, { family: 4 });
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

export default connectDB;
