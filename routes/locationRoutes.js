import express from "express";
import { addLocation,getLocation,updateLocation,deleteLocation } from "../controller/locationController.js";

const router = express.Router();

router.get("/", getLocation);
router.post("/", addLocation);
router.put("/:id", updateLocation);
router.delete("/:id", deleteLocation);
export default router;