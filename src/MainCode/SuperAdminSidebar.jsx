import React, { useState } from "react";
import {
  FaPowerOff,
  FaRegEdit,
  FaHome,
  FaBox,
  FaBuilding,
  FaFileInvoice,
  FaQuestionCircle,
  FaUserShield,
  FaHeadset,
  FaCog,
} from "react-icons/fa";

const SuperAdminSidebar = ({ setActivePage, activePage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-[#0b1622] text-white w-64 h-screen flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div
          className="flex items-center justify-between px-4 py-3 border-b border-gray-700 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div>
            <h1 className="text-lg font-semibold">Worksuite</h1>
            <div className="flex items-center text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Fay Fahey DVM
            </div>
          </div>
          <div className="text-gray-400 text-xl">
            {isDropdownOpen ? "▲" : "▼"}
          </div>
        </div>

        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="bg-[#152238] border border-gray-700 rounded-lg shadow-lg p-4 m-3 absolute z-50 w-60">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-full bg-gray-600"></div>
                <div className="text-white text-sm font-medium">
                  Fay Fahey DVM
                </div>
              </div>
              <FaRegEdit className="text-gray-400 cursor-pointer hover:text-white" />
            </div>

            <div className="flex items-center justify-between text-gray-300 text-sm mb-3">
              <span>Dark Mode</span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-teal-500 transition-all duration-200"></div>
              </label>
            </div>

            <button className="flex items-center space-x-2 w-full text-left text-red-500 hover:text-red-400 text-sm">
              <FaPowerOff />
              <span>Logout</span>
            </button>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className="mt-6 flex flex-col space-y-1 px-2">
          <SidebarItem
            icon={<FaHome />}
            text="Dashboard"
            setActivePage={setActivePage}
            activePage={activePage}
          />
          <SidebarItem
            icon={<FaBox />}
            text="Packages"
            setActivePage={setActivePage}
            activePage={activePage}
          />
          <SidebarItem
            icon={<FaBuilding />}
            text="Companies"
            setActivePage={setActivePage}
            activePage={activePage}
          />
          <SidebarItem
            icon={<FaFileInvoice />}
            text="Billing"
            setActivePage={setActivePage}
            activePage={activePage}
          />
          <SidebarItem
            icon={<FaQuestionCircle />}
            text="Admin FAQ"
            setActivePage={setActivePage}
            activePage={activePage}
          />
          <SidebarItem
            icon={<FaUserShield />}
            text="Super Admin"
            setActivePage={setActivePage}
            activePage={activePage}
          />
          <SidebarItem
            icon={<FaHeadset />}
            text="Support Ticket"
            setActivePage={setActivePage}
            activePage={activePage}
          />
          <SidebarItem
            icon={<FaCog />}
            text="Settings"
            setActivePage={setActivePage}
            activePage={activePage}
          />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-red-600 hover:bg-red-500 text-sm py-2 rounded-md">
          Raise Support Ticket
        </button>
        <p className="text-xs text-gray-500 mt-2 text-center">v5.5.09</p>
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, setActivePage, activePage }) => (
  <div
    onClick={() => setActivePage(text)}
    className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 ${
      activePage === text ? "bg-[#1c2a3b]" : "hover:bg-[#1c2a3b]"
    }`}
  >
    <span className="text-gray-300 text-lg">{icon}</span>
    <span className="text-gray-200 text-sm font-medium">{text}</span>
  </div>
);

export default SuperAdminSidebar;
