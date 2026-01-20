import express from "express";

import Inventory from "../models/Inventory.js";
import Inward from "../models/Inward.js";
import MaterialConsumption from "../models/materialConsumption.js";
import ReturnMaterial from "../models/returnMaterial.js";
import VendorBill from "../models/vendorBill.js";
import VendorIssue from "../models/vendorIssue.js";


const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = {
      inventory: await Inventory.countDocuments(),
      inward: await Inward.countDocuments(),
      materialConsumption: await MaterialConsumption.countDocuments(),
      returnMaterial: await ReturnMaterial.countDocuments(),
      vendorBill: await VendorBill.countDocuments(),
      vendorIssue: await VendorIssue.countDocuments(),
    };

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;