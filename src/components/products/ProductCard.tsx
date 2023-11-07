import React from "react";

//Next Imports
import Link from "next/link";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { name, coverImage, slug, category, subCategory } = product.fields;
  const categorySlug = category.fields.slug;
  const subCategorySlug = subCategory.fields.slug;
  const { id } = product.sys;

  return (
    <Link
      href={`/products/${categorySlug}/${subCategorySlug}/item/${id}/${slug}`}
      className="group"
    >
      <div className="relative  w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={`https:${coverImage.fields.file.url}`}
          alt="Product Image"
          className="aspect-square h-full w-full object-cover object-center transition-all duration-300 [transform:translate3d(0px,_0px,_1px)] hover:opacity-[0.85] "
        />
      </div>
      <h3 className="mt-4 text-base font-medium text-gray-600">{name}</h3>
    </Link>
  );
};

export default ProductCard;
