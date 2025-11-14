import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const Interview = () => {
  const [showForm, setShowForm] = useState(false);
  const [interviews, setInterviews] = useState([]); // 🟢 Initially empty list
  const [notifyCandidate, setNotifyCandidate] = useState(true);
  const [sendReminder, setSendReminder] = useState(false);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const getMonthName = (monthIndex) =>
    new Date(year, monthIndex, 1).toLocaleString("default", { month: "long" });

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Interview Schedule</h1>
          <p className="text-sm text-gray-500">Home &gt; Interview</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Upgrade Plan</button>
      </div>

      {/* Calendar + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="bg-white rounded shadow p-4 col-span-3">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {getMonthName(month)} {year}
            </h2>
            <div className="flex gap-2">
              {["month", "week", "day"].map((view) => (
                <button
                  key={view}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-sm capitalize"
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="font-medium">{day}</div>
            ))}
            {[...Array(new Date(year, month, 1).getDay())].map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {[...Array(daysInMonth)].map((_, i) => (
              <div
                key={i}
                className="border rounded h-20 flex items-center justify-center bg-gray-50"
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="bg-white rounded shadow p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Interview Schedule</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
            >
              <MdAdd />
              Add Interview Schedule
            </button>
          </div>

          {/* 🟢 Show empty message only if no data */}
          {interviews.length === 0 ? (
            <div className="border rounded p-3 text-sm text-gray-500 italic text-center">
              — No interview scheduled —
            </div>
          ) : (
            interviews.map((interview, i) => (
              <div key={i} className="border rounded p-3 text-sm text-gray-700">
                <p><strong>{interview.job}</strong></p>
                <p>{interview.candidate}</p>
              </div>
            ))
          )}

          <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow w-fit">
            Hosting Suggestions
          </div>
        </div>
      </div>

      {/* Modal form — same as before */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl space-y-6 relative">
            <h2 className="text-lg font-semibold text-gray-800">Add Interview Schedule</h2>
            {/* form fields */}
            <div className="flex justify-end gap-4 mt-6">
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
                onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Interview;
