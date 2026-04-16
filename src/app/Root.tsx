import { Outlet, NavLink, useLocation } from "react-router";
import { useEffect } from "react";
import { cn } from "./components/ui/utils";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-colors border border-lunar-grey/50",
      isActive
        ? "bg-paper text-charcoal"
        : "text-lunar-grey hover:text-paper"
    );

  return (
    <div className="la-page-shell min-h-screen overflow-x-hidden">
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-lunar-grey/80 bg-vacuum text-paper"
        role="banner"
      >
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="la-caption text-[9px] tracking-[0.35em] text-safety-orange"
              aria-hidden
            >
              ┃
            </span>
            <div className="min-w-0">
              <p className="la-caption truncate text-[9px] tracking-[0.25em] text-lunar-grey">
                Keystone Space Holdings
              </p>
              <p className="truncate font-sans text-sm font-semibold tracking-tight text-paper md:text-base">
                LUNAR ADVANCE™
              </p>
            </div>
          </div>

          <nav
            className="flex w-full items-center justify-start md:w-auto md:justify-center"
            aria-label="Primary"
          >
            <div className="inline-flex w-full max-w-md border border-lunar-grey/40 md:w-auto md:max-w-none">
              <NavLink to="/" end className={linkClass}>
                Public program
              </NavLink>
              <NavLink to="/brand" className={linkClass}>
                Brand system
              </NavLink>
            </div>
          </nav>

          <div className="la-caption hidden text-[9px] tracking-[0.2em] text-lunar-grey/80 lg:block">
            <span className="text-lunar-grey">Doc ref.</span>{" "}
            <span className="text-paper/90">LA-MBB-04</span>
          </div>
        </div>
      </header>

      <main id="main" className="w-full pt-28 md:pt-20">
        <Outlet />
      </main>
    </div>
  );
}
