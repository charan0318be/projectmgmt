import React, { useState } from "react";
import Calendar from "./Calendar";

const Holiday = () => {
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    date: "",
    occasion: "",
    department: "",
    designation: "",
    employmentType: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Save logic here
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Holiday</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Holiday</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Holiday
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Mark Default Holidays
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Add Holiday</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Date */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInput("date", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Date"
              />
            </div>

            {/* Occasion */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Occasion</label>
              <input
                type="text"
                value={formData.occasion}
                onChange={(e) => handleInput("occasion", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
                placeholder="Occasion"
              />
            </div>

            {/* Department */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Department</label>
              <select
                value={formData.department}
                onChange={(e) => handleInput("department", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>

            {/* Designation */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Designation</label>
              <select
                value={formData.designation}
                onChange={(e) => handleInput("designation", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>

            {/* Employment Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Employment Type</label>
              <select
                value={formData.employmentType}
                onChange={(e) => handleInput("employmentType", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Calendar */}
      {!showForm && (
        <div className="bg-white rounded shadow p-4">
          <Calendar />
        </div>
      )}
    </div>
  );
};

export default Holiday;
