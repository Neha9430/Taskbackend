import mongoose from "mongoose";

const inwardSchema = new mongoose.Schema(
  {
    challanNo: {
      type: String,
      required: true,
    },
    supplier: {
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
    date: {
      type: Date,
    },
    vehicleNo: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inward", inwardSchema);