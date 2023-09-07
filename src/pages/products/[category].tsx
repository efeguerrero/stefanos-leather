import React from "react";

//Component Imports
import ProductGrid from "@/components/products/ProductGrid";

//Contentful Client Import
import { contentfulClient, Categories } from "@/lib/contentful";

//Types Import
import type { GetStaticProps, GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const categories = await contentfulClient.getEntries<Categories>({
    content_type: "categories",
  });

  return {
    props: {
      categories: categories.items,
    },
  };
};

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

const CategoryProducts = () => {
  return <div>category page</div>;
};

export default CategoryProducts;
