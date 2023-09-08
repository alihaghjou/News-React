import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="p-2 mb-3 min-h-screen text-slate-100 bg-gradient-to-l from-[#2196f3] to-[#f44336]">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-semibold text-2xl text-center border-b p-4">
        text that is color
      </h1>
      <Outlet />
    </main>
  );
}
