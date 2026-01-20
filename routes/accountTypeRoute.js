import express from "express";
import {
  getAccountTypes,
  addAccountType,
  updateAccountType,
  deleteAccountType,
} from "../controller/accountTypeController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getAccountTypes);
router.post("/", verifyToken, addAccountType);
router.put("/:id", verifyToken, updateAccountType);
router.delete("/:id", verifyToken, deleteAccountType);

export default router;
