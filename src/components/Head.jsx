import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Head() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`transition font-medium ${
        location.pathname === path
          ? "text-blue-500"
          : "text-white hover:text-blue-400"
      }`}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-[#0B1F3A] w-full fixed top-0 z-50 shadow-md">
      <div className="max-w-full-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white font-semibold text-lg"
        >
          <img
            src={logo}
            alt="logo"
            className="h-15 w-auto object-contain  px-2 py-1 "
            // bg-white rounded-xl shadow-md
          />
          Ticks N Lines LLP
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/services", "Services")}
          {navLink("/contact", "Contact")}

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition flex items-center gap-2"
          >
            Get Started
            <span className="bg-white text-blue-600 w-6 h-6 flex items-center justify-center rounded-full text-sm">
              →
            </span>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#0B1F3A] px-6 pb-6 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLink("/", "Home")}
          {navLink("/about", "About")}
          {navLink("/services", "Services")}
          {navLink("/contact", "Contact")}

          <Link
            to="/contact"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-center transition"
            onClick={() => setOpen(false)}
          >
            Get Started →
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Head;
