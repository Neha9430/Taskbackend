import express from "express";
import { addDepartment,getDepartment,updateDepartment,deleteDepartment } from "../controller/departmentController.js";

const router = express.Router();

router.get("/", getDepartment);
router.post("/", addDepartment);
router.put("/:id", updateDepartment);
router.delete("/:id", deleteDepartment);
export default router;
