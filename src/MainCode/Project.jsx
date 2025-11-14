import React, { useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    shortCode: "",
    projectName: "",
    startDate: "",
    deadline: "",
    noDeadline: false,
    category: "",
    department: "",
    client: "",
    summary: "",
    notes: "",
    ganttChart: "disable",
    taskBoard: "disable",
    taskApproval: "disable",
    label: "",
    publicProject: false,
    members: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

 const handleSave = () => {
  setProjects((prev) => [...prev, formData]); // add new project to list
  setFormData(initialForm); // clear form fields
  setShowForm(false); // hide form
};


  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Projects</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Project
            </button>
          )}
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
            Project Template
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
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Add Project</h3>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label>Short Code</label>
              <input
                type="text"
                value={formData.shortCode}
                onChange={(e) => handleInput("shortCode", e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Project Name</label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => handleInput("projectName", e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleInput("startDate", e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Deadline</label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => handleInput("deadline", e.target.value)}
                className="border px-3 py-2 rounded"
              />
              <label className="inline-flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={formData.noDeadline}
                  onChange={(e) => handleInput("noDeadline", e.target.checked)}
                />
                There is no project deadline
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <label>Project Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInput("category", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Department</label>
              <select
                value={formData.department}
                onChange={(e) => handleInput("department", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Client</label>
              <select
                value={formData.client}
                onChange={(e) => handleInput("client", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label>Project Summary</label>
              <textarea
                value={formData.summary}
                onChange={(e) => handleInput("summary", e.target.value)}
                className="border px-3 py-2 rounded h-24"
              />
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label>Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => handleInput("notes", e.target.value)}
                className="border px-3 py-2 rounded h-24"
              />
            </div>
          </div>

          {/* Project Settings */}
          <h4 className="text-md font-semibold mt-6">Project Settings</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <label>Public Gantt Chart</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="ganttChart"
                    value="enable"
                    checked={formData.ganttChart === "enable"}
                    onChange={(e) => handleInput("ganttChart", e.target.value)}
                  />
                  Enable
                </label>
                <label>
                  <input
                    type="radio"
                    name="ganttChart"
                    value="disable"
                    checked={formData.ganttChart === "disable"}
                    onChange={(e) => handleInput("ganttChart", e.target.value)}
                  />
                  Disable
                </label>
              </div>
            </div>

            <div>
              <label>Public Task Board</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="taskBoard"
                    value="enable"
                    checked={formData.taskBoard === "enable"}
                    onChange={(e) => handleInput("taskBoard", e.target.value)}
                  />
                  Enable
                </label>
                <label>
                  <input
                    type="radio"
                    name="taskBoard"
                    value="disable"
                    checked={formData.taskBoard === "disable"}
                    onChange={(e) => handleInput("taskBoard", e.target.value)}
                  />
                  Disable
                </label>
              </div>
            </div>

            <div>
              <label>Task needs approval by Admin/Project Admin</label>
              <div className="flex gap-4 mt-1">
                <label>
                  <input
                    type="radio"
                    name="taskApproval"
                    value="enable"
                    checked={formData.taskApproval === "enable"}
                    onChange={(e) => handleInput("taskApproval", e.target.value)}
                  />
                  Enable
                </label>
                <label>
                  <input
                    type="radio"
                    name="taskApproval"
                    value="disable"
                    checked={formData.taskApproval === "disable"}
                                        onChange={(e) => handleInput("taskApproval", e.target.value)}
                  />
                  Disable
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label>Label</label>
              <select
                value={formData.label}
                onChange={(e) => handleInput("label", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={formData.publicProject}
                onChange={(e) => handleInput("publicProject", e.target.checked)}
              />
              <label>Create Public Project</label>
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <label>Add Project Members</label>
              <select
                value={formData.members}
                onChange={(e) => handleInput("members", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Nothing selected</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSave}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Save
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

      {/* Table */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto mt-4">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border text-left">#</th>
                <th className="p-3 border text-left">Code</th>
                <th className="p-3 border text-left">Project Name</th>
                <th className="p-3 border text-left">Members</th>
                <th className="p-3 border text-left">Start Date</th>
                <th className="p-3 border text-left">Deadline</th>
                <th className="p-3 border text-left">Client</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Action</th>
              </tr>
            </thead>
           <tbody>
  {projects.length === 0 ? (
    <tr>
      <td colSpan="9" className="text-center p-4 text-gray-500">
        No projects available
      </td>
    </tr>
  ) : (
    projects.map((project, index) => (
      <tr key={index}>
        <td className="p-3 border text-center">{index + 1}</td>
        <td className="p-3 border text-center">{project.shortCode}</td>
        <td className="p-3 border text-center">{project.projectName}</td>
        <td className="p-3 border text-center">{project.members || "-"}</td>
        <td className="p-3 border text-center">{project.startDate}</td>
        <td className="p-3 border text-center">{project.deadline || "-"}</td>
        <td className="p-3 border text-center">{project.client || "-"}</td>
        <td className="p-3 border text-center">
          {project.taskApproval === "enable" ? "Active" : "Pending"}
        </td>
        <td className="p-3 border text-center">
          <button className="text-gray-700 border px-2 py-1 rounded text-sm hover:bg-gray-100">
            View
          </button>
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

export default Project;

