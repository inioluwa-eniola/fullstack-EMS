import express from "express";
import { protect, protectAdmin } from "../middleware/auth.js";
import {
  createLeave,
  getLeaves,
  updateLeaveStatus,
} from "../controllers/leaveController.js";

const router = express.Router();

router.post("/", protect, createLeave);
router.get("/", protect, getLeaves);
router.patch("/:id", protect, protectAdmin, createLeave, updateLeaveStatus);

export default router;
