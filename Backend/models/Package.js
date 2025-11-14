import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  packageType: { type: String, enum: ["Paid", "Free"], required: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  maxEmployees: { type: Number, required: true },
  maxStorageSize: { type: Number, required: true },
  storageUnit: { type: String, enum: ["MB", "GB", "TB"], default: "MB" },
  positionNo: { type: Number, required: true },
  makePrivate: { type: Boolean, default: false },
  recommended: { type: Boolean, default: false },
  currency: { type: String, default: "USD" },
  monthlyPlan: { type: Boolean, default: false },
  annualPlan: { type: Boolean, default: false },
  monthlyPrice: { type: Number, default: 0 },
  annualPrice: { type: Number, default: 0 },
  modules: [{ type: String }],
  description: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Package", packageSchema);
