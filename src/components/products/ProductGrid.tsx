//Component Imports
import ProductCard from "@/components/products/ProductCard";

//Type Definition
interface ProductGridProps {
  products: any;
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="bg-white">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product: any) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </div>
    </div>
  );
}
