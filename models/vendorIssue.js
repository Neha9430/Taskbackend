import mongoose from "mongoose";


const vendorIssueSchema = new mongoose.Schema(
    {
        issueNo: {
            type: String,
            required: true,

        },
        vendor: {
            type:String,
            trim:true,
        }
        ,
        itemName: {
            type:String,
            trim: true,
            required:true,

        },
        quantity: {
            type: Number,
            min: 1,
            required: true,

        },
        issuedTo: {
            type: String,

        },
        date: {
            type: Date,
        },
        remarks: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.model("VendorIssue",vendorIssueSchema);





 