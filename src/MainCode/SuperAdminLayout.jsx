// SuperAdminLayout.jsx
import React, { useState } from "react";
import SuperAdminSidebar from "./SuperAdminSidebar";
import SuperAdminDashboard from "./SuperAdminDashboard";
import AddPackage from "./AddPackage";
import Company from "./Company";
import AdminFAQ from "./AdminFAQ";
import AddSuperAdmin from "./AddSuperAdmin";

const SuperAdminLayout = () => {
  const [activePage, setActivePage] = useState("Dashboard"); // default

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <SuperAdminDashboard />;
         case "Packages": // ✅ when sidebar item "Packages" is clicked
        return <AddPackage />;
         case "Companies":
        return <Company/>
         case "Admin FAQ":
        return <AdminFAQ/>
         case "Super Admin":
        return <AddSuperAdmin/>
      // Add more cases later (Packages, Companies, etc.)
      default:
        return <div className="p-6">Page not found</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SuperAdminSidebar setActivePage={setActivePage} activePage={activePage} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">{renderPage()}</div>
    </div>
  );
};

export default SuperAdminLayout;
