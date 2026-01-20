import express from "express";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controller/employeeController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/", getEmployees);
router.post("/", verifyToken, addEmployee);
router.put("/:id", verifyToken, updateEmployee);
router.delete("/:id", verifyToken, deleteEmployee);

export default router;
