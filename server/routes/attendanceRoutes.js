import express from "express";
import { protect } from "../middleware/auth.js";
import { clockInOut, getAttendance } from "../controllers/attendanceController.js";

const router = express.Router();

router.post("/", protect, clockInOut);
router.get("/", protect, getAttendance);

export default router;
