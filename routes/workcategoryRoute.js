import express from "express";
import { getWorkCategory , addWorkCategory,updateWorkCategory,deleteWorkCategory } from "../controller/workcategoryController.js";


const router = express.Router();

router.get("/",getWorkCategory);
router.post("/", addWorkCategory);
router.put("/:id", updateWorkCategory);
router.delete("/:id", deleteWorkCategory);

export default router;