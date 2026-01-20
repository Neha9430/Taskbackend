import Store from "../models/Store.js";

// 👉 GET all stores
export const getStores = async (req, res) => {
  try {
    const stores = await Store.find().sort({ createdAt: -1 });
    res.status(200).json(stores); // ARRAY
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 ADD store
export const addStore = async (req, res) => {
  try {
    const { storeName, location } = req.body;

    if (!storeName || !location) {
      return res
        .status(400)
        .json({ message: "Store Name & Location required" });
    }

    const store = await Store.create({ storeName, location });
    res.status(201).json(store); // OBJECT
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE store
export const updateStore = async (req, res) => {
  try {
    const updated = await Store.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};
// DELETE store
export const deleteStore = async (req, res) => {
  try {     
    await Store.findByIdAndDelete(req.params.id);
    res.json({ message: "Store deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }     
};
