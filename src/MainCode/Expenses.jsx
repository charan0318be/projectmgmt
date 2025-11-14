import React, { useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    itemName: "",
    currency: "USD ($)",
    exchangeRate: 1,
    price: "",
    purchaseDate: "",
    employee: "",
    project: "",
    category: "",
    purchasedFrom: "",
    bankAccount: "",
    description: "",
    bill: null,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setExpenses((prev) => [...prev, formData]);
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
        Home &gt; <span className="text-gray-700 font-medium">Expenses</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Expenses</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Expense
            </button>
          )}
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Recurring Expenses
          </button>
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Import
          </button>
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-4 gap-4 text-sm mt-4">
        <input
          type="text"
          placeholder="Start Date To End Date"
          className="border rounded px-3 py-2 bg-white placeholder-gray-400"
        />
        <select className="border rounded px-3 py-2 bg-white">
          <option>Status</option>
        </select>
        <input
          type="text"
          placeholder="Start typing to search"
          className="border rounded px-3 py-2 bg-white placeholder-gray-400"
        />
        <button className="border rounded px-3 py-2 bg-white text-gray-700 flex items-center justify-center gap-2">
          <span>🔍</span> Filters
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Expense Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <input
              type="text"
              placeholder="Item Name"
              value={formData.itemName}
              onChange={(e) => handleInput("itemName", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <select
              value={formData.currency}
              onChange={(e) => handleInput("currency", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="USD ($)">USD ($)</option>
            </select>
            <input
              type="number"
              placeholder="Exchange Rate"
              value={formData.exchangeRate}
              onChange={(e) => handleInput("exchangeRate", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => handleInput("price", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="date"
              placeholder="Purchase Date"
              value={formData.purchaseDate}
              onChange={(e) => handleInput("purchaseDate", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <select
              value={formData.employee}
              onChange={(e) => handleInput("employee", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Employee</option>
            </select>
            <select
              value={formData.project}
              onChange={(e) => handleInput("project", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Project</option>
            </select>
            <select
              value={formData.category}
              onChange={(e) => handleInput("category", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Expense Category</option>
            </select>
            <input
              type="text"
              placeholder="Purchased From"
              value={formData.purchasedFrom}
              onChange={(e) => handleInput("purchasedFrom", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Bank Account"
              value={formData.bankAccount}
              onChange={(e) => handleInput("bankAccount", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => handleInput("description", e.target.value)}
              className="border px-3 py-2 rounded col-span-2 h-24"
            />
            <input
              type="file"
              onChange={(e) => handleInput("bill", e.target.files?.[0] || null)}
              className="border px-3 py-2 rounded col-span-2"
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
                <th className="p-3 border text-left">#</th>
                <th className="p-3 border text-left">Item Name</th>
                <th className="p-3 border text-left">Price</th>
                <th className="p-3 border text-left">Employees</th>
                <th className="p-3 border text-left">Purchased From</th>
                <th className="p-3 border text-left">Purchase Date</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length === 0 ? (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                expenses.map((exp, i) => (
                  <tr key={i}>
                    <td className="p-3 border text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 border text-center">{i + 1}</td>
                    <td className="p-3 border text-center">{exp.itemName}</td>
                    <td className="p-3 border text-center">{exp.price}</td>
                    <td className="p-3 border text-center">{exp.employee}</td>
                    <td className="p-3 border text-center">{exp.purchasedFrom}</td>
                                        <td className="p-3 border text-center">{exp.purchaseDate}</td>
                    <td className="p-3 border text-center">Pending</td>
                    <td className="p-3 border text-center">
                      <button className="text-gray-700 border px-2 py-1 rounded text-sm hover:bg-gray-100">
                        ✏️
                      </button>
                      <button className="text-gray-700 border px-2 py-1 rounded text-sm hover:bg-gray-100 ml-2">
                        🗑️
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

export default Expenses;
