import express from "express";
import { addVendor,getVendor,updateVendor,deleteVendorIssue } from "../controller/vendorIssueController.js";


const router = express.Router();

router.post("/", addVendor);
router.get("/",getVendor);
router.put("/:id",updateVendor);
router.delete("/:id",deleteVendorIssue);

export default router;