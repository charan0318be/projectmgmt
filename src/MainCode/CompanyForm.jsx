import React from 'react';

const CompanyForm = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Company Details</h2>
      <div className="bg-white p-6 rounded shadow">
        <div className="grid grid-cols-2 gap-4">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Corporation"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Company Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. johndoe@example.com"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Company Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 1234567890"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Company Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Logo <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Company Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Website <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. www.example.com"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Default Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Currency <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. USD ($)"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Default Timezone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Default Timezone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Asia/Kolkata"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. English"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>Select Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Company Address */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Address <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="e.g. 132, My Street, Kingston, New York 12401"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              rows="3"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">Account Details (First company admin)</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Admin Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Admin Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. johndoe@example.com"
              className="w-full border border-gray-300 rounded-md p-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Save</button>
          <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
