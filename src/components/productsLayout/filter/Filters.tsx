import React from "react";

//Next Imports
import { useRouter } from "next/router";
import Link from "next/link";

//Component Imports
import FilterAccordion from "./FilterAccordion";

const filterOptions = [{ name: "All Products", href: "/products" }];

interface FiltersProps {
  setMobileFiltersOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  productData: any;
}

const Filters = ({ setMobileFiltersOpen, productData }: FiltersProps) => {
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
      <h3 className="sr-only">
        Product Categories and Subcategories filter menu
      </h3>
      <ul
        role="list"
        className="space-y-4 border-b border-gray-300 pb-6 text-sm font-medium"
      >
        {filterOptions?.map((filterOption, index) => {
          const active = activeLink === filterOption.href;
          return (
            <li key={index} className="relative">
              <Link
                onClick={(e) => handleMenuLinkClick(e.currentTarget)}
                href={filterOption.href}
                className={`${
                  active ? "text-bravo" : "text-gray-950"
                } text-base font-normal transition-colors duration-200`}
              >
                {filterOption.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {productData.categories?.map((category: any, index: number) => (
        <FilterAccordion
          activeLink={activeLink}
          handleMenuLinkClick={handleMenuLinkClick}
          key={index}
          category={category}
          subCategories={productData.subCategories}
          index={index}
        />
      ))}
    </>
  );
};

export default Filters;
