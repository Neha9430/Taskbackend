import VendorBill from "../models/vendorBill.js";

// ➕ ADD
export const addVendorBill = async (req, res) => {
  try {
    const bill = await VendorBill.create(req.body);
    res.status(201).json(bill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 📄 GET ALL
export const getVendorBills = async (req, res) => {
  try {
    const bills = await VendorBill.find().sort({ createdAt: -1 });
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE
export const updateVendorBill = async (req, res) => {
  try {
    const updated = await VendorBill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ❌ DELETE
export const deleteVendorBill = async (req, res) => {
  try {
    await VendorBill.findByIdAndDelete(req.params.id);
    res.json({ message: "Vendor bill deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
