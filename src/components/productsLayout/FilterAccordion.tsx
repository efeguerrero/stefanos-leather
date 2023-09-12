import React, { Fragment } from "react";
import Link from "next/link";

//Radix Imports
import * as Accordion from "@radix-ui/react-accordion";

//Framer motion Imports
import { motion, AnimatePresence } from "framer-motion";

//Hero Icons Imports
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";

interface FiltersAccordionProps {
  index: number;
  category: any;
  subCategories: any;
}

const accordionContentVariants = {
  open: {
    height: "var(--radix-accordion-content-height)",
  },
  closed: {
    height: 0,
  },
};

const FilterAccordion = ({
  category,
  subCategories,
  index,
}: FiltersAccordionProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Accordion.Root asChild type="multiple" key={category.sys.id}>
      <Accordion.Item
        value={`menu-${index}`}
        className="border-b border-gray-300 py-6"
      >
        <Accordion.Header className="group">
          <Accordion.Trigger
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between bg-white text-sm text-gray-500"
          >
            <h3 className="font-medium text-black ">{category.fields.name}</h3>
            <div className="relative ml-6 flex h-5 w-5 items-center">
              <MinusIcon className="absolute hidden h-full w-full group-data-[state=open]:block " />
              <PlusIcon className="absolute h-full w-full group-data-[state=open]:hidden" />
            </div>
          </Accordion.Trigger>
        </Accordion.Header>
        <AnimatePresence>
          {open && (
            <Accordion.Content forceMount className="overflow-hidden">
              <motion.div
                className="flex flex-col gap-2"
                variants={accordionContentVariants}
                initial="closed"
                animate={`${open ? "open" : "closed"}`}
                exit="closed"
              >
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
              </motion.div>
            </Accordion.Content>
          )}
        </AnimatePresence>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default FilterAccordion;
