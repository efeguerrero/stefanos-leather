import React from "react";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, coverImage, slug } = product.fields;

  return (
    <a href="/products" className="group">
      <div className="aspect-h-1 aspect-w-1 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg">
        <img
          src={coverImage.fields.file.url}
          alt="Product Image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="text-gray-700 mt-4 text-sm">{name}</h3>
    </a>
  );
};

export default ProductCard;
