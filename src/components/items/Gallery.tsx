import React from "react";

//Type Definition
interface GalleryProps {
  images: any[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [currentImg, setCurrentImg] = React.useState(images[0].fields.file.url);

  return (
    <section className="mx-auto flex flex-col gap-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-md ">
        <img
          src={`https:${currentImg}`}
          alt="product image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid cursor-pointer grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-4">
        {images.map((image: any, index: number) => {
          return (
            <div
              key={index}
              onClick={() => setCurrentImg(image.fields.file.url)}
              className="relative aspect-square w-full overflow-hidden rounded-md"
            >
              <img
                src={`https:${image.fields.file.url}`}
                width={150}
                height={150}
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
