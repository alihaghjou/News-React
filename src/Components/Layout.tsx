import { Link, Outlet } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "react-feather";
import FooterLink from "./FooterLink";

export default function Layout() {
  return (
    <main className="p-2 mb-3 min-h-screen text-slate-100 bg-gradient-to-l from-[#2196f3] to-[#f44336]">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-semibold text-2xl text-center border-b p-4">
        <Link to="/">Get The Latest News</Link>
      </h1>
      <Outlet />
      <footer className="flex flex-col border-t border-t-cyan-500 p-3">
        <section className="flex justify-center gap-4 text-lg">
          <FooterLink link="/" name="Facebook">
            <Facebook />
          </FooterLink>
          <FooterLink link="/" name="Twitter">
            <Twitter />
          </FooterLink>
          <FooterLink link="/" name="Instagram">
            <Instagram />
          </FooterLink>
          <FooterLink link="/" name="Linkedin">
            <Linkedin />
          </FooterLink>
        </section>
        <h2 className="text-center mt-3">Copyright 2022</h2>
      </footer>
    </main>
  );
}
