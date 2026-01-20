import express from "express";
import { addNewUser,getNewUser,updateNewUser,deleteNewUser } from "../controller/newUserController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getNewUser);
router.post("/", verifyToken, addNewUser);
router.put("/:id",verifyToken, updateNewUser);
router.delete("/:id", verifyToken, deleteNewUser);
export default router;