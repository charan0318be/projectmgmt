import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Credit Note</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Credit Note</h2>
        <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
          Export
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
          <option>Client</option>
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

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border text-left">Credit Note</th>
              <th className="p-3 border text-left">Invoice</th>
              <th className="p-3 border text-left">Name</th>
              <th className="p-3 border text-left">Total</th>
              <th className="p-3 border text-left">Credit Note Date</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {notes.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No data available in table
                </td>
              </tr>
            ) : (
              notes.map((note, i) => (
                <tr key={i}>
                  <td className="p-3 border text-center">{note.code}</td>
                  <td className="p-3 border text-center">{note.invoice}</td>
                  <td className="p-3 border text-center">{note.name}</td>
                  <td className="p-3 border text-center">{note.total}</td>
                  <td className="p-3 border text-center">{note.date}</td>
                  <td className="p-3 border text-center">{note.status}</td>
                  <td className="p-3 border text-center">
                    <button className="text-gray-700 border px-2 py-1 rounded text-sm hover:bg-gray-100">
                      View
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
            Showing 0 to 0 of 0 entries
            <span className="ml-4 text-gray-400">Previous</span>
            <span className="ml-2 text-gray-400">Next</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
