import AccountType from "../models/accountType.js";

//Add Account
export const getAccountTypes = async (req, res) => {
  try {
    const accountTypes = await AccountType.find().sort({ createdAt: -1 });
    res.status(200).json(accountTypes);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

//Add AccountType

export const addAccountType = async (req, res) => {
  try {
    const { accountHolder, accountTypeName } = req.body;

    if (!accountHolder || !accountTypeName) {
      return res.status(400).json({ message: "All fileds are required" });
    }
    const accountType = await AccountType.create({
      accountHolder,
      accountTypeName,
    });
    res.status(201).json(accountType);
  } catch (error) {

    res.status(500).json({ message: error.message });
     console.log(accountType);
  }
};

// UPDATE AccountType
export const updateAccountType = async (req, res) => {
  try { 

    const updated = await AccountType.findByIdAndUpdate(
      req.params.id,
      req.body,   
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

};

// DELETE AccountType
export const deleteAccountType = async (req, res) => {
  try {
    await AccountType.findByIdAndDelete(req.params.id);
    res.json({ message: "Account Type deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};