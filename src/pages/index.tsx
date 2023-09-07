//Contentful Client Import
import { contentfulClient, Categories } from "@/lib/contentful";

import type { GetStaticProps } from "next";

//Component Imports
import Header from "@/components/Header";
import CategoriesGrid from "@/components/categories/CategoriesGrid";

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
}

export default function Home({ categories }: HomeProps) {
  return (
    <>
      <Header />
      <CategoriesGrid categories={categories} />
    </>
  );
}
