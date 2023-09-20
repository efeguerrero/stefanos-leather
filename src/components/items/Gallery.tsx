import React from "react";

//Next Imports
import Image from "next/image";

//Type Definition
interface GalleryProps {
  images: any[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [currentImg, setCurrentImg] = React.useState(images[0].fields.file.url);

  return (
    <section className="mx-auto flex flex-col gap-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-md ">
        <Image
          src={`https:${currentImg}`}
          fill
          alt="product"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid cursor-pointer grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-4">
        {images.map((image: any, index: number) => {
          return (
            <div
              key={index}
              className="relative aspect-square w-full overflow-hidden rounded-md"
            >
              <img
                onClick={() => setCurrentImg(image.fields.file.url)}
                src={`https:${image.fields.file.url}`}
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
