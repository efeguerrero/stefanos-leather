import React from "react";

//Type Definition
interface ColorsProps {
  colors: string[];
}

const Colors = ({ colors }: ColorsProps) => {
  return (
    <>
      <h3 className="text-sm font-medium">Available Colors</h3>
      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
          {colors.map((color: string, index: number) => (
            <li key={index} className="text-gray">
              <span className="text-gray">{color}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Colors;
