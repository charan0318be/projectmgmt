import React, { useState } from 'react';

const Request = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Overtime Request</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setShowPopup(true)}
        >
          + Add Request
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <select className="border px-3 py-2 rounded"><option>Designation</option></select>
        <select className="border px-3 py-2 rounded"><option>Department</option></select>
        <select className="border px-3 py-2 rounded"><option>Employee</option></select>
        <select className="border px-3 py-2 rounded"><option>Year</option></select>
        <select className="border px-3 py-2 rounded"><option>Month</option></select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="border rounded p-4">
          <h3 className="text-md font-semibold mb-2">Approved Status</h3>
          <div className="grid grid-cols-4 gap-2 text-center text-sm">
            <div>Requested: 0</div>
            <div>Approved: 0</div>
            <div>Rejected: 0</div>
            <div>Pending: 0</div>
          </div>
        </div>
        <div className="border rounded p-4">
          <h3 className="text-md font-semibold mb-2">Overtime Hours Summary</h3>
          <div className="text-sm">0 hrs</div>
          <div className="text-sm">$0.00 Compensation Amount</div>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Employee</th>
            <th className="p-2 border">Requested Date</th>
            <th className="p-2 border">Overtime Date</th>
            <th className="p-2 border">Duration</th>
            <th className="p-2 border">Reason</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="6" className="text-center text-gray-500 p-6 border">
              No data available in table
            </td>
          </tr>
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div>Showing 0 to 0 of 0 entries</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
        </div>
      </div>

      {/* Hosting Suggestions */}
      <div className="mt-6 flex justify-end">
        <button className="text-blue-500 hover:underline">Hosting Suggestions</button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Request</h3>
            <div className="grid grid-cols-2 gap-4">
              <select className="border px-3 py-2 rounded col-span-2">
                <option>Employee</option>
              </select>
              <input type="date" className="border px-3 py-2 rounded col-span-2" />
              <select className="border px-3 py-2 rounded col-span-2">
                <option>Overtime Type</option>
              </select>
              <input type="number" placeholder="Hours" className="border px-3 py-2 rounded" />
              <input type="number" placeholder="Minutes" className="border px-3 py-2 rounded" />
              <textarea
                placeholder="Reason"
                className="border px-3 py-2 rounded col-span-2 h-20 resize-none"
              />
            </div>
            <div className="mt-6 flex justify-between">
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Add
              </button>
              <div className="flex gap-2">
                <button
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Request;
