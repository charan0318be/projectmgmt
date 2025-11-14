import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// ✅ REGISTER USER
// ✅ REGISTER USER (Updated)
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Normalize email to lowercase for accurate comparison
    const normalizedEmail = email.toLowerCase();

    // 1️⃣ Check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // 2️⃣ Assign role based on normalized email
    let role = "employee"; // Default role
    if (normalizedEmail === "superadmin@example.com") {
      role = "superadmin";
    } else if (normalizedEmail === "admin@gmail.com") {
      role = "admin";
    } else if (normalizedEmail === "client@gmail.com") {
      role = "client";
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Save user in DB with role
    const newUser = new User({ name, email: normalizedEmail, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ LOGIN USER
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
