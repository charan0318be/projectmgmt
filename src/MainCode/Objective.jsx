import React, { useState } from 'react';

const Objective = () => {
  const [showForm, setShowForm] = useState(false);

  const objectives = [
    { title: '', owner: '', department: '', startDate: '', endDate: '', progress: '', status: '', lastUpdated: '' },
    { title: '', owner: '', department: '', startDate: '', endDate: '', progress: '', status: '', lastUpdated: '' },
    { title: '', owner: '', department: '', startDate: '', endDate: '', progress: '', status: '', lastUpdated: '' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Objective</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setShowForm(true)}
        >
          Add Objective
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        <input type="text" placeholder="Owner" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Department" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Project" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Status" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Search" className="border px-3 py-2 rounded" />
      </div>

      {/* Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Objective</th>
            <th className="p-2 border">Owner</th>
            <th className="p-2 border">Department</th>
            <th className="p-2 border">Start Date</th>
            <th className="p-2 border">End Date</th>
            <th className="p-2 border">Progress</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Last Updated</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {objectives.map((obj, index) => (
            <tr key={index} className="border-t">
              <td className="p-2 border">{obj.title}</td>
              <td className="p-2 border">{obj.owner}</td>
              <td className="p-2 border">{obj.department}</td>
              <td className="p-2 border">{obj.startDate}</td>
              <td className="p-2 border">{obj.endDate}</td>
              <td className="p-2 border">{obj.progress}</td>
              <td className="p-2 border">
                {obj.status && (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                    {obj.status}
                  </span>
                )}
              </td>
              <td className="p-2 border">{obj.lastUpdated}</td>
              <td className="p-2 border">
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form Modal */}
      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg w-[600px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Objective</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Objective Title" className="border px-3 py-2 rounded" />
              <input type="text" placeholder="Description" className="border px-3 py-2 rounded" />
              <select className="border px-3 py-2 rounded">
                <option>Individual</option>
                <option>Team</option>
              </select>
              <select className="border px-3 py-2 rounded">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <input type="date" className="border px-3 py-2 rounded" />
              <input type="date" className="border px-3 py-2 rounded" />
              <select className="border px-3 py-2 rounded">
                <option>Daily</option>
                <option>Weekly</option>
              </select>
              <select className="border px-3 py-2 rounded">
                <option>-</option>
              </select>
              <select className="border px-3 py-2 rounded">
                <option>Nothing selected</option>
              </select>
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked readOnly />
                <span>Send Check-in Reminder</span>
              </label>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
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

export default Objective;
