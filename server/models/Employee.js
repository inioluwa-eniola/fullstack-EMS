import mongoose from "mongoose";
import { DEPARTMENTS } from "../constants/departments.js";

const employeeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    firstName: { type: String, reqired: true },
    lastName: { type: String, reqired: true },
    email: { type: String, reqired: true },
    phone: { type: String, reqired: true },
    position: { type: String, reqired: true },
    basicSalary: { type: Number, reqired: true, default: 0 },
    allowances: { type: Number, reqired: true, default: 0 },
    deductions: { type: Number, reqired: true, default: 0 },
    employmentStatus: {
      type: String,
      reqired: true,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },
    joinDate: { type: Date, reqired: true },
    isDeleted: { type: Boolean, default: false },
    bio: { type: String, default: "" },
    department: { type: String, enum: DEPARTMENTS },
  },
  { timestamps: true },
);

const Employee =
  mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;
