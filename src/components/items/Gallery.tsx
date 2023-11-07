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
          className=" h-full w-full object-cover lg:object-contain "
        />
      </div>
      <div className="grid cursor-pointer grid-cols-4 gap-3 md:grid-cols-6 lg:grid-cols-4">
        {images.map((image: any, index: number) => {
          const isImgActive =
            currentImg === image.fields.file.url ? true : false;
          return (
            <div
              key={index}
              onMouseEnter={() => setCurrentImg(image.fields.file.url)}
              className={`${
                isImgActive ? "border-gray-400" : null
              } relative aspect-square w-full overflow-hidden rounded-md border-[1px] transition-all`}
            >
              <img
                src={`https:${image.fields.file.url}`}
                width={150}
                height={150}
                alt="product"
                className=" h-full w-full object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
