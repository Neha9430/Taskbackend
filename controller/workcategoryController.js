import WorkCategory from "../models/workCategory.js";

//Add workcategory

export const getWorkCategory = async (req, res) => {
  try {
    const workCategory = await WorkCategory.find().sort({ createdAt: -1 });
    res.status(200).json(workCategory);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

//Add WorkCategory

export const addWorkCategory = async (req, res) => {
  try {
    const { workCategoryName } = req.body;

    if (!workCategoryName) {
      return res.status(400).json({ message: "Work category is required" });
    }

    const category = await WorkCategory.create({
      workCategoryName,
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE WorkCategory
export const updateWorkCategory = async (req, res) => {
  try {
    const updated = await WorkCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

// DELETE WorkCategory
export const deleteWorkCategory = async (req, res) => {
  try {
    await WorkCategory.findByIdAndDelete(req.params.id);
    res.json({ message: "Work Category deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};  