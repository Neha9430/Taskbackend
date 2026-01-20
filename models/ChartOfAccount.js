import mongoose from "mongoose";

const chartOfAccountSchema = new mongoose.Schema(
  {
    accountName: {
      type: String,
      required: true,
    },
    accountCode: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ChartOfAccount", chartOfAccountSchema);
