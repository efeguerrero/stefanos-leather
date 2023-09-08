import React from "react";

//Component Imports
import ProductGrid from "@/components/products/ProductGrid";

//Layout Import
import ProductsLayout from "@/components/productsLayout/ProductsLayout";

//Contentful Client Import
import {
  contentfulClient,
  Categories,
  Products,
  SubCategories,
} from "@/lib/contentful";

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
  categories: any;
  subCategories: any;
}

const CategoryProducts = ({
  products,
  categories,
  subCategories,
}: CategoryProductsProps) => {
  return (
    <ProductsLayout categories={categories} subCategories={subCategories}>
      <ProductGrid products={products} />
    </ProductsLayout>
  );
};

export default CategoryProducts;
