import express from "express";
import {
    getAccountTypes,addAccountType,updateAccountType,deleteAccountType
} from "../controller/accountTypeController.js";

const router = express.Router();

router.get("/", getAccountTypes);
router.post("/", addAccountType);
router.put("/:id", updateAccountType);
router.delete("/:id", deleteAccountType);

export default router;