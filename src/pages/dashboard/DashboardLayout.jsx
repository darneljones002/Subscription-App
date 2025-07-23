import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


const links = [
  { to: "/dashboard/workouts", label: "Daily Workouts", emoji: "🏋️" },
  { to: "/dashboard/nutrition", label: "Nutrition Tips", emoji: "🥗" },
  { to: "/dashboard/faqs", label: "FAQs", emoji: "❓" },
  { to: "/dashboard/profile", label: "Your Profile", emoji: "🙋" },
];

export default function DashboardLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar (always visible on desktop) */}
      <div className="hidden md:flex md:flex-col md:w-64 bg-gray-800 p-6">
        <h2 className="text-2xl font-bold text-red-500 uppercase tracking-wide mb-8">
          Dashboard
        </h2>
        <nav className="flex flex-col gap-3 flex-1 relative">
          {links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <motion.div key={link.to} layout>
                <Link
                  to={link.to}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg relative overflow-hidden transition ${
                    isActive ? "text-white font-semibold" : "text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 w-full h-full bg-red-600 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span>{link.emoji}</span>
                  <span>{link.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
        <div className="mt-auto flex items-center justify-between gap-3 bg-gray-700 p-3 rounded-lg">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-gray-500"
          />
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Sidebar (Animated) */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            key="mobile-sidebar"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="fixed md:hidden top-0 left-0 h-full w-64 bg-gray-800 p-6 flex flex-col z-50"
          >
            <h2 className="text-2xl font-bold text-red-500 uppercase tracking-wide mb-8">
              Dashboard
            </h2>
            <nav className="flex flex-col gap-3 flex-1">
              {links.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                      pathname === link.to ? "bg-red-600" : "hover:bg-gray-700"
                    }`}
                  >
                    <span>{link.emoji}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex items-center justify-between gap-3 bg-gray-700 p-3 rounded-lg">
              <img
                src="https://i.pravatar.cc/40"
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-gray-500"
              />
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar (Mobile) */}
        <header className="md:hidden flex items-center justify-between bg-gray-800 p-4 shadow-lg">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl text-white"
          >
            ☰
          </button>
          <h1 className="text-lg font-bold">Dashboard</h1>
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-gray-500"
          />
        </header>

        {/* Page Content (Animated) */}
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-6 overflow-y-auto"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
