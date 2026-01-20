import express from "express";
import { addNewUser,getNewUser,updateNewUser,deleteNewUser } from "../controller/newUserController.js";

const router = express.Router();

router.get("/", getNewUser);
router.post("/", addNewUser);
router.put("/:id", updateNewUser);
router.delete("/:id", deleteNewUser);
export default router;