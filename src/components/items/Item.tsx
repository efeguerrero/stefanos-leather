import React from "react";

//Component Imports
import Gallery from "@/components/items/Gallery";
import Info from "@/components/items/Info";
import Variants from "@/components/items/variants/Variants";

//Type Definition
interface ItemProps {
  product: any;
}

const Item = ({ product }: ItemProps) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-2 lg:px-12">
      <div className="flex flex-col gap-8">
        <Info product={product} />
        <div className="hidden lg:block">
          <Variants product={product} />
        </div>
      </div>
      <Gallery images={product.fields.images} />
      <div className="lg:hidden">
        <Variants product={product} />
      </div>
    </div>
  );
};

export default Item;
