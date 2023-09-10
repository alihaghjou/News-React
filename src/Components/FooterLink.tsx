import React from "react";
import { Link } from "react-router-dom";

export default function FooterLink({
  children,
  link,
  name
}: {
  children: React.ReactNode;
  link: string;
  name: string
}) {
  return (
    <Link to={link}>
      <button className="flex items-center hover:text-red-300 transition-all duration-300">
        {children}
        {name}
      </button>
    </Link>
  );
}
