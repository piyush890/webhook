import { ChevronRight, ChevronDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { menusData } from "../Helper/Dummydata";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { setLoginSuccess } from "../Redux/Auth/AuthReducer";

const SideNav = ({ children }) => {
  const dispatch = useDispatch();
  const clearData = () => {
      dispatch(setLoginSuccess(
            {
              isAuthenticated: false,
              user: null,
              type: null,
              name: null,
              email: null,
            }
          ));
    localStorage.clear();
    sessionStorage.clear();
  };
  const location = useLocation();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.LoggedIn);
  
  // Initialize accordion state based on current route
  const getInitialAccordionState = () => {
    const initialState = {};
    menusData.forEach((item) => {
      if (item.children && item.children.length > 0) {
        // Check if any child's link matches current location
        const hasActiveChild = item.children.some(
          (child) => child.link === location.pathname
        );
        if (hasActiveChild) {
          initialState[item.id] = true;
        }
      }
    });
    return initialState;
  };

  const [openAccordions, setOpenAccordions] = useState(getInitialAccordionState);

  const activeTab =
    menusData.find((item) => item.link === location.pathname)?.name;

  const toggleAccordion = (itemId) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [itemId]: true, // Only open, never close
    }));
  };

  const handleTabClick = (item) => {
    // If item has children, toggle accordion
    if (item.children && item.children.length > 0) {
      toggleAccordion(item.id);
    } else if (item.link) {
      // If no children, navigate to link
      navigate(item.link);
    }
  };

  const handleSubItemClick = (subItem) => {
    if (subItem.link) {
      navigate(subItem.link);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 h-[73px] bg-black/80 border-b border-white/10 z-50 backdrop-blur-lg">
        <div className="h-full px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-white/20">
              {/* <svg
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg> */}
              <img src="logos.png" alt="" srcset="" />
              
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Payeox</h1>
              <p className="text-xs text-gray-400">Payment Dashboard</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-bold text-black">
              {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : "U"}
            </div>
          </div>
        </div>
      </header>


      {/* ================= SIDEBAR ================= */}
      <aside className="fixed top-[73px] left-0 bottom-0 w-60 bg-black/40 border-r border-white/10 overflow-y-auto z-40">
        <nav className="p-4 space-y-1 pb-24">
          {menusData.map((item) => (
            <div key={item.id}>
              {item.icon && (
                <item.icon className="w-5 h-5 text-gray-400 mb-2" />
              )}

              {/* Main Menu Item */}
              <button
                onClick={() => handleTabClick(item)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all group
                  ${
                    activeTab === item.name
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {item.name}
                
                {/* Show ChevronDown if item has children, otherwise ChevronRight */}
                {item.children && item.children.length > 0 ? (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200
                      ${openAccordions[item.id] ? "rotate-180" : ""}`}
                  />
                ) : (
                  <ChevronRight
                    className={`w-4 h-4 transition-all
                      ${
                        activeTab === item.name
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                  />
                )}
              </button>

              {/* Accordion Sub-Items */}
              {item.children && item.children.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      openAccordions[item.id]
                        ? "max-h-96 opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="ml-4 space-y-1 pl-3 border-l border-white/10">
                    {item.children.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleSubItemClick(subItem)}
                        className={`w-full px-3 py-2 rounded-lg text-xs font-medium text-left transition-all
                          ${
                            location.pathname === subItem.link
                              ? "bg-white/10 text-white"
                              : "text-gray-400 hover:bg-white/5 hover:text-white"
                          }`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <HoverCard openDelay={10} closeDelay={100}>
         <HoverCardTrigger asChild>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10 bg-black/70">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-900 to-pink-500 rounded-lg flex items-center justify-center text-xs font-bold text-white">
              {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{userProfile.name}</p>
              <p className="text-xs text-gray-400">{userProfile.email}</p>
            </div>
          </div>
        </div>

        </HoverCardTrigger>
         <HoverCardContent className="flex w-64 flex-col gap-0.5">
         <a onClick={()=>clearData()} href="/">Logout</a>
      </HoverCardContent>
            </HoverCard>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="ml-60 pt-[73px] w-[calc(100%-15rem)] min-h-screen">
        <div className="min-w-0">
          {children}
        </div>
      </main>

    </div>
  );
};

export default SideNav;
