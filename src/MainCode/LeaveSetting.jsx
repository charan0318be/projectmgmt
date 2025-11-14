import React, { useState } from 'react';

const LeaveSetting = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md relative">
      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b">
        <button className="pb-2 border-b-2 border-red-500 text-red-600 font-semibold">
          Leaves Type Settings
        </button>
        <button className="pb-2 text-gray-500 hover:text-gray-700">
          Leaves General Settings
        </button>
        <button className="pb-2 text-gray-500 hover:text-gray-700">
          Archived Leaves Type
        </button>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Leave Types</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setShowForm(true)}
        >
          Add New Leave Type
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100 text-sm">
            <th className="p-2 border">Leave Type</th>
            <th className="p-2 border">Leave Allotment Type</th>
            <th className="p-2 border">No. of Leaves</th>
            <th className="p-2 border">Monthly Limit</th>
            <th className="p-2 border">Nature of Leave</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Designation</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="8" className="text-center text-gray-500 p-6 border">
              No leave types available
            </td>
          </tr>
        </tbody>
      </table>

      {/* Hosting Suggestions */}
      <div className="mt-6 flex justify-end">
        <button className="text-blue-500 hover:underline">Hosting Suggestions</button>
      </div>

      {/* Popup Form */}
      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add New Leave Type</h3>
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm col-span-2">
                Leave Type
                <input
                  type="text"
                  placeholder="E.g. Sick, Casual"
                  className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
                />
              </label>

              <label className="text-sm col-span-2">
                Leave Allotment Type
                <select className="w-full mt-1 px-3 py-2 rounded border border-gray-400">
                  <option>Monthly Leave Type</option>
                  <option>Yearly Leave Type</option>
                </select>
              </label>

              <label className="text-sm">
                No of Monthly Leaves
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
                />
              </label>

              <label className="text-sm">
                Leave Paid Status
                <select className="w-full mt-1 px-3 py-2 rounded border border-gray-400">
                  <option>Paid</option>
                  <option>Unpaid</option>
                </select>
              </label>

              <label className="text-sm col-span-2">
                Color Code
                <input
                  type="color"
                  defaultValue="#18613D"
                  className="w-full mt-1 h-10 px-3 py-2 rounded border border-gray-400"
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowForm(false)}
              >
                Cancel
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

export default LeaveSetting;
