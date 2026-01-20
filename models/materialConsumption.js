import mongoose from "mongoose";

const materialConsumptionSchema = new mongoose.Schema(
  {
    consumptionNo: {
      type: String,
      required: true,
    },
    department: {
       type: String,
       required: true,
    },
    itemName: {
      type: String, 
        required: true,
    },
    quantity: {
      type: Number,
        required: true,
        min: 1,
    },
    consumedBy: {
      type: String,
      required: true,
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

export default mongoose.model("MaterialConsumption", materialConsumptionSchema);