import React from "react";

//Component Imports
import ProductGrid from "@/components/products/ProductGrid";

//Layout Import
import ProductsLayout from "@/components/productsLayout/ProductsLayout";
import Layout from "@/components/Layout";

//Contentful Client Import
import {
  contentfulClient,
  Categories,
  Products,
  SubCategories,
} from "@/lib/contentful";

//Types Import
import type { GetStaticProps, GetStaticPaths } from "next";
import type { NextPageWithLayout } from "@/pages/_app";
import type { ReactElement } from "react";

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

interface CategoryProductsProps {
  products: any;
  Component: NextPageWithLayout<any>;
}

const CategoryProducts = ({ products }: CategoryProductsProps) => {
  return <ProductGrid products={products} />;
};

CategoryProducts.getLayout = function getLayout(
  page: ReactElement,
  props: any,
) {
  return (
    <Layout>
      <ProductsLayout productData={props}>{page}</ProductsLayout>
    </Layout>
  );
};

export default CategoryProducts;
