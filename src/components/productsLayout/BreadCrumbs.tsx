import React from "react";

//Next Imports
import { useRouter } from "next/router";
import Link from "next/link";

//Type Definition
interface BreadCrumbsProps {
  categories: any;
  subCategories: any;
}

const BreadCrumbs = ({ categories, subCategories }: BreadCrumbsProps) => {
  const router = useRouter();

  const categorySlug = router.query.category;
  const subCategorySlug = router.query.subCategory;

  const category = categories?.find(
    (cat: any) => cat.fields.slug === categorySlug,
  );

  const categoryName = category?.fields.name;

  const subCategory = subCategories?.find(
    (subCat: any) => subCat.fields.slug === subCategorySlug,
  );
  const subCategoryName = subCategory?.fields.name;

  return (
    <div className="flex">
      <Link className="text-gray-600" href={`/products/${categorySlug}`}>
        {categorySlug ? `${categoryName} \u00A0 ` : "All Products"}
      </Link>
      {subCategorySlug ? (
        <Link
          className="text-gray-600"
          href={`/products/${categorySlug}/${subCategorySlug}`}
        >
          / {subCategoryName}
        </Link>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
