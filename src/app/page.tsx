import Hero from "@/src/components/Hero";
import ProductSection from "@/src/components/ProductSection";
import { Product } from "@/src/types/product";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: 'no-store', 
      next: { revalidate: 0 }
    });
    
    if (!res.ok) {
      console.error('API fetch failed:', res.status);
      return [];
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
}

export default async function Home() {
  const products = await getProducts();
  console.log('Products loaded:', products.length);

  return (
    <>
      <Hero />
      {products.length > 0 ? (
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
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Loading products...</p>
        </div>
      )}
    </>
  );
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;