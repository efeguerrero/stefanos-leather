import React from "react";

//Framer Motion Imports
import { motion } from "framer-motion";

//Type Definition
interface GalleryProps {
  images: any[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [currentImg, setCurrentImg] = React.useState(images[0].fields.file.url);

  return (
    <section className="mx-auto flex flex-col gap-6">
      <div className="aspect-square w-full overflow-hidden rounded-md lg:h-[25rem] lg:w-auto">
        <img
          src={currentImg}
          alt="product"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex cursor-pointer flex-row gap-3">
        {images.map((image: any, index: number) => {
          return (
            <div
              key={index}
              className="wrap aspect-square w-[25%] overflow-hidden rounded-md"
            >
              <img
                onClick={() => setCurrentImg(image.fields.file.url)}
                src={image.fields.file.url}
                alt="product"
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
