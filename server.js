import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import connectDB from "./Config/db.js";
import employeeRoutes from "./routes/employee.js";
import warehouseRoutes from "./routes/warehouseRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import accountTypeRoute from "./routes/accountTypeRoute.js";
import chartOfAccountRoutes from "./routes/chartOfAccountRoutes.js";
import workCategoryRoutes from "./routes/workcategoryRoute.js";
import storeRoutes from "./routes/storeRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import inwardRoutes from "./routes/inwardRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import returnMaterialRoutes from "./routes/returnMaterialRoutes.js";
import vendorBillRoutes from "./routes/vendorBillRoutes.js";
import vendorIssueRoutes from "./routes/vendorIssueRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import currencyRoutes from "./routes/currencyRoutes.js";
import stateRoutes from "./routes/stateRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import newUserRoutes from "./routes/newUserRoutes.js";
import transitionSummaryRoutes from "./routes/transitionSummaryRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://ornate-choux-07c895.netlify.app", // future production frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/employees", employeeRoutes);
app.use("/api/warehouses", warehouseRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/account-types", accountTypeRoute);
app.use("/api/chart-of-accounts", chartOfAccountRoutes);
app.use("/api/work-categories", workCategoryRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/inward", inwardRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/returnMaterial", returnMaterialRoutes);
app.use("/api/vendor-bills", vendorBillRoutes);
app.use("/api/vendor-issue", vendorIssueRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/currency", currencyRoutes);
app.use("/api/state", stateRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/newuser", newUserRoutes);
app.use("/api/transition-summary", transitionSummaryRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/order", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on this port ${PORT}`);
});
