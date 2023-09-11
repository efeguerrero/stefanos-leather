import { createClient, EntryFieldTypes, Asset } from "contentful";

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

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN!,
});
