import Currency from "../models/currency.js";

// ➕ ADD
export const addCurrency = async (req, res) => {
  try {
    const newCurrency = await Currency.create(req.body);
    res.status(201).json(newCurrency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 📄 GET ALL
export const getCurrency = async (req, res) => {
  try {
    const allCurrency = await Currency.find().sort({ createdAt: -1 });
    res.json(allCurrency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE
export const updateCurrency = async (req, res) => {
  try {
    const updated = await Currency.findByIdAndUpdate(
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
export const deleteCurrency = async (req, res) => {
  try {
    await Currency.findByIdAndDelete(req.params.id);
    res.json({ message: "Currency deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};