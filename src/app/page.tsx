"use client";

import { useEffect, useState } from "react";
import Hero from "@/src/components/Hero";
import ProductSection from "@/src/components/ProductSection";
import { Product } from "@/src/types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        console.log('✅ Products loaded:', data.length);
      } catch (error) {
        console.error('❌ Error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      {loading ? (
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      ) : products.length > 0 ? (
        <>
          <ProductSection
            title="NEW ARRIVALS"
            products={products.slice(0, 4)}
          />
          <ProductSection
            title="TOP SELLING"
            products={products.slice(4, 8)}
          />
        </>
      ) : (
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-xl text-red-600">Failed to load products</p>
        </div>
      )}
    </>
  );
}