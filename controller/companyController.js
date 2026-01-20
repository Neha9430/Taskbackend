import Company from "../models/Company.js";

// ➕ ADD
export const addCompany = async (req, res) => {
  try {
    const newcompany = await Company.create(req.body);
    res.status(201).json(newcompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 📄 GET ALL
export const getCompany = async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ UPDATE
export const updateCompany = async (req, res) => {
  try {
    const updated = await Company.findByIdAndUpdate(
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
export const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
