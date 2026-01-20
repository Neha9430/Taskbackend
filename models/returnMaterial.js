import mongoose from "mongoose";

const returnMaterialSchema = new mongoose.Schema(
  {
    returnNo: {
      type: String,
      required: true,
    },
    party: {
       type: String,
      
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
    reason: {
       type: String,
       required: true,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ReturnMaterial", returnMaterialSchema);