import React, { useState } from "react";

const Client = () => {
  const [clients, setClients] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Full form data (account + company details)
  const initialForm = {
    // Account details
    salutation: "",
    clientName: "",
    email: "",
    profilePicture: null,
    country: "",
    phoneCode: "+91",
    phone: "",
    gender: "",
    language: "English",
    clientCategory: "",
    clientSubCategory: "",
    loginAllowed: "Yes",
    emailNotifications: "Yes",

    // Company details
    companyName: "",
    website: "",
    gstVatName: "",
    gstVatNumber: "",

    // Continuation fields
    officePhoneNumber: "",
    city: "",
    state: "",
    postalCode: "",
    addedBy: "Marie O'Kon",
    companyAddress: "",
    shippingAddress: "",
    note: "",
    companyLogo: null,
    dealWatcherSelfLabel: "It's you",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleAddClientOpen = () => {
    setFormData(initialForm);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFile = (key, file) => {
    setFormData((prev) => ({ ...prev, [key]: file }));
  };

  const handleSave = () => {
    const newClient = {
      id: Date.now(),
      name: formData.clientName,
      email: formData.email,
      mobile: `${formData.phoneCode || ""} ${formData.phone || ""}`.trim(),
      category: formData.clientCategory,
      subCategory: formData.clientSubCategory,
    };
    setClients((prev) => [...prev, newClient]);
    setShowForm(false);
  };

  const handleSaveAndAddMore = () => {
    handleSave();
    setFormData(initialForm);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Clients</span>
      </div>

      {/* Header + Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Clients</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={handleAddClientOpen}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Client
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Import
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      {/* Filters (hidden while form is open to focus user) */}
      {!showForm && (
        <div className="grid grid-cols-6 gap-4 text-sm">
          <div>
            <label className="block text-gray-600 mb-1">Added On</label>
            <input type="date" className="w-full border rounded px-2 py-1 bg-white" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Start Date To End Date</label>
            <input
              type="text"
              placeholder="e.g. 01/01/2025 - 12/31/2025"
              className="w-full border rounded px-2 py-1 bg-white placeholder-gray-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Client</label>
            <select className="w-full border rounded px-2 py-1 bg-white">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Category</label>
            <select className="w-full border rounded px-2 py-1 bg-white">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Sub Category</label>
            <select className="w-full border rounded px-2 py-1 bg-white">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Search</label>
            <input
              type="text"
              placeholder="Start typing to..."
              className="w-full border rounded px-2 py-1 bg-white placeholder-gray-400"
            />
          </div>
        </div>
      )}

      {/* Add Client Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-8">
          {/* Title */}
          <h3 className="text-lg font-semibold">Add Client</h3>

          {/* Account Details */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-800">Account Details</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {/* Salutation */}
              <div className="flex flex-col gap-1">
                <label htmlFor="salutation" className="text-sm font-medium text-gray-700">
                  Salutation
                </label>
                <select
                  id="salutation"
                  value={formData.salutation}
                  onChange={(e) => handleInput("salutation", e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Dr.</option>
                  <option>Prof.</option>
                </select>
              </div>

              {/* Client Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="clientName" className="text-sm font-medium text-gray-700">
                  Client Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => handleInput("clientName", e.target.value)}
                  placeholder="e.g. John Doe"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInput("email", e.target.value)}
                  placeholder="e.g. johndoe@example.com"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Profile Picture upload + tooltip */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Profile Picture</label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFile("profilePicture", e.target.files?.[0] || null)}
                    className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <span className="text-xs text-gray-500">Hosting Suggestions</span>
                </div>
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1">
                <label htmlFor="country" className="text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInput("country", e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Country</option>
                  <option>Afghanistan</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                </select>
              </div>

              {/* Phone (with code) */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <div className="flex gap-2">
                  <input
                    value={formData.phoneCode}
                    onChange={(e) => handleInput("phoneCode", e.target.value)}
                    className="w-24 border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    value={formData.phone}
                    onChange={(e) => handleInput("phone", e.target.value)}
                    placeholder="e.g. 1234567890"
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="flex flex-col gap-1">
                <label htmlFor="gender" className="text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => handleInput("gender", e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Change Language */}
              <div className="flex flex-col gap-1">
                <label htmlFor="language" className="text-sm font-medium text-gray-700">
                  Change Language
                </label>
                <select
                  id="language"
                  value={formData.language}
                  onChange={(e) => handleInput("language", e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>

              {/* Client Category */}
              <div className="flex flex-col gap-1">
                <label htmlFor="clientCategory" className="text-sm font-medium text-gray-700">
                  Client Category
                </label>
                <select
                  id="clientCategory"
                  value={formData.clientCategory}
                  onChange={(e) => handleInput("clientCategory", e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Category</option>
                  <option>Enterprise</option>
                  <option>SMB</option>
                  <option>Startup</option>
                </select>
              </div>

              {/* Client Sub Category */}
              <div className="flex flex-col gap-1">
                <label htmlFor="clientSubCategory" className="text-sm font-medium text-gray-700">
                  Client Sub Category
                </label>
                <select
                  id="clientSubCategory"
                  value={formData.clientSubCategory}
                  onChange={(e) => handleInput("clientSubCategory", e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Sub Category</option>
                  <option>Premium</option>
                  <option>Standard</option>
                  <option>Trial</option>
                </select>
              </div>

              {/* Login Allowed? */}
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">Login Allowed?</span>
                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="loginAllowed"
                      value="Yes"
                      checked={formData.loginAllowed === "Yes"}
                      onChange={(e) => handleInput("loginAllowed", e.target.value)}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="loginAllowed"
                      value="No"
                      checked={formData.loginAllowed === "No"}
                      onChange={(e) => handleInput("loginAllowed", e.target.value)}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Receive email notifications? */}
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">
                  Receive email notifications?
                </span>
                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="emailNotifications"
                      value="Yes"
                      checked={formData.emailNotifications === "Yes"}
                      onChange={(e) => handleInput("emailNotifications", e.target.value)}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name="emailNotifications"
                      value="No"
                      checked={formData.emailNotifications === "No"}
                      onChange={(e) => handleInput("emailNotifications", e.target.value)}
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-800">Company Details</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {/* Company Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInput("companyName", e.target.value)}
                  placeholder="e.g. Acme Corporation"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Official Website Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="website" className="text-sm font-medium text-gray-700">
                  Official Website Name
                </label>
                <input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInput("website", e.target.value)}
                  placeholder="e.g. www.example.com"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* GST/VAT Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="gstVatName" className="text-sm font-medium text-gray-700">
                  GST/VAT Name
                </label>
                <input
                  id="gstVatName"
                  value={formData.gstVatName}
                  onChange={(e) => handleInput("gstVatName", e.target.value)}
                  placeholder="e.g. GST/VAT"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* GST/VAT Number */}
              <div className="flex flex-col gap-1">
                <label htmlFor="gstVatNumber" className="text-sm font-medium text-gray-700">
                  GST/VAT Number
                </label>
                <input
                  id="gstVatNumber"
                  value={formData.gstVatNumber}
                  onChange={(e) => handleInput("gstVatNumber", e.target.value)}
                  placeholder="e.g. 18AADCU9601B1Z1"
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>

          {/* Continuation (Office phone, addresses, note, logo) */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Office Phone Number */}
            <div className="flex flex-col gap-1">
              <label htmlFor="officePhoneNumber" className="text-sm font-medium text-gray-700">
                Office Phone Number
              </label>
              <input
                id="officePhoneNumber"
                value={formData.officePhoneNumber}
                onChange={(e) => handleInput("officePhoneNumber", e.target.value)}
                placeholder="e.g. 080-123456"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* City */}
            <div className="flex flex-col gap-1">
              <label htmlFor="city" className="text-sm font-medium text-gray-700">
                City
              </label>
              <input
                id="city"
                value={formData.city}
                onChange={(e) => handleInput("city", e.target.value)}
                placeholder="e.g. Bengaluru"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* State */}
            <div className="flex flex-col gap-1">
              <label htmlFor="state" className="text-sm font-medium text-gray-700">
                State
              </label>
              <input
                id="state"
                value={formData.state}
                onChange={(e) => handleInput("state", e.target.value)}
                placeholder="e.g. Karnataka"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Postal Code */}
            <div className="flex flex-col gap-1">
              <label htmlFor="postalCode" className="text-sm font-medium text-gray-700">
                Postal Code
              </label>
              <input
                id="postalCode"
                value={formData.postalCode}
                onChange={(e) => handleInput("postalCode", e.target.value)}
                placeholder="e.g. 560001"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Added By */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Added By</label>
              <div className="flex items-center gap-2">
                <input
                  value={formData.addedBy}
                  onChange={(e) => handleInput("addedBy", e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <span className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded">
                  {formData.dealWatcherSelfLabel}
                </span>
              </div>
            </div>

            {/* Company Address */}
            <div className="flex flex-col gap-1">
              <label htmlFor="companyAddress" className="text-sm font-medium text-gray-700">
                Company Address
              </label>
              <input
                id="companyAddress"
                value={formData.companyAddress}
                onChange={(e) => handleInput("companyAddress", e.target.value)}
                placeholder="e.g. 132, My Street, Kingston, New York 12401"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Shipping Address */}
            <div className="flex flex-col gap-1">
              <label htmlFor="shippingAddress" className="text-sm font-medium text-gray-700">
                Shipping Address
              </label>
              <input
                id="shippingAddress"
                value={formData.shippingAddress}
                onChange={(e) => handleInput("shippingAddress", e.target.value)}
                placeholder="e.g. 132, My Street, Kingston, New York 12401"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Note (rich text simplified) */}
            <div className="col-span-2 flex flex-col gap-1">
              <label htmlFor="note" className="text-sm font-medium text-gray-700">
                Note
              </label>
              <div className="border border-gray-300 rounded-md bg-gray-50">
                {/* Simple toolbar stub for look-alike */}
                <div className="flex flex-wrap gap-2 px-2 py-2 border-b border-gray-200 text-xs text-gray-600">
                  <span className="px-2 py-1 bg-white border rounded">B</span>
                  <span className="px-2 py-1 bg-white border rounded italic">I</span>
                  <span className="px-2 py-1 bg-white border rounded underline">U</span>
                  <span className="px-2 py-1 bg-white border rounded line-through">S</span>
                  <span className="px-2 py-1 bg-white border rounded">•</span>
                  <span className="px-2 py-1 bg-white border rounded">1.</span>
                  <span className="px-2 py-1 bg-white border rounded">↔</span>
                  <span className="px-2 py-1 bg-white border rounded">Link</span>
                </div>
                <textarea
                  id="note"
                  value={formData.note}
                  onChange={(e) => handleInput("note", e.target.value)}
                  placeholder="Write your note..."
                  className="w-full min-h-[120px] px-3 py-2 bg-white rounded-b-md focus:outline-none"
                />
              </div>
            </div>

            {/* Company Logo */}
            <div className="col-span-2 flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Company Logo</label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile("companyLogo", e.target.files?.[0] || null)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {/* Preview stub */}
                <div className="w-12 h-12 bg-yellow-400 rounded grid place-items-center text-white font-bold">
                  W
                </div>
                <span className="text-xs text-gray-500 ml-auto">Hosting Suggestions</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-2">
            <button
              onClick={handleSave}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Save
            </button>
            <button
              onClick={handleSaveAndAddMore}
              className="bg-white border px-4 py-2 rounded hover:bg-gray-100"
            >
              Save &amp; Add More
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

      {/* Table (remains visible when form is closed) */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-3 border text-left">#</th>
                <th className="p-3 border text-left">Name</th>
                <th className="p-3 border text-left">Email</th>
                <th className="p-3 border text-left">Mobile</th>
                <th className="p-3 border text-left">Category</th>
                <th className="p-3 border text-left">Sub Category</th>
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-4 text-gray-500">
                    No clients found
                  </td>
                </tr>
              ) : (
                clients.map((client, index) => (
                  <tr key={client.id}>
                    <td className="p-3 border">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 border">{index + 1}</td>
                    <td className="p-3 border">{client.name}</td>
                    <td className="p-3 border">{client.email}</td>
                    <td className="p-3 border">{client.mobile}</td>
                    <td className="p-3 border">{client.category}</td>
                    <td className="p-3 border">{client.subCategory}</td>
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

export default Client;
