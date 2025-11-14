import React, { useState } from "react";

const Leave = () => {
  const [leaves, setLeaves] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    member: "",
    leaveType: "",
    status: "Pending",
    duration: "",
    date: "",
    reason: "",
    file: null,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleAddLeaveOpen = () => {
    setFormData(initialForm);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFile = (file) => {
    setFormData((prev) => ({ ...prev, file }));
  };

  const handleSave = () => {
    const newLeave = {
      id: Date.now(),
      employee: formData.member,
      leaveDate: formData.date,
      duration: formData.duration,
      status: formData.status,
      type: formData.leaveType,
      paid: "-",
    };
    setLeaves((prev) => [...prev, newLeave]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Leaves</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Leaves</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={handleAddLeaveOpen}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + New Leave
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
            <label className="block text-gray-600 mb-1">Duration</label>
            <select className="w-full border rounded px-2 py-1 bg-white">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Start Date To End Date</label>
            <input
              type="text"
              placeholder="e.g. 01/01/2025 - 12/31/2025"
              className="w-full border rounded px-2 py-1 bg-white placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Search</label>
            <input
              type="text"
              placeholder="Start typing to search"
              className="w-full border rounded px-2 py-1 bg-white placeholder-gray-400"
            />
          </div>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Assign Leave</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Member */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Choose Member *</label>
              <select
                value={formData.member}
                onChange={(e) => handleInput("member", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
                <option value="Prof. Jerdan Block">Prof. Jerdan Block</option>
              </select>
            </div>

            {/* Leave Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Leave Type *</label>
              <select
                value={formData.leaveType}
                onChange={(e) => handleInput("leaveType", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
                <option value="Sick">Sick</option>
                <option value="Casual">Casual</option>
                <option value="Earned">Earned</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleInput("status", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Select Duration</label>
              <div className="flex gap-4">
                {["Full Day", "Multiple", "First Half", "Second Half"].map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="duration"
                      value={opt}
                      checked={formData.duration === opt}
                      onChange={(e) => handleInput("duration", e.target.value)}
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

            {/* Reason */}
            <div className="col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Reason for absence *</label>
              <input
                type="text"
                value={formData.reason}
                onChange={(e) => handleInput("reason", e.target.value)}
                placeholder="e.g. Feeling not well"
                className="border border-gray-300 rounded px-3 py-2 bg-white placeholder-gray-400"
              />
            </div>

            {/* File Upload */}
            <div className="col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Add File ℹ️</label>
              <input
                type="file"
                onChange={(e) => handleFile(e.target.files?.[0] || null)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              />
            </div>
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

      {/* Table */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-3 border text-left">Employee</th>
                <th className="p-3 border text-left">Leave Date</th>
                <th className="p-3 border text-left">Duration</th>
                                <th className="p-3 border text-left">Leave Status</th>
                <th className="p-3 border text-left">Leave Type</th>
                <th className="p-3 border text-left">Paid</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaves.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center p-4 text-gray-500">
                    No leave requests found
                  </td>
                </tr>
              ) : (
                leaves.map((leave) => (
                  <tr key={leave.id}>
                    <td className="p-3 border">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 border">{leave.employee}</td>
                    <td className="p-3 border">{leave.leaveDate}</td>
                    <td className="p-3 border">{leave.duration}</td>
                    <td className="p-3 border">{leave.status}</td>
                    <td className="p-3 border">{leave.type}</td>
                    <td className="p-3 border">{leave.paid}</td>
                    <td className="p-3 border">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700 text-sm">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700 text-sm">
                          Delete
                        </button>
                      </div>
                    </td>
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

export default Leave;
