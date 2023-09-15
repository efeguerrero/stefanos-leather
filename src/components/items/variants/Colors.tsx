import React from "react";

//Type Definition
interface ColorsProps {
  colors: string[];
}

const Colors = ({ colors }: ColorsProps) => {
  return (
    <>
      <h3 className="font-medium">Available Colors</h3>
      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-base">
          {colors.map((color: string, index: number) => (
            <li key={index} className="text-gray-600">
              <span className="text-gray-600">{color}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Colors;
