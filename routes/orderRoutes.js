import express from "express";
import { addOrder,getOrder,updateOrder,deleteOrder } from "../controller/orderController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.post("/", verifyToken, addOrder);        // ➕ add
router.get("/", verifyToken,getOrder);         // 📄 list
router.put("/:id", verifyToken,updateOrder);   // ✏️ edit
router.delete("/:id", verifyToken,deleteOrder);// ❌ delete

export default router;
