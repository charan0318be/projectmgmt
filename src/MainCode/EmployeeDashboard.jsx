import React from "react";
import {
  MdHome,
  MdChevronRight,
  MdNotificationsNone,
  MdMessage,
  MdPerson,
  MdAccessTime,
  MdCardGiftcard,
} from "react-icons/md";

const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top banner */}
      <div className="bg-yellow-100 text-yellow-800 px-4 py-3 text-sm">
        The demo resets every 3 hours. Feel free to explore all the features for testing before making a purchase, but please note that certain features are disabled.
      </div>

      {/* Header: breadcrumbs + icons */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <MdHome className="mr-1" />
          <span>Home</span>
          <MdChevronRight className="mx-1" />
          <span className="text-gray-800 font-medium">Dashboard</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <MdNotificationsNone className="h-5 w-5" />
          <MdMessage className="h-5 w-5" />
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <MdPerson />
          </div>
        </div>
      </div>

      {/* Top actions: Clock In + time */}
      <div className="px-6 mt-4 flex items-center justify-between">
        <button className="bg-blue-600 text-white px-4 py-2 rounded shadow text-sm">
          Clock In
        </button>
        <div className="flex items-center text-sm text-gray-600">
          <MdAccessTime className="mr-1" />
          <span>03:28 pm</span>
        </div>
      </div>

      {/* Welcome + user info */}
      <div className="px-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 md:col-span-3">
          <p className="text-lg font-semibold text-gray-800">Welcome Dr. Lenna Kling III</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-xs text-gray-500">Name</p>
          <p className="text-sm font-medium text-gray-800">Dr. Lenna Kling III</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-xs text-gray-500">Title</p>
          <p className="text-sm font-medium text-gray-800">Employee</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-xs text-gray-500">Employee ID</p>
          <p className="text-sm font-medium text-gray-800">EMP-2</p>
        </div>
      </div>

      {/* Summary cards */}
      <div className="px-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm font-semibold text-gray-800">Tasks</p>
          <p className="text-xs text-gray-500 mt-1">1 Total • 1 Open</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm font-semibold text-gray-800">Tickets</p>
          <p className="text-xs text-gray-500 mt-1">1 Open</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm font-semibold text-gray-800">Projects</p>
          <p className="text-xs text-gray-500 mt-1">1 In Progress • 0 Overdue</p>
        </div>
      </div>

      {/* Mid sections: birthdays, appreciations, on leave, document expiries */}
      <div className="px-6 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Birthdays */}
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm font-semibold text-gray-800">Birthdays</p>
          <p className="text-xs text-gray-400 mt-2">No record found.</p>
        </div>

        {/* Employee Appreciations */}
        <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
          <p className="text-sm font-semibold text-gray-800">Employee Appreciations</p>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Empty placeholder rows matching list layout */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">—</p>
                <p className="text-xs text-gray-500">—</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">—</p>
                <p className="text-xs text-gray-500">—</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">—</p>
                <p className="text-xs text-gray-500">—</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">—</p>
                <p className="text-xs text-gray-500">—</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-200 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">—</p>
                <p className="text-xs text-gray-500">—</p>
              </div>
            </div>
          </div>
        </div>

        {/* On Leave Today */}
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm font-semibold text-gray-800">On Leave Today</p>
          <p className="text-xs text-gray-400 mt-2">No record found.</p>
        </div>

        {/* Document Expiries */}
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-800">Document Expiries</p>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">0 Documents</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">No upcoming document expiries.</p>
        </div>

        {/* My Tasks */}
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-sm font-semibold text-gray-800">My Tasks</p>
          <div className="mt-3 border rounded p-3">
            <p className="text-xs text-gray-500">Task ID: —</p>
            <p className="text-xs text-gray-400 mt-1">Status: —</p>
            <p className="text-xs text-gray-400 mt-1">Due Date: —</p>
          </div>
        </div>

        {/* Tickets */}
        <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
          <p className="text-sm font-semibold text-gray-800">Tickets</p>
          <div className="mt-3 space-y-2">
            {/* Empty rows to match list layout */}
            <div className="border rounded p-3 flex items-center justify-between text-xs text-gray-600">
              <span>#—: —</span>
              <span className="text-red-500">open</span>
            </div>
            <div className="border rounded p-3 flex items-center justify-between text-xs text-gray-600">
              <span>#—: —</span>
              <span className="text-red-500">open</span>
            </div>
            <div className="border rounded p-3 flex items-center justify-between text-xs text-gray-600">
              <span>#—: —</span>
              <span className="text-red-500">open</span>
            </div>
          </div>
        </div>
      </div>

      {/* Week Timelogs + Hosting Suggestions */}
      <div className="px-6 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-800">Week Timelogs</p>
            <p className="text-xs text-gray-500">00:00 hrs</p>
          </div>
          <div className="mt-3 flex gap-2 text-xs text-gray-600">
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">S</div>
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">M</div>
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">T</div>
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">W</div>
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">T</div>
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">F</div>
            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center">S</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-800">
            <MdCardGiftcard className="text-yellow-500" />
            <span>Hosting Suggestions</span>
          </div>
          <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded shadow">
            View
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8" />
    </div>
  );
};

export default EmployeeDashboard;
