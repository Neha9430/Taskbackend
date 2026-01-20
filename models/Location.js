import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    locationName: {
      type: String,
      required: true,
    },
    locationCode: {
      type: String,
     
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
       
    },
    address: {
        type: String,
    }
  },
  { timestamps: true }
);

const Location = mongoose.model("Location", locationSchema);

export default Location;
