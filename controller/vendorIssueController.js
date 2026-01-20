import VendorIssue from "../models/vendorIssue.js";

//Add vendor
export const addVendor = async (req, res) => {
  try {
    const bills = await VendorIssue.create(req.body);
    res.status(201).json(bills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Get All vendor

export const getVendor = async (req, res) => {
  try {
    const allvendor = await VendorIssue.find().sort({ createdAt: -1 });
    res.json(allvendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Update Vendor

export const updateVendor = async (req, res) => {
  try {
    const updatedVendor = await VendorIssue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedVendor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete

export const deleteVendorIssue = async (req, res) => {
  try {
    await VendorIssue.findByIdAndDelete(req.params.id);
    res.json({ message: "Vendor Issue deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
