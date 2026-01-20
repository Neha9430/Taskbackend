import mongoose from "mongoose";

const stateSchema = new mongoose.Schema(
  {
    stateName: {
      type: String,
      required: true,
    },
    stateCode: {
      type: String,
     
    },
    country: {
        type: String,
        required: true,
    },
    gst: {
        type: String,
    },
    remarks: {
        type: String,
    }
  },
  { timestamps: true }
);

const State = mongoose.model("State", stateSchema);

export default State;
