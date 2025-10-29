"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-gradient-to-r from-red-900 via-black to-red-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <h1 className="text-2xl font-bold text-white">Shahrukh.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
      <li> <Link href="/register">Admin</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-gray-100 p-4 space-y-4">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link href="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li><Link href="/docs" onClick={() => setOpen(false)}>Docs</Link></li>
          <li><Link href="/myProjects" onClick={() => setOpen(false)}>Projects</Link></li>
          <li><Link href="/upload" onClick={() => setOpen(false)}>Upload</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
