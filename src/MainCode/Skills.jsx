import React, { useState } from "react";
import { MdAdd, MdFileDownload } from "react-icons/md";

const Skills = () => {
  const [showForm, setShowForm] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [skills, setSkills] = useState([]); // ✅ store added skills here

  // handle save button click
  const handleSave = () => {
    if (skillName.trim() !== "") {
      setSkills([...skills, skillName]);
      setSkillName("");
      setShowForm(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Skills</h1>
          <p className="text-sm text-gray-500">Home &gt; Skill</p>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded text-sm">
          Upgrade Plan
        </button>
      </div>

      {/* Search + Actions */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-wrap items-center gap-4">
        <input
          type="text"
          placeholder="Search skills..."
          className="border rounded px-3 py-2 text-sm flex-1 min-w-[200px]"
        />
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded text-sm"
        >
          <MdAdd />
          Add Skills
        </button>
        <button className="flex items-center gap-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-sm">
          <MdFileDownload />
          Export
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow p-4 relative">
        <div className="absolute right-4 top-4 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded shadow">
          Hosting Suggestions
        </div>
        <table className="w-full text-sm text-left text-gray-700">
          <thead>
            <tr className="border-b">
              <th className="px-3 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-3 py-2">Skill Name</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  className="text-center text-gray-400 italic py-4"
                >
                  No skills added yet
                </td>
              </tr>
            ) : (
              skills.map((skill, i) => (
                <tr key={i} className="border-b">
                  <td className="px-3 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-3 py-2">{skill}</td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() =>
                        setSkills(skills.filter((_, index) => index !== i))
                      }
                      className="text-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <label>Show</label>
            <select className="border rounded px-2 py-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">Previous</button>
            <button className="px-2 py-1 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-2 py-1 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-6 relative">
            <h2 className="text-lg font-semibold text-gray-800">Add Skills</h2>
            <label className="text-sm text-gray-700 font-medium block mb-1">
              Skill <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="Skill Name"
              className="border rounded px-3 py-2 text-sm text-gray-700 w-full"
            />
            <button className="text-blue-600 text-sm underline">+ Add More</button>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleSave}
                className="bg-red-600 text-white px-4 py-2 rounded text-sm"
              >
                Save
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded text-sm"
              >
                Cancel
              </button>
            </div>

            {/* Hosting Suggestions Tooltip */}
            <div className="absolute right-4 top-4 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded shadow">
              Hosting Suggestions
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
