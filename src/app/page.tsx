import Hero from "@/src/components/Hero";
import ProductSection from "@/src/components/ProductSection";
import { Product } from "@/src/types/product";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
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
