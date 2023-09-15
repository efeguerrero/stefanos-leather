import React from "react";

//Component Imports
import Colors from "./Colors";
import Sizes from "./Sizes";

//Type Definition
interface VariantsProps {
  product: any;
}

const Variants = ({ product }: VariantsProps) => {
  const { colors, sizes } = product.fields;
  return (
    <div className="flex flex-col gap-4">
      <div className="">{sizes ? <Sizes sizes={sizes} /> : null}</div>
      {/* Colors Info */}
      <div className="">{colors ? <Colors colors={colors} /> : null}</div>
    </div>
  );
};

export default Variants;
