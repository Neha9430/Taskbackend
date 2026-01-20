import express from "express";
import { addState,getState,updateState,deleteState } from "../controller/stateController.js";

const router = express.Router();

router.get("/", getState);
router.post("/", addState);
router.put("/:id", updateState);
router.delete("/:id", deleteState);
export default router;
