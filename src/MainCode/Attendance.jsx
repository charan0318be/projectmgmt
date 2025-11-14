import React, { useState } from "react";

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    department: "",
    employee: "",
    markBy: "Month",
    year: "",
    month: "",
    clockIn: "",
    clockOut: "",
    locationIn: "",
    locationOut: "",
    workingFromIn: "",
    workingFromOut: "",
    late: "No",
    halfDay: "No",
    overwrite: false,
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
        Home &gt; <span className="text-gray-700 font-medium">Attendance</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Attendance</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Mark Attendance
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Import
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      {!showForm && (
        <>
          <div className="grid grid-cols-5 gap-4 text-sm">
            {["Employee", "Department", "Designation", "Month", "Year"].map((label) => (
              <div key={label}>
                <label className="block text-gray-600 mb-1">{label}</label>
                <select className="w-full border rounded px-2 py-1 bg-white">
                  <option>All</option>
                </select>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 space-y-1">
            <div className="flex gap-6">
              <span>★ Holiday</span>
              <span>📅 Day Off</span>
              <span>✔ Present</span>
              <span>⛅ Half Day</span>
              <span>⏰ Late</span>
              <span>❌ Absent</span>
              <span>🛌 On Leave</span>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-3 border text-left">Employee</th>
                  {[...Array(30)].map((_, i) => (
                    <th key={i} className="p-3 border text-center">{i + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attendanceData.length === 0 ? (
                  <tr>
                    <td colSpan={31} className="text-center p-4 text-gray-500">
                      No attendance records found
                    </td>
                  </tr>
                ) : (
                  attendanceData.map((row) => (
                    <tr key={row.id}>
                      <td className="p-3 border">{row.employee}</td>
                      {[...Array(30)].map((_, i) => (
                        <td key={i} className="p-3 border text-center">-</td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Attendance Details</h3>

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
              <label className="text-sm font-medium text-gray-700">Employees *</label>
              <select
                value={formData.employee}
                onChange={(e) => handleInput("employee", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            {/* Mark Attendance By */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-sm font-medium text-gray-700">Mark Attendance By</label>
              <div className="flex gap-4">
                {["Month", "Date"].map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="markBy"
                      value={opt}
                      checked={formData.markBy === opt}
                      onChange={(e) => handleInput("markBy", e.target.value)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Year */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Year *</label>
              <select
                value={formData.year}
                onChange={(e) => handleInput("year", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            {/* Month */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Month *</label>
              <select
                value={formData.month}
                onChange={(e) => handleInput("month", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            {/* Clock In */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Clock In *</label>
              <input
                type="time"
                value={formData.clockIn}
                onChange={(e) => handleInput("clockIn", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              />
            </div>

            {/* Clock Out */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Clock Out</label>
              <input
                type="time"
                value={formData.clockOut}
                onChange={(e) => handleInput("clockOut", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              />
            </div>

            {/* Location In */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <select
                value={formData.locationIn}
                onChange={(e) => handleInput("locationIn", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            {/* Working From In */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Working From</label>
              <select
                value={formData.workingFromIn}
                                onChange={(e) => handleInput("workingFromIn", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            {/* Late */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Late</label>
              <div className="flex gap-4">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="late"
                      value={opt}
                      checked={formData.late === opt}
                      onChange={(e) => handleInput("late", e.target.value)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Half Day */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Half Day</label>
              <div className="flex gap-4">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="halfDay"
                      value={opt}
                      checked={formData.halfDay === opt}
                      onChange={(e) => handleInput("halfDay", e.target.value)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Attendance Overwrite */}
            <div className="flex items-center gap-2 col-span-2 mt-2">
              <input
                type="checkbox"
                checked={formData.overwrite}
                onChange={(e) => handleInput("overwrite", e.target.checked)}
              />
              <label className="text-sm text-gray-700">Attendance Overwrite ℹ</label>
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
    </div>
  );
};

export default Attendance;
