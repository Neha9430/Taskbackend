import Inward from "../models/Inward.js";

export const addInward = async (req, res) => {
  try {
    const inward = await Inward.create(req.body);
    res.status(201).json(inward);
    } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 export const getInward = async (req, res) => {
  try {
    const inward = await Inward.find().sort({ createdAt: -1 });
    res.json(inward);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 export const updateInward = async (req, res) => {
  try {
    const updated = await Inward.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
 export const deleteInward = async (req, res) => {
  try {
    await Inward.findByIdAndDelete(req.params.id);
    res.json({ message: "Inward deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }    
};