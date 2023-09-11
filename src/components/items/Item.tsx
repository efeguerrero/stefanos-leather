import React from "react";

//Component Imports
import Gallery from "./Gallery";
import Info from "./Info";

//Type Definition
interface ItemProps {
  product: any;
}

const Item = ({ product }: ItemProps) => {
  return (
    <div className="grid gap-2 lg:grid-cols-2">
      <Info product={product} />
      {/* <Gallery images={product.fields.coverImage} /> */}
    </div>
  );
};

export default Item;
