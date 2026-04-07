import express from "express";
import { protect, protectAdmin } from "../middleware/auth.js";
import {
  createPayslip,
  getPayslipById,
  getPayslips,
} from "../controllers/payslipController.js";

const router = express.Router();

router.post("/", protect, protectAdmin, createPayslip);
router.get("/", protect, getPayslips);
router.get("/:id", protect, getPayslipById);

export default router;
