import express from "express";

import { addReturnMaterial ,getReturnMaterial,updateReturnMaterial,deleteReturnMaterial } from './../controller/returnMaterialController.js';
import { verifyToken } from "../middlware/auth.js";

console.log("Return Material Routes Loaded");

const router = express.Router();    
router.post("/",verifyToken, addReturnMaterial);          // ➕ add
router.get("/", verifyToken, getReturnMaterial);           // 📄 list
router.put("/:id", verifyToken, updateReturnMaterial);     // ✏️ edit
router.delete("/:id", verifyToken, deleteReturnMaterial);  // ❌ delete  
export default router;