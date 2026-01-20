import express from "express";
import { getCustomers, addCustomer, updateCustomer,deleteCustomer } from "../controller/customerController.js";

const router = express.Router();

router.get("/", getCustomers);   // GET /api/customers
router.post("/", addCustomer);   // POST /api/customers
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;