"use client";

import Image from "next/image";
import { Product } from "@/src/types/product";
import { useCart } from "@/src/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 flex flex-col hover:shadow transition">
      <div className="relative w-full h-40 sm:h-48">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="mt-3 font-semibold text-sm line-clamp-2">
        {product.title}
      </h3>

      <p className="font-bold mt-1">₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-black text-white py-2 rounded text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
}
