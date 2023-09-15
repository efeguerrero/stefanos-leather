import React from "react";

//Heroicons Imports
import { FunnelIcon } from "@heroicons/react/20/solid";

//Component Props
interface FilterTriggerProps {
  setMobileFiltersOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterTrigger = ({ setMobileFiltersOpen }: FilterTriggerProps) => {
  return (
    <button
      type="button"
      className="-m-2 ml-4  text-gray-400 hover:text-gray-500 sm:ml-6"
      onClick={() => setMobileFiltersOpen(true)}
    >
      <span className="sr-only">Filters</span>
      <FunnelIcon className="h-8 w-8" aria-hidden="true" />
    </button>
  );
};

export default FilterTrigger;
