import React from "react";

const Payroll = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Generate Payroll</h1>
          <p className="text-sm text-gray-500">Home &gt; Payroll</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Upgrade Plan</button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded shadow mb-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select className="border rounded px-3 py-2 text-sm text-gray-700">
            <option>Year</option>
          </select>
          <select className="border rounded px-3 py-2 text-sm text-gray-700">
            <option>Salary Cycle</option>
          </select>
          <select className="border rounded px-3 py-2 text-sm text-gray-700">
            <option>Month</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" />
            Include expense claims
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" />
            Add mileage to salary
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" />
            Use attendance
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="border rounded px-3 py-2 text-sm text-gray-700">
            <option>Department</option>
          </select>
          <select className="border rounded px-3 py-2 text-sm text-gray-700">
            <option>Select Employee</option>
          </select>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm mt-2">
          Generate
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow p-4 relative">
        {/* Hosting Suggestions Tooltip */}
        <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
          Hosting Suggestions
        </div>

        <table className="w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Net Salary</th>
              <th className="px-3 py-2">CTC</th>
              <th className="px-3 py-2">Duration</th>
              <th className="px-3 py-2">Paid On</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8} className="text-center text-gray-400 italic py-6">
                No data available in table.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">Previous</button>
            <button className="px-2 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-2 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
