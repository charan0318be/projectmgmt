import React, { useState } from 'react';
import { FaBuilding, FaEdit, FaTrash } from 'react-icons/fa';
import CompanyForm from './CompanyForm';

const Company = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleBackClick = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Company</h1>
        <FaBuilding className="text-2xl text-red-500" />
      </div>

      {!showForm ? (
        <>
          {/* Search Bars */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Duration: Start Date to End Date" className="border p-2 rounded" />
            <input type="text" placeholder="Start typing to search" className="border p-2 rounded" />
          </div>

          {/* Add Company Button */}
          <div className="mb-6">
            <button onClick={handleAddClick} className="bg-red-500 text-white px-4 py-2 rounded">
              Add Company
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded shadow">
              <thead className="bg-gray-200">
                <tr>
                  <th className="text-left p-2 border">ID</th>
                  <th className="text-left p-2 border">Company Name</th>
                  <th className="text-left p-2 border">Package</th>
                  <th className="text-left p-2 border">Details</th>
                  <th className="text-left p-2 border">Status</th>
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
                  <td className="p-2 border flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
                    <button className="text-red-500 hover:text-red-700"><FaTrash /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <CompanyForm onBack={handleBackClick} />
      )}
    </div>
  );
};

export default Company;
