import { createClient, EntryFieldTypes, Asset } from "contentful";
import useSWR from "swr";

//Types

export interface Categories {
  contentTypeId: "categories";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    coverImage: Asset;
    slug: EntryFieldTypes.Text;
  };
}

export interface SubCategories {
  contentTypeId: "subCategories";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    category: EntryFieldTypes.EntryLink<Categories>;
    slug: EntryFieldTypes.Text;
  };
}

export interface Products {
  contentTypeId: "products";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    category: EntryFieldTypes.EntryLink<Categories>;
    subCategory: EntryFieldTypes.EntryLink<SubCategories>;
    coverImage: Asset;
    slug: EntryFieldTypes.Text;
    colors: EntryFieldTypes.Text[];
    sizes: EntryFieldTypes.Text[];
  };
}

//Client Creation

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

//SWR Fetching

export const fetcher = (contentType: string) =>
  contentfulClient
    .getEntries({ content_type: contentType })
    .then((res) => res.items);

export function useCategories() {
  const { data, error, isLoading } = useSWR("categories", fetcher);
  return {
    categories: data,
    categoriesError: error,
    categoriesLoading: isLoading,
  };
}

export function useSubCategories() {
  const { data, error, isLoading } = useSWR("subCategories", fetcher);
  return {
    subCategories: data,
    subCategoriesError: error,
    subCategoriesLoading: isLoading,
  };
}

export function useProducts() {
  const { data, error, isLoading } = useSWR("products", fetcher);
  return { products: data, productsError: error, productsLoading: isLoading };
}
