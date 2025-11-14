import React, { useState } from "react";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    employeeId: "",
    salutation: "",
    name: "",
    email: "",
    profilePicture: null,
    dob: "",
    designation: "",
    department: "",
    country: "",
    mobile: "",
    gender: "",
    joiningDate: "",
    reportingTo: "",
    language: "English",
    userRole: "Employee",
    address: "",

    // Other details
    loginAllowed: "Yes",
    emailNotifications: "Yes",
    hourlyRate: "",
    slackId: "",
    skills: "",
    probationEndDate: "",
    noticeStartDate: "",
    noticeEndDate: "",
    employmentType: "",
    maritalStatus: "",
    businessAddress: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleAddEmployeeOpen = () => {
    setFormData(initialForm);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFile = (key, file) => {
    setFormData((prev) => ({ ...prev, [key]: file }));
  };

  const handleSave = () => {
    const newEmployee = {
      id: Date.now(),
      employeeId: formData.employeeId,
      name: formData.name,
      email: formData.email,
      userRole: formData.userRole,
      reportingTo: formData.reportingTo,
      status: "Active",
    };
    setEmployees((prev) => [...prev, newEmployee]);
    setShowForm(false);
  };

  const handleSaveAndAddMore = () => {
    handleSave();
    setFormData(initialForm);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Employees</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Employees</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={handleAddEmployeeOpen}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Employee
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            + Invite Employee
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Import
          </button>
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Export
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-8">
          <h3 className="text-lg font-semibold">Add Employee</h3>

          {/* Account Details */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-800">Account Details</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Employee ID", "employeeId", "text"],
                ["Salutation", "salutation", "text"],
                ["Employee Name", "name", "text"],
                ["Employee Email", "email", "email"],
                ["Date of Birth", "dob", "date"],
                ["Designation", "designation", "text"],
                ["Department", "department", "text"],
                ["Country", "country", "text"],
                ["Mobile", "mobile", "text"],
                ["Gender", "gender", "text"],
                ["Joining Date", "joiningDate", "date"],
                ["Reporting To", "reportingTo", "text"],
                ["Language", "language", "text"],
                ["User Role", "userRole", "text"],
                ["Address", "address", "text"],
              ].map(([label, key, type]) => (
                <div key={key} className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type={type}
                    value={formData[key]}
                    onChange={(e) => handleInput(key, e.target.value)}
                    placeholder={`Enter ${label.toLowerCase()}...`}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              ))}
              {/* Profile Picture */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile("profilePicture", e.target.files?.[0] || null)}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Other Details */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-800">Other Details</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                ["Hourly Rate", "hourlyRate", "text"],
                ["Slack Member ID", "slackId", "text"],
                ["Skills", "skills", "text"],
                ["Probation End Date", "probationEndDate", "date"],
                ["Notice Period Start Date", "noticeStartDate", "date"],
                ["Notice Period End Date", "noticeEndDate", "date"],
                ["Employment Type", "employmentType", "text"],
                ["Marital Status", "maritalStatus", "text"],
                ["Business Address", "businessAddress", "text"],
              ].map(([label, key, type]) => (
                <div key={key} className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">{label}</label>
                  <input
                    type={type}
                    value={formData[key]}
                    onChange={(e) => handleInput(key, e.target.value)}
                    placeholder={`Enter ${label.toLowerCase()}...`}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              ))}

              {/* Login Allowed */}
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">Login Allowed?</span>
                <div className="flex gap-4">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="loginAllowed"
                        value={opt}
                        checked={formData.loginAllowed === opt}
                        onChange={(e) => handleInput("loginAllowed", e.target.value)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Email Notifications */}
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">Receive Email Notifications?</span>
                <div className="flex gap-4">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name="emailNotifications"
                        value={opt}
                        checked={formData.emailNotifications === opt}
                        onChange={(e) => handleInput("emailNotifications", e.target.value)}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
                    {/* Actions */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Save
            </button>
            <button
              onClick={handleSaveAndAddMore}
              className="bg-white border px-4 py-2 rounded hover:bg-gray-100"
            >
              Save & Add More
            </button>
            <button
              onClick={handleCancel}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Employee Table */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">
                  <input type="checkbox" />
                </th>
                <th className="p-3 border text-left">Employee ID</th>
                <th className="p-3 border text-left">Name</th>
                <th className="p-3 border text-left">Email</th>
                <th className="p-3 border text-left">User Role</th>
                <th className="p-3 border text-left">Reporting To</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center p-4 text-gray-500">
                    No employees found
                  </td>
                </tr>
              ) : (
                employees.map((emp, index) => (
                  <tr key={emp.id}>
                    <td className="p-3 border">
                      <input type="checkbox" />
                    </td>
                    <td className="p-3 border">{emp.employeeId}</td>
                    <td className="p-3 border">{emp.name}</td>
                    <td className="p-3 border">{emp.email}</td>
                    <td className="p-3 border">{emp.userRole}</td>
                    <td className="p-3 border">{emp.reportingTo}</td>
                    <td className="p-3 border">{emp.status}</td>
                    <td className="p-3 border">
                      <div className="flex gap-2">
                        <button className="text-blue-500 hover:text-blue-700 text-sm">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700 text-sm">
                          Delete
                        </button>
                      </div>
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

export default Employee;


         
