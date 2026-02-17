import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { X } from 'lucide-react';
import { Bell, ChevronDown, Home, Wallet, Send, FileText, Users, BarChart3, Settings, LogOut, Plus, TrendingUp, Clock } from 'lucide-react';

const navItems = [
  { key: "overview", label: "Dashboard", icon: Home },
  { key: "wallet", label: "Wallet", icon: Wallet },
  { key: "payout", label: "Payout", icon: Send },
  { key: "transactions", label: "Transactions", icon: FileText },
  { key: "vendor", label: "Vendor", icon: Users },
  { key: "settings", label: "Settings", icon: Settings },
];

export default function SidebarLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("/");
  const navigate = useNavigate();
  const sidebarVariants = {
    hidden: (i) => ({
      opacity: 0,
      y: -20 - i * 10, // each next card slightly lower start → curve effect
    }),
    visible: (i) => ({
      opacity: 1,
      y: 0, // gives slight downward curve effect at final position
      transition: {
        duration: 0.6,
        delay: i * 0.2, // stagger timing
        ease: "easeOut",
      },
    }),
  };
  return (
    <div className="min-h-screen flex bg-[#050506] text-gray-200">
      {/* MOBILE OVERLAY DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 w-72 z-50 md:hidden"
            >
              <MobileSidebar
                collapsed={mobileOpen}
                active={active}
                onNavigate={(k) => {
                  setActive(k);
                  setMobileOpen(false);
                  navigate(`/${k}`);
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* SIDEBAR (DESKTOP) */}
      <aside
        className={`hidden md:flex flex-col fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out z-50 ${collapsed ? "w-20" : "w-72"
          }`}
      >
        <div className="h-full bg-linear-to-b from-black/70 to-[#070708] border-r border-white/10 flex flex-col justify-between">
          {/* Top: Logo and toggle */}
          <div>
            <div
              className={`px-4 py-5 flex items-center gap-3 ${collapsed ? "justify-center" : ""
                }`}
            >
              <div
              
              >
                <img className="w-20" src="Payeox.png"></img>
              </div>
              
              <button
                onClick={() => setCollapsed((s) => !s)}
                aria-label="Toggle sidebar"
                className={`ml-auto text-gray-300 hover:text-white transition ${collapsed ? "mr-1" : "mr-2"
                  }`}
                title="Collapse sidebar"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-4 px-2">
              {navItems.map((it) => (
                <SidebarItem
                  key={it.key}
                  item={it}
                  collapsed={collapsed}
                  active={active === it.key}
                  onClick={() => {
                    setActive(it.key);
                    navigate(`/${it.key}`);
                  }}
                />
              ))}
            </nav>
          </div>

          {/* Bottom: Profile & CTAs */}
          <div className="px-3 py-5">
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition cursor-pointer ${collapsed ? "justify-center" : ""
                }`}
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 border border-white/10 flex items-center justify-center text-sm font-semibold">
                AJ
              </div>
              {!collapsed && (
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Amit Joshi</div>
                  <div className="text-xs text-gray-400">Merchant</div>
                </div>
              )}
            </div>

           
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className={`flex-1 min-h-screen transition-all duration-300 ${collapsed ? "md:ml-20" : "md:ml-72"
        }`}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5 transition"
              onClick={() => setMobileOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="text-lg font-semibold text-white">Dashboard</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-4">
              <div className="text-sm text-gray-300">
                Balance: <span className="font-semibold text-white">₹2,500</span>
              </div>
              <button className="p-2 rounded-md hover:bg-white/5 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 rounded-md hover:bg-white/5 transition relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>

              <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 border border-white/10 flex items-center justify-center text-sm font-semibold cursor-pointer">
                AJ
              </div>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="p-2 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}

/* ---------- Mobile Sidebar Component ---------- */
function MobileSidebar({ collapsed, active, onNavigate }) {
  return (
    <div className="h-full bg-linear-to-b from-black/90 to-[#070708] border-r border-white/10 flex flex-col justify-between">
      <div>
        <div className="closebar flex items-center justify-between">
          <div className="px-4 py-5 flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xl shadow-lg border border-white/10">
              AE
            </div>
            <div className="ml-2">
              <div className="text-lg font-bold text-white">AdsReacher</div>
              <div className="text-xs text-gray-400">One-click ads</div>

            </div>
          </div>
          <div className="close mr-2">
            <X onClick={() => setMobileOpen(false)}/>

          </div>
        </div>

        <nav className="mt-4 px-2">
          {navItems.map((it) => (
            <SidebarItem
              key={it.key}
              item={it}
              collapsed={false}
              active={active === it.key}
              onClick={() =>
                onNavigate(it.key)
              }
            />
          ))}
        </nav>
      </div>

      <div className="px-3 py-5">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 border border-white/10 flex items-center justify-center text-sm font-semibold">
            AJ
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-white">Amit Joshi</div>
            <div className="text-xs text-gray-400">Merchant</div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

/* ---------- Small helper components & icons ---------- */
function SidebarItem({ item, collapsed, active, onClick }) {
  const Icon = item.icon;
  return (

    <button
      onClick={onClick}
      className={`group flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-white/5 transition mb-1 ${active ? "bg-white/10" : ""
        }`}
    >
      <div className="w-8 h-8 flex items-center justify-center text-lg text-white">
        <Icon className="w-5 h-5" />
      </div>
      {!collapsed && <div className="text-sm font-medium text-white">{item.label}</div>}
    </button>
  );
}

/* ---------- Icons (inline svg) ---------- */
function DashboardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="13" y="3" width="8" height="4" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="13" y="9" width="8" height="12" rx="1" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function CreateIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AdsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 7h16v10H4z" fill="currentColor" opacity="0.9" />
      <rect x="7" y="10" width="6" height="3" rx="0.6" fill="#000000" opacity="0.1" />
    </svg>
  );
}

function AnalyticsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 3v18h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13v4M12 9v8M17 5v12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WalletIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="2" y="6" width="20" height="12" rx="2" fill="currentColor" opacity="0.9" />
      <circle cx="17" cy="12" r="1.4" fill="#000000" opacity="0.15" />
    </svg>
  );
}

function SettingsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <path
        d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
function LinkAccounts(props) {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable-icon lucide-cable"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"/><path d="M17 21v-2"/><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"/><path d="M21 21v-2"/><path d="M3 5V3"/><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"/><path d="M7 5V3"/></svg>
  );
}