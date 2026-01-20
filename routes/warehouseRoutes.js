import express from "express";
import {
  getWarehouses,
  addWarehouse,
  updateWarehouse,
  deleteWarehouse
} from "../controller/warehouseController.js";
import { verifyToken } from "../middlware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getWarehouses);   // GET /warehouses
router.post("/", verifyToken, addWarehouse);
router.put("/:id", verifyToken, updateWarehouse);
router.delete("/:id", verifyToken,deleteWarehouse);

export default router;
