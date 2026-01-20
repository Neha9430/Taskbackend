import Warehouse from "../models/Warehouse.js";

// 👉 GET all warehouses
export const getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find().sort({ createdAt: -1 });
    res.status(200).json(warehouses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 ADD warehouse
export const addWarehouse = async (req, res) => {
  try {
    const { warehouseName, location } = req.body;

    if (!warehouseName || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const warehouse = await Warehouse.create({
      warehouseName,
      location,
    });

    res.status(201).json(warehouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE warehouse 
export const updateWarehouse = async (req, res) => {
  try {
    const updated = await Warehouse.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE warehouse
export const deleteWarehouse = async (req, res) => {
  try {
    await Warehouse.findByIdAndDelete(req.params.id);
    res.json({ message: "Warehouse deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};