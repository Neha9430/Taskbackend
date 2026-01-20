import mongoose from "mongoose";

const workCategorySchema = new mongoose.Schema(
    {
        workCategoryName: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { timestamps: true }
);

const WorkCategory = mongoose.model("WorkCategory", workCategorySchema);

export default WorkCategory;