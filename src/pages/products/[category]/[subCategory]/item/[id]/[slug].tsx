import React from "react";

//Types Imports
import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps, GetStaticPaths } from "next";
import type { ReactElement } from "react";

//Component Imports
import ProductsLayout from "@/components/productsLayout/ProductsLayout";
import Layout from "@/components/Layout";

import Item from "@/components/items/Item";

//Contentful Client Import
import {
  contentfulClient,
  Products,
  Categories,
  SubCategories,
} from "@/lib/contentful";

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await contentfulClient.getEntries<Products>({
    content_type: "products",
  });

  const promiseArray = products.items.map(async (product) => {
    const categoryID = product.fields.category.sys.id;
    const category = await contentfulClient.getEntry<Categories>(categoryID);
    const categorySlug = category.fields.slug;
    const subCategoryID = product.fields.subCategory.sys.id;
    const subCategory =
      await contentfulClient.getEntry<SubCategories>(subCategoryID);
    const subCategorySlug = subCategory.fields.slug;

    return {
      params: {
        category: categorySlug,
        subCategory: subCategorySlug,
        id: product.sys.id,
        slug: product.fields.slug,
      },
    };
  });

  const paths = await Promise.all(promiseArray);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const entryId = params?.id as string;
  const product = await contentfulClient.getEntry<Products>(entryId);

  return {
    props: {
      product: product,
    },
  };
};

//Type Definitions
interface ProductProps {
  Component: NextPageWithLayout;
  product: any;
}

const Product = ({ product }: ProductProps) => {
  return <Item product={product} />;
};

Product.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ProductsLayout>{page}</ProductsLayout>
    </Layout>
  );
};

export default Product;
