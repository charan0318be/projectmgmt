import React, { useState } from "react";
import { MdAdd, MdFileDownload, MdCloudUpload } from "react-icons/md";

const Assets = () => {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");
  const [assets, setAssets] = useState([]); // 👈 store added assets

  const handleSave = () => {
    // Example: You can later replace this with formData logic
    const newAsset = {
      name: "Laptop", // temporary demo data
      type: "Electronics",
      status,
    };
    setAssets([...assets, newAsset]);
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Assets</h1>
          <p className="text-sm text-gray-500">Home &gt; Assets</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
          Upgrade Plan
        </button>
      </div>

      {/* Filters + Actions */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap items-center gap-4">
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Asset Type</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Employees</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Status</option>
        </select>
        <input
          type="text"
          placeholder="Search assets..."
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm"
        >
          <MdAdd />
          Add Asset
        </button>
        <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
          <MdFileDownload />
          Export
        </button>
      </div>

      {/* Form or Table */}
      {!showForm ? (
        <div className="bg-white rounded shadow p-4 relative">
          <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
            Hosting Suggestions
          </div>

          {/* Table */}
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2">Asset Picture</th>
                <th className="px-3 py-2">Asset Name</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-gray-400 py-6">
                    No assets available yet.
                  </td>
                </tr>
              ) : (
                assets.map((asset, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-3 py-2 text-gray-400 italic">—</td>
                    <td className="px-3 py-2">{asset.name}</td>
                    <td className="px-3 py-2">{asset.status}</td>
                    <td className="px-3 py-2">
                      <button className="text-blue-600 text-sm">View</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded shadow p-6 space-y-6 relative">
          <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
            Hosting Suggestions
          </div>

          <h2 className="text-lg font-semibold text-gray-800">Add Asset Info</h2>

          {/* Asset Name */}
          <input
            type="text"
            placeholder="Asset Name (e.g., Laptop, iPhone, etc.)"
            className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
          />

          {/* Asset Type + Add */}
          <div className="flex items-center gap-2">
            <select className="border rounded px-3 py-2 text-sm text-gray-700 flex-1">
              <option>Asset Type</option>
            </select>
            <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
              Add
            </button>
          </div>

          {/* Asset Picture Upload */}
          <div className="border rounded px-3 py-6 text-center text-sm text-gray-600 flex flex-col items-center gap-2">
            <MdCloudUpload className="text-3xl text-gray-400" />
            <span>Choose a file</span>
            <input type="file" className="hidden" />
          </div>

          {/* Status Radio Buttons */}
          <div className="space-y-2">
            <label className="text-sm text-gray-700 font-medium">Status</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
              {["Available", "Non Functional", "Lost", "Damaged", "Under Maintenance"].map(
                (option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      value={option}
                      checked={status === option}
                      onChange={() => setStatus(option)}
                    />
                    {option}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className="bg-red-600 text-white px-4 py-2 rounded text-sm"
            >
              Save
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assets;
