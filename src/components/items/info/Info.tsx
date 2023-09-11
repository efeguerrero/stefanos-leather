import React from "react";

//Component Imports
import Colors from "./Colors";
import Sizes from "./Sizes";

//Type Definition
interface InfoProps {
  product: any;
}

const Info = ({ product }: InfoProps) => {
  const { name, description, colors, sizes } = product.fields;

  return (
    <>
      {/* Product info */}
      <div className="mx-auto w-full">
        <div className="">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {name}
          </h1>
        </div>
        <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray">{description}</p>
            </div>
          </div>
          {/* Sizes Info */}
          <div className="mt-10">{sizes ? <Sizes sizes={sizes} /> : null}</div>
          {/* Colors Info */}
          <div className="mt-10">
            {colors ? <Colors colors={colors} /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
