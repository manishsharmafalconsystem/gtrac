import React from "react";
import {
  FaUsers,
  FaDollarSign,
  FaEnvelope,
  FaCar,
  FaExclamationTriangle,
  FaTruck,
  FaChartLine,
  FaRoute,
  FaGasPump,
  FaTools,
  FaCalendarAlt,
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
    { name: "Active", value: 32, color: "#22C55E" }, // emerald-500
    { name: "Idle", value: 10, color: "#FACC15" }, // yellow-400
    { name: "Maintenance", value: 7, color: "#EF4444" }, // red-500
  ];

  const topDrivers = [
    { name: "John Doe", trips: 120, distance: "450 km" },
    { name: "Jane Smith", trips: 98, distance: "390 km" },
    { name: "Mark Lee", trips: 85, distance: "350 km" },
  ];

  const upcomingMaintenance = [
    { vehicle: "V001", type: "Engine Check", date: "2026-01-10" },
    { vehicle: "V005", type: "Oil Change", date: "2026-01-12" },
    { vehicle: "V008", type: "Tire Replacement", date: "2026-01-15" },
  ];

  const fuelConsumptionData = [
    { vehicle: "V001", fuel: 60 },
    { vehicle: "V002", fuel: 45 },
    { vehicle: "V003", fuel: 70 },
    { vehicle: "V004", fuel: 55 },
  ];

  const routeEfficiency = [
    { route: "Route A", efficiency: 90 },
    { route: "Route B", efficiency: 75 },
    { route: "Route C", efficiency: 60 },
  ];

  const driverPerformance = [
    { driver: "John Doe", trips: 120, rating: 4.8 },
    { driver: "Jane Smith", trips: 98, rating: 4.5 },
    { driver: "Mark Lee", trips: 85, rating: 4.2 },
  ];

  const upcomingEvents = [
    { event: "Annual Maintenance", date: "2026-01-20" },
    { event: "Fleet Audit", date: "2026-01-25" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Fleet Dashboard</h1>
        <p className="text-gray-600 mt-1 text-sm">
          Complete fleet monitoring system with analytics, drivers, vehicles, and maintenance.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card
          icon={<FaUsers />}
          label="Total Users"
          value="120"
          bgColor="bg-gradient-to-r from-cyan-500 to-blue-500"
        />
        <Card
          icon={<FaDollarSign />}
          label="Total Sales"
          value="$5,000"
          bgColor="bg-gradient-to-r from-green-400 to-green-600"
        />
        <Card
          icon={<FaEnvelope />}
          label="New Messages"
          value="23"
          bgColor="bg-gradient-to-r from-yellow-400 to-yellow-500"
        />
        <Card
          icon={<FaExclamationTriangle />}
          label="Alerts"
          value="7"
          bgColor="bg-gradient-to-r from-red-400 to-red-600"
        />
        <Card
          icon={<FaCar />}
          label="Active Vehicles"
          value="32"
          bgColor="bg-gradient-to-r from-purple-400 to-purple-600"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <ChartCard title="Fleet Usage" icon={<FaTruck />}>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={fleetUsageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip contentStyle={{ backgroundColor: "#111827", borderRadius: 8, color: "#fff" }} />
              <Line type="monotone" dataKey="usage" stroke="#2563EB" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Sales Overview" icon={<FaChartLine />}>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip contentStyle={{ backgroundColor: "#111827", borderRadius: 8, color: "#fff" }} />
              <Legend wrapperStyle={{ color: "#374151" }} />
              <Bar dataKey="sales" fill="#22C55E" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Vehicle Status" icon={<FaCar />}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={vehicleStatusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {vehicleStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#111827", borderRadius: 8, color: "#fff" }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Tables Section */}
      <TableCard
        title="Recent Vehicle Activity"
        data={[
          { vehicle: "V001", driver: "John Doe", status: "Active", lastUpdate: "14:35" },
          { vehicle: "V002", driver: "Jane Smith", status: "Idle", lastUpdate: "14:20" },
          { vehicle: "V003", driver: "Mark Lee", status: "Maintenance", lastUpdate: "13:50" },
          { vehicle: "V004", driver: "Alice Brown", status: "Active", lastUpdate: "13:30" },
        ]}
        columns={["vehicle", "driver", "status", "lastUpdate"]}
      />
      <TableCard title="Top Drivers" data={topDrivers} columns={["name", "trips", "distance"]} />
      <TableCard title="Upcoming Maintenance" data={upcomingMaintenance} columns={["vehicle", "type", "date"]} />
      <ChartCard title="Fuel Consumption" icon={<FaGasPump />}>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={fuelConsumptionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="vehicle" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip contentStyle={{ backgroundColor: "#111827", borderRadius: 8, color: "#fff" }} />
            <Bar dataKey="fuel" fill="#F59E0B" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Route Efficiency" icon={<FaRoute />}>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={routeEfficiency}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="route" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip contentStyle={{ backgroundColor: "#111827", borderRadius: 8, color: "#fff" }} />
            <Bar dataKey="efficiency" fill="#3B82F6" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <TableCard title="Driver Performance" data={driverPerformance} columns={["driver", "trips", "rating"]} />
      <TableCard title="Upcoming Events" data={upcomingEvents} columns={["event", "date"]} />
    </div>
  );
};

// Card Component
const Card = ({ icon, label, value, bgColor }) => (
  <div className="flex items-center p-4 bg-white rounded-xl shadow hover:shadow-xl transition-all group">
    <div className={`p-4 ${bgColor} text-white rounded-full text-xl`}>{icon}</div>
    <div className="ml-4">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-gray-900 font-bold text-xl">{value}</p>
    </div>
  </div>
);

// Chart Card Component
const ChartCard = ({ title, icon, children }) => (
  <div className="bg-white rounded-xl shadow p-5 hover:shadow-xl transition-all">
    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
      {icon} {title}
    </h2>
    <div>{children}</div>
  </div>
);

// Table Card Component
const TableCard = ({ title, data, columns }) => {
  const allColumns = columns || Object.keys(data[0] || {});
  return (
    <div className="bg-white rounded-xl shadow p-5 mt-6 hover:shadow-xl transition-all">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              {allColumns.map((col) => (
                <th key={col} className="px-4 py-2 border-b">{col.charAt(0).toUpperCase() + col.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors border-b">
                {allColumns.map((col) => (
                  <td key={col} className="px-4 py-2">{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
