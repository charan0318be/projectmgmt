import React, { useState, useEffect } from "react";

const SuperAdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCompanies: 0,
    activeCompanies: 0,
    inactiveCompanies: 0,
    licenseExpired: 0,
    totalPackages: 0,
  });

  const [newCompanies, setNewCompanies] = useState([]);
  const [topCompanies, setTopCompanies] = useState([]);

  // Real-time updates (polling or WebSocket can be added later)
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Example: replace with your backend API
        // const response = await fetch("/api/superadmin/dashboard");
        // const data = await response.json();
        // setStats(data.stats);
        // setNewCompanies(data.newCompanies);
        // setTopCompanies(data.topCompanies);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Super Admin Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">Home / Super Admin Dashboard</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-500">Total Companies</p>
          <h2 className="text-3xl font-bold text-red-500">
            {stats.totalCompanies}
          </h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-500">Active Companies</p>
          <h2 className="text-3xl font-bold text-red-500">
            {stats.activeCompanies}
          </h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-500">License Expired</p>
          <h2 className="text-3xl font-bold text-red-500">
            {stats.licenseExpired}
          </h2>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-500">Total Packages</p>
          <h2 className="text-3xl font-bold text-red-500">
            {stats.totalPackages}
          </h2>
        </div>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Newly Registered Companies */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">
            Newly Registered Companies
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left text-sm text-gray-600">
                <th className="p-2">#</th>
                <th className="p-2">Name</th>
                <th className="p-2">Packages</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {newCompanies.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-gray-400 py-4 text-sm"
                  >
                    No registered companies yet.
                  </td>
                </tr>
              ) : (
                newCompanies.map((company, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{company.name}</td>
                    <td className="p-2">{company.package}</td>
                    <td className="p-2">{company.date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Companies With Most Users */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">
            Companies With Most Users
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-left text-sm text-gray-600">
                <th className="p-2">#</th>
                <th className="p-2">Company Name</th>
                <th className="p-2">Total Users</th>
                <th className="p-2">Employees</th>
                <th className="p-2">Clients</th>
              </tr>
            </thead>
            <tbody>
              {topCompanies.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-400 py-4 text-sm"
                  >
                    No user data available.
                  </td>
                </tr>
              ) : (
                topCompanies.map((company, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{company.name}</td>
                    <td className="p-2">{company.totalUsers}</td>
                    <td className="p-2">{company.employees}</td>
                    <td className="p-2">{company.clients}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
