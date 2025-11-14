import express from "express";
import Package from "../models/Package.js";

const router = express.Router();

// Create new package
router.post("/add", async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json({ message: "Package created successfully", package: newPackage });
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: "Failed to create package" });
  }
});

// Get all packages
router.get("/", async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch packages" });
  }
});

export default router;
