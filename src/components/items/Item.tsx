import React from "react";

//Component Imports
import Gallery from "./Gallery";
import Info from "./info/Info";

//Type Definition
interface ItemProps {
  product: any;
}

const Item = ({ product }: ItemProps) => {
  console.log(product);

  return (
    <div className="grid gap-2 lg:grid-cols-2 lg:px-12">
      <Gallery images={product.fields.images} />
      <Info product={product} />
    </div>
  );
};

export default Item;
