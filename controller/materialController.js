import materialConsumption from "../models/materialConsumption.js";

export const addMaterialConsumption = async (req, res) => {
  try {
    const consumption = await materialConsumption.create(req.body);
    res.status(201).json(consumption);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMaterialConsumption = async (req, res) => {
  try {
    const consumption = await materialConsumption
      .find()
      .sort({ createdAt: -1 });
    res.json(consumption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateMaterialConsumption = async (req, res) => {
  try {
    const updated = await materialConsumption.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteMaterialConsumption = async (req, res) => {
  try {
    await materialConsumption.findByIdAndDelete(req.params.id);
    res.json({ message: "Material Consumption deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
