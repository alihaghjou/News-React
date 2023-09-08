import { Link, Outlet } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "react-feather";

export default function Layout() {
  return (
    <main className="p-2 mb-3 min-h-screen text-slate-100 bg-gradient-to-l from-[#2196f3] to-[#f44336]">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-semibold text-2xl text-center border-b p-4">
        Get The Latest News
      </h1>
      <Outlet />
      <footer className="flex flex-col border-t border-t-cyan-500 p-3">
        <section className="flex justify-center gap-4 text-lg">
          <Link to="/">
            <button className="flex items-center hover:text-red-300"><Facebook />Facebook</button>
          </Link>
          <Link to="/">
            <button className="flex items-center hover:text-red-300"><Twitter />Twitter</button>
          </Link>
          <Link to="/">
            <button className="flex items-center hover:text-red-300"><Instagram />Instagram</button>
          </Link>
          <Link to="/">
            <button className="flex items-center hover:text-red-300"><Linkedin />LinkTree</button>
          </Link>
        </section>
        <h2 className="text-center mt-3">Copyright 2022</h2>
      </footer>
    </main>
  );
}
