import { Outlet, NavLink, useLocation } from "react-router";
import { Orbit, Compass } from "lucide-react";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();
  
  // Smooth scroll reset on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#2B2E34] font-['IBM_Plex_Sans'] antialiased overflow-x-hidden selection:bg-[#FF6A13] selection:text-white">
      {/* Top Fixed Navigation - Agency Mode / Public Mode */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center text-[10px] tracking-widest uppercase font-['IBM_Plex_Mono'] bg-[#0B0C0F] text-[#F7F7F5] border-b border-[#2B2E34]">
        <div className="flex items-center gap-3">
          <Orbit className="w-4 h-4 text-[#FF6A13]" />
          <span className="font-semibold">LUNAR ADVANCE™</span>
        </div>
        
        <div className="flex items-center gap-6 border border-[#2B2E34] rounded-full px-1 py-1 bg-[#1A1C23]">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-[#F7F7F5] text-[#0B0C0F] font-semibold" : "text-[#D1D4D6] hover:text-white"}`
            }
          >
            Public View
          </NavLink>
          <NavLink
            to="/brand"
            className={({ isActive }) =>
              `px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${isActive ? "bg-[#F7F7F5] text-[#0B0C0F] font-semibold" : "text-[#D1D4D6] hover:text-white"}`
            }
          >
            Agency Brief <Compass className="w-3 h-3" />
          </NavLink>
        </div>
        
        <div className="hidden md:flex items-center gap-2 text-[#D1D4D6]/70">
          <span>Keystone Space Holdings</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="w-full pt-[72px]">
        <Outlet />
      </main>
    </div>
  );
}
