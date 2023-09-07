import React from "react";

//Component Imports
import ProductGrid from "@/components/products/ProductGrid";

//Layout Import
import ProductsLayout from "@/components/ProductsLayout";

//Contentful Client Import
import { contentfulClient, Categories, Products } from "@/lib/contentful";

//Types Import
import type { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await contentfulClient.getEntries<Categories>({
    content_type: "categories",
  });

  const paths = categories.items.map((category) => ({
    params: { category: category.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await contentfulClient.getEntries<Products>({
    content_type: "products",
    // We specify the reference content type when we use them to query our entries
    "fields.category.sys.contentType.sys.id": "categories",
    "fields.category.fields.slug": params?.category,
  });

  return {
    props: {
      products: products.items,
    },
  };
};

interface CategoryProductsProps {
  products: any;
}

const CategoryProducts = ({ products }: CategoryProductsProps) => {
  return (
    <ProductsLayout>
      <ProductGrid products={products} />
    </ProductsLayout>
  );
};

export default CategoryProducts;
