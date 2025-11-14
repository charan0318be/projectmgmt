import React, { useState } from "react";

const Timesheet = () => {
  const [entries, setEntries] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    project: "",
    task: "",
    employee: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    memo: "",
    totalHours: "0 hrs",
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
        Home &gt; <span className="text-gray-700 font-medium">Timesheet</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Timesheet</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Log Time
            </button>
          )}
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      {!showForm && (
        <div className="grid grid-cols-4 gap-4 text-sm">
          <input
            type="text"
            placeholder="Start Date To End Date"
            className="border rounded px-3 py-2 bg-white placeholder-gray-400"
          />
          <select className="border rounded px-3 py-2 bg-white">
            <option>Employee</option>
          </select>
          <select className="border rounded px-3 py-2 bg-white">
            <option>Department</option>
          </select>
          <input
            type="text"
            placeholder="Start typing to search"
            className="border rounded px-3 py-2 bg-white placeholder-gray-400"
          />
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">TimeLog Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label>Project</label>
              <select
                value={formData.project}
                onChange={(e) => handleInput("project", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Task</label>
              <select
                value={formData.task}
                onChange={(e) => handleInput("task", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Employee</label>
              <select
                value={formData.employee}
                onChange={(e) => handleInput("employee", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label>Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInput("startDate", e.target.value)}
                  className="border px-3 py-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>Start Time</label>
                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) => handleInput("startTime", e.target.value)}
                  className="border px-3 py-2 rounded"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label>End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInput("endDate", e.target.value)}
                  className="border px-3 py-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label>End Time</label>
                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) => handleInput("endTime", e.target.value)}
                  className="border px-3 py-2 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label>Memo</label>
              <input
                type="text"
                value={formData.memo}
                onChange={(e) => handleInput("memo", e.target.value)}
                placeholder="e.g. Working on new logo"
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Total Hours</label>
              <div className="border px-3 py-2 rounded bg-gray-50 text-gray-600">
                {formData.totalHours}
              </div>
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

      {/* Table */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-3 border text-left">Code</th>
                <th className="p-3 border text-left">Task</th>
                <th className="p-3 border text-left">Employee</th>
                <th className="p-3 border text-left">Start Time</th>
                <th className="p-3 border text-left">End Time</th>
                <th className="p-3 border text-left">Total Hours</th>
                <th className="p-3 border text-left">Earnings</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
  {entries.length === 0 ? (
    <tr>
      <td colSpan="9" className="p-4 text-center text-gray-500">
        No time logs found.
      </td>
    </tr>
  ) : (
    entries.map((entry, i) => (
      <tr key={i}>
        <td className="p-3 border text-center">
          <input type="checkbox" />
        </td>
        <td className="p-3 border text-center">{entry.code || "-"}</td>
        <td className="p-3 border text-center">{entry.task || "-"}</td>
        <td className="p-3 border text-center">{entry.employee || "-"}</td>
        <td className="p-3 border text-center">{entry.startTime || "-"}</td>
        <td className="p-3 border text-center">{entry.endTime || "-"}</td>
        <td className="p-3 border text-center">{entry.totalHours || "-"}</td>
        <td className="p-3 border text-center">{entry.earnings || "-"}</td>
        <td className="p-3 border text-center">
          <button className="text-gray-700 border px-2 py-1 rounded text-sm hover:bg-gray-100">
            Delete
          </button>
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

export default Timesheet;
