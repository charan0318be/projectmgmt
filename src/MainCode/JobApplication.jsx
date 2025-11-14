import React, { useState } from "react";
import { MdAdd, MdFileDownload } from "react-icons/md";

const JobApplication = () => {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");
  const [applications, setApplications] = useState([]); // ✅ Initially empty

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Job Applications</h1>
          <p className="text-sm text-gray-500">Home &gt; Job Applications</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Upgrade Plan</button>
      </div>

      {/* Filters + Actions */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap items-center gap-4">
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Duration</option>
        </select>
        <input type="date" className="border rounded px-3 py-2 text-sm text-gray-700" />
        <input type="date" className="border rounded px-3 py-2 text-sm text-gray-700" />
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Status</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Job</option>
        </select>
        <input
          type="text"
          placeholder="Search applications..."
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1"
        >
          <MdAdd />
          Add Job Application
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">Quick Add Form</button>
        <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">Import</button>
        <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm flex items-center gap-1">
          <MdFileDownload /> Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow p-4 relative">
        <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
          Hosting Suggestions
        </div>
        <table className="w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Jobs</th>
              <th className="px-3 py-2">Worksite</th>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-4 italic">
                  No job applications found.
                </td>
              </tr>
            ) : (
              applications.map((app, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 py-2">{app.name}</td>
                  <td className="px-3 py-2">{app.job}</td>
                  <td className="px-3 py-2">{app.worksite}</td>
                  <td className="px-3 py-2">{app.date}</td>
                  <td className="px-3 py-2">{app.status}</td>
                  <td className="px-3 py-2">
                    <button className="text-blue-600 text-sm">View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {applications.length > 0 && (
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <span>Showing {applications.length} entries</span>
            <div className="flex gap-2">
              <button className="px-2 py-1 bg-gray-200 rounded">Previous</button>
              <button className="px-2 py-1 bg-blue-600 text-white rounded">1</button>
              <button className="px-2 py-1 bg-gray-200 rounded">Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplication;
