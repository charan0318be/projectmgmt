// SuperAdminLayout.jsx
import React, { useState } from "react";
import SuperAdminSidebar from "./SuperAdminSidebar";
import SuperAdminDashboard from "./SuperAdminDashboard";
import AddPackage from "./AddPackage";
import Company from "./Company";
import AdminFAQ from "./AdminFAQ";
import AddSuperAdmin from "./AddSuperAdmin";
import Navbar from "./Navbar";

const SuperAdminLayout = () => {
  const [activePage, setActivePage] = useState("Dashboard"); // default

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <SuperAdminDashboard />;
      case "Packages":
        return <AddPackage />;
      case "Companies":
        return <Company />;
      case "Admin FAQ":
        return <AdminFAQ />;
      case "Super Admin":
        return <AddSuperAdmin />;
      default:
        return <div className="p-6">Page not found</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <SuperAdminSidebar
        setActivePage={setActivePage}
        activePage={activePage}
      />

      {/* MAIN AREA */}
      <div className="flex-1 bg-gray-100 flex flex-col">
        {/* 🔥 NAVBAR ALWAYS ON TOP + REAL-TIME ACTIVE PAGE */}
        <Navbar activePage={activePage} />

        {/* 🔥 PAGE CONTENT BELOW NAVBAR */}
        <div className="p-4">{renderPage()}</div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
