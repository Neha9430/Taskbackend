import State from "../models/States.js";

// GET all states
export const getState = async (req, res) => {
  try {
    const allstate = await State.find().sort({ createdAt: -1 });
    res.status(200).json(allstate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD a State
export const addState = async (req, res) => {
  try {
    const newstate = await State.create(req.body);
    res.status(201).json(newstate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE customer
export const updateState = async (req, res) => {
  try {
    const updated = await State.findByIdAndUpdate(
      req.params.id,  
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE customer
export const deleteState = async (req, res) => {
  try {
    await State.findByIdAndDelete(req.params.id);
    res.json({ message: "State deleted successfully" });
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  } 
};