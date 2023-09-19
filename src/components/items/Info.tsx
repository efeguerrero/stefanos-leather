import React from "react";

//Type Definition
interface InfoProps {
  product: any;
}

const Info = ({ product }: InfoProps) => {
  const { name, description } = product.fields;

  return (
    <div className="mx-auto w-full space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
      <div>
        <h3 className="sr-only">Description</h3>
        <p className="text-lg text-gray-800 lg:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Info;
