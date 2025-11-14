import React, { useState, useEffect } from "react";

const RecruitDashboard = () => {
  const [applications, setApplications] = useState([]); // Initially empty array

  useEffect(() => {
    // Simulate future API fetch (optional)
    // fetch("/api/applications").then(res => res.json()).then(setApplications);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Recruitment Dashboard</h1>
          <p className="text-sm text-gray-500">Home &gt; Recruitment</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
          Upgrade Plan
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {[
          "Total Openings",
          "Total Applications",
          "Total Hired",
          "Total Rejected",
          "New Applications",
          "Shortlisted Candidates",
          "Today's Interview",
        ].map((label, i) => (
          <div key={i} className="bg-white rounded shadow p-4 text-center">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-xl font-semibold text-gray-800">0</p>
          </div>
        ))}
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Total Applications
        </h2>

        {applications.length === 0 ? (
          <p className="text-center text-gray-400 italic py-6">
            No applications found
          </p>
        ) : (
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2">Jobs</th>
                <th className="px-3 py-2">Interview</th>
                <th className="px-3 py-2">Phone Screen</th>
                <th className="px-3 py-2">Interviewing</th>
                <th className="px-3 py-2">Hired</th>
                <th className="px-3 py-2">Rejected</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 py-2">{app.job}</td>
                  <td className="px-3 py-2">{app.interview}</td>
                  <td className="px-3 py-2">{app.phone}</td>
                  <td className="px-3 py-2">{app.interviewing}</td>
                  <td className="px-3 py-2">{app.hired}</td>
                  <td className="px-3 py-2">{app.rejected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>
            Showing {applications.length > 0 ? 1 : 0} to{" "}
            {applications.length} of {applications.length} entries
          </span>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">Previous</button>
            <button className="px-2 py-1 bg-blue-600 text-white rounded">1</button>
            <button className="px-2 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitDashboard;
