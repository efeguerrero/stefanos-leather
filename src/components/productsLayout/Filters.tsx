import React, { Fragment } from "react";
import Link from "next/link";

import { Disclosure, Transition } from "@headlessui/react";

import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

//Radix Imports
import * as Accordion from "@radix-ui/react-accordion";

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
        <Accordion.Root
          asChild
          type="multiple"
          key={category.sys.id}
          className="border-b border-gray-300 py-6"
        >
          <Accordion.Item value={`menu-${index}`}>
            <Accordion.Header className="group">
              <Accordion.Trigger className="flex w-full items-center justify-between bg-white text-sm text-gray-500">
                <h3 className="font-medium text-black ">
                  {category.fields.name}
                </h3>
                <div className="relative ml-6 flex h-5 w-5 items-center">
                  <MinusIcon className="absolute hidden h-full w-full group-data-[state=open]:block " />
                  <PlusIcon className="absolute h-full w-full group-data-[state=open]:hidden" />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="pt-6">
              <div className="flex flex-col gap-2">
                <Link
                  href={`/products/${category.fields.slug}`}
                  className="text-sm text-gray-600"
                >{`All ${category.fields.name} `}</Link>
                {subCategories.map((subCategory: any) => {
                  return (
                    <Fragment key={subCategory.sys.id}>
                      {category.fields.slug ===
                      subCategory.fields.category.fields.slug ? (
                        <Link
                          href={`/products/${category.fields.slug}/${subCategory.fields.slug}`}
                          className="text-sm text-gray-600"
                        >
                          {subCategory.fields.name}
                        </Link>
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      ))}
    </>
  );
};

export default Filters;
