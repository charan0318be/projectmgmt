import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdCalendarToday,
  MdPeople,
  MdWork,
  MdAttachMoney,
  MdConfirmationNumber,
  MdEvent,
  MdMessage,
  MdNotifications,
  MdSettings,
  MdLogout,
  MdEdit,
  MdCardGiftcard,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";

const EmployeeSidebar = () => {
  const [showProfilePanel, setShowProfilePanel] = useState(false);
  const [showLeadsDropdown, setShowLeadsDropdown] = useState(false);
  const [showHRDropdown, setShowHRDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showExpensesDropdown, setShowExpensesDropdown] = useState(false);
   const [showRecruitDropdown, setShowRecruitDropdown] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black shadow-lg p-8 flex flex-col relative">
        {/* Profile trigger */}
        <button
          onClick={() => setShowProfilePanel(!showProfilePanel)}
          className="flex items-center gap-2 mb-6 text-left"
        >
          <span className="w-3 h-3 bg-green-500 rounded-full" />
          <div>
            <p className="font-semibold text-white">Dr. Lenna King III</p>
            <p className="text-xs text-white">Online</p>
          </div>
        </button>

        {/* Navigation */}
        <nav className="space-y-5 text-sm text-white">
          <Link to="/employee/dashboard" className="flex items-center gap-2 cursor-pointer">
            <MdDashboard className="text-white" /> Dashboard
          </Link>

          <Link to="/employee/my-calendar" className="flex items-center gap-2 cursor-pointer">
            <MdCalendarToday className="text-white" /> My Calendar
          </Link>

          {/* Leads Dropdown */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowLeadsDropdown(!showLeadsDropdown)}
          >
            <div className="flex items-center gap-2">
              <MdPeople className="text-white" />
              <span>Leads</span>
            </div>
            {showLeadsDropdown ? (
              <MdExpandLess className="text-white" />
            ) : (
              <MdExpandMore className="text-white" />
            )}
          </div>
          {showLeadsDropdown && (
            <div className="ml-6 mt-2 space-y-3">
              <Link to="/employee/lead-contact" className="block text-xs text-white">
                Lead Contact
              </Link>
            </div>
          )}

          {/* HR Dropdown */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowHRDropdown(!showHRDropdown)}
          >
            <div className="flex items-center gap-2">
              <MdWork className="text-white" />
              <span>HR</span>
            </div>
            {showHRDropdown ? (
              <MdExpandLess className="text-white" />
            ) : (
              <MdExpandMore className="text-white" />
            )}
          </div>
          {showHRDropdown && (
            <div className="ml-6 mt-2 space-y-3">
              <Link to="/employee/leaves" className="block text-xs text-white">
                Leaves
              </Link>
              <Link to="/employee/attendance" className="block text-xs text-white">
                Attendance
              </Link>
              <Link to="/employee/holidays" className="block text-xs text-white">
                Holidays
              </Link>
              <Link to="/employee/appreciation" className="block text-xs text-white">
                Appreciation
              </Link>
            </div>
          )}

          {/* Projects Dropdown */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowProjectsDropdown(!showProjectsDropdown)}
          >
            <div className="flex items-center gap-2">
              <MdAttachMoney className="text-white" />
              <span>Works</span>
            </div>
            {showProjectsDropdown ? (
              <MdExpandLess className="text-white" />
            ) : (
              <MdExpandMore className="text-white" />
            )}
          </div>
          {showProjectsDropdown && (
            <div className="ml-6 mt-2 space-y-3">
              <Link to="/employee/projects" className="block text-xs text-white">
                Projects
              </Link>
              <Link to="/employee/tasks" className="block text-xs text-white">
                Tasks
              </Link>
              <Link to="/employee/timesheet" className="block text-xs text-white">
                Timesheet
              </Link>
            </div>
          )}

          {/* Expenses Dropdown */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowExpensesDropdown(!showExpensesDropdown)}
          >
            <div className="flex items-center gap-2">
              <MdAttachMoney className="text-white" />
              <span>Finance</span>
            </div>
            {showExpensesDropdown ? (
              <MdExpandLess className="text-white" />
            ) : (
              <MdExpandMore className="text-white" />
            )}
          </div>
          {showExpensesDropdown && (
            <div className="ml-6 mt-2 space-y-3">
              <Link to="/employee/expenses" className="block text-xs text-white">
                Expenses
              </Link>
            </div>
          )}

          {/* Regular menu items */}
          <Link to="/employee/tickets" className="flex items-center gap-2 cursor-pointer">
            <MdConfirmationNumber className="text-white" /> Tickets
          </Link>
          <Link to="/employee/eventspage" className="flex items-center gap-2 cursor-pointer">
            <MdEvent className="text-white" /> Events
          </Link>
          <div className="flex items-center gap-2 relative cursor-pointer">
            <MdMessage className="text-white" />
            <span>Messages</span>
          </div>
          <Link to="/employee/Notice-board" className="flex items-center gap-2 cursor-pointer">
            <MdNotifications className="text-white" /> Notice Board
          </Link>

          {/* Recruit Dropdown */}
          <div
                    className="flex items-center justify-between cursor-pointer"
                     onClick={() => setShowRecruitDropdown(!showRecruitDropdown)}
          >
         <div className="flex items-center gap-2">
             <MdPeople className="text-white" />
             <span>Recruit</span>
          </div>
            {showRecruitDropdown ? (
                   <MdExpandLess className="text-white" />
                 ) : (
                       <MdExpandMore className="text-white" />
                         )}
                </div>
            {showRecruitDropdown && (
                 <div className="ml-6 mt-2 space-y-3">
                    <Link to="/employee/recruit-career-site" className="block text-xs text-white">
                       Career Site
                          </Link>
                  </div>
                  )}


          <Link to="/employee/settings" className="flex items-center gap-2 cursor-pointer">
            <MdSettings className="text-white" /> Settings
          </Link>
        </nav>

        {/* Profile Panel Dropdown */}
        {showProfilePanel && (
          <div className="absolute top-20 left-10 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">
                      Dr. Lenna Kling III
                    </p>
                    <p className="text-xs text-gray-500">Trainee</p>
                  </div>
                  <div className="w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
                    <MdEdit className="text-gray-600 text-sm" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
              <span>Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition" />
                <div className="absolute left-1 top-1 w-3.5 h-3.5 bg-white rounded-full shadow transition peer-checked:translate-x-5" />
              </label>
            </div>

            <button className="flex items-center gap-2 text-red-500 text-sm">
              <MdLogout />
              <span>Logout</span>
            </button>
          </div>
        )}
      </aside>
    </div>
  );
};

export default EmployeeSidebar;
