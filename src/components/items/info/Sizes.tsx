import React from "react";

//Type Definition
interface SizesProps {
  sizes: string[];
}

const Sizes = ({ sizes }: SizesProps) => {
  return (
    <>
      <h3 className="text-gray-900 text-sm font-medium">Available Sizes</h3>

      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
          {sizes.map((size: string, index: number) => (
            <li key={index} className="text-gray">
              <span className="text-gray">{size}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sizes;
