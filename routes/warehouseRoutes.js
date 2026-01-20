import express from "express";
import {
  getWarehouses,
  addWarehouse,
  updateWarehouse,
  deleteWarehouse
} from "../controller/warehouseController.js";

const router = express.Router();

router.get("/", getWarehouses);   // GET /warehouses
router.post("/", addWarehouse);
router.put("/:id", updateWarehouse);
router.delete("/:id", deleteWarehouse);

export default router;
