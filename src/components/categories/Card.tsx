import Link from "next/link";
import Image from "next/image";

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
      <div className="relative aspect-square w-full overflow-hidden  bg-white transition-all duration-300 group-hover:scale-105 group-hover:opacity-[0.95] ">
        <Image
          src={`https:${coverImageUrl}`}
          alt={`Cover image for ${name}`}
          fill
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-950">
        <Link href={`/products/${slug}`}>
          <span className="absolute inset-0" />
          {name}
        </Link>
      </h3>
      <p className="text-sm  text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
