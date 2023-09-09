//Component Import
import Card from "./Card";

//Type Definition
interface CategoriesGridProps {
  categories: any;
}

const CategoriesGrid = ({ categories }: CategoriesGridProps) => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-gray-900 text-4xl font-bold">Our Products</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {categories.map((category: any) => (
              <Card category={category} key={category.sys.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
