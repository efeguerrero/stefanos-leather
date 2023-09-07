//Contentful Client Import
import { contentfulClient, Categories } from "@/lib/contentful";

//Component Imports
import Header from "@/components/Header";
import CategoriesGrid from "@/components/categories/CategoriesGrid";

//Get Static Props Function

export async function getStaticProps() {
  const categories = await contentfulClient.getEntries<Categories>({
    content_type: "categories",
  });

  return {
    props: {
      categories: categories.items,
    },
  };
}

//Props Interface
interface HomeProps {
  categories: any;
}

export default function Home({ categories }: HomeProps) {
  console.log(categories);

  return (
    <>
      <Header />
      <CategoriesGrid categories={categories} />
    </>
  );
}
