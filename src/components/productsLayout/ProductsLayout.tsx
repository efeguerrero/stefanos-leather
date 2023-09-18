import { useState } from "react";

//Component Imports
import Filters from "@/components/productsLayout/filter/Filters";
import FilterDialog from "@/components/productsLayout/filter/FilterDialog";
import FilterTigger from "@/components/productsLayout/filter/FilterTrigger";
import BreadCrumbs from "@/components/productsLayout/BreadCrumbs";

interface LayoutProps {
  children: React.ReactNode;
}

const ProductsLayout = ({ children }: LayoutProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <section>
      {/* Mobile filter dialog */}
      <FilterDialog
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />
      {/* End of mobile filter dialog */}
      <main className="mx-auto max-w-7xl">
        <div className="container">
          {/* Mobile View */}
          <div className="mb-6 flex items-center justify-between border-b-[1px] border-gray-200 py-3 lg:hidden">
            <BreadCrumbs />
            <FilterTigger setMobileFiltersOpen={setMobileFiltersOpen} />
          </div>

          {/* Desktop View - Including Products */}
          <section
            aria-labelledby="products-heading"
            className="pb-24 pt-3 lg:pt-16"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Desktop Filters */}
              <div className="hidden lg:block">
                <Filters />
              </div>
              {/* Product grid */}
              <div className="lg:col-span-3 lg:px-8">{children}</div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
};

export default ProductsLayout;
