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
      className="grid place-items-center text-gray-400 "
      onClick={() => setMobileFiltersOpen(true)}
    >
      <span className="sr-only">Filters</span>
      <FunnelIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default FilterTrigger;
