"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Shop", href: "/" },
    { label: "On Sale", href: "#" },
    { label: "New Arrivals", href: "#" },
    { label: "Brands", href: "#" },
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl text-black font-extrabold flex-shrink-0">
          SHOP.CO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search - Hidden on Mobile */}
          <input
            placeholder="Search..."
            className="hidden lg:block px-4 py-2 text-black rounded-full bg-gray-100 text-sm border-none focus:outline-none focus:ring-2 focus:ring-gray-400 w-48"
          />

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="flex items-center gap-1 font-semibold text-lg hover:text-gray-600 transition relative"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-gray-50">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded transition font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Search */}
            <input
              placeholder="Search..."
              className="w-full px-4 py-2 text-black rounded-full bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
