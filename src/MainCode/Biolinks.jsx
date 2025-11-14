import React, { useState } from "react";
import { MdAdd, MdFileDownload } from "react-icons/md";

const Biolinks = () => {
  const [showModal, setShowModal] = useState(false);
  const [biolinkUrl, setBiolinkUrl] = useState("");
  const [biolinks, setBiolinks] = useState([]); // initially empty table

  // Handle Save button click
  const handleSave = () => {
    if (biolinkUrl.trim()) {
      const newBiolink = {
        page: biolinkUrl,
        views: 0,
        createdOn: new Date().toLocaleDateString(),
        status: "Active",
      };
      setBiolinks([...biolinks, newBiolink]);
      setBiolinkUrl("");
      setShowModal(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Biolinks</h1>
          <p className="text-sm text-gray-500">Home &gt; Biolinks</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
          Upgrade Plan
        </button>
      </div>

      {/* Search + Actions */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Start typing to search"
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm"
        >
          <MdAdd />
          Add Biolink Page
        </button>
        <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
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
              <th className="px-3 py-2">Biolink page</th>
              <th className="px-3 py-2">Total page views</th>
              <th className="px-3 py-2">Created on</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {biolinks.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-400 italic py-6"
                >
                  No biolinks available
                </td>
              </tr>
            ) : (
              biolinks.map((link, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="px-3 py-2 text-blue-600">{link.page}</td>
                  <td className="px-3 py-2">{link.views}</td>
                  <td className="px-3 py-2">{link.createdOn}</td>
                  <td className="px-3 py-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                    {link.status}
                  </td>
                  <td className="px-3 py-2">
                    <button className="text-blue-600 text-sm">View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <label>Show</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">Previous</button>
            <button className="px-2 py-1 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-2 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Add biolink
            </h2>
            <label className="text-sm text-gray-700 font-medium block mb-1">
              Biolink page URL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={biolinkUrl}
              onChange={(e) => setBiolinkUrl(e.target.value)}
              placeholder="https://demo-saas.worksuite.biz/bio/"
              className="border rounded px-3 py-2 text-sm text-gray-700 w-full mb-6"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
              >
                Close
              </button>
              <button
                onClick={handleSave}
                className="bg-red-600 text-white px-4 py-2 rounded text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Biolinks;
