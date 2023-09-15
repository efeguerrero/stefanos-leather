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
      <div className=" aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={coverImage.fields.file.url}
          alt="Product Image"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
    </Link>
  );
};

export default ProductCard;
