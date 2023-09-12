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
}

const Filters = ({
  filterOptions,
  categories,
  subCategories,
}: FiltersProps) => {
  return (
    <>
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium"
      >
        {filterOptions.map((filterOption, index) => (
          <li key={index}>
            <Link href={filterOption.href}>{filterOption.name}</Link>
          </li>
        ))}
      </ul>
      {categories.map((category: any, index: number) => (
        <FilterAccordion
          category={category}
          subCategories={subCategories}
          index={index}
        />
      ))}
    </>
  );
};

export default Filters;
