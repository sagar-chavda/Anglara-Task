import { Product } from "@/src/types/product";
import ProductCard from "./ProductCard";

interface Props {
  title: string;
  products: Product[];
}

export default function ProductSection({ title, products }: Props) {
  return (
    <section className="py-14">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
