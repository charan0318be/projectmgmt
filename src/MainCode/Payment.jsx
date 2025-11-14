import React, { useState } from "react";

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [formType, setFormType] = useState(null); // 'single' or 'bulk'

  const initialForm = {
    project: "",
    invoice: "",
    paidOn: "",
    amount: "",
    currency: "USD ($)",
    exchangeRate: 1,
    transactionId: "",
    gateway: "",
    bankAccount: "",
    receipt: null,
    remark: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setPayments((prev) => [...prev, formData]);
    setFormType(null);
    setFormData(initialForm);
  };

  const handleCancel = () => {
    setFormType(null);
    setFormData(initialForm);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Payments</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Payments</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setFormType("single")}
            className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
          >
            + Add Payment
          </button>
          <button
            onClick={() => setFormType("bulk")}
            className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
          >
            + Add Bulk Payment
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
          <option>Client</option>
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
      {formType && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">
            {formType === "single" ? "Payment Details" : "Bulk Payment Entry"}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <select
              value={formData.project}
              onChange={(e) => handleInput("project", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Project</option>
            </select>
            <select
              value={formData.invoice}
              onChange={(e) => handleInput("invoice", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Invoice</option>
            </select>
            <input
              type="date"
              value={formData.paidOn}
              onChange={(e) => handleInput("paidOn", e.target.value)}
              className="border px-3 py-2 rounded"
              placeholder="Paid On"
            />
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => handleInput("amount", e.target.value)}
              className="border px-3 py-2 rounded"
              placeholder="Amount"
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
              value={formData.exchangeRate}
              onChange={(e) => handleInput("exchangeRate", e.target.value)}
              className="border px-3 py-2 rounded"
              placeholder="Exchange Rate"
            />
            <input
              type="text"
              value={formData.transactionId}
              onChange={(e) => handleInput("transactionId", e.target.value)}
              className="border px-3 py-2 rounded"
              placeholder="Transaction ID"
            />
            <select
              value={formData.gateway}
              onChange={(e) => handleInput("gateway", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Payment Gateway</option>
            </select>
            <input
              type="text"
              value={formData.bankAccount}
              onChange={(e) => handleInput("bankAccount", e.target.value)}
              className="border px-3 py-2 rounded"
              placeholder="Bank Account"
            />
            <input
              type="file"
              onChange={(e) => handleInput("receipt", e.target.files?.[0] || null)}
              className="border px-3 py-2 rounded"
            />
            <textarea
              value={formData.remark}
              onChange={(e) => handleInput("remark", e.target.value)}
              className="border px-3 py-2 rounded col-span-2"
              placeholder="Remark"
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
      {!formType && (
        <div className="bg-white rounded shadow overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">Code</th>
                <th className="p-3 border text-left">Project</th>
                <th className="p-3 border text-left">Client</th>
                <th className="p-3 border text-left">Order #</th>
                <th className="p-3 border text-left">Amount</th>
                <th className="p-3 border text-left">Paid On</th>
                <th className="p-3 border text-left">Payment Gateway</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan="9" className="p-4 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                payments.map((p, i) => (
                  <tr key={i}>
                    <td className="p-3 border text-center">{p.code || "-"}</td>
                    <td className="p-3 border text-center">{p.project}</td>
                    <td className="p-3 border text-center">{p.client || "-"}</td>
                    <td className="p-3 border text-center">{p.order || "-"}</td>
                    <td className="p-3 border text-center">{p.amount}</td>
                    <td className="p-3 border text-center">{p.paidOn}</td>
                    <td className="p-3 border text-center">{p.gateway}</td>
                    <td className="p-3 border text-center">Complete</td>
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

export default Payment;

