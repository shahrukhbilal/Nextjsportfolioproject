"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // ✅ Common menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/register" },
  ];

  return (
    <nav className="bg-gradient-to-r from-red-900 via-black to-red-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <h1 className="text-2xl font-bold text-white">Shahrukh.dev</h1>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-300"></span>
          <span className="w-6 h-0.5 bg-gray-300"></span>
          <span className="w-6 h-0.5 bg-gray-300"></span>
        </button>
      </div>

      {/* ✅ Mobile Menu (same items as desktop) */}
      {open && (
        <ul className="md:hidden bg-gray-100 p-4 space-y-4 text-gray-800 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
