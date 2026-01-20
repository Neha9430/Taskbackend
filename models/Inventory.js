import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    location: {
      type: String,
    },
    date: {
      type: Date,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);
