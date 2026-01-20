import express from "express";

import { addMaterialConsumption ,getMaterialConsumption,updateMaterialConsumption,deleteMaterialConsumption } from './../controller/materialController.js';

const router = express.Router();    
router.post("/", addMaterialConsumption);          // ➕ add
router.get("/", getMaterialConsumption);           // 📄 list
router.put("/:id", updateMaterialConsumption);     // ✏️ edit
router.delete("/:id", deleteMaterialConsumption);  // ❌ delete  
export default router;