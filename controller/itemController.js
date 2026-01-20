import Item from "../models/Item.js";

//Get all Items

export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Add items

export const addItem = async(req , res) => {
    try{
       const { itemName , quantity } = req.body;

       if(!itemName || quantity === undefined) {
        return res.status(400).json({ message: "All fields required" });
       }

       const item = await Item.create({ itemName , quantity });
       res.status(201).json(item);
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
};
// UPDATE Item
export const updateItem = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }   
};
// DELETE Item
export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }   
};
