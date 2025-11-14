import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Deal = () => {
  const [deals, setDeals] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    dealName: "",
    contact: "",
    dealValue: "",
    closeDate: "",
    note: "",
    agent: "",
    watcher: "",
    stage: "",
  });

  const handleAddDeal = () => {
    setShowForm(true);
    setFormData({
      dealName: "",
      contact: "",
      dealValue: "",
      closeDate: "",
      note: "",
      agent: "",
      watcher: "",
      stage: "",
    });
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSave = () => {
    setDeals([
      ...deals,
      { ...formData, id: Date.now() }
    ]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Deal</h2>
        <div className="flex gap-2">
          <button
            onClick={handleAddDeal}
            className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
          >
            Add Deal
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-400">
            Import
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-400">
            Export
          </button>
        </div>
      </div>

      {/* Search */}
      {!showForm && (
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search deals..."
            className="border p-2 rounded w-72 text-sm shadow-sm"
          />
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h3 className="text-lg font-semibold">Add Deal Info</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              ["Deal Name", "dealName"],
              ["Contact", "contact"],
              ["Deal Value", "dealValue"],
              ["Close Date", "closeDate"],
              ["Note", "note"],
              ["Deal Agent", "agent"],
              ["Deal Watcher", "watcher"],
              ["Stage", "stage"],
            ].map(([label, key]) => (
              <div key={key} className="flex flex-col gap-1">
                <label htmlFor={key} className="text-sm font-medium text-gray-700">
                  {label}
                </label>
                {key === "stage" ? (
                  <select
                    id={key}
                    value={formData[key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.value })
                    }
                    className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select Stage</option>
                    <option value="Generated">Generated</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Proposal">Proposal</option>
                    <option value="Closed Won">Closed Won</option>
                    <option value="Closed Lost">Closed Lost</option>
                  </select>
                ) : (
                  <input
                    id={key}
                    type={key === "closeDate" ? "date" : "text"}
                    value={formData[key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.value })
                    }
                    placeholder={`Enter ${label.toLowerCase()}...`}
                    className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Save
            </button>
            <button
              onClick={handleAddDeal}
              className="bg-white border px-4 py-2 rounded hover:bg-gray-100"
            >
              Save & Add More
            </button>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700"
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
                <th className="text-left p-3 border">Deal Name</th>
                <th className="text-left p-3 border">Contact</th>
                <th className="text-left p-3 border">Deal Value</th>
                <th className="text-left p-3 border">Close Date</th>
                <th className="text-left p-3 border">Note</th>
                <th className="text-left p-3 border">Deal Agent</th>
                <th className="text-left p-3 border">Deal Watcher</th>
                <th className="text-left p-3 border">Stage</th>
                <th className="text-left p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id}>
                  <td className="p-3 border">{deal.dealName}</td>
                  <td className="p-3 border">{deal.contact}</td>
                  <td className="p-3 border">{deal.dealValue}</td>
                  <td className="p-3 border">{deal.closeDate}</td>
                  <td className="p-3 border">{deal.note}</td>
                  <td className="p-3 border">{deal.agent}</td>
                  <td className="p-3 border">{deal.watcher}</td>
                  <td className="p-3 border">{deal.stage}</td>
                  <td className="p-3 border">
                    <div className="flex flex-col gap-2">
                      <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm">
                        <FaEdit /> Edit
                      </button>
                      <button className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm">
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {deals.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center p-4 text-gray-500">
                    No deals found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Deal;
