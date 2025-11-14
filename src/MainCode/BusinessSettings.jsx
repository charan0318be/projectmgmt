import React from "react";
import { FaPlus, FaInfoCircle } from "react-icons/fa";

const BusinessSettings = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Info Banner */}
      <div className="bg-blue-100 text-blue-900 border border-blue-300 px-4 py-3 rounded-md flex items-start mb-6">
        <FaInfoCircle className="mt-1 mr-2" />
        <p className="text-sm">
          The attendance and other modules utilize the default business address,
          but when creating records, you have the option to select a different
          address as default address.
        </p>
      </div>

      {/* Add New Address Button */}
      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded flex items-center gap-2 mb-6">
        <FaPlus /> Add New Address
      </button>

      {/* Business Address Table */}
      <div className="bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold border-b px-6 py-3">
          Business Address
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="px-6 py-3 border-b">#</th>
                <th className="px-6 py-3 border-b">Location</th>
                <th className="px-6 py-3 border-b">Address</th>
                <th className="px-6 py-3 border-b">Country</th>
                <th className="px-6 py-3 border-b">Tax Name</th>
                <th className="px-6 py-3 border-b">Default</th>
                <th className="px-6 py-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-700 text-sm hover:bg-gray-50">
                <td className="px-6 py-3 border-b">1</td>
                <td className="px-6 py-3 border-b">Worksuite</td>
                <td className="px-6 py-3 border-b">Your Company address here</td>
                <td className="px-6 py-3 border-b">--</td>
                <td className="px-6 py-3 border-b">--</td>
                <td className="px-6 py-3 border-b text-red-600 font-semibold flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  Default
                </td>
                <td className="px-6 py-3 border-b text-gray-500">--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Hosting Suggestions Button */}
      <button className="fixed right-8 bottom-8 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full shadow-lg">
        Hosting Suggestions
      </button>
    </div>
  );
};

export default BusinessSettings;
