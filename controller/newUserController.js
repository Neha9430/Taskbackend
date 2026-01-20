import NewUser from "../models/NewUser.js";

// GET all NewUser
export const getNewUser = async (req, res) => {
  try {
    const allNewUser  = await NewUser.find().sort({ createdAt: -1 });
    res.status(200).json(allNewUser );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD a NewUser 
export const addNewUser  = async (req, res) => {
  try {
    const newNewUser  = await NewUser.create(req.body);
    res.status(201).json(newNewUser );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE NewUser 
export const updateNewUser  = async (req, res) => {
  try {
    const updated = await NewUser.findByIdAndUpdate(
      req.params.id,  
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE NewUser 
export const deleteNewUser  = async (req, res) => {
  try {
    await NewUser.findByIdAndDelete(req.params.id);
    res.json({ message: "NewUser deleted successfully" });
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  } 
};