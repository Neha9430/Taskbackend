import ChartOfAccount from "../models/ChartOfAccount.js";

// 👉 GET all accounts
export const getChartOfAccounts = async (req, res) => {
  try {
    const accounts = await ChartOfAccount.find().sort({ createdAt: -1 });

    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 ADD account
export const addChartOfAccount = async (req, res) => {
  try {
    const { accountName, accountCode, accountType } = req.body;

    if (!accountName || !accountCode || !accountType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const account = await ChartOfAccount.create({
      accountName,
      accountCode,
      accountType,
    });

    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE account
export const updateChartOfAccount = async (req, res) => {
  try {
    const updated = await ChartOfAccount.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// DELETE account
export const deleteChartOfAccount = async (req, res) => {
  try {
    await ChartOfAccount.findByIdAndDelete(req.params.id);
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
