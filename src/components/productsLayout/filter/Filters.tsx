import React from "react";

//Next Imports
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [activeLink, setActiveLink] = React.useState(router.asPath);

  //Only if SetMobileFilterOpen was passed as prop then we will set it as false. This only happens in mobile view. In desktop view we don't pass this prop.
  const handleMenuLinkClick = (a: HTMLAnchorElement): void => {
    setMobileFiltersOpen && setMobileFiltersOpen(false);

    const href = a.getAttribute("href") as string;
    setActiveLink(href);
  };

  return (
    <>
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium"
      >
        {filterOptions.map((filterOption, index) => {
          const active = activeLink === filterOption.href;
          return (
            <li key={index} className="relative">
              <Link
                onClick={(e) => handleMenuLinkClick(e.currentTarget)}
                href={filterOption.href}
                className={`${
                  active ? "text-bravo" : "text-gray-600"
                } text-sm transition-colors duration-200`}
              >
                {filterOption.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {categories.map((category: any, index: number) => (
        <FilterAccordion
          activeLink={activeLink}
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
