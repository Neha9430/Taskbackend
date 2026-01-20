import mongoose from "mongoose";

const currencySchema = new mongoose.Schema(
  {
    currencyName: {
      type: String,
      required: true,
    },
    currencyCode: {
      type: String,
     
    },
    Symbol: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
    },
    remarks: {
        type: String,
    }
  },
  { timestamps: true }
);

const Currency = mongoose.model("Currency", currencySchema);

export default Currency;
