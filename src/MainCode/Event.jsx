import React, { useState } from "react";
import {
  MdAdd,
  MdRepeat,
  MdArrowBack,
  MdArrowForward,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatAlignLeft,
  MdUndo,
  MdRedo,
} from "react-icons/md";

const Event = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Events</h1>
          <p className="text-sm text-gray-500">Home &gt; Events</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Upgrade Plan</button>
      </div>

      {/* Filters + Actions */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap items-center gap-4">
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Employee All</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Client All</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Status All</option>
        </select>
        <input
          type="text"
          placeholder="Start typing to search"
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm"
        >
          <MdAdd />
          Add Event
        </button>
        <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
          <MdRepeat />
          Recurring Event
        </button>
      </div>

      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <button className="p-2 bg-white rounded shadow"><MdArrowBack /></button>
          <button className="p-2 bg-white rounded shadow"><MdArrowForward /></button>
          <span className="text-sm text-gray-700">Today</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">November 2025</h2>
        <div className="flex gap-2">
          {["month", "week", "day", "list"].map(view => (
            <button key={view} className="px-3 py-1 bg-white rounded shadow text-sm text-gray-700 capitalize">
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Grid or Form */}
      {!showForm ? (
        <div className="bg-white rounded shadow p-4 relative">
          <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
            Hosting Suggestions
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">Thursday, November 6</p>
            <div className="mt-2 bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm w-fit">
              8:45 PM Cum accusamus v...
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded shadow p-6 space-y-6 relative">
          <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
            Hosting Suggestions
          </div>

          <h2 className="text-lg font-semibold text-gray-800">Add Event</h2>

          {/* Event Name + Label Color */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event Name"
              className="border rounded px-3 py-2 text-sm text-gray-700"
            />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Label Color:</span>
              <input type="color" defaultValue="#FF0000" className="w-8 h-8 border rounded" />
            </div>
          </div>

          {/* What + Description */}
          <input
            type="text"
            placeholder="What"
            className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
          />
          <div>
            <div className="flex gap-2 mb-2 text-gray-600">
              <MdFormatBold />
              <MdFormatItalic />
              <MdFormatUnderlined />
              <MdStrikethroughS />
              <MdFormatListBulleted />
              <MdFormatListNumbered />
              <MdFormatAlignLeft />
              <MdUndo />
              <MdRedo />
            </div>
            <textarea
              rows={4}
              placeholder="Description"
              className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Starts On Date</label>
              <input type="date" className="border rounded px-3 py-2 text-sm w-full" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Starts On Time</label>
              <input type="time" className="border rounded px-3 py-2 text-sm w-full" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Ends On Date</label>
              <input type="date" className="border rounded px-3 py-2 text-sm w-full" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Ends On Time</label>
              <input type="time" className="border rounded px-3 py-2 text-sm w-full" />
            </div>
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Department</option>
            </select>
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Select Employee</option>
            </select>
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Select Client</option>
            </select>
          </div>

          {/* Host, Status, Reminder */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Host</option>
            </select>
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Pending</option>
            </select>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" />
              Send Reminder
            </label>
          </div>

          {/* Event Link + File Upload */}
          <input
            type="text"
            placeholder="Event Link (e.g. https://www.example.com)"
            className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
          />
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Add File</label>
            <input type="file" className="border rounded px-3 py-2 text-sm text-gray-700 w-full" />
          </div>

                   {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
              Save
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;

          