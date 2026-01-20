import express from "express";
import {
  getChartOfAccounts,
  addChartOfAccount,
  updateChartOfAccount,
  deleteChartOfAccount,
} from "../controller/chartOfAccountController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getChartOfAccounts); // GET /api/chart-of-accounts
router.post("/", verifyToken, addChartOfAccount); // POST /api/chart-of-accounts
router.put("/:id", verifyToken, updateChartOfAccount);
router.delete("/:id", verifyToken, deleteChartOfAccount);

export default router;
