import Department from "../models/Department.js";

// GET all Department
export const getDepartment = async (req, res) => {
  try {
    const allDepartment  = await Department.find().sort({ createdAt: -1 });
    res.status(200).json(allDepartment );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD a Department 
export const addDepartment  = async (req, res) => {
  try {
    const newDepartment  = await Department.create(req.body);
    res.status(201).json(newDepartment );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE Department 
export const updateDepartment  = async (req, res) => {
  try {
    const updated = await Department.findByIdAndUpdate(
      req.params.id,  
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE Department 
export const deleteDepartment  = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.json({ message: "Department deleted successfully" });
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  } 
};