import React, { useState } from "react";
import {
  MdAdd,
  MdFileDownload,
  MdCloudUpload,
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

const Offer = () => {
  const [showForm, setShowForm] = useState(false);
  const [signatureRequired, setSignatureRequired] = useState(false);
  const [addSalaryStructure, setAddSalaryStructure] = useState(false);
  const [offerLetters, setOfferLetters] = useState([]); // 🟢 initially empty

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Offer Letters</h1>
          <p className="text-sm text-gray-500">Home &gt; Offer Letters</p>
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
        <input
          type="text"
          placeholder="Search offer letters..."
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-3 py-2 rounded text-sm flex items-center gap-1"
        >
          <MdAdd />
          Add Offer Letter
        </button>
        <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
          <MdFileDownload />
          Export
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
              <th className="px-3 py-2">Sr. No.</th>
              <th className="px-3 py-2">Job Title</th>
              <th className="px-3 py-2">Job Applicant</th>
              <th className="px-3 py-2">Team Lead</th>
              <th className="px-3 py-2">Offer Expire On</th>
              <th className="px-3 py-2">Expected Joining Date</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* 🟢 Render data if available, otherwise show 'No data' message */}
            {offerLetters.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-400 italic">
                  — No offer letters available —
                </td>
              </tr>
            ) : (
              offerLetters.map((offer, index) => (
                <tr key={index} className="border-b">
                  <td className="px-3 py-2">{index + 1}</td>
                  <td className="px-3 py-2">{offer.jobTitle}</td>
                  <td className="px-3 py-2">{offer.candidate}</td>
                  <td className="px-3 py-2">{offer.teamLead}</td>
                  <td className="px-3 py-2">{offer.expiryDate}</td>
                  <td className="px-3 py-2">{offer.joiningDate}</td>
                  <td className="px-3 py-2">{offer.status}</td>
                  <td className="px-3 py-2 text-blue-600 cursor-pointer">View</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl space-y-6 relative">
            <h2 className="text-lg font-semibold text-gray-800">Add Offer Letter</h2>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="border rounded px-3 py-2 text-sm text-gray-700 w-full">
                <option>Job</option>
              </select>
              <select className="border rounded px-3 py-2 text-sm text-gray-700 w-full">
                <option>Job Applicant</option>
              </select>
              <input type="date" className="border rounded px-3 py-2 text-sm text-gray-700 w-full" />
              <input type="date" className="border rounded px-3 py-2 text-sm text-gray-700 w-full" />
              <input type="text" placeholder="Salary" className="border rounded px-3 py-2 text-sm w-full" />
              <input type="text" placeholder="Rate" className="border rounded px-3 py-2 text-sm w-full" />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
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

export default Offer;
