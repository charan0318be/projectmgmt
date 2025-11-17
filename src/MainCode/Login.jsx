import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.email || !formData.password) {
      return setMessage("Please fill in all fields.");
    }

    try {
      const response = await axios.post("https://projectmgmt-ooj6.onrender.com/api/login", formData);

      console.log("Login successful:", response.data);

      const { token, user } = response.data;
      const role = user.role;

      // ✅ Save token and role
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      setMessage("Login successful!");

      // ✅ Redirect based on role
      if (role === "superadmin") {
        navigate("/superadmin");
      } else if (role === "admin") {
        navigate("/admin");
      } else if (role === "client") {
        navigate("/client");
      } else if (role === "employee") {
        navigate("/employee");
      } else {
        navigate("/dashboard"); // fallback
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Message */}
        {message && <p className="text-center text-sm mt-4 text-gray-700">{message}</p>}

        {/* Register Link */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
