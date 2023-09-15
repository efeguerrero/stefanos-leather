import { useEffect, useState, useRef } from "react";

//Contentful Imports
import {
  contentfulClient,
  Categories,
  SubCategories,
  Products,
} from "@/lib/contentful";
import { Entry } from "contentful";

//Framer Motion Imports
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

//Component Imports
import Filters from "@/components/productsLayout/filter/Filters";
import FilterDialog from "@/components/productsLayout/filter/FilterDialog";
import FilterTigger from "@/components/productsLayout/filter/FilterTrigger";
import BreadCrumbs from "@/components/productsLayout/BreadCrumbs";

const filterOptions = [
  { name: "All Products", href: "/products" },
  { name: "Most Popular", href: "/products/backpacks" },
  { name: "New In!", href: "/products/new" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const ProductsLayout = ({ children }: LayoutProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [categories, setCategories] = useState<Entry[]>([]);
  const [subCategories, setSubCategories] = useState<Entry[]>([]);
  const [filterPresent, setFilterPresent] = useState(true);
  const Yposition = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest - Yposition.current > 30) {
      setFilterPresent(false);
      Yposition.current = latest;
    }
    if (Yposition.current - latest > 30) {
      setFilterPresent(true);
      Yposition.current = latest;
    }
  });

  useEffect(() => {
    const getFiltersData = async () => {
      const categories = await contentfulClient.getEntries<Categories>({
        content_type: "categories",
      });
      const subCategories = await contentfulClient.getEntries<SubCategories>({
        content_type: "subCategories",
      });

      // const products = await contentfulClient.getEntries<Products>({
      //   content_type: "products",
      // });

      categories.items ? setCategories(categories.items) : setCategories([]);
      subCategories.items
        ? setSubCategories(subCategories.items)
        : setSubCategories([]);
    };

    getFiltersData();
  }, []);

  return (
    <section>
      {/* Mobile filter dialog */}
      <FilterDialog
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        filterOptions={filterOptions}
        categories={categories}
        subCategories={subCategories}
      />
      {/* End of mobile filter dialog */}

      <main className="mx-auto max-w-7xl">
        <div className="container">
          <div className="mb-6 flex items-center justify-between border-b-[1px] border-gray-200 py-3">
            <BreadCrumbs />
            <FilterTigger setMobileFiltersOpen={setMobileFiltersOpen} />
          </div>
          {/* <div className="sticky inset-x-0 top-0 z-[11] flex items-center justify-between bg-white/50 pb-6 pt-8 backdrop-blur-lg "> */}
          {/* Filter Button for mobile View */}
          <AnimatePresence>
            {filterPresent && (
              <motion.div
                initial={{
                  scale: 0,
                  y: 50,
                  x: 10,
                }}
                animate={{
                  scale: 1,
                  y: 0,
                  x: 0,
                }}
                exit={{
                  scale: 0,
                  y: 50,
                  x: 10,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className=" fixed bottom-[3rem] right-[1.5rem] rounded-full bg-bravo p-4 shadow-[0px_3px_4px_rgba(0,0,0,0.2)] backdrop-blur-md lg:hidden"
              >
                <FilterTigger setMobileFiltersOpen={setMobileFiltersOpen} />
              </motion.div>
            )}
          </AnimatePresence>
          {/* End of filter Button for mobile View */}
          {/* </div> */}
          {/* Desktop View - Including Products */}
          <section
            aria-labelledby="products-heading"
            className="pb-24 pt-3 lg:pt-16"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Desktop Filters */}
              <div className="hidden lg:block">
                <Filters
                  filterOptions={filterOptions}
                  categories={categories}
                  subCategories={subCategories}
                />
              </div>

              <div className="lg:col-span-3 lg:px-8">{children}</div>
            </div>
          </section>
          {/* Product grid */}
        </div>
      </main>
    </section>
  );
};

export default ProductsLayout;
