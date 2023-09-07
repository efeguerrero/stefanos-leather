import {
  createClient,
  EntryFieldTypes,
  Asset,
  EntriesQueries,
} from "contentful";

export interface Categories {
  contentTypeId: "categories";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    coverImage: Asset;
    slug: EntryFieldTypes.Text;
  };
}

export interface Products {
  contentTypeId: "products";
  fields: {
    name: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    category: any;
    subCategory: EntryFieldTypes.Text;
    coverImage: Asset;
    slug: EntryFieldTypes.Text;
  };
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});
