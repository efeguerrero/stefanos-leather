//Layout Import
import ProductsLayout from "@/components/ProductsLayout";

//Component Imports
import ProductGrid from "@/components/products/ProductGrid";

//Contentful Client Import
import { contentfulClient, Categories, Products } from "@/lib/contentful";

//Types Import
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const products = await contentfulClient.getEntries<Products>({
    content_type: "products",
  });

  return {
    props: {
      products: products.items,
    },
  };
};

//Props Interface
interface PrductsProps {
  products: any;
}

export default function Products({ products }: PrductsProps) {
  console.log(products);

  return (
    <ProductsLayout>
      <ProductGrid products={products} />
    </ProductsLayout>
  );
}
