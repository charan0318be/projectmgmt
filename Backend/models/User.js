import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["superadmin", "admin", "client", "employee"], // restrict allowed roles
    default: "employee" // default role if not specified
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
