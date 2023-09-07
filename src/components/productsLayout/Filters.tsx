import React, { Fragment } from "react";
import Link from "next/link";

import { Disclosure } from "@headlessui/react";

import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

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
        className="border-gray-200 text-gray-900 space-y-4 border-b pb-6 text-sm font-medium"
      >
        {filterOptions.map((filterOption, index) => (
          <li key={index}>
            <Link href={filterOption.href}>{filterOption.name}</Link>
          </li>
        ))}
      </ul>

      {categories.map((category: any) => (
        <Disclosure
          as="div"
          key={category.sys.id}
          className="border-gray-200 border-b py-6"
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="text-gray-400 hover:text-gray-500 flex w-full items-center justify-between bg-white text-sm">
                <h3 className="text-gray-900 text-base font-medium">
                  {category.fields.name}
                </h3>
                <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="pt-6">
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/products/${category.fields.slug}`}
                    className="text-sm"
                  >{`All ${category.fields.name} `}</Link>
                  {subCategories.map((subCategory: any) => {
                    return (
                      <Fragment key={subCategory.sys.id}>
                        {category.fields.slug ===
                        subCategory.fields.category.fields.slug ? (
                          <Link
                            href={`/products/${category.fields.slug}/${subCategory.fields.slug}`}
                            className="text-sm"
                          >
                            {subCategory.fields.name}
                          </Link>
                        ) : null}
                      </Fragment>
                    );
                  })}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </>
  );
};

export default Filters;
