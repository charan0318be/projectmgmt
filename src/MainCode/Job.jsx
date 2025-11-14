import React, { useState } from "react";
import {
  MdAdd,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatListBulleted,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdUndo,
  MdRedo,
} from "react-icons/md";

const Job = () => {
  const [showForm, setShowForm] = useState(false);
  const [requiredFields, setRequiredFields] = useState([]);
  const [jobs, setJobs] = useState([]); // ✅ Empty table initially

  const toggleRequired = (field) => {
    setRequiredFields((prev) =>
      prev.includes(field)
        ? prev.filter((f) => f !== field)
        : [...prev, field]
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Jobs</h1>
          <p className="text-sm text-gray-500">Home &gt; Jobs</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
          Upgrade Plan
        </button>
      </div>

      {/* Filters + Actions */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap items-center gap-4">
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Duration</option>
        </select>
        <input type="date" className="border rounded px-3 py-2 text-sm text-gray-700" />
        <input type="date" className="border rounded px-3 py-2 text-sm text-gray-700" />
        <select className="border rounded px-3 py-2 text-sm text-gray-700">
          <option>Recruiter</option>
        </select>
        <input
          type="text"
          placeholder="Search jobs..."
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm"
        >
          <MdAdd />
          Add Job
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow p-4 relative">
        <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
          Hosting Suggestions
        </div>

        {jobs.length === 0 ? (
          <p className="text-center text-gray-400 italic py-6">
            No jobs available
          </p>
        ) : (
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2">Job Title</th>
                <th className="px-3 py-2">Recruiter</th>
                <th className="px-3 py-2">Start Date</th>
                <th className="px-3 py-2">End Date</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 py-2">{job.title}</td>
                  <td className="px-3 py-2">{job.recruiter}</td>
                  <td className="px-3 py-2">{job.startDate}</td>
                  <td className="px-3 py-2">{job.endDate}</td>
                  <td className="px-3 py-2">{job.status}</td>
                  <td className="px-3 py-2">
                    <button className="text-blue-600 text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>
            Showing {jobs.length > 0 ? 1 : 0} to {jobs.length} of {jobs.length} entries
          </span>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">Previous</button>
            <button className="px-2 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-2 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>

      {/* Modal Form (same as before) */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl space-y-6 relative">
            <h2 className="text-lg font-semibold text-gray-800">Add Job</h2>
            {/* (form code same as before) */}
            <div className="flex justify-end gap-4 mt-6">
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
        </div>
      )}
    </div>
  );
};

export default Job;
