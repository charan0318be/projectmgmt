import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingLeadId, setEditingLeadId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const initialFormData = {
    salutation: "",
    name: "",
    email: "",
    source: "",
    addedBy: "",
    owner: "",
    dealName: "",
    dealValue: "",
    closeDate: "",
    pipeline: "",
    stage: "",
    category: "",
    agent: "",
    watcher: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const savedLeads = localStorage.getItem("leads");
    if (savedLeads) setLeads(JSON.parse(savedLeads));
  }, []);

  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const handleAddLead = () => {
    setFormData(initialFormData);
    setEditingLeadId(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingLeadId(null);
    setFormData(initialFormData);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert("Name and Email are required");
      return;
    }

    if (editingLeadId) {
      setLeads(
        leads.map((lead) =>
          lead.id === editingLeadId ? { ...formData, id: editingLeadId } : lead
        )
      );
    } else {
      setLeads([
        ...leads,
        {
          ...formData,
          id: Date.now(),
          contacted: "No",
          created: new Date().toLocaleDateString(),
        },
      ]);
    }

    handleCancel();
  };

  const handleEdit = (lead) => {
    setFormData(lead);
    setEditingLeadId(lead.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this lead?")) {
      setLeads(leads.filter((lead) => lead.id !== id));
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Leads</h2>
        {!showForm && (
          <button
            onClick={handleAddLead}
            className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
          >
            Add Lead
          </button>
        )}
      </div>

      {/* Search */}
      {!showForm && (
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search leads..."
            className="border p-2 rounded w-72 text-sm shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white p-6 rounded shadow space-y-4">
          <h3 className="text-lg font-semibold">
            {editingLeadId ? "Edit Lead" : "Add Lead"}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              ["Salutation", "salutation"],
              ["Name", "name"],
              ["Email", "email"],
              ["Lead Source", "source"],
              ["Added By", "addedBy"],
              ["Lead Owner", "owner"],
              ["Deal Name", "dealName"],
              ["Deal Value", "dealValue"],
              ["Close Date", "closeDate"],
              ["Pipeline", "pipeline"],
              ["Stage", "stage"],
              ["Category", "category"],
              ["Deal Agent", "agent"],
              ["Deal Watcher", "watcher"],
            ].map(([label, key]) => (
              <div key={key} className="flex flex-col gap-1">
                <label htmlFor={key} className="text-sm font-medium text-gray-700">
                  {label}
                  {["name", "email"].includes(key) && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <input
                  id={key}
                  name={key}
                  type={key === "closeDate" ? "date" : "text"}
                  placeholder={`Enter ${label.toLowerCase()}...`}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  required={["name", "email"].includes(key)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSubmit}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              {editingLeadId ? "Update" : "Save"}
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      {!showForm && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="text-left p-3 border">Name</th>
                <th className="text-left p-3 border">Email</th>
                <th className="text-left p-3 border">Contacted</th>
                <th className="text-left p-3 border">Created</th>
                <th className="text-left p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id}>
                  <td className="p-3 border">{lead.name}</td>
                  <td className="p-3 border">{lead.email}</td>
                  <td className="p-3 border">{lead.contacted}</td>
                  <td className="p-3 border">{lead.created}</td>
                  <td className="p-3 border flex flex-col gap-2">
                    <button
                      onClick={() => handleEdit(lead)}
                      className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-4 text-gray-500">
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Leads;
