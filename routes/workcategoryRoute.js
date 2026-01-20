import express from "express";
import { getWorkCategory , addWorkCategory,updateWorkCategory,deleteWorkCategory } from "../controller/workcategoryController.js";
import { verifyToken } from "../middlware/auth.js";


const router = express.Router();

router.get("/", verifyToken,getWorkCategory);
router.post("/", verifyToken, addWorkCategory);
router.put("/:id", verifyToken, updateWorkCategory);
router.delete("/:id", verifyToken, deleteWorkCategory);

export default router;