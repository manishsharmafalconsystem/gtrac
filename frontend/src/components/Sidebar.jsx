import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaCog,
  FaEnvelope,
  FaChartBar,
  FaBus,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen, collapsed, setCollapsed }) => {
  const [reportsOpen, setReportsOpen] = useState(false);
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);

  const menuItems = [
    { name: "Overview", icon: <FaHome /> },
    {
      name: "All Reports",
      icon: <FaChartBar />,
      dropdown: ["Daily Report", "Weekly Report", "Monthly Report"],
      open: reportsOpen,
      toggle: () => setReportsOpen(!reportsOpen),
    },
    { name: "Manage Sub Users", icon: <FaUsers /> },
    {
      name: "Alerts",
      icon: <FaEnvelope />,
      dropdown: ["Over Speed", "Fuel Low", "Maintenance Due"],
      open: alertsOpen,
      toggle: () => setAlertsOpen(!alertsOpen),
    },
    {
      name: "Fleet Reports",
      icon: <FaBus />,
      dropdown: ["Active Vehicles", "Idle Vehicles", "Fuel Report"],
      open: fleetOpen,
      toggle: () => setFleetOpen(!fleetOpen),
    },
    { name: "Settings", icon: <FaCog /> },
  ];

  // Modern production-ready color palette
  const sidebarBg = "bg-white shadow-lg";
  const menuText = "text-gray-700";
  const menuHover = "hover:bg-blue-100";
  const menuActive = "bg-blue-200";

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 flex flex-col justify-start transition-all duration-300 ${sidebarBg} text-gray-700 transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        ${collapsed ? "w-20" : "w-64"}
        md:translate-x-0 md:static md:shrink-0`}
      >
        {/* Logo / Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {!collapsed && <span className="text-2xl font-bold text-gray-800">G-Track</span>}
          <button
            className="text-gray-400 md:hidden hover:text-gray-600 focus:outline-none text-xl transition-transform hover:scale-110"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-4 flex flex-col gap-1 px-2">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className={`group flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none ${
                  item.open ? menuActive : ""
                } ${menuHover}`}
                onClick={item.dropdown ? item.toggle : undefined}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg">{item.icon}</span>
                  {!collapsed && <span className="font-medium">{item.name}</span>}
                </div>

                {!collapsed && item.dropdown && (
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      item.open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}

                {collapsed && (
                  <span className="absolute left-full ml-2 bg-white text-gray-700 text-xs font-medium rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                    {item.name}
                  </span>
                )}
              </button>

              {/* Dropdown Items */}
              {item.dropdown && item.open && !collapsed && (
                <div className="ml-8 mt-1 flex flex-col gap-1 transition-all duration-300">
                  {item.dropdown.map((subItem, i) => (
                    <a
                      key={i}
                      href="#"
                      className="py-2 px-4 text-gray-700 rounded-lg hover:bg-blue-100 text-sm transition-all"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Collapse Button */}
        <div className="mt-auto p-4 border-t border-gray-200">
          <button
            className="w-full flex items-center justify-center gap-2 py-2 bg-black text-white rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FaBars />
            {!collapsed && <span className="font-medium">Collapse</span>}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
