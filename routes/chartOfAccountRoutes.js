import express from "express";
import {
  getChartOfAccounts,
  addChartOfAccount,
  updateChartOfAccount,
  deleteChartOfAccount,

} from "../controller/chartOfAccountController.js";

const router = express.Router();

router.get("/", getChartOfAccounts);   // GET /api/chart-of-accounts
router.post("/", addChartOfAccount);   // POST /api/chart-of-accounts
router.put("/:id", updateChartOfAccount);
router.delete("/:id", deleteChartOfAccount);

export default router;
