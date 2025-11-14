// ClientDashboard.jsx
import React from "react";
import {
  FaLayerGroup,
  FaTicketAlt,
  FaFileSignature,
  FaFileInvoice,
} from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const ClientDashboard = () => {
  const data = [{ name: "Projects", value: 100 }];
  const COLORS = ["#00B6FF"];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">
            Home <span className="text-gray-400">›</span> Dashboard
          </p>
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-lg">
          <i className="fas fa-search cursor-pointer"></i>
          <i className="far fa-comment cursor-pointer"></i>
          <i className="far fa-bell cursor-pointer"></i>
          <i className="fas fa-power-off cursor-pointer"></i>
        </div>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-lg shadow text-center border border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-700">Total Projects</h3>
            <FaLayerGroup className="text-gray-400" />
          </div>
          <p className="text-red-600 mt-3 text-lg font-semibold">1</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow text-center border border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-700">Unresolved Tickets</h3>
            <FaTicketAlt className="text-gray-400" />
          </div>
          <p className="text-red-600 mt-3 text-lg font-semibold">0</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow text-center border border-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-700">Contracts Signed</h3>
            <FaFileSignature className="text-gray-400" />
          </div>
          <p className="text-red-600 mt-3 text-lg font-semibold">0</p>
        </div>
      </div>

      {/* Invoices Section */}
      <div className="bg-white p-5 rounded-lg shadow border border-gray-100 mb-6">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">Invoices</h3>
          <FaFileInvoice className="text-gray-400" />
        </div>
        <div className="flex justify-center gap-10 mt-4 text-center">
          <div>
            <p className="text-blue-600 text-xl font-bold">0</p>
            <p className="text-gray-500 text-sm">Paid Invoices</p>
          </div>
          <div>
            <p className="text-red-600 text-xl font-bold">3</p>
            <p className="text-gray-500 text-sm">Due Invoices</p>
          </div>
        </div>
      </div>

      {/* Status Wise Projects */}
      <div className="bg-white p-5 rounded-lg shadow border border-gray-100 mb-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-700">Status Wise Projects</h3>
          <i className="fas fa-expand-alt text-gray-400 cursor-pointer"></i>
        </div>
        <div className="w-full h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Hosting Suggestions Button */}
      <div className="flex justify-end">
        <button className="bg-[#00A6AD] hover:bg-[#008C93] text-white px-5 py-2 rounded-full shadow-md">
          Hosting Suggestions
        </button>
      </div>
    </div>
  );
};

export default ClientDashboard;
