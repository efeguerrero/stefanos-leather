//Layout Import
import ProductsLayout from "@/components/productsLayout/ProductsLayout";

//Component Imports
import ProductGrid from "@/components/products/ProductGrid";

//Contentful Client Import
import {
  contentfulClient,
  Categories,
  Products,
  SubCategories,
} from "@/lib/contentful";

//Types Import
import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const products = await contentfulClient.getEntries<Products>({
    content_type: "products",
  });

  const categories = await contentfulClient.getEntries<Categories>({
    content_type: "categories",
  });

  const subCategories = await contentfulClient.getEntries<SubCategories>({
    content_type: "subCategories",
  });

  return {
    props: {
      products: products.items,
      categories: categories.items,
      subCategories: subCategories.items,
    },
  };
};

//Props Interface
interface ProductsProps {
  products: any;
  categories: any;
  subCategories: any;
}

export default function Products({
  products,
  categories,
  subCategories,
}: ProductsProps) {
  console.log(subCategories);

  return (
    <ProductsLayout categories={categories} subCategories={subCategories}>
      <ProductGrid products={products} />
    </ProductsLayout>
  );
}
