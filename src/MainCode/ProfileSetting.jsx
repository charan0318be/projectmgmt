import React, { useState } from "react";

const ProfileSetting = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  // Profile Form States
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    mobile: "",
    language: "",
    gender: "",
    emailNotifications: true,
    googleCalendar: true,
  });

  // Emergency Contact States
  const [emergencyContact, setEmergencyContact] = useState({
    contactName: "",
    relationship: "",
    phone: "",
  });

  // Document Upload States
  const [documents, setDocuments] = useState({
    doc1: null,
    doc2: null,
  });

  const handleProfileSave = () => {
    console.log("Profile Saved:", profile);
    alert("Profile updated successfully!");
  };

  const handleEmergencySave = () => {
    console.log("Emergency Contact Saved:", emergencyContact);
    alert("Emergency Contact updated!");
  };

  const handleDocumentsUpload = () => {
    console.log("Documents Uploaded:", documents);
    alert("Documents uploaded successfully!");
  };

  return (
    <div className="bg-white rounded-lg shadow-md h-[90vh] flex flex-col overflow-hidden">

      {/* Tabs */}
      <div className="flex gap-6 px-6 py-3 border-b sticky top-0 bg-white z-20 overflow-x-auto scrollbar-thin">
        {["Profile", "Emergency Contacts", "Documents"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-semibold whitespace-nowrap ${
              activeTab === tab
                ? "border-b-2 border-red-500 text-red-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* Profile Tab */}
        {activeTab === "Profile" && (
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full" />
              <button className="text-blue-500 hover:underline text-sm">
                Change Picture
              </button>
            </div>

            {/* Inputs */}
            <label className="block text-sm">
              Your Name
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              />
            </label>

            <label className="block text-sm">
              Your Email
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              />
            </label>

            <label className="block text-sm">
              Your Password
              <input
                type="password"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                placeholder="Leave blank to keep current password"
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              />
            </label>

            {/* Toggles */}
            <div className="flex items-center justify-between text-sm text-gray-700">
              <span>Receive email notifications?</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={profile.emailNotifications}
                  onChange={() =>
                    setProfile({ ...profile, emailNotifications: !profile.emailNotifications })
                  }
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600"></div>
                <div className="absolute left-1 top-1 w-3.5 h-3.5 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
              </label>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-700">
              <span>Enable Google Calendar</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={profile.googleCalendar}
                  onChange={() =>
                    setProfile({ ...profile, googleCalendar: !profile.googleCalendar })
                  }
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600"></div>
                <div className="absolute left-1 top-1 w-3.5 h-3.5 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
              </label>
            </div>

            <label className="block text-sm">
              Country
              <input
                type="text"
                value={profile.country}
                onChange={(e) => setProfile({ ...profile, country: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              />
            </label>

            <label className="block text-sm">
              Mobile
              <input
                type="text"
                value={profile.mobile}
                onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              />
            </label>

            <label className="block text-sm">
              Change Language
              <select
                value={profile.language}
                onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              >
                <option value="">Select Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
            </label>

            <label className="block text-sm">
              Gender
              <select
                value={profile.gender}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded border border-gray-400"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>

            {/* Save */}
            <button
              onClick={handleProfileSave}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Save
            </button>
          </div>
        )}

        {/* Emergency Contacts Tab */}
        {activeTab === "Emergency Contacts" && (
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">
              Emergency Contact Details
            </h3>

            <label className="block text-sm mb-3">
              Contact Name
              <input
                type="text"
                value={emergencyContact.contactName}
                onChange={(e) =>
                  setEmergencyContact({ ...emergencyContact, contactName: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 border rounded"
              />
            </label>

            <label className="block text-sm mb-3">
              Relationship
              <input
                type="text"
                value={emergencyContact.relationship}
                onChange={(e) =>
                  setEmergencyContact({ ...emergencyContact, relationship: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 border rounded"
              />
            </label>

            <label className="block text-sm mb-3">
              Phone Number
              <input
                type="text"
                value={emergencyContact.phone}
                onChange={(e) =>
                  setEmergencyContact({ ...emergencyContact, phone: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 border rounded"
              />
            </label>

            <button
              onClick={handleEmergencySave}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
            >
              Save Contact
            </button>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === "Documents" && (
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">
              Upload Your Documents
            </h3>
            <input
              type="file"
              onChange={(e) => setDocuments({ ...documents, doc1: e.target.files[0] })}
              className="block w-full mb-3 text-sm text-gray-700"
            />
            <input
              type="file"
              onChange={(e) => setDocuments({ ...documents, doc2: e.target.files[0] })}
              className="block w-full mb-3 text-sm text-gray-700"
            />

            <button
              onClick={handleDocumentsUpload}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSetting;
