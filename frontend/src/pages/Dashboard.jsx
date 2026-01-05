import React from "react";
import {
  FaUsers,
  FaDollarSign,
  FaEnvelope,
  FaCar,
  FaExclamationTriangle,
  FaTruck,
  FaChartLine,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  // Sample Data
  const fleetUsageData = [
    { date: "01 Jan", usage: 60 },
    { date: "02 Jan", usage: 75 },
    { date: "03 Jan", usage: 50 },
    { date: "04 Jan", usage: 90 },
    { date: "05 Jan", usage: 80 },
  ];

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 7000 },
    { month: "May", sales: 6000 },
  ];

  const vehicleStatusData = [
    { name: "Active", value: 32, color: "#10B981" },
    { name: "Idle", value: 10, color: "#FBBF24" },
    { name: "Maintenance", value: 7, color: "#EF4444" },
  ];

  const topDrivers = [
    { name: "John Doe", trips: 120, distance: "450 km" },
    { name: "Jane Smith", trips: 98, distance: "390 km" },
    { name: "Mark Lee", trips: 85, distance: "350 km" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Fleet Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Monitor your fleet, users, sales, and vehicle status in one place.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card icon={<FaUsers />} label="Total Users" value="120" bgColor="bg-blue-500" />
        <Card icon={<FaDollarSign />} label="Total Sales" value="$5,000" bgColor="bg-green-500" />
        <Card icon={<FaEnvelope />} label="New Messages" value="23" bgColor="bg-yellow-500" />
        <Card icon={<FaExclamationTriangle />} label="Alerts" value="7" bgColor="bg-red-500" />
        <Card icon={<FaCar />} label="Active Vehicles" value="32" bgColor="bg-purple-500" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Fleet Usage Line Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaTruck /> Fleet Usage
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fleetUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="usage" stroke="#4F46E5" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales Overview Bar Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaChartLine /> Sales Overview
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Vehicle Status Pie Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            Vehicle Status
          </h2>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={vehicleStatusData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {vehicleStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Vehicle Activity Table */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Vehicle Activity</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="px-4 py-2">Vehicle ID</th>
                <th className="px-4 py-2">Driver</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "V001", driver: "John Doe", status: "Active", time: "14:35", color: "green-500" },
                { id: "V002", driver: "Jane Smith", status: "Idle", time: "14:20", color: "yellow-500" },
                { id: "V003", driver: "Mark Lee", status: "Maintenance", time: "13:50", color: "red-500" },
                { id: "V004", driver: "Alice Brown", status: "Active", time: "13:30", color: "green-500" },
              ].map((v) => (
                <tr key={v.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2">{v.id}</td>
                  <td className="px-4 py-2">{v.driver}</td>
                  <td className={`px-4 py-2 text-${v.color} font-semibold`}>{v.status}</td>
                  <td className="px-4 py-2">{v.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Drivers */}
      <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Top Drivers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600">
                <th className="px-4 py-2">Driver</th>
                <th className="px-4 py-2">Trips</th>
                <th className="px-4 py-2">Distance</th>
              </tr>
            </thead>
            <tbody>
              {topDrivers.map((driver) => (
                <tr key={driver.name} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2">{driver.name}</td>
                  <td className="px-4 py-2">{driver.trips}</td>
                  <td className="px-4 py-2">{driver.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ icon, label, value, bgColor }) => (
  <div className="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all relative group">
    <div className={`p-3 ${bgColor} text-white rounded-full`}>{icon}</div>
    <div className="ml-4">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-800 font-bold text-xl">{value}</p>
    </div>
    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
      {label}: {value}
    </div>
  </div>
);

export default Dashboard;
