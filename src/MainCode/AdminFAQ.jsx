import React from 'react';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const AdminFAQ = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 border-r">
        <h2 className="text-lg font-semibold mb-4">Admin FAQ</h2>
        <div className="mb-4">
          <div className="flex items-center border rounded px-2 py-1">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-sm"
            />
          </div>
        </div>
        <button className="w-full text-left px-2 py-1 rounded bg-gray-200 text-sm">
          All
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-2">Admin FAQ &gt; Home &gt; Admin FAQ</div>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Admin FAQ</h1>
          <div className="flex gap-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
              + Add Admin FAQ
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded text-sm">
              Manage Category
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Start typing to search"
            className="border p-2 rounded w-64 text-sm"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left p-2 border">#</th>
                <th className="text-left p-2 border">Article Heading</th>
                <th className="text-left p-2 border">Article Category</th>
                <th className="text-left p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border text-center" colSpan="4">
                  No record found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminFAQ;
