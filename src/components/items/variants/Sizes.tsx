import React from "react";

//Type Definition
interface SizesProps {
  sizes: string[];
}

const Sizes = ({ sizes }: SizesProps) => {
  return (
    <>
      <h3 className="font-semibold text-gray-950">Available Sizes</h3>
      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-base">
          {sizes.map((size: string, index: number) => (
            <li key={index} className="text-xs text-gray-600">
              <span className="text-base text-gray-600">{size}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sizes;
