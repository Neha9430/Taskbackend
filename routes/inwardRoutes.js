import express from 'express';
import {
  addInward, 
    getInward,
    updateInward,
    deleteInward
} from '../controller/inwardController.js';

const router = express.Router();    
router.post("/", addInward);          // ➕ add
router.get("/", getInward);           // 📄 list
router.put("/:id", updateInward);     // ✏️ edit
router.delete("/:id", deleteInward);  // ❌ delete

export default router;