import React from "react";

const CompanySettings = () => {
  return (
    <div className="bg-white shadow p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Company Settings</h2>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Company Settings</p>

      <form className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Company Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter company email"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Company Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter phone number"
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Company Website
          </label>
          <input
            type="text"
            placeholder="Enter website URL"
            className="w-full border rounded p-2"
          />
        </div>
      </form>

      <div className="mt-6">
        <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600">
          Save
        </button>
      </div>

      <button className="fixed right-8 bottom-8 bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg">
        Hosting Suggestions
      </button>
    </div>
  );
};

export default CompanySettings;
