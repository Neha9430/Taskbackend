import express from "express";
import { registerUser, loginUser } from "../controller/userController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

export default router;
