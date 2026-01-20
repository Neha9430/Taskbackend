import express from "express";
import { addState,getState,updateState,deleteState } from "../controller/stateController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/",verifyToken, getState);
router.post("/", verifyToken, addState);
router.put("/:id", verifyToken, updateState);
router.delete("/:id", verifyToken, deleteState);
export default router;
