import React, { useState } from "react";
import {
  MdAdd,
  MdFileDownload,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdUndo,
  MdRedo,
} from "react-icons/md";

const Notice = () => {
  const [showForm, setShowForm] = useState(false);
  const [recipientType, setRecipientType] = useState("employee");
  const [notices, setNotices] = useState([]); // initially empty table

  const [formData, setFormData] = useState({
    heading: "",
    department: "",
    employee: "",
    details: "",
    date: new Date().toLocaleDateString(),
  });

  // Save notice
  const handleSave = () => {
    if (!formData.heading.trim()) return alert("Please enter notice heading!");

    const newNotice = {
      heading: formData.heading,
      date: new Date().toLocaleDateString(),
      type: recipientType === "employee" ? "Employee" : "Client",
    };

    setNotices([...notices, newNotice]);
    setFormData({
      heading: "",
      department: "",
      employee: "",
      details: "",
      date: "",
    });
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Notice Board</h1>
          <p className="text-sm text-gray-500">Home &gt; Notice Board</p>
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
        <input
          type="date"
          className="border rounded px-3 py-2 text-sm text-gray-700"
        />
        <input
          type="date"
          className="border rounded px-3 py-2 text-sm text-gray-700"
        />
        <input
          type="text"
          placeholder="Search notices..."
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm"
        >
          <MdAdd />
          Add Notice
        </button>
        <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
          <MdFileDownload />
          Export
        </button>
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
                <th className="px-3 py-2">
                  <input type="checkbox" />
                </th>
                <th className="px-3 py-2">Notice</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {notices.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-400 italic py-6"
                  >
                    No notices available
                  </td>
                </tr>
              ) : (
                notices.map((notice, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">
                      <input type="checkbox" />
                    </td>
                    <td className="px-3 py-2">{notice.heading}</td>
                    <td className="px-3 py-2">{notice.date}</td>
                    <td className="px-3 py-2">{notice.type}</td>
                    <td className="px-3 py-2">
                      <button className="text-blue-600 text-sm">View</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded shadow p-6 space-y-6 relative">
          <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
            Hosting Suggestions
          </div>

          <h2 className="text-lg font-semibold text-gray-800">Add Notice</h2>

          {/* Toggle: To Employees / Clients */}
          <div className="flex gap-4 text-sm">
            <button
              onClick={() => setRecipientType("employee")}
              className={`px-4 py-2 rounded ${
                recipientType === "employee"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              To Employees
            </button>
            <button
              onClick={() => setRecipientType("client")}
              className={`px-4 py-2 rounded ${
                recipientType === "client"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              To Clients
            </button>
          </div>

          {/* Notice Heading */}
          <input
            type="text"
            value={formData.heading}
            onChange={(e) =>
              setFormData({ ...formData, heading: e.target.value })
            }
            placeholder="Notice Heading (e.g. New year celebrations at office)"
            className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
          />

          {/* Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className="border rounded px-3 py-2 text-sm text-gray-700"
            >
              <option value="">Department</option>
              <option value="HR">HR</option>
              <option value="IT">IT</option>
              <option value="Sales">Sales</option>
            </select>

            <select
              value={formData.employee}
              onChange={(e) =>
                setFormData({ ...formData, employee: e.target.value })
              }
              className="border rounded px-3 py-2 text-sm text-gray-700"
            >
              <option value="">Select Employee</option>
              <option value="John">John</option>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </div>

          {/* Rich Text Toolbar + Textarea */}
          <div>
            <div className="flex gap-2 mb-2 text-gray-600">
              <MdFormatBold />
              <MdFormatItalic />
              <MdFormatUnderlined />
              <MdFormatAlignLeft />
              <MdFormatAlignCenter />
              <MdFormatAlignRight />
              <MdUndo />
              <MdRedo />
            </div>
            <textarea
              rows={4}
              value={formData.details}
              onChange={(e) =>
                setFormData({ ...formData, details: e.target.value })
              }
              placeholder="Notice Details"
              className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Add File</label>
            <input
              type="file"
              className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className="bg-red-600 text-white px-4 py-2 rounded text-sm"
            >
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

export default Notice;
