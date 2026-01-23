import Hero from "@/src/components/Hero";
import ProductSection from "@/src/components/ProductSection";
import { Product } from "@/src/types/product";

export const dynamic = "force-dynamic"; // ✅ ADD THIS

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // ✅ IMPORTANT
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
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
