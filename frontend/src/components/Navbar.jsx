import React, { useState, useRef } from "react";
import {
  FaBell,
  FaUserCircle,
  FaChartBar,
  FaSearch,
  FaFileCsv,
  FaFilePdf,
} from "react-icons/fa";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import jsPDF from "jspdf";
import "jspdf-autotable";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Navbar = () => {
  // Popup states
  const [isReportPopupOpen, setIsReportPopupOpen] = useState(false);
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);

  const barChartRef = useRef();
  const histChartRef = useRef();

  // Dummy fleet report data
  const reportData = [
    { vehicle: "V001", trips: 25, fuel: 60, status: "Active" },
    { vehicle: "V002", trips: 18, fuel: 45, status: "Idle" },
    { vehicle: "V003", trips: 30, fuel: 70, status: "Active" },
    { vehicle: "V004", trips: 12, fuel: 55, status: "Maintenance" },
  ];

  // Dummy notifications
  const notifications = [
    { id: 1, title: "Vehicle V001 needs maintenance", type: "Maintenance", time: "2026-01-07 10:30" },
    { id: 2, title: "V002 trip completed", type: "Trip", time: "2026-01-07 09:15" },
    { id: 3, title: "Fuel low in V003", type: "Alert", time: "2026-01-07 08:50" },
    { id: 4, title: "Driver assigned to V004", type: "Info", time: "2026-01-06 16:20" },
    { id: 5, title: "Vehicle V005 idle for 3 hours", type: "Alert", time: "2026-01-06 15:00" },
    { id: 6, title: "Trip started for V006", type: "Trip", time: "2026-01-06 12:45" },
    { id: 7, title: "Maintenance scheduled for V007", type: "Maintenance", time: "2026-01-05 18:30" },
    { id: 8, title: "Fuel topped up for V008", type: "Info", time: "2026-01-05 14:10" },
  ];

  // Notification state
  const [notificationSearch, setNotificationSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;

  const filteredNotifications = notifications.filter(
    (n) =>
      n.title.toLowerCase().includes(notificationSearch.toLowerCase()) ||
      n.type.toLowerCase().includes(notificationSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNotifications.length / rowsPerPage);
  const paginatedNotifications = filteredNotifications.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Chart data
  const barChartData = {
    labels: reportData.map((r) => r.vehicle),
    datasets: [
      { label: "Trips", data: reportData.map((r) => r.trips), backgroundColor: "rgba(59,130,246,0.7)" },
      { label: "Fuel (L)", data: reportData.map((r) => r.fuel), backgroundColor: "rgba(16,185,129,0.7)" },
    ],
  };
  const barChartOptions = { responsive: true, plugins: { legend: { position: "top" }, title: { display: true, text: "Fleet Report Overview" } } };
  const histChartData = {
    labels: reportData.map((r) => r.vehicle),
    datasets: [{ label: "Trips Histogram", data: reportData.map((r) => r.trips), backgroundColor: "rgba(250,204,21,0.7)" }],
  };
  const histChartOptions = { responsive: true, plugins: { legend: { display: false }, title: { display: true, text: "Trips Distribution" } } };

  // CSV & PDF export functions
  const downloadCSV = () => {
    const headers = ["Vehicle", "Trips", "Fuel", "Status"];
    const rows = reportData.map((r) => [r.vehicle, r.trips, r.fuel, r.status]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csvContent);
    link.download = "fleet_report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.text("Fleet Report", 40, 40);
    if (barChartRef.current) doc.addImage(barChartRef.current.canvas.toDataURL("image/png"), "PNG", 40, 60, 250, 180);
    if (histChartRef.current) doc.addImage(histChartRef.current.canvas.toDataURL("image/png"), "PNG", 300, 60, 250, 180);
    doc.autoTable({ head: [["Vehicle", "Trips", "Fuel", "Status"]], body: reportData.map((r) => [r.vehicle, r.trips, r.fuel, r.status]), startY: 260 });
    doc.save("fleet_report.pdf");
  };

  return (
    <>
      {/* Navbar */}
      <header className="flex items-center justify-between bg-white shadow-lg px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center flex-1 max-w-md relative">
          <input type="text" placeholder="Search vehicles..." className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex items-center gap-4 ml-6">
          {/* Fleet Reports */}
          <button onClick={() => setIsReportPopupOpen(true)} className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl md:text-2xl"><FaChartBar /></button>

          {/* Notifications */}
          <button onClick={() => setIsNotificationPopupOpen(true)} className="relative cursor-pointer text-gray-600 hover:text-blue-600 text-xl md:text-2xl">
            <FaBell />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1 py-0.5">{notifications.length}</span>
          </button>

          {/* User */}
          <div className="relative group">
            <button className="flex items-center cursor-pointer gap-2 bg-gray-100 px-3 py-1.5 rounded-full hover:bg-gray-200 shadow-sm text-sm md:text-base">
              <FaUserCircle className="text-2xl md:text-3xl text-gray-600" />
              <span className="hidden md:block font-medium text-gray-700">John Doe</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fleet Reports Popup */}
      {isReportPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 z-50">
          <div className="bg-white rounded-xl shadow-xl w-[80vw] h-[80vh] overflow-y-auto p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Fleet Reports</h2>
              <button onClick={() => setIsReportPopupOpen(false)} className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 cursor-pointer">Close</button>
            </div>

            {/* Export */}
            <div className="flex gap-3 mb-4">
              <button onClick={downloadCSV} className="flex items-center gap-2 px-4 py-2 bg-sky-950 text-white rounded cursor-pointer"><FaFileCsv /> CSV</button>
              <button onClick={downloadPDF} className="flex items-center gap-2 px-4 py-2 bg-sky-950 text-white rounded cursor-pointer"><FaFilePdf /> PDF</button>
            </div>

            {/* Charts */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1"><Bar ref={barChartRef} data={barChartData} options={barChartOptions} /></div>
              <div className="flex-1"><Bar ref={histChartRef} data={histChartData} options={histChartOptions} /></div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    {["Vehicle", "Trips", "Fuel", "Status"].map((col) => (
                      <th key={col} className="px-4 py-2 border text-left">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reportData.map((r, i) => (
                    <tr key={i} className="hover:bg-gray-50 even:bg-gray-50">
                      <td className="px-4 py-2 border">{r.vehicle}</td>
                      <td className="px-4 py-2 border">{r.trips}</td>
                      <td className="px-4 py-2 border">{r.fuel}</td>
                      <td className="px-4 py-2 border">{r.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Popup */}
      {isNotificationPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 z-50">
          <div className="bg-white rounded-xl shadow-xl w-[80vw] max-w-3xl h-[70vh] overflow-y-auto p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Notifications</h2>
              <button onClick={() => setIsNotificationPopupOpen(false)} className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 cursor-pointer">Close</button>
            </div>

            <div className="mb-3 flex justify-end">
              <input type="text" placeholder="Search notifications..." value={notificationSearch} onChange={(e) => { setNotificationSearch(e.target.value); setCurrentPage(1); }} className="px-3 py-1 border rounded shadow-sm w-full md:w-64" />
            </div>

            <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 border text-left">Title</th>
                    <th className="px-4 py-2 border text-left">Type</th>
                    <th className="px-4 py-2 border text-left">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedNotifications.length > 0 ? paginatedNotifications.map((n) => (
                    <tr key={n.id} className="hover:bg-gray-50 even:bg-gray-50">
                      <td className="px-4 py-2 border">{n.title}</td>
                      <td className="px-4 py-2 border">{n.type}</td>
                      <td className="px-4 py-2 border">{n.time}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={3} className="px-4 py-2 text-gray-500 text-center">No notifications found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end gap-2 mt-3">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 cursor-pointer">Prev</button>
              <span className="px-2 py-1">{currentPage} / {totalPages}</span>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50 cursor-pointer">Next</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
