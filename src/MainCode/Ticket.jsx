import React, { useState } from "react";

const Ticket = () => {
  // ✅ Initially empty
  const [tickets, setTickets] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Tickets</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Tickets</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600">
          Upgrade Plan
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-4 gap-4 text-sm mt-4">
        <input
          type="text"
          placeholder="Start Date To End Date"
          className="border rounded px-3 py-2 bg-white placeholder-gray-400"
        />
        <select className="border rounded px-3 py-2 bg-white">
          <option>Open Tickets</option>
          <option>Closed Tickets</option>
          <option>Pending Tickets</option>
          <option>Resolved Tickets</option>
        </select>
        <input
          type="text"
          placeholder="Start typing to search"
          className="border rounded px-3 py-2 bg-white placeholder-gray-400"
        />
        <button className="border rounded px-3 py-2 bg-white text-gray-700 flex items-center justify-center gap-2">
          <span>🔍</span> Filters
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-5 gap-4 text-sm mt-4">
        <div className="bg-white border rounded p-4">
          <div className="text-gray-500">Total Tickets</div>
          <div className="text-xl font-bold text-red-500">{tickets.length}</div>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="text-gray-500">Closed Tickets</div>
          <div className="text-xl font-bold text-red-500">0</div>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="text-gray-500">Open Tickets</div>
          <div className="text-xl font-bold text-red-500">0</div>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="text-gray-500">Pending Tickets</div>
          <div className="text-xl font-bold text-red-500">0</div>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="text-gray-500">Resolved Tickets</div>
          <div className="text-xl font-bold text-red-500">0</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600">
          + Create Ticket
        </button>
        <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
          Ticket Form
        </button>
        <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border text-left">
                <input type="checkbox" />
              </th>
              <th className="p-3 border text-left">Ticket #</th>
              <th className="p-3 border text-left">Subject</th>
              <th className="p-3 border text-left">Requester Name</th>
              <th className="p-3 border text-left">Date</th>
              <th className="p-3 border text-left">Time</th>
              <th className="p-3 border text-left">Assigned To</th>
              <th className="p-3 border text-left">Priority</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td
                  colSpan="10"
                  className="text-center text-gray-400 italic py-6"
                >
                  No tickets available
                </td>
              </tr>
            ) : (
              tickets.map((t) => (
                <tr key={t.id}>
                  <td className="p-3 border text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 border text-center">{t.id}</td>
                  <td className="p-3 border text-center">
                    {t.subject}{" "}
                    <span className="ml-2 text-teal-600 text-xs bg-teal-100 px-2 py-1 rounded">
                      New response
                    </span>
                  </td>
                  <td className="p-3 border text-center">{t.requester}</td>
                  <td className="p-3 border text-center">{t.date}</td>
                  <td className="p-3 border text-center">{t.time}</td>
                  <td className="p-3 border text-center">{t.assignedTo}</td>
                  <td className="p-3 border text-center">{t.priority}</td>
                  <td className="p-3 border text-center">
                    <span className="inline-flex items-center gap-1 text-red-500">
                      ● {t.status}
                    </span>
                  </td>
                  <td className="p-3 border text-center">
                    <button className="text-gray-700 hover:text-black">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <label>Show</label>
            <select className="border rounded px-2 py-1 bg-white">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
          <div>
            {tickets.length === 0 ? (
              "No entries to show"
            ) : (
              <>
                Showing 1 to {tickets.length} of {tickets.length} entries
                <span className="ml-4 text-gray-400">Previous</span>
                <span className="ml-2 text-gray-400">Next</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
