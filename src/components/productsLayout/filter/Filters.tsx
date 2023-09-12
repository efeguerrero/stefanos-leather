import React, { Fragment } from "react";
import Link from "next/link";

//Component Imports
import FilterAccordion from "./FilterAccordion";

interface FiltersProps {
  filterOptions: {
    name: string;
    href: string;
  }[];
  categories: any;
  subCategories: any;
  setMobileFiltersOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filters = ({
  filterOptions,
  categories,
  subCategories,
  setMobileFiltersOpen,
}: FiltersProps) => {
  //Only if SetMobileFilterOpen was passed as prop then we will set it as false. This only happens in mobile view. In desktop view we don't pass this prop
  const handleMenuLinkClick = () => {
    setMobileFiltersOpen && setMobileFiltersOpen(false);
  };

  return (
    <>
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium"
      >
        {filterOptions.map((filterOption, index) => (
          <li key={index}>
            <Link
              onClick={() => handleMenuLinkClick()}
              href={filterOption.href}
            >
              {filterOption.name}
            </Link>
          </li>
        ))}
      </ul>
      {categories.map((category: any, index: number) => (
        <FilterAccordion
          handleMenuLinkClick={handleMenuLinkClick}
          key={index}
          category={category}
          subCategories={subCategories}
          index={index}
        />
      ))}
    </>
  );
};

export default Filters;
