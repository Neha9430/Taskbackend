import express from "express";
import { addCompany , getCompany, updateCompany,deleteCompany } from "../controller/companyController.js"; 


const router = express.Router();

router.post("/", addCompany);
router.get("/",getCompany);
router.put("/:id",updateCompany);
router.delete("/:id",deleteCompany);

export default router;