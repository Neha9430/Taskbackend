import express from "express";
import { addLocation,getLocation,updateLocation,deleteLocation } from "../controller/locationController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/",  verifyToken,getLocation);
router.post("/",verifyToken, addLocation);
router.put("/:id",verifyToken, updateLocation);
router.delete("/:id",verifyToken, deleteLocation);
export default router;