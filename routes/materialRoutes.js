import express from "express";

import { addMaterialConsumption ,getMaterialConsumption,updateMaterialConsumption,deleteMaterialConsumption } from './../controller/materialController.js';
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();    
router.post("/", verifyToken,addMaterialConsumption);          // ➕ add
router.get("/",verifyToken, getMaterialConsumption);           // 📄 list
router.put("/:id",verifyToken, updateMaterialConsumption);     // ✏️ edit
router.delete("/:id",verifyToken, deleteMaterialConsumption);  // ❌ delete  
export default router;