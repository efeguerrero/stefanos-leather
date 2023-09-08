import {
  createClient,
  EntryFieldTypes,
  Asset,
  LinkType,
  Entry,
  ContentType,
  ContentTypeLink,
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
    category: any;
    subCategory: any;
    coverImage: Asset;
    slug: EntryFieldTypes.Text;
  };
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
});

//Functions Definitions
