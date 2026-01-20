import express from "express";
import { addVendor,getVendor,updateVendor,deleteVendorIssue } from "../controller/vendorIssueController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.post("/", verifyToken, addVendor);
router.get("/", verifyToken, getVendor);
router.put("/:id", verifyToken,updateVendor);
router.delete("/:id", verifyToken,deleteVendorIssue);

export default router;