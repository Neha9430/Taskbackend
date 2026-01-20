import express from "express";
import {
  addCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} from "../controller/companyController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.post("/", verifyToken, addCompany);
router.get("/", verifyToken, getCompany);
router.put("/:id", verifyToken, updateCompany);
router.delete("/:id", verifyToken, deleteCompany);

export default router;
