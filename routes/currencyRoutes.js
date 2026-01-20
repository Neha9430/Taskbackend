import express from "express";
import { addCurrency, getCurrency,updateCurrency,deleteCurrency } from "../controller/currencyController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.post("/", verifyToken, addCurrency);
router.get("/", verifyToken, getCurrency);
router.put("/:id", verifyToken,updateCurrency);
router.delete("/:id", verifyToken,deleteCurrency);

export default router;