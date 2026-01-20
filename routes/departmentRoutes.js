import express from "express";
import { addDepartment,getDepartment,updateDepartment,deleteDepartment } from "../controller/departmentController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/", verifyToken,getDepartment);
router.post("/",verifyToken, addDepartment);
router.put("/:id", verifyToken,updateDepartment);
router.delete("/:id", verifyToken,deleteDepartment);
export default router;
