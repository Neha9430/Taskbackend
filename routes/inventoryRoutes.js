import express from "express";
import {
  addInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controller/inventoryController.js";

const router = express.Router();

router.post("/", addInventory);        // ➕ add
router.get("/", getInventory);         // 📄 list
router.put("/:id", updateInventory);   // ✏️ edit
router.delete("/:id", deleteInventory);// ❌ delete

export default router;
