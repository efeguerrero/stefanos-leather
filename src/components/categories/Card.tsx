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
    <div className="group relative overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden  bg-white transition-all duration-300 group-hover:scale-105 group-hover:opacity-[0.95] ">
        <img
          src={coverImageUrl}
          alt={`Cover image for ${name}`}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="text-gray-500 mt-6 text-sm">
        <Link href={`/products/${slug}`}>
          <span className="absolute inset-0" />
          {name}
        </Link>
      </h3>
      <p className="text-gray-900 text-base font-semibold">{description}</p>
    </div>
  );
};

export default Card;
