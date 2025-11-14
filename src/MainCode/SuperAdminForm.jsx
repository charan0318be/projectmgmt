import React from 'react';

const SuperAdminForm = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Create Superadmin</h2>
      <div className="bg-white p-6 rounded shadow">
        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. johndoe@example.com"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* User Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Role <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-red-500">
              <option>Superadmin</option>
            </select>
          </div>

          {/* Upload Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload your picture
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Save
          </button>
          <button
            onClick={onBack}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminForm;
