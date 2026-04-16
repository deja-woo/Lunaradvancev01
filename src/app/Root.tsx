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
    <div className="min-h-screen bg-[#050507] text-[#D1D4D6] font-['IBM_Plex_Sans'] antialiased overflow-x-hidden selection:bg-[#FF6A13] selection:text-white">
      {/* Top Fixed Navigation - Agency Mode / Public Mode */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase font-['IBM_Plex_Mono'] bg-[#0A0A0C]/90 backdrop-blur-md text-[#F7F7F5] border-b border-white/5">
        <div className="flex items-center gap-3">
          <Orbit className="w-4 h-4 text-[#FF6A13] animate-[spin_10s_linear_infinite]" />
          <span className="font-bold tracking-widest text-[#FF6A13]">LUNAR ADVANCE™</span>
        </div>
        
        <div className="flex items-center gap-6 border border-white/10 rounded-none px-1 py-1 bg-[#050507]">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 transition-all duration-300 ${isActive ? "bg-[#FF6A13] text-[#050507] font-bold" : "text-[#D1D4D6]/60 hover:text-white"}`
            }
          >
            [ Public View ]
          </NavLink>
          <NavLink
            to="/brand"
            className={({ isActive }) =>
              `px-4 py-2 transition-all duration-300 flex items-center gap-2 ${isActive ? "bg-[#FF6A13] text-[#050507] font-bold" : "text-[#D1D4D6]/60 hover:text-white"}`
            }
          >
            [ Agency Brief ] 
          </NavLink>
        </div>
        
        <div className="hidden md:flex items-center gap-2 text-[#D1D4D6]/40">
          <span>KEYSTONE SPACE HOLDINGS</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="w-full pt-[72px]">
        <Outlet />
      </main>
    </div>
  );
}
