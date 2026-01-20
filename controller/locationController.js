import Location from "../models/Location.js";

// GET all Location
export const getLocation = async (req, res) => {
  try {
    const allLocation  = await Location.find().sort({ createdAt: -1 });
    res.status(200).json(allLocation );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD a Location 
export const addLocation  = async (req, res) => {
  try {
    const newLocation  = await Location.create(req.body);
    res.status(201).json(newLocation );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE Location 
export const updateLocation  = async (req, res) => {
  try {
    const updated = await Location.findByIdAndUpdate(
      req.params.id,  
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE Location 
export const deleteLocation  = async (req, res) => {
  try {
    await Location.findByIdAndDelete(req.params.id);
    res.json({ message: "Location deleted successfully" });
  }
  catch (err) {
    res.status(400).json({ message: err.message });
  } 
};