import express from "express";
import { getCustomers, addCustomer, updateCustomer,deleteCustomer } from "../controller/customerController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/", verifyToken,getCustomers);   // GET /api/customers
router.post("/",verifyToken, addCustomer);   // POST /api/customers
router.put("/:id",verifyToken, updateCustomer);
router.delete("/:id",verifyToken, deleteCustomer);

export default router;