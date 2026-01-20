import ReturnMaterial from "../models/returnMaterial.js";

export const addReturnMaterial = async (req, res) => {
  try {
    const material = await ReturnMaterial.create(req.body);
    res.status(201).json(material);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getReturnMaterial = async (req, res) => {
  try {
    const materials = await ReturnMaterial.find().sort({ createdAt: -1 });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReturnMaterial = async (req, res) => {
  try {
    const updated = await ReturnMaterial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReturnMaterial = async (req, res) => {
  try {
    await ReturnMaterial.findByIdAndDelete(req.params.id);
    res.json({ message: "Retun Material deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
