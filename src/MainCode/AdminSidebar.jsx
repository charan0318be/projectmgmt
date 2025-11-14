// AdminSidebar.jsx
import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dropdowns, setDropdowns] = useState({ dashboard: false, leads: false, hr: false });

  const menuItems = [
    {
      name: "Dashboard",
      children: [
        { name: "Private Dashboard", path: "/admin/private-dashboard" },
        { name: "Advanced Dashboard", path: "/admin/advanced-dashboard" },
      ],
    },
    { name: "My Calendar", path: "/admin/my-calendar" },
    {
      name: "Leads",
      children: [
        { name: "Lead Contact", path: "/admin/lead-contact" },
        { name: "Deals", path: "/admin/deals" },
      ],
    },
    { name: "Clients", path: "/admin/clients" },

    { name: "HR",
      children:[
          {name:"Employees",path:"/admin/employees"},
          {name:"Leaves",path:"/admin/leaves"},
          {name:"Roster",path:"/admin/Roster"},
          {name:"Attendance",path:"/admin/attendance"},
          {name:"Holiday",path:"/admin/holiday"},
          {name:"Designation",path:"/admin/designation"},
          {name:"Department",path:"/admin/department"},
          {name:"Appreciation",path:"/admin/appreciation"}
      ] ,
     },
    { name: "Work", 
      children:[
        {name:"Contracts",path:"/admin/contracts"},
        {name:"Projects",path:"/admin/projects"},
        {name:"Tasks",path:"/admin/tasks"},
        {name:"Timesheet",path:"/admin/timesheet"},
        ], 
      },
    { name: "Finance",
      children:[
        {name:"Proposal",path:"/admin/proposal"},
        {name:"Estimates",path:"/admin/estimates"},
        {name:"Invoice",path:"/admin/invoice"},
        {name:"Payments",path:"/admin/payments"},
        {name:"Credit Note",path:"/admin/credits"},
        {name:"Expenses",path:"/admin/expenses"},
        {name:"Bank Account",path:"/admin/account"},
      ],
    },
    { name: "Orders", path: "/admin/orders" },
    { name: "Tickets", path: "/admin/tickets" },
    { name: "Event", path: "/admin/eventspage" },
    { name: "Messages", path: "/admin/messages" },
    { name: "Notice Board", path: "/admin/Notice-board" },
    { name: "Knowledge Base", path: "/admin/knowledge-base" },
    { name: "Assets", path: "/admin/assets" },
    { name: "Biolinks", path: "/admin/biolinks" },
    { name: "Payroll",
      children:[
        {name:"Payroll",path:"/admin/payroll"},
        {name:"Employee Salary",path:"/admin/salary"},
        {name:"Overtime Request",path:"/admin/overtime-request"},
      ],
    },
    { name: "Perfromance",
      children:[
        {name:"Dashboard",path:"/admin/performance-dashboard"},
        {name:"Objectives",path:"/admin/objective"},
        {name:"Meeting",path:"/admin/meeting"},
       
      ],
    },
     { name: "Recruit",
      children:[
        {name:"Dashboard",path:"/admin/recruit-dashboard"},
        {name:"Jobs",path:"/admin/jobs"},
        {name:"Job Application",path:"/admin/job-application"},
        {name:"Interview Schedule",path:"/admin/interview-schedule"},
        {name:"Offer letters",path:"/admin/offer-letter"},
        {name:"Skills",path:"/admin/skills"},
        {name:"Candidate Database",path:"/admin/candidate-database"},
        {name:"Career Site",path:"/admin/career-site"},
      ],
    },
     { name: "Settings", path: "/admin/settings" },
  ];

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-teal-300 h-screen p-4 flex flex-col shadow-md overflow-y-auto">
      {/* Header */}
      <div className="flex items-center mb-6 cursor-pointer">
        <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded mr-2 font-bold text-gray-800">
          W
        </div>
        <div className="flex items-center justify-between flex-1">
          <div>
            <p className="font-semibold">Marie O'Kon</p>
            <span className="text-xs text-gray-500">Employee</span>
          </div>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <FaChevronRight className="text-gray-500 ml-2" />
        </div>
      </div>

      {/* Menu */}
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            {item.children ? (
              <>
                <div
                  className={`p-2 rounded cursor-pointer flex justify-between items-center ${
                    dropdowns[item.name.toLowerCase()] ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"
                  }`}
                  onClick={() => toggleDropdown(item.name.toLowerCase())}
                >
                  <span>{item.name}</span>
                  <FaChevronDown
                    className={`transition-transform ${
                      dropdowns[item.name.toLowerCase()] ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdowns[item.name.toLowerCase()] && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <li
                        key={child.name}
                        className={`p-2 rounded cursor-pointer text-sm ${
                          isActive(child.path) ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"
                        }`}
                        onClick={() => navigate(child.path)}
                      >
                        {child.name}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <div
                className={`p-2 rounded cursor-pointer ${
                  isActive(item.path) ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"
                }`}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSidebar;
