import React from "react";

//Next Imports
import Link from "next/link";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, coverImage, slug } = product.fields;
  const { id } = product.sys;

  return (
    <Link href={`/item/${id}/${slug}`} className="group">
      <div className=" bg-gray-200 aspect-[4/5] w-full overflow-hidden rounded-lg">
        <img
          src={coverImage.fields.file.url}
          alt="Product Image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="text-gray-700 mt-4 text-sm">{name}</h3>
    </Link>
  );
};

export default ProductCard;
