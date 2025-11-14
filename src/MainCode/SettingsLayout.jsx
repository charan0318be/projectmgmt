import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const SettingsLayout = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Company Settings", path: "company" },
    { name: "Business Address", path: "business" },
    { name: "App Settings", path: "app" },
    { name: "Profile Settings", path: "profile" },
    { name: "Performance Setting", path: "performance" },
    { name: "Payroll Settings", path: "Payroll" },
    { name: "Asset Settings", path: "Asset" },
    { name: "Leave Settings", path: "leave" },
    { name: "Purchase Settings", path: "purchase" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-md border-r border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        <input
          type="text"
          placeholder="🔍 Search"
          className="w-full mb-4 p-2 border rounded text-sm"
        />
        <ul className="space-y-1 text-[15px] font-medium">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded ${
                  location.pathname === item.path
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
