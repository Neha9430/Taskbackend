import express from "express";
import Employee from "../models/Employee.js";
import Customer from "../models/Customer.js";
import Store from "../models/Store.js";
import Item from "../models/Item.js";

const router = express.Router();

router.get("/stats",async (req , res) => {
    try{
        
         const totalEmployee = await Employee.countDocuments();
    const totalCustomer = await Customer.countDocuments();
    const totalStores = await Store.countDocuments();
    const totalItems = await Item.countDocuments();

    res.json({
      totalEmployee,
      totalCustomer,
      totalStores,
      totalItems,
    });
    } catch(error){
        res.status(500).json({ message:error.message});
    }
});

export default router;