//Contentful Client Import
import { contentfulClient, Categories } from "@/lib/contentful";

//Component Imports
import Header from "@/components/Header";
import CategoriesGrid from "@/components/categories/CategoriesGrid";
import Layout from "@/components/Layout";
import Shipping from "@/components/Shipping";

//Types Imports
import type { NextPageWithLayout } from "./_app";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";

//Get Static Props Function

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

//Props Interface
interface HomeProps {
  categories: any;
  Component: NextPageWithLayout;
}

const Home = ({ categories }: HomeProps) => {
  return (
    <>
      <Header />
      <CategoriesGrid categories={categories} />
      <Shipping />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
