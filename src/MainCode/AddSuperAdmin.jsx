import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import SuperAdminForm from './SuperAdminForm';

const AddSuperAdmin = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => setShowForm(true);
  const handleBackClick = () => setShowForm(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">Home &gt; Super Admin</div>

      {!showForm ? (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Super Admin</h1>
            <button
              onClick={handleAddClick}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Super Admin
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex justify-end mb-4">
            <div className="flex items-center border rounded px-3 py-2 w-72 bg-white shadow-sm">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Start typing to search"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="text-left p-3 border">Name</th>
                  <th className="text-left p-3 border">Email</th>
                  <th className="text-left p-3 border">User Role</th>
                  <th className="text-left p-3 border">Status</th>
                  <th className="text-left p-3 border">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border"></td>
                  <td className="p-3 border"></td>
                  <td className="p-3 border"></td>
                  <td className="p-3 border"></td>
                  <td className="p-3 border flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 text-sm">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select className="border rounded px-2 py-1 bg-white shadow-sm">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded bg-white shadow-sm hover:bg-gray-100">Previous</button>
              <button className="px-3 py-1 border rounded bg-gray-200 font-semibold">1</button>
              <button className="px-3 py-1 border rounded bg-white shadow-sm hover:bg-gray-100">Next</button>
            </div>
          </div>
        </>
      ) : (
        <SuperAdminForm onBack={handleBackClick} />
      )}
    </div>
  );
};

export default AddSuperAdmin;
