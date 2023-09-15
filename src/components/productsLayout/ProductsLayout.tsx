import { useEffect, useState } from "react";

//Contentful Imports
import {
  contentfulClient,
  Categories,
  SubCategories,
  Products,
} from "@/lib/contentful";
import { Entry } from "contentful";

//Component Imports
import Filters from "@/components/productsLayout/filter/Filters";
import FilterDialog from "@/components/productsLayout/filter/FilterDialog";
import FilterTigger from "@/components/productsLayout/filter/FilterTrigger";

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

  useEffect(() => {
    const getFiltersData = async () => {
      const categories = await contentfulClient.getEntries<Categories>({
        content_type: "categories",
      });
      const subCategories = await contentfulClient.getEntries<SubCategories>({
        content_type: "subCategories",
      });

      const products = await contentfulClient.getEntries<Products>({
        content_type: "products",
      });

      categories.items ? setCategories(categories.items) : setCategories([]);
      subCategories.items
        ? setSubCategories(subCategories.items)
        : setSubCategories([]);
    };

    getFiltersData();
  }, []);

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <FilterDialog
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
        filterOptions={filterOptions}
        categories={categories}
        subCategories={subCategories}
      />
      {/* End of mobile filter dialog */}

      <main className="mx-auto  max-w-7xl lg:pt-32">
        <div className="container">
          <div className="flex items-baseline justify-between border-gray-300  pb-6 pt-28 lg:hidden">
            {/* Filter Button for mobile View */}
            <FilterTigger setMobileFiltersOpen={setMobileFiltersOpen} />
            {/* End of filter Button for mobile View */}
          </div>

          <section
            aria-labelledby="products-heading"
            className="pb-24 pt-8 lg:pt-16"
          >
            {/* Desktop View - Including Products */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Desktop Filters */}
              <div className="hidden lg:block">
                <Filters
                  filterOptions={filterOptions}
                  categories={categories}
                  subCategories={subCategories}
                />
              </div>
              {/* Product grid */}
              <div className="lg:col-span-3 lg:px-8">{children}</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProductsLayout;
