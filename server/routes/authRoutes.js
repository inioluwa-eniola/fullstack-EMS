import express from "express";
import { login, session } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";
import {changePassword} from "../controllers/authController.js"

const router = express.Router();

router.post("/login", login);
router.get("/session", protect, session);
router.post("/change-password", protect, changePassword);

export default router;
