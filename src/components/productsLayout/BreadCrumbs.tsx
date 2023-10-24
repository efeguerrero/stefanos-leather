import React from "react";

//Next Imports
import { useRouter } from "next/router";
import Link from "next/link";

interface BreadCrumbsProps {
  productData: any;
}

const BreadCrumbs = ({ productData }: BreadCrumbsProps) => {
  const router = useRouter();
  const categorySlug = router.query.category;
  const subCategorySlug = router.query.subCategory;

  const category = productData.categories?.find(
    (cat: any) => cat.fields.slug === categorySlug,
  );

  const categoryName = (category?.fields.name as String) || "";

  const subCategory = productData.subCategories?.find(
    (subCat: any) => subCat.fields.slug === subCategorySlug,
  );
  const subCategoryName = (subCategory?.fields.name as String) || "";

  return (
    <div className="flex lg:gap-4">
      <Link
        className="text-sm text-gray-600 md:text-base"
        href={`/products/${categorySlug}`}
      >
        {categorySlug ? `${categoryName}` : "All Products"}
      </Link>
      {subCategorySlug ? (
        <Link
          className="text-sm text-gray-600 md:text-base"
          href={`/products/${categorySlug}/${subCategorySlug}`}
        >
          <span className="text-gray-400 md:text-base">{`\u00A0 / \u00A0`}</span>
          {subCategoryName}
        </Link>
      ) : null}
    </div>
  );
};

export default BreadCrumbs;
