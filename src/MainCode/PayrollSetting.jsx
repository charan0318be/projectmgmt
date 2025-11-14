import React, { useState } from 'react';

const PayrollSetting = () => {
  const [activeTab, setActiveTab] = useState('Salary Components');
  const [showComponentForm, setShowComponentForm] = useState(false);
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [showTdsForm, setShowTdsForm] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md relative">
      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b text-sm">
        {[
          'Salary Components',
          'Salary Groups',
          'Salary TDS',
          'Salary Payment Method',
          'Salary Slip Data',
          'Payroll Currency Setting',
        ].map((tab) => (
          <button
            key={tab}
            className={`pb-2 ${
              activeTab === tab ? 'border-b-2 border-red-500 text-red-600 font-semibold' : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Salary Components Tab */}
      {activeTab === 'Salary Components' && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Salary Components</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setShowComponentForm(true)}
            >
              + Add New Salary Components
            </button>
          </div>
          <table className="w-full text-left border-collapse mb-4">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="p-2 border">Component Name</th>
                <th className="p-2 border">Component Type</th>
                <th className="p-2 border">Component Value</th>
                <th className="p-2 border">Value Type</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="text-center text-gray-500 p-6 border">
                  No salary components added
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {/* Salary Groups Tab */}
      {activeTab === 'Salary Groups' && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Salary Groups</h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => setShowGroupForm(true)}
            >
              Add New Salary Groups
            </button>
          </div>
          <table className="w-full text-left border-collapse mb-4">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Salary Components</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" className="text-center text-gray-500 p-6 border">
                  No salary group added
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {/* Salary TDS Tab */}
      {activeTab === 'Salary TDS' && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Salary TDS</h2>
            <div className="flex gap-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => setShowTdsForm(true)}
              >
                + Add New Salary TDS
              </button>
              <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
                + Salary TDS Status
              </button>
            </div>
          </div>
          <table className="w-full text-left border-collapse mb-4">
            <thead>
              <tr className="bg-gray-100 text-sm">
                <th className="p-2 border">Annual Salary From</th>
                <th className="p-2 border">Annual Salary Upto</th>
                <th className="p-2 border">Salary Percent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" className="text-center text-gray-500 p-6 border">
                  No salary tds added
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}

      {/* Hosting Suggestions */}
      <div className="mt-6 flex justify-end">
        <button className="text-blue-500 hover:underline">Hosting Suggestions</button>
      </div>

      {/* Component Form Popup */}
      {showComponentForm && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Salary Components</h3>
            <div className="grid grid-cols-2 gap-4">
              <label className="text-sm col-span-2">
                Salary Components *
                <input type="text" className="w-full mt-1 px-3 py-2 rounded border border-gray-400" />
              </label>
              <label className="text-sm col-span-2">
                Component Type *
                <select className="w-full mt-1 px-3 py-2 rounded border border-gray-400">
                  <option>Earnings</option>
                  <option>Deductions</option>
                </select>
              </label>
              <label className="text-sm col-span-2">
                Value Type *
                <select className="w-full mt-1 px-3 py-2 rounded border border-gray-400">
                  <option>Fixed</option>
                  <option>Percentage</option>
                </select>
              </label>
              {['Monthly', 'Weekly', 'Bi-Weekly', 'Semi-monthly'].map((label) => (
                <label key={label} className="text-sm col-span-1">
                  Component Value ({label})
                  <input type="number" defaultValue="0" className="w-full mt-1 px-3 py-2 rounded border border-gray-400" />
                </label>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" onClick={() => setShowComponentForm(false)}>
                Close
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Group Form Popup */}
      {showGroupForm && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Salary Group</h3>
            <label className="text-sm block mb-4">
              Name
              <input type="text" className="w-full mt-1 px-3 py-2 rounded border border-gray-400" />
            </label>
            <label className="text-sm block mb-4">
              Assign Salary Components
              <select className="w-full mt-1 px-3 py-2 rounded border border-gray-400">
                <option>Nothing selected</option>
              </select>
            </label>
            <div className="mt-6 flex justify-end gap-4">
              <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" onClick={() => setShowGroupForm(false)}>
                Close
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Save</button>
            </div>
          </div>
        </div>
      )}

            {/* TDS Form Popup */}
      {showTdsForm && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Salary TDS</h3>
            <div className="space-y-4">
              <label className="block text-sm">
                Annual Salary From *
                <input
                  type="number"
                  className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
                />
              </label>
              <label className="block text-sm">
                Annual Salary Upto *
                <input
                  type="number"
                  className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
                />
              </label>
              <label className="block text-sm">
                Salary Percent *
                <input
                  type="number"
                  className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
                />
              </label>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowTdsForm(false)}
              >
                Close
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollSetting;
