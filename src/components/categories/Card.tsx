import Link from "next/link";

//Card Component Props
interface CardProps {
  category: any;
}

interface Category {
  name: string;
  description: string;
  slug: string;
  coverImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

const Card = ({ category }: CardProps) => {
  const { name, description, slug, coverImage }: Category = category.fields;

  const coverImageUrl = coverImage.fields.file.url;

  return (
    <div
      id="categoryCard"
      className="group relative flex aspect-square h-[25rem] min-w-[30%] grow items-end overflow-hidden rounded-xl p-8 lg:rounded-none lg:p-8"
    >
      <div
        style={{ "--bg-url": `url(${coverImageUrl})` } as React.CSSProperties}
        id="imgContainer"
        className="absolute left-0 top-0 h-full w-full bg-[image:var(--bg-url)] bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-[1.05]"
      ></div>
      <div
        id="darkCover"
        className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/40 from-40% to-black/40"
      ></div>
      {/* Card Content */}
      <div
        id="cardContent"
        className="absolute z-10 flex flex-col bg-black/50 backdrop-blur-sm"
      >
        <h2 id="categoryName" className="text-2xl font-medium text-white">
          {name}
        </h2>
        <h3 className="text-lg font-medium text-white/70">{description}</h3>
        <Link href={`/products/${slug}`}>
          <button className="mt-4 cursor-pointer rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
