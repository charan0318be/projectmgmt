import React, { useState } from "react";

const Designation = () => {
  const [designations, setDesignations] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    name: "",
    parent: "",
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
        Home &gt; <span className="text-gray-700 font-medium">Designation</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Designation</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Designation
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      {!showForm && (
        <div className="flex justify-between items-center text-sm">
          <input
            type="text"
            placeholder="Start typing to search"
            className="w-1/3 border rounded px-3 py-2 bg-white placeholder-gray-400"
          />
          <button className="text-gray-700 border px-3 py-2 rounded hover:bg-gray-100">
            Filters
          </button>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Add Designation</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInput("name", e.target.value)}
                placeholder="e.g. Team Lead"
                className="border border-gray-300 rounded px-3 py-2 bg-white placeholder-gray-400"
              />
            </div>

            {/* Parent */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Parent</label>
              <select
                value={formData.parent}
                onChange={(e) => handleInput("parent", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">--</option>
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

      {/* Table */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-3 border text-left">Name</th>
                <th className="p-3 border text-left">Parent Designation</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {designations.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center p-4 text-gray-500">
                    No designations found
                  </td>
                </tr>
              ) : (
                designations.map((item) => (
                  <tr key={item.id}>
                    <td className="p-3 border">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 border">{item.name}</td>
                    <td className="p-3 border">{item.parent || "-"}</td>
                    <td className="p-3 border">
                      <button className="text-blue-500 hover:text-blue-700 text-sm">
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {!showForm && (
        <div className="text-sm text-gray-600 flex justify-between items-center mt-4">
          <span>
            Showing 1 to {designations.length} of {designations.length} entries
          </span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
            <span className="px-3 py-1 border rounded bg-gray-200">1</span>
            <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Designation;
