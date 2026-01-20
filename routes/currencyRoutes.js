import express from "express";
import { addCurrency, getCurrency,updateCurrency,deleteCurrency } from "../controller/currencyController.js";


const router = express.Router();

router.post("/", addCurrency);
router.get("/",getCurrency);
router.put("/:id",updateCurrency);
router.delete("/:id",deleteCurrency);

export default router;