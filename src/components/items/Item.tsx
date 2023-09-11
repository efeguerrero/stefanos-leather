import React from "react";

//Component Imports
import Gallery from "./Gallery";
import Info from "./info/Info";

//Type Definition
interface ItemProps {
  product: any;
}

const Item = ({ product }: ItemProps) => {
  return (
    <div className="grid gap-2 px-12 lg:grid-cols-2">
      <Info product={product} />
      <Gallery images={product.fields.images} />
    </div>
  );
};

export default Item;
