import express from 'express';
import {
  addInward, 
    getInward,
    updateInward,
    deleteInward
} from '../controller/inwardController.js';
import { verifyToken } from '../middlware/auth.js';

const router = express.Router();    
router.post("/",verifyToken, addInward);          // ➕ add
router.get("/", verifyToken,getInward);           // 📄 list
router.put("/:id", verifyToken,updateInward);     // ✏️ edit
router.delete("/:id",verifyToken, deleteInward);  // ❌ delete

export default router;