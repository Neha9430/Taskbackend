import express from "express";
import {
  addInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controller/inventoryController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.post("/", verifyToken, addInventory);        // ➕ add
router.get("/",verifyToken, getInventory);         // 📄 list
router.put("/:id", verifyToken,updateInventory);   // ✏️ edit
router.delete("/:id",verifyToken, deleteInventory);// ❌ delete

export default router;
