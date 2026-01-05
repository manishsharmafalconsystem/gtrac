import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark/light mode
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        darkMode={darkMode}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto transition-colors duration-300">
        {/* Navbar */}
        <Navbar setSidebarOpen={setSidebarOpen} darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Dashboard Content */}
        <main className="p-6 transition-colors duration-300">
          <Dashboard darkMode={darkMode} />
        </main>
      </div>
    </div>
  );
};

export default App;
