import React from "react";

//Contentful Imports
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//Type Definition
interface InfoProps {
  product: {
    sys: any;
    fields: {
      name: string;
      description: any;
    };
  };
}

const Info = ({ product }: InfoProps) => {
  const { name, description } = product.fields;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_6]: (node: any, children: any) => (
        <h6 className="mb-3 text-sm text-gray-800 ">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="mb-4 text-base text-gray-800">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: any) => (
        <ul className="mb-10">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
        <li className="ml-8 list-disc">{children}</li>
      ),
    },
  };

  return (
    <div className="mx-auto w-full space-y-4">
      <h3 className="text-4xl font-bold tracking-tight">{name}</h3>
      <div>
        <h3 className="sr-only">Description</h3>
        {description ? documentToReactComponents(description, options) : null}
      </div>
    </div>
  );
};

export default Info;
