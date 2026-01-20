import express from "express";
import {
  addProject,
  getProjects,
  updateProject,
  deleteProject,
} from "../controller/projectController.js";

const router = express.Router();

router.post("/", addProject);       // ➕ add
router.get("/", getProjects);       // 📄 list
router.put("/:id", updateProject);  // ✏️ edit
router.delete("/:id", deleteProject); // ❌ delete

export default router;
