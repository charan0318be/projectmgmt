import React, { useState } from "react";

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    invoiceNumber: "INV#22",
    invoiceDate: "",
    dueDate: "",
    currency: "USD ($)",
    exchangeRate: 1,
    client: "",
    project: "",
    taxCalculation: "After Discount",
    bankAccount: "",
    paymentDetails: "",
    billingAddress: "",
    shippingAddress: "",
    generatedBy: "WorkSuite",
    items: [],
    discount: 0,
    note: "Thank you for your business",
    terms: "Thank you for your business.",
  };

  const [formData, setFormData] = useState(initialForm);
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    quantity: 1,
    unitPrice: 0,
    tax: "",
    file: null,
  });

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleItemInput = (key, value) => {
    setNewItem((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
    setNewItem({
      name: "",
      description: "",
      quantity: 1,
      unitPrice: 0,
      tax: "",
      file: null,
    });
  };

  const handleSave = () => {
    setInvoices((prev) => [...prev, formData]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Invoices</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Invoices</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Create Invoice
            </button>
          )}
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Recurring Invoice
          </button>
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Create TimeLog Invoice
          </button>
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Invoice Details</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <input
              type="text"
              placeholder="Invoice Number"
              value={formData.invoiceNumber}
              onChange={(e) => handleInput("invoiceNumber", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="date"
              placeholder="Invoice Date"
              value={formData.invoiceDate}
              onChange={(e) => handleInput("invoiceDate", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="date"
              placeholder="Due Date"
              value={formData.dueDate}
              onChange={(e) => handleInput("dueDate", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <select
              value={formData.currency}
              onChange={(e) => handleInput("currency", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option>USD ($)</option>
            </select>
            <input
              type="number"
              placeholder="Exchange Rate"
              value={formData.exchangeRate}
              onChange={(e) => handleInput("exchangeRate", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <select
              value={formData.client}
              onChange={(e) => handleInput("client", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option>Add</option>
            </select>
            <select
              value={formData.project}
              onChange={(e) => handleInput("project", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option>Add</option>
            </select>
            <select
              value={formData.taxCalculation}
              onChange={(e) => handleInput("taxCalculation", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option>After Discount</option>
            </select>
            <input
              type="text"
              placeholder="Bank Account"
              value={formData.bankAccount}
              onChange={(e) => handleInput("bankAccount", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Payment Details"
              value={formData.paymentDetails}
              onChange={(e) => handleInput("paymentDetails", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <div className="col-span-2 text-gray-500 text-sm">
              Billing Address: Select the client to show billing address.
            </div>
            <div className="col-span-2">
              <button className="border px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-100">
                + Add Shipping Address
              </button>
            </div>
            <input
              type="text"
              value={formData.generatedBy}
              disabled
              className="border px-3 py-2 rounded bg-gray-100"
            />
          </div>

          {/* Item Table */}
          <h4 className="text-md font-semibold mt-6">Items</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => handleItemInput("name", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              placeholder="Enter Description (optional)"
              value={newItem.description}
              onChange={(e) => handleItemInput("description", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={newItem.quantity}
              onChange={(e) => handleItemInput("quantity", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Unit Price"
              value={newItem.unitPrice}
              onChange={(e) => handleItemInput("unitPrice", e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <select
              value={newItem.tax}
              onChange={(e) => handleItemInput("tax", e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option>Nothing selected</option>
            </select>
            <input
              type="file"
              onChange={(e) => handleItemInput("file", e.target.files?.[0] || null)}
              className="border px-3 py-2 rounded"
            />
          </div>
          <button
            onClick={handleAddItem}
            className="mt-4 bg-white border px-4 py-2 rounded text-sm text-gray-700 hover:bg-gray-100"
          >
            + Add Item
          </button>

                    {/* Summary */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <div className="flex flex-col gap-1">
              <label>Discount (%)</label>
              <input
                type="number"
                value={formData.discount}
                onChange={(e) => handleInput("discount", e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Sub Total</label>
              <input
                type="number"
                value="0.00"
                disabled
                className="border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Tax</label>
              <input
                type="number"
                value="0.00"
                disabled
                className="border px-3 py-2 rounded bg-gray-100"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Total</label>
              <input
                type="number"
                value="0.00"
                disabled
                className="border px-3 py-2 rounded bg-gray-100"
              />
            </div>
          </div>

          {/* Notes and Terms */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <div className="flex flex-col gap-1">
              <label>Note for the recipient</label>
              <textarea
                value={formData.note}
                onChange={(e) => handleInput("note", e.target.value)}
                className="border px-3 py-2 rounded h-20"
                placeholder="e.g. Thank you for your business"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Terms and Conditions</label>
              <textarea
                value={formData.terms}
                onChange={(e) => handleInput("terms", e.target.value)}
                className="border px-3 py-2 rounded h-20"
                placeholder="Thank you for your business."
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
                <th className="p-3 border text-left">Code</th>
                <th className="p-3 border text-left">Invoice #</th>
                <th className="p-3 border text-left">Lead</th>
                <th className="p-3 border text-left">Client</th>
                <th className="p-3 border text-left">Total</th>
                <th className="p-3 border text-left">Invoice Date</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-4 text-center text-gray-500">
                    No data available in table
                  </td>
                </tr>
              ) : (
                invoices.map((inv, i) => (
                  <tr key={i}>
                    <td className="p-3 border text-center">{inv.invoiceNumber}</td>
                    <td className="p-3 border text-center">{inv.invoiceNumber}</td>
                    <td className="p-3 border text-center">{inv.lead || "-"}</td>
                    <td className="p-3 border text-center">{inv.client}</td>
                    <td className="p-3 border text-center">$0.00</td>
                    <td className="p-3 border text-center">{inv.invoiceDate}</td>
                    <td className="p-3 border text-center">Unpaid</td>
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

export default Invoice;
