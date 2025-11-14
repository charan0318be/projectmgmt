import React, { useState } from "react";

const Appreciation = () => {
  const [appreciations, setAppreciations] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    award: "",
    givenTo: "",
    date: "",
    summary: "",
    photo: null,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFile = (file) => {
    setFormData((prev) => ({ ...prev, photo: file }));
  };

  const handleSave = () => {
    // Add new appreciation entry to list
    const newEntry = { ...formData, id: Date.now() };
    setAppreciations((prev) => [...prev, newEntry]);

    // Reset form and close
    setFormData(initialForm);
    setShowForm(false);
  };

  const handleCancel = () => {
    setFormData(initialForm);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Appreciation</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Appreciation</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Appreciation
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
          <input
            type="text"
            placeholder="Duration Start Date To End Date"
            className="border rounded px-3 py-2 bg-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Start typing to search"
            className="border rounded px-3 py-2 bg-white placeholder-gray-400"
          />
          <button className="text-gray-700 border px-3 py-2 rounded hover:bg-gray-100">
            Filters
          </button>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Add Appreciation</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Award */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Award</label>
              <select
                value={formData.award}
                onChange={(e) => handleInput("award", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              >
                <option value="">Select Award</option>
                <option value="Star Performer">Star Performer</option>
                <option value="Employee of the Month">Employee of the Month</option>
              </select>
            </div>

            {/* Given To */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Given To</label>
              <input
                type="text"
                value={formData.givenTo}
                onChange={(e) => handleInput("givenTo", e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 bg-white"
              />
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
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Summary</label>
            <textarea
              value={formData.summary}
              onChange={(e) => handleInput("summary", e.target.value)}
              placeholder="Write summary..."
              className="border border-gray-300 rounded px-3 py-2 bg-white h-24 placeholder-gray-400"
            />
          </div>

          {/* Photo Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Photo</label>
            <input
              type="file"
              onChange={(e) => handleFile(e.target.files?.[0] || null)}
              className="border border-gray-300 rounded px-3 py-2 bg-white"
            />
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
                <th className="p-3 border text-left">Given To</th>
                <th className="p-3 border text-left">Award Name</th>
                <th className="p-3 border text-left">Given On</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {appreciations.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-gray-500">
                    No appreciation records found.
                  </td>
                </tr>
              ) : (
                appreciations.map((item) => (
                  <tr key={item.id}>
                    <td className="p-3 border text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 border text-center">{item.givenTo}</td>
                    <td className="p-3 border text-center">{item.award}</td>
                    <td className="p-3 border text-center">{item.date}</td>
                    <td className="p-3 border text-center">
                      <button className="text-gray-700 border px-2 py-1 rounded text-sm hover:bg-gray-100">
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
    </div>
  );
};

export default Appreciation;
