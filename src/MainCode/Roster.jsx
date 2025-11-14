import React, { useState } from "react";

const Roster = () => {
  const [rosterData, setRosterData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    department: "",
    employees: "",
    shiftType: "Day Off",
    assignBy: "Date",
    date: "",
    sendEmail: false,
    remark: "",
    file: null,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFile = (file) => {
    setFormData((prev) => ({ ...prev, file }));
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
        Home &gt; <span className="text-gray-700 font-medium">Shift Roster</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Shift Roster</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Assign Bulk Shifts
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      {!showForm && (
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <label className="block text-gray-600 mb-1">Employee</label>
            <select className="w-full border rounded px-2 py-1 bg-white">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Department</label>
            <select className="w-full border rounded px-2 py-1 bg-white">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">View</label>
            <select className="w-full border rounded px-2 py-1 bg-white">
              <option>Weekly View</option>
            </select>
          </div>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Add Shift Roster</h3>

          <div className="text-green-600 text-sm font-medium">
            The existing shift will be overridden.
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Department */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Department</label>
              <select
                value={formData.department}
                onChange={(e) => handleInput("department", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            {/* Employees */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Employees</label>
              <select
                value={formData.employees}
                onChange={(e) => handleInput("employees", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            {/* Shift Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Employee Shift</label>
              <select
                value={formData.shiftType}
                onChange={(e) => handleInput("shiftType", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="Day Off">Day Off</option>
                <option value="General Shift">General Shift</option>
                <option value="Night Shift">Night Shift</option>
                <option value="Day Shift">Day Shift</option>
              </select>
            </div>

            {/* Assign By */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Assign By</label>
              <div className="flex gap-4">
                {["Date", "Multiple", "Month"].map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="assignBy"
                      value={opt}
                      checked={formData.assignBy === opt}
                      onChange={(e) => handleInput("assignBy", e.target.value)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleInput("date", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              />
            </div>

            {/* Send Email */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={formData.sendEmail}
                onChange={(e) => handleInput("sendEmail", e.target.checked)}
              />
              <label className="text-sm text-gray-700">Send Email</label>
            </div>
          </div>

          {/* Remark */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Remark</label>
            <textarea
              value={formData.remark}
              onChange={(e) => handleInput("remark", e.target.value)}
              placeholder="Enter remark..."
              className="border border-gray-300 rounded px-3 py-2 bg-white placeholder-gray-400"
            />
          </div>

          {/* File Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Add File</label>
            <input
              type="file"
              onChange={(e) => handleFile(e.target.files?.[0] || null)}
              className="border border-gray-300 rounded px-3 py-2 bg-white"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">
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

      {/* Weekly Grid */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">Employee</th>
                <th className="p-3 border text-left">10 MONDAY NOV</th>
                <th className="p-3 border text-left">11 TUESDAY NOV</th>
                <th className="p-3 border text-left">12 WEDNESDAY NOV</th>
                <th className="p-3 border text-left">13 THURSDAY NOV</th>
                <th className="p-3 border text-left">14 FRIDAY NOV</th>
                                <th className="p-3 border text-left">15 SATURDAY NOV</th>
                <th className="p-3 border text-left">16 SUNDAY NOV</th>
              </tr>
            </thead>
            <tbody>
              {rosterData.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center p-4 text-gray-500">
                    No shifts assigned
                  </td>
                </tr>
              ) : (
                rosterData.map((row) => (
                  <tr key={row.id}>
                    <td className="p-3 border">{row.employee}</td>
                    <td className="p-3 border">{row.mon}</td>
                    <td className="p-3 border">{row.tue}</td>
                    <td className="p-3 border">{row.wed}</td>
                    <td className="p-3 border">{row.thu}</td>
                    <td className="p-3 border">{row.fri}</td>
                    <td className="p-3 border">{row.sat}</td>
                    <td className="p-3 border">{row.sun}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Roster;
