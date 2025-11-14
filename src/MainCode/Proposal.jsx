import React, { useState } from "react";

const Proposal = () => {
  const [proposals, setProposals] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    leadContact: "",
    deal: "",
    validTill: "",
    currency: "USD ($)",
    taxCalculation: "After Discount",
    description: "",
    requireSignature: true,
    product: "",
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
        Home &gt; <span className="text-gray-700 font-medium">Proposal</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Proposal</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Create Proposal
            </button>
          )}
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Proposal Template
          </button>
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-teal-100 text-gray-800 px-4 py-3 rounded text-sm flex items-center gap-2">
        <span className="text-blue-600 font-bold">ℹ</span>
        Proposals are for Leads. If you want to create for existing clients, then create Estimate.
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Proposal Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label>Lead Contacts *</label>
              <select
                value={formData.leadContact}
                onChange={(e) => handleInput("leadContact", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Deal *</label>
              <select
                value={formData.deal}
                onChange={(e) => handleInput("deal", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Valid Till *</label>
              <input
                type="date"
                value={formData.validTill}
                onChange={(e) => handleInput("validTill", e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Currency</label>
              <select
                value={formData.currency}
                onChange={(e) => handleInput("currency", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="USD ($)">USD ($)</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Calculate Tax</label>
              <select
                value={formData.taxCalculation}
                onChange={(e) => handleInput("taxCalculation", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="After Discount">After Discount</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInput("description", e.target.value)}
                className="border px-3 py-2 rounded h-24"
                placeholder="Write description..."
              />
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <input
                type="checkbox"
                checked={formData.requireSignature}
                onChange={(e) => handleInput("requireSignature", e.target.checked)}
              />
              <label>Require customer signature for approval</label>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label>Select Product</label>
              <div className="flex gap-2">
                <select
                  value={formData.product}
                  onChange={(e) => handleInput("product", e.target.value)}
                  className="border px-3 py-2 rounded w-full"
                >
                  <option value="">--</option>
                </select>
                <button className="border px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-100">
                  Add
                </button>
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
                <th className="p-3 border text-left">Proposal</th>
                <th className="p-3 border text-left">Deals</th>
                <th className="p-3 border text-left">Contact Name</th>
                <th className="p-3 border text-left">Total</th>
                <th className="p-3 border text-left">Date</th>
                <th className="p-3 border text-left">Valid Till</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {proposals.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                proposals.map((p, i) => (
                  <tr key={i}>
                    <td className="p-3 border text-center">{p.proposal}</td>
                    <td className="p-3 border text-center">{p.deals}</td>
                    <td className="p-3 border text-center">{p.contact}</td>
                    <td className="p-3 border text-center">{p.total}</td>
                    <td className="p-3 border text-center">{p.date}</td>
                    <td className="p-3 border text-center">{p.validTill}</td>
                    <td className="p-3 border text-center">{p.status}</td>
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

          {/* Pagination */}
          <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
                           <label>Show</label>
              <select className="border rounded px-2 py-1 bg-white">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries</span>
            </div>
            <div>
              Showing 0 to 0 of 0 entries
              <span className="ml-4 text-gray-400">Previous</span>
              <span className="ml-2 text-gray-400">Next</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proposal;
