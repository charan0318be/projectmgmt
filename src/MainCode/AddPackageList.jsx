import React from 'react';
import { FaBoxOpen, FaEdit, FaTrash } from 'react-icons/fa';

const AddPackageList = ({onAddClick}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar with icon */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FaBoxOpen className="text-2xl text-red-500" />
          <h1 className="text-2xl font-bold">Packages</h1>
        </div>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Start typing to search"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Add Package button */}
      <div className="mb-4">
        <button
          onClick={onAddClick} // 👈 this line switches to form
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Add Package
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-2 border">Name</th>
              <th className="text-left p-2 border">Monthly Price</th>
              <th className="text-left p-2 border">Annual Price</th>
              <th className="text-left p-2 border">Lifetime Price</th>
              <th className="text-left p-2 border">File Storage</th>
              <th className="text-left p-2 border">Max Employees</th>
              <th className="text-left p-2 border">Modules</th>
              <th className="text-left p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border"></td>
              <td className="p-2 border"></td>
              <td className="p-2 border"></td>
              <td className="p-2 border"></td>
              <td className="p-2 border"></td>
              <td className="p-2 border"></td>
              <td className="p-2 border"></td>
              <td className="p-2 border flex space-x-2">
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
    </div>
  );
};

export default AddPackageList;
