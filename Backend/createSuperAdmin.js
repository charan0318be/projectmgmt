import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

const User = mongoose.model("User", userSchema);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    const hashedPassword = await bcrypt.hash("12345", 10);

    const superAdmin = new User({
      name: "superadmin",
      email: "superadmin@gmail.com",
      password: hashedPassword
    });

    await superAdmin.save();
    console.log("Superadmin created!");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
