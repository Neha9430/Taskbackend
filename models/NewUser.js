import mongoose from "mongoose";

const newUserSchema = new mongoose.Schema(
  {
    newname: { type: String, required: true },
    newemail: {
      type: String,
      required: true,
      newmobile: { type: String, required: true },
      newrole: { type: String, required: true },
      newpassword: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.model("NewUser", newUserSchema);
