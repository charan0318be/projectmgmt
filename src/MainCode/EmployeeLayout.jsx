import React from "react";
import { Outlet } from "react-router-dom";
import EmployeeSidebar from "./EmployeeSidebar";

const EmployeeLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64">
        <EmployeeSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto p-6">
        <Outlet /> {/* 👈 This will render the child page */}
      </div>
    </div>
  );
};

export default EmployeeLayout;
