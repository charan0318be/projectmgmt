import React, { useState } from "react";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const initialForm = {
    title: "",
    category: "",
    project: "",
    startDate: "",
    dueDate: "",
    withoutDueDate: false,
    status: "",
    assignedTo: "",
    description: "",
    label: "",
    milestone: "",
    priority: "",
    makePrivate: false,
    billable: false,
    timeEstimate: false,
    dependent: false,
    file: null,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleInput = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFile = (file) => {
    setFormData((prev) => ({ ...prev, file }));
  };

 const handleSave = () => {
  setTasks((prev) => [...prev, formData]); // add new task to list
  setFormData(initialForm); // clear the form
  setShowForm(false); // hide form
};


  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        Home &gt; <span className="text-gray-700 font-medium">Tasks</span>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Tasks</h2>
        <div className="flex gap-2">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
            >
              + Add Task
            </button>
          )}
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            My Tasks
          </button>
          <button className="bg-white border px-4 py-2 rounded text-sm text-gray-700">
            Export
          </button>
        </div>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded shadow p-6 space-y-6">
          <h3 className="text-lg font-semibold">Task Info</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col gap-1">
              <label>Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInput("title", e.target.value)}
                placeholder="Enter a task title"
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Task Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleInput("category", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Project</label>
              <select
                value={formData.project}
                onChange={(e) => handleInput("project", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
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
              <label>Due Date</label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleInput("dueDate", e.target.value)}
                className="border px-3 py-2 rounded"
              />
              <label className="inline-flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={formData.withoutDueDate}
                  onChange={(e) => handleInput("withoutDueDate", e.target.checked)}
                />
                Without Due Date
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => handleInput("status", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Incomplete</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Assigned To</label>
              <select
                value={formData.assignedTo}
                onChange={(e) => handleInput("assignedTo", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">--</option>
              </select>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <label>Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInput("description", e.target.value)}
                className="border px-3 py-2 rounded h-24"
                placeholder="Write description..."
              />
            </div>
          </div>

          {/* Other Details */}
          <h4 className="text-md font-semibold mt-6">Other Details</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
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
            <div className="flex flex-col gap-1">
              <label>Milestones</label>
              <input
                type="text"
                value={formData.milestone}
                onChange={(e) => handleInput("milestone", e.target.value)}
                className="border px-3 py-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => handleInput("priority", e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option value="">Medium</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.makePrivate}
                  onChange={(e) => handleInput("makePrivate", e.target.checked)}
                />
                Make Private
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.billable}
                  onChange={(e) => handleInput("billable", e.target.checked)}
                />
                Billable
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.timeEstimate}
                  onChange={(e) => handleInput("timeEstimate", e.target.checked)}
                />
                Time Estimate
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.dependent}
                  onChange={(e) => handleInput("dependent", e.target.checked)}
                />
                Task is dependent on another task
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <label>Add File</label>
              <input
                type="file"
                onChange={(e) => handleFile(e.target.files?.[0] || null)}
                className="border px-3 py-2 rounded"
                         />
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
            onClick={() => {
              handleSave();
              setShowForm(true); // keep form open
            }}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
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

    {/* Table */}
    {!showForm && (
      <div className="bg-white rounded shadow overflow-x-auto mt-4">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border text-left">#</th>
              <th className="p-3 border text-left">Task</th>
              <th className="p-3 border text-left">Completed On</th>
              <th className="p-3 border text-left">Start Date</th>
              <th className="p-3 border text-left">Due Date</th>
              <th className="p-3 border text-left">Estimated Time</th>
              <th className="p-3 border text-left">Hours Logged</th>
              <th className="p-3 border text-left">Assigned To</th>
              <th className="p-3 border text-left">Status</th>
              <th className="p-3 border text-left">Action</th>
            </tr>
          </thead>
          <tbody>
  {tasks.length === 0 ? (
    <tr>
      <td colSpan="10" className="text-center p-4 text-gray-500">
        No tasks available
      </td>
    </tr>
  ) : (
    tasks.map((task, index) => (
      <tr key={index}>
        <td className="p-3 border text-center">{index + 1}</td>
        <td className="p-3 border text-center">{task.title}</td>
        <td className="p-3 border text-center">-</td>
        <td className="p-3 border text-center">{task.startDate}</td>
        <td className="p-3 border text-center">{task.dueDate}</td>
        <td className="p-3 border text-center">-</td>
        <td className="p-3 border text-center">-</td>
        <td className="p-3 border text-center">{task.assignedTo}</td>
        <td className="p-3 border text-center">{task.status}</td>
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

export default Task;
