//Layout Import
import ProductsLayout from "@/components/productsLayout/ProductsLayout";
import Layout from "@/components/Layout";

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
import type { NextPageWithLayout } from "@/pages/_app";
import type { ReactElement } from "react";

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
  Component: NextPageWithLayout<any>;
}

export default function Products({ products }: ProductsProps) {
  return <ProductGrid products={products} />;
}

Products.getLayout = function getLayout(page: ReactElement, props: any) {
  return (
    <Layout>
      <ProductsLayout productData={props}>{page}</ProductsLayout>
    </Layout>
  );
};
