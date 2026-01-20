import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },

    companyCode: {
      type: Number,
      required: true,
    },
    gstNo: {
      type: Number,
    },
    contactPerson: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    email: {
      type: String,
    },

    address: {
      type: String,
    },
    remarks: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Company", companySchema);
