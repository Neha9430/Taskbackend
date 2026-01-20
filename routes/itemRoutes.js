import express from "express";

import { getItems ,addItem,updateItem,deleteItem } from "../controller/itemController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/" , verifyToken, getItems);
router.post("/" , verifyToken, addItem);
router.put("/:id",verifyToken, updateItem);
router.delete("/:id", verifyToken,deleteItem);

export default router;