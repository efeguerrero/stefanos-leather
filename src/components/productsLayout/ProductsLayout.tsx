import Link from "next/link";

import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon } from "@heroicons/react/20/solid";

//Component Imports
import Filters from "@/components/productsLayout/Filters";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const filterOptions = [
  { name: "All Products", href: "/products" },
  { name: "Most Popular", href: "/products" },
  { name: "New In!", href: "/products" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "Our Products", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface LayoutProps {
  children: React.ReactNode;
  categories: any;
  subCategories: any;
}

const Layout = ({ children, categories, subCategories }: LayoutProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white px-5 py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between ">
                    <h2 className="text-gray-900 text-lg font-medium">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="text-gray-400 -mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Mobile Filters */}
                  <div className="mt-4 block py-6 lg:hidden">
                    <Filters
                      filterOptions={filterOptions}
                      categories={categories}
                      subCategories={subCategories}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        {/* End of mobile filter dialog */}

        <main className="container">
          <div className="border-gray-200 flex items-baseline justify-between border-b pb-6 pt-28">
            <h1 className="text-gray-900 text-4xl font-bold tracking-tight">
              Our Products
            </h1>

            <div className="flex items-center">
              {/* Filter Button for mobile View */}
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500 -m-2 ml-4 p-2 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {/* End of filter Button for mobile View */}
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            {/* Desktop View - Including Products */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <div className="hidden lg:block">
                <Filters
                  filterOptions={filterOptions}
                  categories={categories}
                  subCategories={subCategories}
                />
              </div>
              {/* Product grid */}
              <div className="px-8 pt-16 lg:col-span-3">{children}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Layout;
