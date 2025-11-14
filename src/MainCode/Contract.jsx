import React, { useState } from "react";

const Contract = () => {
  const [contracts, setContracts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    contractNumber: "",
    subject: "",
    project: "",
    description: "",
    startDate: "",
    endDate: "",
    withoutDueDate: false,
    contractType: "",
    contractValue: "",
    currency: "USD",
    client: "",
    call: "",
    officePhone: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    alternateAddress: "",
    notes: "",
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
        Home &gt; <span className="text-gray-700 font-medium">Contracts</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Contracts</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Create Contract
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Contract Template
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Add Contract</h3>

          {/* Contract Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Contract Number *</label>
              <input
                type="text"
                value={formData.contractNumber}
                onChange={(e) => handleInput("contractNumber", e.target.value)}
                placeholder="CONT#0"
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Subject *</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleInput("subject", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-gray-700">Project</label>
              <select
                value={formData.project}
                onChange={(e) => handleInput("project", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInput("description", e.target.value)}
                placeholder="Write description..."
                className="border border-gray-300 px-3 py-2 rounded bg-white h-24"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Start Date *</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInput("startDate", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => handleInput("endDate", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
              <label className="inline-flex items-center gap-2 mt-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={formData.withoutDueDate}
                  onChange={(e) => handleInput("withoutDueDate", e.target.checked)}
                />
                Without Due Date
              </label>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Contract Type *</label>
              <select
                value={formData.contractType}
                onChange={(e) => handleInput("contractType", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Contract Value *</label>
              <input
                type="text"
                value={formData.contractValue}
                onChange={(e) => handleInput("contractValue", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Currency</label>
              <select
                value={formData.currency}
                onChange={(e) => handleInput("currency", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              >
                <option value="USD">USD ($)</option>
              </select>
            </div>
          </div>

          {/* Client Details */}
          <h4 className="text-md font-semibold mt-6">Client Details</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Client *</label>
              <select
                value={formData.client}
                onChange={(e) => handleInput("client", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              >
                <option value="">--</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Call</label>
              <input
                type="text"
                value={formData.call}
                onChange={(e) => handleInput("call", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Office Phone Number</label>
              <input
                type="text"
                value={formData.officePhone}
                onChange={(e) => handleInput("officePhone", e.target.value)}
                placeholder="e.g. +19876543"
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInput("city", e.target.value)}
                placeholder="e.g. New York, Jaipur, Dubai"
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">State</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleInput("state", e.target.value)}
                placeholder="e.g. California, Rajasthan, Dubai"
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => handleInput("country", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-700">Postal Code</label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => handleInput("postalCode", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white"
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-gray-700">Alternate Address</label>
              <textarea
                value={formData.alternateAddress}
                onChange={(e) => handleInput("alternateAddress", e.target.value)}
                placeholder="e.g. 123, My Street, Kingston, New York 12401"
                className="border border-gray-300 px-3 py-2 rounded bg-white h-20"
              />
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-gray-700">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInput("notes", e.target.value)}
                className="border border-gray-300 px-3 py-2 rounded bg-white h-20"
              />
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
                <th className="p-3 border text-left">Subject</th>
                <th className="p-3 border text-left">Client</th>
                <th className="p-3 border text-left">Project</th>
                <th className="p-3 border text-left">Amount</th>
                <th className="p-3 border text-left">Start Date</th>
                <th className="p-3 border text-left">End Date</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
           <tbody>
  {contracts.length === 0 ? (
    <tr>
      <td colSpan="8" className="p-4 text-center text-gray-500">
        No contracts found
      </td>
    </tr>
  ) : (
    contracts.map((contract, i) => (
      <tr key={i}>
        <td className="p-3 border text-center">
          <input type="checkbox" />
        </td>
        <td className="p-3 border text-center">{contract.subject}</td>
        <td className="p-3 border text-center">{contract.client}</td>
        <td className="p-3 border text-center">{contract.project}</td>
        <td className="p-3 border text-center">{contract.contractValue}</td>
        <td className="p-3 border text-center">{contract.startDate}</td>
        <td className="p-3 border text-center">{contract.endDate}</td>
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

export default Contract;
