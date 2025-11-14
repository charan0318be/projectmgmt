import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaBell, FaPowerOff } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);
  const [notificationCount, setNotificationCount] = useState(2);

  // Convert URL to readable breadcrumb
  const pathSegments = location.pathname
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    );

  const pageTitle =
    pathSegments.length > 0
      ? pathSegments[pathSegments.length - 1]
      : "Dashboard";

  return (
    <div className="flex justify-between items-center p-2 rounded-xl bg-white shadow-sm sticky top-0 z-50">
      
      {/* PAGE TITLE + BREADCRUMBS */}
      <div>
        <h1 className="text-2xl font-bold tracking-wide">{pageTitle}</h1>
        <p className="text-sm text-gray-500 mt-1">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          {pathSegments.map((segment, index) => (
            <span key={index}>
              {" ▸ "}
              <Link
                to={`/${pathSegments
                  .slice(0, index + 1)
                  .join("/")
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="hover:text-blue-600 transition"
              >
                {segment}
              </Link>
            </span>
          ))}
        </p>
      </div>

      {/* RIGHT SIDE ICONS */}
      <div className="flex items-center gap-6 text-gray-600 text-xl relative">
        
        {/* Dashboard Icon */}
        <div
          className="hover:text-blue-700 transition relative"
          title="Dashboard Customization"
        >
          <MdOutlineDashboardCustomize size={24} className="cursor-pointer" />
        </div>

        {/* Notification Bell */}
        <div
          className="hover:text-blue-700 transition relative"
          title="Notifications"
        >
          <FaBell size={22} className="cursor-pointer animate-pulse" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-[1px] rounded-full">
              {notificationCount}
            </span>
          )}
        </div>

        {/* Logout Icon (Dropdown) */}
        <div className="relative">
          <FaPowerOff
            size={22}
            className="cursor-pointer hover:text-red-600 transition"
            title="Logout"
            onClick={() => setShowLogout(!showLogout)}
          />
          {showLogout && (
            <div className="absolute right-0 mt-2 bg-white shadow-md border rounded text-sm w-32 p-2 animate-fade">
              <button
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }}
                className="block w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
              >
                🔐 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
