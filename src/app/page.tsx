import Hero from "@/src/components/Hero";
import ProductSection from "@/src/components/ProductSection";
import { Product } from "@/src/types/product";

export const dynamic = "force-dynamic"; // ✅ ADD THIS

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store", // ✅ ADD THIS
    });

    if (!res.ok) {
      console.error("API failed:", res.status);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return (
      <>
        <Hero />
        <div className="text-center py-10">
          Products are temporarily unavailable.
        </div>
      </>
    );
  }

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
