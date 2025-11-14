import React, { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaBriefcase,
  FaDollarSign,
  FaShoppingCart,
  FaHeadphones,
  FaCalendarCheck,
  FaClipboard,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaPowerOff,
  FaEdit,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const ClientSidebar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [openFinance, setOpenFinance] = useState(false);

  return (
    <div className="flex relative">
      {/* Sidebar */}
      <div className="w-64 bg-[#141A28] text-white h-screen p-4 flex flex-col">
        {/* Logo & Profile */}
        <div
          className="flex items-center justify-between cursor-pointer mb-8"
          onClick={() => setShowProfile(!showProfile)}
        >
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400 text-[#141A28] font-bold w-8 h-8 flex items-center justify-center rounded-md">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Worksuite</span>
              <span className="text-green-400 text-xs">● Vesta McClure</span>
            </div>
          </div>
          <span className="text-white text-lg">▾</span>
        </div>

        {/* Navigation */}
        <ul className="space-y-3 text-[15px] font-medium">
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
            <FaHome /> Dashboard
          </li>

          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                <FaCalendarAlt />
                    <Link to="my-calendar">My Calendar</Link>
                </li>


          {/* Work Dropdown */}
          <li>
  <div
    className="flex items-center justify-between cursor-pointer hover:text-gray-300"
    onClick={() => setOpenWork(!openWork)}
  >
    <div className="flex items-center gap-3">
      <FaBriefcase /> Work
    </div>
    {openWork ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
  </div>

            {openWork && (
                 <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-400">
      <li>
        <Link to="tasks" className="block hover:text-white">
          Tasks
        </Link>
      </li>
      <li>
        <Link to="projects" className="block hover:text-white">
          Projects
        </Link>
      </li>
      <li>
        <Link to="contracts" className="block hover:text-white">
          Contracts
        </Link>
      </li>
      <li>
        <Link to="timesheet" className="block hover:text-white">
          Timesheet
        </Link>
                </li>
                    </ul>
            )}
            </li>


          {/* Finance Dropdown */}
         <li>
  <div
    className="flex items-center justify-between cursor-pointer hover:text-gray-300"
    onClick={() => setOpenFinance(!openFinance)}
  >
    <div className="flex items-center gap-3">
      <FaDollarSign /> Finance
    </div>
    {openFinance ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
  </div>

  {openFinance && (
    <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-400">
      <li>
        <Link to="estimates" className="block hover:text-white">
          Estimates
        </Link>
      </li>
      <li>
        <Link to="invoices" className="block hover:text-white">
          Invoices
        </Link>
      </li>
      <li>
        <Link to="payments" className="block hover:text-white">
          Payments
        </Link>
      </li>
      <li>
        <Link to="credits" className="block hover:text-white">
          Credit Notes
        </Link>
      </li>
    </ul>
  )}
</li>


         <li>
  <Link to="orders" className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
    <FaShoppingCart /> Orders
  </Link>
</li>

<li>
  <Link to="tickets" className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
    <FaHeadphones /> Tickets
  </Link>
</li>

<li>
  <Link to="eventspage" className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
    <FaCalendarCheck /> Events
  </Link>
</li>

<li>
  <Link to="notice-board" className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
    <FaClipboard /> Notice Board
  </Link>
</li>

<li>
  <Link to="settings" className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
    <FaCog /> Settings
  </Link>
</li>

        </ul>
      </div>

      {/* Floating Profile Dropdown */}
      {showProfile && (
        <div className="absolute left-[250px] top-14 bg-white text-black rounded-lg shadow-lg w-60 p-4 z-50">
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div>
                <p className="font-semibold text-sm">Vesta McClure</p>
              </div>
            </div>
            <FaEdit className="text-gray-500 text-sm cursor-pointer hover:text-blue-500" />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between text-sm py-2 border-t border-gray-200">
            <span>Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition" />
              <div className="absolute left-1 top-1 w-3.5 h-3.5 bg-white rounded-full shadow transform transition peer-checked:translate-x-5" />
            </label>
          </div>

          {/* Logout */}
          <div className="flex items-center justify-between text-sm py-2 border-t border-gray-200 mt-2 cursor-pointer hover:text-red-500">
            <span>Logout</span>
            <FaPowerOff />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSidebar;
