import express from "express";
import {
  addVendorBill,
  getVendorBills,
  updateVendorBill,
  deleteVendorBill,
} from "../controller/vendorBillController.js";

const router = express.Router();

router.post("/", addVendorBill);
router.get("/", getVendorBills);
router.put("/:id", updateVendorBill);
router.delete("/:id", deleteVendorBill);

export default router;
