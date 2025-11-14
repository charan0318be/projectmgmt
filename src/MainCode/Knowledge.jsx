import React, { useState } from "react";
import {
  MdAdd,
  MdSettings,
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

const Knowledge = () => {
  const [showForm, setShowForm] = useState(false);
  const [audience, setAudience] = useState("employee");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Knowledge Base</h1>
          <p className="text-sm text-gray-500">Home &gt; Knowledge Base</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Upgrade Plan</button>
      </div>

      {/* Actions */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap items-center gap-4">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm"
        >
          <MdAdd />
          Add New Article
        </button>
        <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
          <MdSettings />
          Manage Article Category
        </button>
        <input
          type="text"
          placeholder="Start typing to search"
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
      </div>

      {/* Form or Table */}
      {!showForm ? (
        <div className="bg-white rounded shadow p-4 relative">
          <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
            Hosting Suggestions
          </div>
          <table className="w-full text-sm text-left text-gray-700">
            <thead>
              <tr className="border-b">
                <th className="px-3 py-2">#</th>
                <th className="px-3 py-2">Article Heading</th>
                <th className="px-3 py-2">Article Category</th>
                <th className="px-3 py-2">To</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="text-center text-gray-400 italic py-6">
                  – No record found. –
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded shadow p-6 space-y-6 relative">
          <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
            Hosting Suggestions
          </div>

          <h2 className="text-lg font-semibold text-gray-800">Add Article</h2>

          {/* Audience Selection */}
          <div className="flex gap-4 text-sm">
            <button
              onClick={() => setAudience("employee")}
              className={`px-4 py-2 rounded ${audience === "employee" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              For Employees
            </button>
            <button
              onClick={() => setAudience("client")}
              className={`px-4 py-2 rounded ${audience === "client" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              For Clients
            </button>
          </div>

          {/* Article Heading */}
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Article Heading <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. New year celebrations at office"
              className="border rounded px-3 py-2 text-sm text-gray-700 w-full mt-1"
            />
          </div>

          {/* Article Category + Add */}
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label className="text-sm text-gray-700 font-medium">
                Article Category <span className="text-red-500">*</span>
              </label>
              <select className="border rounded px-3 py-2 text-sm text-gray-700 w-full mt-1">
                <option>--</option>
              </select>
            </div>
            <button className="mt-6 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
              Add
            </button>
          </div>

          {/* Description Editor */}
          <div>
            <label className="text-sm text-gray-700 font-medium">Description</label>
            <div className="flex gap-2 mb-2 text-gray-600 mt-1">
              <MdFormatBold />
              <MdFormatItalic />
              <MdFormatUnderlined />
              <MdFormatListBulleted />
              <MdFormatAlignLeft />
              <MdFormatAlignCenter />
              <MdFormatAlignRight />
              <MdUndo />
              <MdRedo />
            </div>
            <textarea
              rows={4}
              placeholder="Write your article description here..."
              className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
            />
          </div>

          {/* Upload File */}
          <div>
            <label className="text-sm text-gray-700 font-medium">Upload File</label>
            <input type="file" className="border rounded px-3 py-2 text-sm text-gray-700 w-full mt-1" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">Save</button>
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

export default Knowledge;
