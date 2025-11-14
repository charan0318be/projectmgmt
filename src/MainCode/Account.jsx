import React, { useState } from "react";

const Account = () => {
  const [accounts, setAccounts] = useState([
    {
      title: "Secondary Account",
      sortCode: "",
      holder: "Bogan LLC",
      accountType: "Current",
      type: "Bank",
      currency: "USD ($)",
      balance: "$147,213.00",
      status: "Active",
    },
    {
      title: "Primary Account",
      sortCode: "",
      holder: "Glover-Russel",
      accountType: "Current",
      type: "Bank",
      currency: "USD ($)",
      balance: "$77,988.00",
      status: "Active",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const initialForm = {
    type: "Bank",
    sortCode: "",
    bankName: "",
    holderName: "",
    accountNumber: "",
    accountType: "Saving",
    currency: "USD ($)",
    contactNumber: "",
    openingBalance: "",
    status: "",
    logo: null,
  };
  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setAccounts((prev) => [
      ...prev,
      {
        title: formData.bankName,
        sortCode: formData.sortCode,
        holder: formData.holderName,
        accountType: formData.accountType,
        type: formData.type,
        currency: formData.currency,
        balance: `$${formData.openingBalance}`,
        status: formData.status,
      },
    ]);
    setShowForm(false);
    setFormData(initialForm);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData(initialForm);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Bank Account</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Bank Account</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Bank Account
            </button>
          )}
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-4 gap-4 text-sm mt-4">
        <select className="border rounded px-3 py-2 bg-white">
          <option>Type</option>
          <option>Bank</option>
          <option>Cash</option>
        </select>
        <input
          type="text"
          placeholder="Start typing to search"
          className="border rounded px-3 py-2 bg-white placeholder-gray-400"
        />
        <button className="border rounded px-3 py-2 bg-white text-gray-700 flex items-center justify-center gap-2 col-span-2">
          <span>🔍</span> Filters
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Add Bank Account</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex gap-4 items-center">
              <label className="font-medium">Type:</label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Bank"
                  checked={formData.type === "Bank"}
                  onChange={(e) => handleInput("type", e.target.value)}
                />{" "}
                Bank
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Cash"
                  checked={formData.type === "Cash"}
                  onChange={(e) => handleInput("type", e.target.value)}
                />{" "}
                Cash
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter sort code"
              value={formData.sortCode}
              onChange={(e) => handleInput("sortCode", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="e.g., Federal Bank"
              value={formData.bankName}
              onChange={(e) => handleInput("bankName", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="e.g., John Doe"
              value={formData.holderName}
              onChange={(e) => handleInput("holderName", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="e.g., 123456789"
              value={formData.accountNumber}
              onChange={(e) => handleInput("accountNumber", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <select
              value={formData.accountType}
              onChange={(e) => handleInput("accountType", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option>Saving</option>
              <option>Current</option>
            </select>
            <select
              value={formData.currency}
              onChange={(e) => handleInput("currency", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option>USD ($)</option>
            </select>
            <input
              type="text"
              placeholder="e.g., 1234567890"
              value={formData.contactNumber}
              onChange={(e) => handleInput("contactNumber", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="e.g., 10000"
              value={formData.openingBalance}
              onChange={(e) => handleInput("openingBalance", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <select
              value={formData.status}
              onChange={(e) => handleInput("status", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <input
              type="file"
              onChange={(e) => handleInput("logo", e.target.files?.[0] || null)}
              className="border px-3 py-2 rounded"
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
                <th className="p-3 border text-left">Bank Account</th>
                <th className="p-3 border text-left">Sort Code</th>
                <th className="p-3 border text-left">Account Holder Name</th>
                <th className="p-3 border text-left">Account Type</th>
                <th className="p-3 border text-left">Type</th>
                <th className="p-3 border text-left">Currency</th>
                <th className="p-3 border text-left">Bank Balance</th>
                <th className="p-3 border text-left">Status</th>
                                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {accounts.length === 0 ? (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                accounts.map((acc, i) => (
                  <tr key={i}>
                    <td className="p-3 border text-center">{acc.title}</td>
                    <td className="p-3 border text-center">{acc.sortCode || "--"}</td>
                    <td className="p-3 border text-center">{acc.holder}</td>
                    <td className="p-3 border text-center">{acc.accountType}</td>
                    <td className="p-3 border text-center">{acc.type}</td>
                    <td className="p-3 border text-center">{acc.currency}</td>
                    <td className="p-3 border text-center">{acc.balance}</td>
                    <td className="p-3 border text-center">
                      <span className={`inline-flex items-center gap-1 ${
                        acc.status === "Active" ? "text-green-600" : "text-gray-400"
                      }`}>
                        ● {acc.status}
                      </span>
                    </td>
                    <td className="p-3 border text-center">
                      <button className="text-gray-700 hover:text-black">⋮</button>
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
              Showing 1 to {accounts.length} of {accounts.length} entries
              <span className="ml-4 text-gray-400">Previous</span>
              <span className="ml-2 text-gray-400">Next</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
