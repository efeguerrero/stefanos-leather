import React from "react";

//Next Imports
import Link from "next/link";
import Image from "next/image";

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
      <div className="relative aspect-[4/3]  w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={`https:${coverImage.fields.file.url}`}
          fill
          alt="Product Image"
          className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
    </Link>
  );
};

export default ProductCard;
