import React, { useState } from 'react';

const Meeting = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Meetings</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setShowForm(true)}
        >
          + Add Meeting
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <input type="text" placeholder="Employee" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Year" defaultValue="2025" className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Search" className="border px-3 py-2 rounded" />
      </div>

      {/* Notification Banner */}
      <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded mb-4">
        There is a meeting pending from the past year.
      </div>

      {/* Status Legend */}
      <div className="flex items-center gap-4 mb-6 text-sm">
        {[
          { label: 'Upcoming', color: 'bg-red-500' },
          { label: 'Pending', color: 'bg-yellow-500' },
          { label: 'Recurring', color: 'bg-blue-500' },
          { label: 'Past', color: 'bg-gray-400' },
          { label: 'Cancelled', color: 'bg-black' },
        ].map((status, index) => (
          <span key={index} className="flex items-center gap-1">
            <span className={`w-3 h-3 ${status.color} rounded-full inline-block`}></span> {status.label}
          </span>
        ))}
      </div>

      {/* Empty State */}
      <div className="text-center text-gray-500 py-10 border rounded">
        No record found
      </div>

      {/* Hosting Suggestions Button */}
      <div className="mt-6 flex justify-end">
        <button className="text-blue-500 hover:underline">Hosting Suggestions</button>
      </div>

      {/* Add Meeting Form Modal */}
      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Meeting</h3>
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="border px-3 py-2 rounded" placeholder="Meeting Date" />
              <input type="time" className="border px-3 py-2 rounded" placeholder="Starts On Time" />
              <input type="time" className="border px-3 py-2 rounded" placeholder="Ends On Time" />
              <select className="border px-3 py-2 rounded">
                <option>Meeting For</option>
              </select>
              <select className="border px-3 py-2 rounded">
                <option>Meeting By</option>
              </select>
              <label className="flex items-center space-x-2 col-span-2">
                <input type="checkbox" />
                <span>Repeat</span>
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
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meeting;
