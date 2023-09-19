import React from "react";

//Next Imports
import Link from "next/link";

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
        <Link
          className="mb-auto hidden w-max cursor-pointer rounded-lg bg-alpha px-4 py-2 text-white transition-all duration-200 hover:bg-gray-900 lg:block"
          href="/#contact"
          scroll={false}
        >
          Contact Us
        </Link>
      </div>
      <Gallery images={product.fields.images} />
      <Link
        className=" mb-auto w-full cursor-pointer rounded-lg bg-alpha px-4 py-3 text-center text-white  lg:hidden "
        href="/#contact"
        scroll={false}
      >
        Contact Us
      </Link>
      <div className="border-t-[1px] border-gray-200 pt-6 lg:hidden">
        <Variants product={product} />
      </div>
    </div>
  );
};

export default Item;
