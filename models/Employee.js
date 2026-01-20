import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  gender: { type: String, required: true },
  about: { type: String },
}, { timestamps: true });

export default mongoose.model("Employee", employeeSchema);
