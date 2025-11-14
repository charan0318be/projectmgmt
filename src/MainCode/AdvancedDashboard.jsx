import React from 'react';

const AdvancedDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Advanced Dashboard</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600">
          + Add Advanced Dashboard
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <button className="text-blue-600 border-b-2 border-blue-600 pb-1">Overview</button>
        <button className="text-gray-500 hover:text-blue-600">Project</button>
        <button className="text-gray-500 hover:text-blue-600">Client</button>
        <button className="text-gray-500 hover:text-blue-600">HR</button>
        <button className="text-gray-500 hover:text-blue-600">Ticket</button>
        <button className="text-gray-500 hover:text-blue-600">Finance</button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6 text-sm">
        {[
          'Total Clients',
          'Total Employees',
          'Total Projects',
          'Due Invoices',
          'Hours Logged',
          'Pending Tasks',
          'Today Attendance',
          'Unresolved Tickets',
        ].map((label) => (
          <div key={label} className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">{label}</p>
            <p className="text-xl font-semibold"></p>
          </div>
        ))}
      </div>

      {/* Income Section */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Income</h2>
        <p className="text-gray-500">Not enough data</p>
      </div>

      {/* Timesheet Section */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Timesheet</h2>
        <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day}>
              <div className="h-24 bg-gray-100 rounded mb-2"></div>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedDashboard;
