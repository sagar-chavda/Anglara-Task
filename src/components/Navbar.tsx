"use client";

import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold">
          SHOP.CO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <span>  <Link href="/">
          Shop
        </Link></span>
          <span>On Sale</span>
          <span>New Arrivals</span>
          <span>Brands</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <input
            placeholder="Search..."
            className="hidden lg:block px-4 py-2 text-black rounded-full bg-gray-100 text-sm"
          />
          <Link href="/cart">🛒 {cart.length}</Link>
        </div>
      </div>
    </nav>
  );
}
