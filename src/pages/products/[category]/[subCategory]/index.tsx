//Layout Import
import ProductsLayout from "@/components/productsLayout/ProductsLayout";

//Types Import
import type { GetStaticProps, GetStaticPaths } from "next";

//Contentful Client Import
import {
  contentfulClient,
  Categories,
  Products,
  SubCategories,
} from "@/lib/contentful";

//Component Imports
import ProductGrid from "@/components/products/ProductGrid";

export const getStaticPaths: GetStaticPaths = async () => {
  const subCategories = await contentfulClient.getEntries<SubCategories>({
    content_type: "subCategories",
  });

  //If I where to use const paths = subCategories.items.amp(async)... and then return params object, since I'm getting an entry from contentful inside map, I need to make it Async. When you use async inside the map function, TypeScript interprets the return type as an array of promises (Promise<T>[]), which can cause issues when you try to use the result. To resolve this, you can use Promise.all to wait for all the promises to resolve and then map the results to the desired structure.

  const promiseArray = subCategories.items.map(async (subCategory) => {
    const categoryID = subCategory.fields.category.sys.id;
    const category = await contentfulClient.getEntry<Categories>(categoryID);
    const categorySlug = category.fields.slug;

    return {
      params: {
        subCategory: subCategory.fields.slug,
        category: categorySlug,
      },
    };
  });

  //Here we wait for all the promises to resolve before assigning the result to paths and returning them.
  const paths = await Promise.all(promiseArray);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const products = await contentfulClient.getEntries<Products>({
    content_type: "products",
    // We specify the reference content type when we use them to query our entries
    "fields.subCategory.sys.contentType.sys.id": "subCategories",
    "fields.subCategory.fields.slug": params?.subCategory,
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

interface SubCategoryProductsProps {
  products: any;
  categories: any;
  subCategories: any;
}

const SubCategory = ({
  products,
  categories,
  subCategories,
}: SubCategoryProductsProps) => {
  console.log(subCategories);

  return (
    <ProductsLayout categories={categories} subCategories={subCategories}>
      <ProductGrid products={products} />
    </ProductsLayout>
  );
};

export default SubCategory;
