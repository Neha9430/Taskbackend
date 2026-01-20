import express from "express";

import { addReturnMaterial ,getReturnMaterial,updateReturnMaterial,deleteReturnMaterial } from './../controller/returnMaterialController.js';


console.log("Return Material Routes Loaded");

const router = express.Router();    
router.post("/", addReturnMaterial);          // ➕ add
router.get("/", getReturnMaterial);           // 📄 list
router.put("/:id", updateReturnMaterial);     // ✏️ edit
router.delete("/:id", deleteReturnMaterial);  // ❌ delete  
export default router;