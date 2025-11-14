import React, { useState } from "react";

const AppSetting = () => {
  const [activeTab, setActiveTab] = useState("app");
  const [showForm, setShowForm] = useState(false);
  const [clientSettings, setClientSettings] = useState([]);

  const [formData, setFormData] = useState({
    fieldName: "",
    required: false,
  });

  const handleAddSetting = () => {
    setClientSettings([...clientSettings, formData]);
    setShowForm(false);
    setFormData({ fieldName: "", required: false });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b">
        <button
          onClick={() => setActiveTab("app")}
          className={`pb-2 ${
            activeTab === "app"
              ? "border-b-2 border-red-500 text-red-600 font-semibold"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          App Settings
        </button>

        <button
          onClick={() => setActiveTab("client")}
          className={`pb-2 ${
            activeTab === "client"
              ? "border-b-2 border-red-500 text-red-600 font-semibold"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Client Sign up Settings
        </button>
      </div>

      {/* ---------------- APP SETTINGS TAB ---------------- */}
      {activeTab === "app" && (
        <div>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Date Format</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>d-m-Y (13-11-2025)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Time Format</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>12 Hour(s) (02:41 pm)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Datatable Row Limit</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>5</option>
                <option>10</option>
                <option>25</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Default Timezone</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>Asia/Kolkata</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Default Currency</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>$ (USD)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <select className="w-full border px-3 py-2 rounded">
                <option>English</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="inline-flex items-center text-sm">
              <input type="checkbox" className="mr-2" defaultChecked />
              Employee can export data
            </label>
          </div>

          <div className="flex justify-between items-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Save
            </button>
            <button className="text-blue-500 hover:underline">
              Hosting Suggestions
            </button>
          </div>
        </div>
      )}

      {/* ---------------- CLIENT SIGNUP TAB ---------------- */}
      {activeTab === "client" && (
        <div>
          {/* Add Setting Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Setting
            </button>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="border p-4 rounded mb-4 bg-gray-50">
              <div className="mb-3">
                <label className="text-sm font-medium">Field Name</label>
                <input
                  type="text"
                  className="border w-full p-2 rounded"
                  value={formData.fieldName}
                  onChange={(e) =>
                    setFormData({ ...formData, fieldName: e.target.value })
                  }
                />
              </div>

              <label className="inline-flex items-center text-sm mb-4">
                <input
                  type="checkbox"
                  checked={formData.required}
                  onChange={(e) =>
                    setFormData({ ...formData, required: e.target.checked })
                  }
                  className="mr-2"
                />
                Required
              </label>

              <div className="flex gap-3">
                <button
                  onClick={handleAddSetting}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Table */}
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border text-left">#</th>
                <th className="p-2 border text-left">Field Name</th>
                <th className="p-2 border text-left">Required</th>
              </tr>
            </thead>
            <tbody>
              {clientSettings.length === 0 ? (
                <tr>
                  <td colSpan="3" className="p-4 text-center text-gray-500">
                    No data found
                  </td>
                </tr>
              ) : (
                clientSettings.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{item.fieldName}</td>
                    <td className="p-2 border">
                      {item.required ? "Yes" : "No"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppSetting;
