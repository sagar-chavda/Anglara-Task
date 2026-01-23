import Hero from "@/src/components/Hero";
import ProductSection from "@/src/components/ProductSection";
import { Product } from "@/src/types/product";

export const dynamic = "force-dynamic"; // ✅ ADD THIS

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) return [];

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <ProductSection
        title="NEW ARRIVALS"
        products={products.slice(0, 4)}
      />
      <ProductSection
        title="TOP SELLING"
        products={products.slice(4, 8)}
      />
    </>
  );
}
