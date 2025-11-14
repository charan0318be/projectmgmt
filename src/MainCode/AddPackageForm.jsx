import React, { useState } from "react";
import axios from "axios";

const AddPackageForm = () => {
  const [formData, setFormData] = useState({
    packageType: "Free",
    name: "",
    type: "Standard",
    maxEmployees: "",
    maxStorageSize: "",
    storageUnit: "MB",
    positionNo: "",
    makePrivate: false,
    recommended: false,
    currency: "INR",
    monthlyPrice: "",
    annualPrice: "",
    modules: [],
    description: "",
  });

  const modulesList = [
    "Clients", "Employees", "Projects", "Attendance", "Tasks", "Estimates",
    "Invoices", "Payments", "Leads", "Tickets", "Products", "Contracts",
    "Leaves", "Reports", "Zoom", "Payroll", "Purchase", "Assets", "Biometric"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleModuleChange = (moduleName) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.includes(moduleName)
        ? prev.modules.filter((m) => m !== moduleName)
        : [...prev.modules, moduleName],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        formData.packageType === "Paid" &&
        (!formData.monthlyPrice || !formData.annualPrice)
      ) {
        alert("⚠️ Please enter both Monthly and Annual Prices for Paid Plan");
        return;
      }

      const res = await axios.post("http://localhost:5000/api/packages/add", formData);
      alert("✅ Package Added Successfully!");
      console.log(res.data);

      setFormData({
        packageType: "Free",
        name: "",
        type: "Standard",
        maxEmployees: "",
        maxStorageSize: "",
        storageUnit: "MB",
        positionNo: "",
        makePrivate: false,
        recommended: false,
        currency: "INR",
        monthlyPrice: "",
        annualPrice: "",
        modules: [],
        description: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add package");
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Package</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Package Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Package Type <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="packageType"
                value="Free"
                checked={formData.packageType === "Free"}
                onChange={handleChange}
              />
              <span>Free Plan</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="packageType"
                value="Paid"
                checked={formData.packageType === "Paid"}
                onChange={handleChange}
              />
              <span>Paid Plan</span>
            </label>
          </div>
        </div>

        {/* Package Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Package Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Premium Plan"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Package Type Label */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="type"
            placeholder="e.g. Standard"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Max Employees & Storage */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Employees <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="maxEmployees"
              placeholder="e.g. 100"
              value={formData.maxEmployees}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Storage Size <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="maxStorageSize"
              placeholder="e.g. 500"
              value={formData.maxStorageSize}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Paid Plan Section */}
        {formData.packageType === "Paid" && (
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-semibold text-lg">Payment Details</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency <span className="text-red-500">*</span>
              </label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monthly Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="monthlyPrice"
                placeholder="e.g. 100"
                value={formData.monthlyPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Annual Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="annualPrice"
                placeholder="e.g. 1000"
                value={formData.annualPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Modules */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Modules <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {modulesList.map((mod) => (
              <label key={mod} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.modules.includes(mod)}
                  onChange={() => handleModuleChange(mod)}
                />
                <span>{mod}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            placeholder="e.g. This package includes all core modules."
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none"
                      />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPackageForm;
