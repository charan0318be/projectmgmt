import React, { useState } from 'react';

const AssetSetting = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Asset Type</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setShowPopup(true)}
        >
          + Add Asset Type
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">#</th>
            <th className="p-2 border">Type Name</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3" className="text-center text-gray-500 p-6 border">
              No asset types available
            </td>
          </tr>
        </tbody>
      </table>

      {/* Hosting Suggestions */}
      <div className="mt-6 flex justify-end">
        <button className="text-blue-500 hover:underline">Hosting Suggestions</button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Asset Type</h3>
            <label className="block text-sm mb-4">
              Name <span className="text-red-500">*</span>
              <input
                type="text"
                placeholder="Name"
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              />
            </label>
            <div className="flex justify-end gap-4 mt-6">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetSetting;
