import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    deptName: {
      type: String,
      required: true,
    },
    deptCode: {
      type: String,
     
    },
    description: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;
