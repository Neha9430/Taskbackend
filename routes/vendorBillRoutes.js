import express from "express";
import {
  addVendorBill,
  getVendorBills,
  updateVendorBill,
  deleteVendorBill,
} from "../controller/vendorBillController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.post("/", verifyToken,addVendorBill);
router.get("/", verifyToken, getVendorBills);
router.put("/:id", verifyToken, updateVendorBill);
router.delete("/:id", verifyToken, deleteVendorBill);

export default router;
