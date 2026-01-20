import express from "express";
import { addOrder,getOrder,updateOrder,deleteOrder } from "../controller/orderController.js";

const router = express.Router();

router.post("/", addOrder);        // ➕ add
router.get("/", getOrder);         // 📄 list
router.put("/:id", updateOrder);   // ✏️ edit
router.delete("/:id", deleteOrder);// ❌ delete

export default router;
